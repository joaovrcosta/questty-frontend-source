import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../services/api-test";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [questionData, setQuestionData] = useState({});

  

  return (
    <QuestionContext.Provider
      value={{
        questionData,
      }}
    ></QuestionContext.Provider>
  );
};

const useContextQuestion = () => useContext(QuestionContext);

export { useContextQuestion, QuestionProvider };
