'use client'
import React, { useState, useEffect } from "react";
import CardRefuge from './CardRefuge';

const RandomRefugiosCards: React.FC = () => {
  const [randomRefugios, setRandomRefugios] = useState([]);

  useEffect(() => {
    fetch("https://backpf-prueba.onrender.com/shelters")
      .then(response => response.json())
      .then(data => {
        // Mezclar aleatoriamente los refugios
        const shuffled = data.sort(() => 0.5 - Math.random());
        // Seleccionar los primeros tres refugios aleatorios
        const selected = shuffled.slice(0, 3);
        setRandomRefugios(selected);
      })
      .catch(error => console.error("Error fetching refugios:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-5">
      {randomRefugios.map((refugio, index) => (
        <CardRefuge key={index} refugio={refugio} />
      ))}
    </div>
  );
};

export default RandomRefugiosCards;
