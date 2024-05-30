"use client";

import React, { useState, useRef } from "react";
import BoxQuestion from "@/components/boxQuestion";
import ContainerAnswer from "@/components/containerAnswer";
import InputQuestion from "@/components/inputQuestion";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { motion } from "framer-motion";
import LoadingBolt from "@/components/loadingIcon";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const scrollRef = useRef(null);
  const inputContent = useRef(null);
  const latestQuestionRef = useRef(null);

  const handleClick = async () => {
    const question = inputContent.current.value.trim();

    if (!question) return;

    inputContent.current.value = "";

    const newEntry = { question, answer: "", loading: true };
    setHistory((prevHistory) => [...prevHistory, newEntry]);

    setTimeout(() => {
      scrollToBottom();
    }, 150);

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
        const answer = choices[0].message.content;
        newEntry.answer = answer;
        newEntry.loading = false;
        setHistory((prevHistory) => {
          const updatedHistory = [...prevHistory];
          updatedHistory[updatedHistory.length - 1] = newEntry;
          return updatedHistory;
        });
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      newEntry.answer = "Error fetching response.";
      newEntry.loading = false;
      setHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[updatedHistory.length - 1] = newEntry;
        return updatedHistory;
      });
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
    inputContent.current.value = question;
    handleClick();
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const renderHistory = () =>
    history.map((entry, index) => (
      <div key={index} className="mb-4">
        <div
          className="flex justify-end"
          ref={index === history.length - 1 ? latestQuestionRef : null}
        >
          <div className="mb-2 bg-[#FFFFFF4D] py-2 px-3 rounded-b-xl rounded-tl-xl text-right inline-block min-w-[fit-content]">
            <h4>{entry.question}</h4>
          </div>
        </div>
        {entry.loading ? (
          <LoadingBolt />
        ) : (
          <ContainerAnswer text={entry.answer} />
        )}
      </div>
    ));

  const renderContent = () => {
    return (
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
    );
  };

  return (
    <section className="relative pt-[60px]">
      {history.length > 0 ? (
        <ScrollShadow
          ref={scrollRef}
          size={20}
          hideScrollBar
          className="w-[93%] mt-[5px] h-[72vh] mx-auto sm:w-[70%] sm:h-[78vh] sm:mt-[20px] relative"
        >
          {renderHistory()}
        </ScrollShadow>
      ) : (
        renderContent()
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        <InputQuestion
          ref={inputContent}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          isSubmitted={loading}
        />
      </form>
    </section>
  );
};

export default Home;
