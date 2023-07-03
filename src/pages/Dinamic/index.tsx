import { useState, useEffect } from "react";
import axios from "axios";
import { Response, Button, ContainLink } from "./styles";
import HeaderTabs from "../../components/HeaderTabs";

function Dinamic() {
  const [names, setNames] = useState([]);
  const [selectedButton, setSelectedButton] = useState(-1);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.api-ninjas.com/v1/babynames?gender=neutral",
      headers: { "X-Api-Key": "U7v3XyEi3mzoKuQyIkD+6w==6aQbVaea0jczknoL" },
    };

    axios
      .request(config)
      .then((response) => {
        setNames(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeaderTabs />
      {clicked ? (
        <ContainLink>
          <Response>Você errou!</Response>
          <a
            target="_blank"
            href="https://canaltech.com.br/inteligencia-artificial/site-cria-fotos-realistas-de-pessoas-que-nao-existem-usando-imagens-reais-132971/"
            rel="noreferrer"
          >
            cuidado, com imagens falsas! clique e saiba mais.
          </a>
        </ContainLink>
      ) : null}
      <img
        src="https://thispersondoesnotexist.com/"
        className="App-logo"
        alt="logo"
      />
      {names?.map((name, index) => (
        <>
          {index < 3 ? (
            <Button
              onClick={() => {
                setSelectedButton(index);
                setClicked(true);
              }}
              className={`${selectedButton === index ? "error-btn" : ""}`}
              disabled={clicked}
              key={name}
            >
              {name}
            </Button>
          ) : null}
        </>
      ))}
    </>
  );
}

export default Dinamic;
