import Link from "next/link";
// import styles from "./Header.module.scss";
import Image from "next/image";

const Header = ({onOpenNewQuestionForm}) => {
  return (
    <header className="fixed flex items-center h-[5.3125rem] z-50 bg-primary top-0 w-full  ">
      <nav className="flex items-center py-4 px-6 max-w-[1280px]">
        <Link href='/'>
          <a className="flex items-center">
            <Image
              width={100}
              height={100}
              className=""
              src='/assets/images/questty-logo.svg'
              alt='Questty Logo'
            />
          </a>
        </Link>
        <div className="flex justify-between my-0 mx-4 py-2 px-4 rounded-full border border-black bg-white w-full gap-3">
          <input
            className="w-full border-none outline-none"
            placeholder='Qual a sua dúvida?'
          ></input>
          <img 
            className="rounded-full"
            src='/assets/images/lupa-icon.svg'
            alt=''
          />
        </div>
        <Link href='profile' className="border border-black">
          <Image
            width={100}
            height={100}
            className="border border-black"
            src='/assets/images/avatar-03.svg'
            alt=''
          />
        </Link>
        {/* Botão desativado até novos testes */}
        {/* <buthrefn type="buthrefn" onClick={onOpenNewQuestionForm}>Postar</buthrefn> */}
      </nav>
    </header>
  );
};

export default Header;
