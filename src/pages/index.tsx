import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LandingHeader } from "../components/HeaderLandingPage/LandingHeader";
import { AuthContext } from "../contexts/AuthContext";
import { ArrowDown } from "phosphor-react";

export default function Home({ onOpenNewQuestionForm }) {
  const { logged } = useContext(AuthContext);

  if (logged) return <Navigate to="/feed" />;

  return (
    <>
      <LandingHeader />

      <main className="">
        <section className="flex pt-14  flex-col items-center justify-center bg-[#fffce6]">
          <div className="flex flex-col w-[1280px]  sm:  2xl:max-w-[1280px] gap-10">
            <h1 className="font-poppins font-bold text-xs md:text-2xl 2xl:text-7xl">
              Questione, aprenda
            </h1>
            <p className="font-poppins text-base w-[40rem] leading-6 ">
              Você ou os seus filhos têm um problema com os estudos. Tranquilo.
              Do inglês à física, o Questty cuida da sua vida acadêmica. Seja
              qual for a sua dúvida, você vai encontrar a resposta, entender o
              que está por trás dela e alcançar todo o seu potencial.
            </p>
          </div>
          <div className="flex w-auto absolute mt-[37rem] right-0 mr-96">
            <img
              className="w-[588px] h-[588px]"
              src="/assets/images/girl-rocket.svg"
            />
          </div>
        </section>
        <section className="bg-[#fffce6] pb-28">
          <div className="flex items-center justify-start mx-auto w-[1280px] max-w-[1280px] bg-[#fffce6]">
            <div className="flex mt-28 gap-3 border border-black items-center bg-white rounded-full  py-2 px-4">
              <input
                type="text"
                className="py-4 text-xl outline-none"
                placeholder="Qual a sua dúvida?"
              />
              <button className="border ml-16 border-black h-10 font-semibold px-6 bg-[#FFD302] rounded-full shadow-lg">
                PERGUNTE
              </button>
            </div>
          </div>
          <div className="mx-auto w-[1280px] max-w-[1280px]">
            <span className="absolute ml-52 p-2 border-2 border-black border-dashed mt-[10.6rem] rounded-full">
              <a href="#cards">
                <button className="p-3 rounded-full bg-[#ffd302] border text-3xl border-black">
                  <ArrowDown />
                </button>
              </a>
            </span>
          </div>
        </section>
        <div className="h-32  w-full flex items-center bg-[#fffce6]">
          <img src="/assets/images/wave1.svg" className="mt-10 " />{" "}
        </div>
        <section
          id="cards"
          className="flex mt-52 w-full justify-center flex-wrap gap-14"
        >
          <div className="w-[23.75rem] h-[26rem] bg-blackBlue">
            <div className="w-full h-full bg-[#FFD644] translate-x-4 -translate-y-4 hover:-translate-y-0 hover:translate-x-0 duration-500 cursor-pointer hover:border-2 delay-200 transition-all border border-blackBlue flex flex-col items-center justify-center gap-6 px-12">
              <img src="/assets/images/eye-img.svg" alt="" />
              <h2 className="font-poppins text-lg font-bold">
                Visualize sem limite
              </h2>
              <p className="text-center text-lg leading-relaxed">
                Visualize sem restrições. Pois nossa missão é o seu conhecimento{" "}
              </p>
            </div>
          </div>
          <div className="w-[23.75rem] h-[26rem] bg-[#FFD644]">
            <div className="w-full h-full bg-blackBlue translate-x-4 -translate-y-4 hover:-translate-y-0 hover:translate-x-0 duration-500 cursor-pointer hover:border-2 delay-200 transition-all border border-[#FFD644] flex flex-col items-center justify-center gap-8 px-12 ">
              <img src="/assets/images/couting-stars.svg" alt="" />
              <h2 className="font-poppins text-lg font-bold text-white">
                Avalie as melhores respostas
              </h2>
              <p className="text-center text-lg leading-relaxed text-white">
                Tenha controle das respostas mais exatas{" "}
              </p>
            </div>
          </div>
          <div className="w-[23.75rem] h-[26rem] bg-blackBlue">
            <div className="w-full h-full bg-[#FFD644] translate-x-4 -translate-y-4 hover:-translate-y-0 hover:translate-x-0 duration-500 cursor-pointer hover:border-2 delay-200 transition-all border border-blackBlue flex flex-col items-center justify-center gap-6 px-12">
              <img src="/assets/images/checked-stars-icon.svg" alt="" />
              <h2 className="font-poppins text-lg font-bold">
                Respostas de ouro
              </h2>
              <p className="text-center text-lg leading-relaxed">
                Respostas verificadas por nosso time de mestres{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="flex pt-24 pb-24 w-full justify-center flex-wrap">
          <h2 className="font-poppins text-[2.75rem] font-bold">Como funciona nossa plataforma?</h2>
        </section>
        <section className="flex flex-col items-start mx-auto max-w-[920px]">
          <div className="pb-32">
          <h3 className="text-2xl font-extrabold text-slate-300 mb-2">Primeiro Passo</h3>
          <h2 className="text-4xl font-bold mb-4">Pergunte ou Pesquise</h2>
          <p className="text-lg">
            As vezes ficamos com dúvidas sobre um assunto, então essa é a hora
            de pesquisar.
          </p>
          <img src="/assets/images/GirlSearch.svg" alt="" />
          <button className="bg-[#FFD302] border border-blackBlue px-4 py-3 font-bold">PERGUNTE</button>
          </div>

          <div className="pb-32">
          <h3 className="text-2xl font-extrabold text-slate-300 mb-2">Segundo passo</h3>
          <h2 className="text-4xl font-bold mb-4">Receba explicações passo a passo</h2>
          <p className="text-lg">
            As vezes ficamos com dúvidas sobre um assunto, então essa é a hora
            de pesquisar.
          </p>
          <img src="/assets/images/boy-img-icon.svg" alt="" />
          <button className="bg-[#78E16F] border border-blackBlue px-4 py-3 font-bold">PESQUISE</button>
          </div>

          <div>
          <h3 className="text-2xl font-extrabold text-slate-300 mb-2">Terceiro passo</h3>
          <h2 className="text-4xl font-bold mb-4">Evolua com a gente</h2>
          <p className="text-lg">
            As vezes ficamos com dúvidas sobre um assunto, então essa é a hora
            de pesquisar.
          </p>
          <img src="/assets/images/GirlUniverse.svg" alt="" />
          <button className="bg-[#83D2E9] border border-blackBlue px-4 py-3 font-bold">COMEÇAR</button>
          </div>
        </section>
      </main>
    </>
  );
}
