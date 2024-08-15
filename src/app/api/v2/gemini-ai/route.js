const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_APIKEY);

async function requestGeminiAI(model, prompt, history) {
  const gemini = genAI.getGenerativeModel({ model });

  const chat = gemini.startChat({
    history,
  });

  let result = await chat.sendMessage(prompt);

  const response = await result.response;
  const text = response.text();
  return text;
}

export async function POST(request) {
  try {
    const { geminiModel, content, geminiHistory } = await request.json();
    const response = await requestGeminiAI(geminiModel, content, geminiHistory);
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
