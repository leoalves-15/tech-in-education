import React from "react";
import { Text, Container } from "./styles";
import futebol_true from "../../../assets/image/futebol_true.png";
import futebol_false from "../../../assets/image/futebol_false.png";
import financas_true from "../../../assets/image/financas_true.png";
import financas_false from "../../../assets/image/financas_false.png";
import condicao from "../../../assets/image/condicao.png";

interface propsI {
  subject: string;
  type: string;
}
const synth = window.speechSynthesis;

const Content: React.FC<propsI> = ({ subject, type }) => {
  if (!synth)
    return <span>Aw... your browser does not support Speech Synthesis</span>;

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices()[0];

    synth.speak(utterance);
  };

  return (
    <Container>
      <Text>
        Nosso objetivo é aprender estruturas de decisão ou condicional. Que em
        programação é uma estrutura que possibilitará realizar determiada ação
        caso uma expressão seja verdadeira ou falsa, existem algumas dessas
        estruturas hoje iremos aprender IF "A condicional if é uma estrutura
        condicional que executa a afirmação, dentro do bloco, se determinada
        condição for verdadeira. Se for falsa, executa as afirmações dentro de
        else." (você pode encontrar essas e outras definições no site da
        mozilla) como você escolheu anteriormente iremos usar o contexto de{" "}
        {subject} para isso iremos simular a seguinte situação:
      </Text>
      {type === "vizual" ? (
        <>
          <img
            src={condicao}
            alt="código mostrando uma estrutura de decisão if"
          />
        </>
      ) : (
        <button
          type="button"
          onClick={() =>
            speak(
              "Em uma estrutura de decisão você terá uma expressão, que pose ser true ou false, e ao decorrer disso você pode fazer uma ação para false ou para true. Exemplo a média da sua escola é 5 caso você tenha uma média inferior você será reprovado e caso você tenha uma igual ou superior, será aprovado"
            )
          }
        >
          Clique aqui
        </button>
      )}

      <Text>
        <span>
          {`${
            subject === "futebol"
              ? "Um jogador recebe um cartão amarelo, mas como bons árbitros sabemos que caso alguém receba dois cartões amarelos no mesmo jogo esse deve ser expulso."
              : "Como entendemos muito de dinheiro, sabemos que caso a pessoa gaste mais do que recebe, ela está caminhando para falência "
          }`}
        </span>
      </Text>
      <img
        src={subject === "futebol" ? futebol_true : financas_true}
        alt="código mostrando uma estrutura de decisão if"
      />
      <Text>
        Na imagem anterior conseguimos ver uma estrutura de decisão com o
        retorno postivo, agora iremos ver negativo
      </Text>
      <img
        src={subject === "futebol" ? futebol_false : financas_false}
        alt="código mostrando uma estrutura de decisão if"
      />
    </Container>
  );
};

export default Content;
