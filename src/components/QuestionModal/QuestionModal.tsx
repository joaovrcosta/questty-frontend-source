import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Modal from "react-modal";
// import styles from "./QuestionModal.module.scss"

const customStyle = {
  content: {
    top: "15%",
  },
};

export function NewQuestionModal({ isOpen, onRequestClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [author_id, setAuthorId] = useState("");
  // let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3333/questions", {
        title,
        content,
        category_id,
        author_id,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyle}
      >
        <form action="submit" onSubmit={handleSubmit}>
          <input
            placeholder="Titulo da pergunta"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            placeholder="Descreva sua dúvida"
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />

          <input
            placeholder="Categoria"
            type="text"
            value={category_id}
            onChange={(event) => setCategoryId(event.target.value)}
          />

          <input
            placeholder="Autor"
            type="text"
            value={author_id}
            onChange={(event) => setAuthorId(event.target.value)}
          />

          {/* <select id="matéria" name="matéria">
            <option selected disabled hidden value="">
              Escolha a matéria
            </option>
            <option value="Quimica">Quimica</option>
            <option value="Artes">Artes</option>
            <option value="Português">Português</option>
            <option value="Matematica">Matematica</option>
            <option value="Física">Física</option>
            <option value="História">História</option>
            <option value="ENEM">ENEM</option>
            <option value="Geografia">Geografia</option>
            <option value="Biologia">Biologia</option>
            <option value="Filosofia">Filosofia</option>
            <option value="Sociologia">Sociologia</option>
            <option value="Administração">Administração</option>
            <option value="Pedagogia">Pedagogia</option>
            <option value="Inglês">Inglês</option>
            <option value="Saude">Saude</option>
            <option value="Ed.Fisica">Ed.Fisica</option>
            <option value="Contabilidade">Contabilidade</option>
            <option value="Direito">Direito</option>
            <option value="Psicologia">Psicologia</option>
            <option value="Logica">Logica</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Musica">Musica</option>
          </select> */}
          <button onClick={onRequestClose} type="submit">
            Faça sua pergunta
          </button>
        </form>
      </Modal>
    </div>
  );
}
