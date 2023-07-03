import React, { useState } from "react";
import HeaderTabs from "../../components/HeaderTabs";
import { Button } from "../Dinamic/styles";
import { ContainButton, Label, ContainerContent } from "./styles";
import Content from "./components/Content";

const Learn = () => {
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <HeaderTabs />
      {subject && type ? (
        <ContainerContent>
          <Content subject={subject} type={type} />
        </ContainerContent>
      ) : (
        <ContainButton>
          {subject ? (
            <>
              <Label>Qual maneira você se sente mais confortável ?</Label>
              <Button
                onClick={() => {
                  setType("vizual");
                }}
              >
                Vizual
              </Button>
              <Button
                onClick={() => {
                  setType("auditivo");
                }}
              >
                Auditivo
              </Button>
            </>
          ) : (
            <>
              <Label>Qual assunto você prefere ?</Label>
              <Button
                onClick={() => {
                  setSubject("futebol");
                }}
              >
                Futebol
              </Button>
              <Button
                onClick={() => {
                  setSubject("financas");
                }}
              >
                Finanças
              </Button>
            </>
          )}
        </ContainButton>
      )}
    </>
  );
};

export default Learn;
