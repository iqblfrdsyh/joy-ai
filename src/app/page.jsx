"use client";

import React, { useState } from "react";
import BoxQuestion from "@/components/boxQuestion";
import ContainerAnswer from "@/components/containerAnswer";
import InputQuestion from "@/components/inputQuestion";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const inputValue = inputContent.value.trim();
    setQuestion(inputValue);
    if (!inputValue) return;

    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const responseData = await response.json();
      const { choices } = responseData.body;
      if (choices && choices.length > 0) {
        setData(choices[0].message.content);
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <section className="relative">
        {data ? (
          <ScrollShadow
            className="w-[93%] mt-6 mx-auto sm:w-[70%] h-[500px]"
            size={30}
            hideScrollBar
          >
            {question && (
              <div className="mb-6 bg-[#FFFFFF4D] py-2 px-3 rounded-lg">
                <h4>{question}</h4>
              </div>
            )}
            {loading && (
              <h2 className="text-center my-7 text-[18px]">Loading....</h2>
            )}
            {data && <ContainerAnswer text={data} />}
          </ScrollShadow>
        ) : (
          <>
            {loading ? (
              <h2 className="text-center my-7 text-[18px]">Loading....</h2>
            ) : (
              <>
                <div className="text-center mt-7">
                  <h2 className="gradient-text text-[45px] font-semibold">
                    Hello User
                  </h2>
                  <p className="text-[20px] font-semibold opacity-50">
                    How I Can Help You Today?
                  </p>
                </div>
                <div className="flex flex-col h-[50vh] justify-center">
                  <BoxQuestion />
                </div>
              </>
            )}
          </>
        )}

        <form>
          <InputQuestion onClick={handleClick} />
        </form>
      </section>
    </React.Fragment>
  );
};

export default Home;
