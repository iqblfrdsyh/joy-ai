import axios from "axios";

const base_url = `${process.env.NEXT_PUBLIC_BASE_API_URL}`;

export async function runAI(aiModel, question, images) {
  try {
    const response = await axios.post(
      `${base_url}/v2/${aiModel}`,
      {
        content: question,
        images,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
