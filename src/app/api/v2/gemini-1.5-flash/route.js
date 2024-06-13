const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_APIKEY);

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function requestGeminiAI(prompt, images = [], mimeTypes = []) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let imageParts = [];
  if (images.length > 0) {
    imageParts = images.map((image, index) =>
      fileToGenerativePart(image, mimeTypes[index])
    );
  }

  let result;
  if (imageParts.length > 0) {
    result = await model.generateContent([prompt, ...imageParts]);
  } else {
    result = await model.generateContent(prompt);
  }

  const response = await result.response;
  const text = response.text();
  return text;
}

export async function POST(request) {
  try {
    const { content, images } = await request.json();
    console.log(images);
    const response = await requestGeminiAI(content);
    return new Response(
      JSON.stringify({
        body: {
          choices: [{ message: { content: response } }],
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
