import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ask } from "../../database/index";
import { CaretDown, Gear } from "phosphor-react";

export default function Feed() {
  const [questions, setQuestions] = useState([]);

  const asks = ask;

  const { userData } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:3333/questions/list").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col px-7 gap-6">
        <div className="flex justify-center items-center w-full py-3 border border-black rounded-sm bg-gradient-to-r from-[#79DFFF] to-[#9A1BFF]">
          <button className="text-white px-6  py-3 font-poppins font-semibold bg-blue border border-black rounded-md text-[1.5625rem] ">
            Perguntar
          </button>
        </div>

        <div className="flex flex-col gap-2 w-full ">
          <button className="text-white flex justify-between px-3 py-2 w-full rounded-md bg-blue border border-black">
            <span className="text-xl font-semibold text-white font-poppins">
              Matérias
            </span>
            <Gear size={28} color="#fff" />
          </button>
          <button className="text-white flex justify-between px-3 py-2 w-full rounded-md bg-blue border border-black">
            <span className="text-xl font-semibold text-white font-poppins">
              Nível escolar{" "}
            </span>
            <CaretDown size={28} weight="bold" color="#fff" />
          </button>
        </div>

        <button className="w-full rounded-2xl border border-black bg-[#82C3FF] py-1 ">
          +6 Perguntas
        </button>

        <ul className="flex flex-col gap-2">
          {asks.map((repo, key) => {
            return (
              <li
                key={key}
                className="bg-white w-full border border-black flex flex-col p-4 gap-5 "
              >
                <div className="flex w-full gap-2 items-center " key={key}>
                  <img
                    src={repo.avatar}
                    className="w-8 h-8 rounded-full border-2 border-black"
                    alt=""
                  />
                  <div className="bg-white text-xs border border-[#10162f] rounded py-0 px-1 ">
                  <strong>{repo.username}</strong>
                  </div>
                  <span className="text-sm font-semibold">
                    {repo.category}
                </span> •
                <span className="text-sm">
                    {repo.created_at}
                </span>
                </div>
                <div className="flex gap-2 items-center justify-between ">
                  <div className="h-24 overflow-hidden font-inter ">{repo.content}</div>
                  <Link passHref href={"tarefa/" + repo.id}>
                    <button className="flex items-center justify-center rounded-3xl border-2 border-black px-2 mb-12 ">Responder</button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
