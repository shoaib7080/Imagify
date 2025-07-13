import axios from "axios";
import FormData from "form-data";
import { form } from "motion/react-client";
import userModel from "../models/userModel.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt, userId } = req.body;

    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.status(400).json({
        success: false,
        message: "User not found or prompt is missing",
      });
    }

    if (user.creditBalance === 0 || user.creditBalance <= 0) {
      return res.status(403).json({
        success: false,
        message: "Insufficient credit balance",
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const response = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(response.data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(userId, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image generated successfully",
      credit: user.creditBalance - 1,
      image: resultImage,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
