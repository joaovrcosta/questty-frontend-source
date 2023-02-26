import "../styles/tailwind.css"
import "../styles/global.css";
import Head from "next/head";
import Header from "../components/Header/Header";
import {useRouter} from "next/router";
import {useContext, useState} from "react";
import { Footer } from "../components/Footer/Footer";
import {NewQuestionModal} from "../components/QuestionModal/QuestionModal";
import {AuthContext, AuthProvider} from "../contexts/AuthContext";


function MyApp({Component, pageProps}) {
  const {loading} = useContext(AuthContext);

  const {pathname} = useRouter();
  const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);

  function handleOpenNewQuestionModal() {
    setIsNewQuestionModalOpen(true);
  }

  function handleCloseNewQuestionModal() {
    setIsNewQuestionModalOpen(false);
  }

  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <AuthProvider>
      {pathname == "/" ? (
        <></>
      ) : (
        <Header onOpenNewQuestionForm={handleOpenNewQuestionModal} />
      )}
      <Head>
        <title>Questty - Para estudantes feito por estudantes</title>
      </Head>
      <NewQuestionModal
        isOpen={isNewQuestionModalOpen}
        onRequestClose={handleCloseNewQuestionModal}
      />

     {pathname != "/" ? (
      <div className="component"><Component {...pageProps} /></div>
     ) : <Component {...pageProps} />}
     
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
