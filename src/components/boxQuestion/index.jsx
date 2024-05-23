import { dataQuestions } from "@/data/dataQuestion";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const BoxQuestion = () => {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const randomQuestions = shuffle(dataQuestions).slice(0, 4);

  return (
    <div className="sm:w-[45%] gap-5 mx-auto grid grid-cols-2 place-items-center">
      {randomQuestions.map((data, index) => (
        <Card
          key={index}
          className="bg-[#FFFFFF4D] w-[150px] h-[130px] sm:w-[250px] rounded-md cursor-pointer"
        >
          <CardBody className="flex justify-center items-center">
            <p className="text-[13px] text-white text-center">{data.question}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default BoxQuestion;
