import React from "react";
import { Container, Tab } from "./styles";
import { Link } from "react-router-dom";

const HeaderTabs = () => {
  return (
    <Container>
      <Tab>
        <Link to={`/dinamica`}>Dinâmica</Link>
      </Tab>
      |
      <Tab>
        <Link to={`/professores`}>Para Professores</Link>
      </Tab>
      |
      <Tab>
        <Link to={`/aprenda`}>Aprenda Lógica</Link>
      </Tab>
    </Container>
  );
};

export default HeaderTabs;
