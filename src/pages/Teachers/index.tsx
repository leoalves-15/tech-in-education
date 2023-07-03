import React from "react";
import HeaderTabs from "../../components/HeaderTabs";
import { Container } from "./styles";

const Teachers = () => {
  return (
    <>
      <HeaderTabs />
      <Container>
        <p>
          BARRETO NETA, Lormina; SILVA, Fabrício Oliveira d. O que vem a ser um
          software “educativo”? Construção Psicopedagógica; v22 n23, p.72-80,
          2014.
        </p>
        <p>
          LIMA, Lucivanda Braga; SOUZA E MAIA, Rita de Cássia de. O uso de
          software educacional como ferramenta pedagógica para aprendizagem do
          aluno surdo. Anais III CINTEDI, 2018.
        </p>

        <a href="https://www.infoescola.com/informatica/tipos-de-softwares-educativos/">
          Tipos de Softwares Educativos
        </a>
        <a href=" https://edisciplinas.usp.br/pluginfile.php/5659210/mod_resource/content/1/estilos_de_aprendizagem.pdf">
          Tipos de aprendizado
        </a>
        <iframe
          width="300"
          height="315"
          src="https://www.youtube.com/embed/vOIw5LcaV58"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </>
  );
};

export default Teachers;
