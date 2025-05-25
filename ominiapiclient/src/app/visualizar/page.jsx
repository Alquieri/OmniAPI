"use client";

import { useEffect, useState } from "react";

export default function VisualizarAliens() {
  const [aliens, setAliens] = useState([]);
  const [detalhesVisiveis, setDetalhesVisiveis] = useState({});

  useEffect(() => {
    const buscarAliens = async () => {
      try {
        const resposta = await fetch('http://localhost:5154/api/Alien');
        if (!resposta.ok) {
          throw new Error('Erro ao buscar aliens.');
        }
        const dados = await resposta.json();
        setAliens(dados);
      } catch (err) {
        console.error(err);
      }
    };

    buscarAliens();
  }, []);

  const toggleDetalhes = (id) => {
    setDetalhesVisiveis((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <h1>Aliens Cadastrados</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" , justifyContent: "center" }}>
        {aliens.map((alien) => (
          <div key={alien.id} style={{ border: "1px solid #43c654", padding: "1rem" }}>
            <img
              src={alien.imagem}
              alt={alien.nome}
              style={{ width: "150px", height: "150px", objectFit: "cover", cursor: "pointer" }}
              onClick={() => toggleDetalhes(alien.id)}
            />
            <h2>{alien.nome}</h2>
            {detalhesVisiveis[alien.id] && (
              <div>
                <p><strong>Espécie:</strong> {alien.especie}</p>
                <p><strong>Planeta:</strong> {alien.planeta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
