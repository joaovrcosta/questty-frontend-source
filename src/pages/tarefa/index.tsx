import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";
import {api} from "../../services/api-axios";

import styles from "./Question.module.scss";
// import starLike from "../../assets/images/star-like-icon.svg";
// import starRated from "../../assets/images/star-rated.svg";
// import starUnrated from "../../assets/images/star-unrated.svg";

type QuestionProps = {};

export default function Question() {
  const [content, setContent] = useState("");
  const [answer_author, setAnswerAuthor] = useState("");
  const [question, setQuestion] = useState<QuestionProps>({});

  //contexto
  const {userData} = useContext(AuthContext);

  let {id} = useParams();

  useEffect(() => {
    api
      .get(`/questions/list?id=${id}`)
      .then(response => setQuestion(response.data))
      .catch(err => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const postAnswer = async e => {
    e.preventDefault();

    // const {id} = question;
    // const {author_id} = answer_author;

    const data = await axios
      .post("http://localhost:3333/answers", {
        // author_id,
        content,
        // id,
      })
      .then(res => {
        return console.log(res);
      })
      .catch(err => console.error(err));
  };

  return (
    <main className={styles.questContainer}>
      <Head>
        <title>Question-1</title>
      </Head>
      <div className={styles.questContainerUpper}>
        <Image
          width={32}
          height={32}
          className={styles.questContainerUpperImage}
          src='/assets/images/avatar-18.svg'
          alt='user avatar'
        />
        <p className={styles.questContainerUpperNickname}>userdefault</p>
        <p className={styles.questContainerUpperCreatedAt}>há 43 minutos</p>
        <p className={styles.questContainerUpperSubject}>Biologia</p>
      </div>

      <div className={styles.questContainerQuestion}>
        <div className={styles.questContainerQuestionPreview}>
          <h1 className="font-inter text-2xl font-bold">
            {/* {question && question[0]?.title} */}
            1. Com base nos conhecimentos adquiridos sobre os fluxos da (FCC, 201 Por trás do aumento da importância da gestcadeia logística, marque a opção correta:
          </h1>
        </div>

        <div className={styles.questContainerQuestionRemaining}>
          <h2 className="font-inter">
            {/* {question && question[0]?.content} */}
            (A)O fluxo de informações permeia somente a parte de produção da cadeia logística. Os processos de gestão desse domínio têm como principal objetivo o de otimizar todos os serviços da organização, de modo a atender às expectativas de todas as partes interessadas. <br />

            (A)O fluxo de informações permeia somente a parte de produção da cadeia logística. Os processos de gestão desse domínio têm como principal objetivo o de otimizar todos os serviços da organização, de modo a atender às expectativas de todas as partes interessadas.
            <br />
            <br />
          </h2>
        </div>

        <div className={styles.questContainerQuestionDetails}>
          <input
            className={styles.questContainerQuestionDetailsInput}
            placeholder='Pedir detalhes sobre a pergunta'
          />

          <Image
            height={32}
            width={32} 
            className={styles.questContainerQuestionDetailsImage}
            src='/assets/images/dialog-icon.svg '
            alt=''
          />
        </div>

        <form
          onSubmit={postAnswer}
          className={styles.questContainerQuestionRespond}
        >
          <textarea
            onChange={e => {
              setContent(e.target.value);
            }}
            name='answer'
            id=''
            value={content}
            cols={30}
            rows={10}
            className={styles.questContainerQuestionRespondTextarea}
          ></textarea>

          <button
            type='submit'
            className={styles.questContainerQuestionRespondButton}
          >
            <Image
              width={24}
              height={24}
              className={styles.questContainerQuestionRespondButtonImage}
              src='/assets/images/plus-icon.svg'
              alt=''
            />
            Responder
          </button>
        </form>

        {/* <div className={styles.questContainerQuestionAnswers}>
          <div className={styles.questContainerQuestionAnswersItemBest}>
            <div className={styles.answerContainer}>
              <div className={styles.answerContainerUpper}>
                <Image
                  src="/assets/images/avatar-18.svg"
                  alt="foto de perfil"
                  className={styles.answerContainerUpperImage}
                />
                <p className={styles.answerContainerUpperNickname}>
                  joaovrcosta
                </p>

                <p className={styles.answerContainerUpperHighlight}>
                  Melhor resposta
                </p>

                <div className={styles.answerContainerUpperStars}>
                  <Image
                    className={styles.answerContainerUpperStarsImage}
                    src={starLike}
                    alt=""
                  />
                  <p className={styles.answerContainerUpperStarsNumber}>292</p>
                </div>
              </div>
              <div className={styles.answerContainerBox}>
                <p className={styles.answerContainerBoxText}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections.
                </p>
              </div>
              <div className={styles.answerContainerLower}>
                <button className={styles.answerContainerLowerThankButton}>
                  Valeu <Image src={starLike} alt="" /> 593
                </button>

                <button className={styles.answerContainerLowerRateButton}>
                  <Image src={starRated} alt="" />
                  <Image src={starRated} alt="" />
                  <Image src={starRated} alt="" />
                  <Image src={starRated} alt="" />
                  <Image src={starUnrated} alt="" />
                  4,2
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.emptyAnswers}>
          <p className={styles.emptyAnswersText}>Nada por aqui...</p>
          <Image
            width={100}
            height={100}
            className={styles.emptyAnswersImage}
            src='/assets/images/no-answers.svg'
            alt=''
          />
        </div>
      </div>
    </main>
  );
}
