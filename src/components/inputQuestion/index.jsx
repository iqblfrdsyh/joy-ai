import React from "react";

const InputQuestion = ({onClick,onKeyDown}) => {
  return (
    <div className="flex items-center w-[93%] sm:w-[800px] mx-auto fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-7">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type the question here"
          className="w-full px-5 py-3 pr-12 text-white rounded-full bg-[#FFFFFF4D] outline-none border-none"
          id="inputContent"
          onKeyDown={onKeyDown}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={onClick}
        >
          <img
            src="./images/icons/send.png"
            alt="Send Icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default InputQuestion;
