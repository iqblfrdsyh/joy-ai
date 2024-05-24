"use client";

import React, { useEffect, useState } from "react";
import BoxQuestion from "@/components/boxQuestion";
import ContainerAnswer from "@/components/containerAnswer";
import InputQuestion from "@/components/inputQuestion";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { motion } from "framer-motion";
import SkeletonLoading from "@/components/skeleton";

const Home = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);

  useEffect(() => {
    setIsQuestion(false);
    localStorage.removeItem("user_question");
  }, []);

  const handleClick = async () => {
    const question =
      inputContent.value.trim() || localStorage.getItem("user_question");

    if (!question) return;
    localStorage.setItem("user_question", question);
    setIsQuestion(true);
    inputContent.value = "";

    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: question }),
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleQuestionClick = (question) => {
    localStorage.setItem("user_question", question);
    setIsQuestion(true);
    handleClick();
  };

  return (
    <React.Fragment>
      <section className="relative pt-20">
        {isQuestion && (
          <div className="mb-6 bg-[#FFFFFF4D] py-2 px-3 rounded-lg w-[93%] sm:w-[70%] mx-auto">
            <h4>{localStorage.getItem("user_question") || ""}</h4>
          </div>
        )}
        {data ? (
          <ScrollShadow
            className="w-[93%] h-[450px] mt-6 mx-auto sm:w-[70%] sm:h-[480px]"
            size={20}
            hideScrollBar
          >
            {loading ? <SkeletonLoading /> : <ContainerAnswer text={data} />}
          </ScrollShadow>
        ) : (
          <>
            {loading ? (
              <SkeletonLoading />
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center mt-7"
                >
                  <h2 className="gradient-text text-[45px] font-semibold">
                    Hello User
                  </h2>
                  <p className="text-[20px] font-semibold opacity-50">
                    How Can I Help You Today?
                  </p>
                </motion.div>

                <div className="flex flex-col h-[50vh] justify-center">
                  <BoxQuestion onQuestionClick={handleQuestionClick} />
                </div>
              </>
            )}
          </>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <InputQuestion onClick={handleClick} onKeyDown={handleKeyDown} />
        </form>
      </section>
    </React.Fragment>
  );
};

export default Home;
