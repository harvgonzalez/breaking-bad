import React, { useState } from "react";
import styled from "@emotion/styled";
import Frase from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  `;


function App() {


  // State de frases
  const [ frase, guardarFrase] = useState({})



  const consultarApi = async() => {

    function getRandomInt(max) {
      let i = Math.floor(Math.random() * max);
      return i;
    }
    const api = await fetch('https://breakingbadapi.com/api/quotes')
    const frase = await api.json();
    let randomNumber = getRandomInt(frase.length)


    guardarFrase(frase[randomNumber]);
    
    // frase.then( api => console.log(api[getRandomInt(api.length)]))
  }
  return (
    <Contenedor>

      <Frase
        frase={frase}
      ></Frase>
      <Boton
        onClick={consultarApi}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
