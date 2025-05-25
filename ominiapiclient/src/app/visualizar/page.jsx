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
      <style>{`
        .alien-card {
          border: 1px solid #232526;
          padding: 1rem;
          border-radius: 16px;
          background: linear-gradient(135deg, #18191a 0%, #232526 100%);
          box-shadow: 0 4px 24px rgba(35, 37, 38, 0.25);
          transition: transform 0.2s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .alien-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(35, 37, 38, 0.35);
          border-color: #fff;
        }
        .alien-img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          cursor: pointer;
          border-radius: 50%;
          border: 3px solid #43c654;
          box-shadow: 0 2px 12px rgba(67, 198, 84, 0.2);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .alien-img:hover {
          border-color: #fff;
          box-shadow: 0 4px 24px #43c65455;
        }
        .alien-details {
          margin-top: 1rem;
          background: rgba(0,0,0,0.7);
          color: #fff;
          padding: 0.75rem;
          border-radius: 12px;
          animation: fadeIn 0.4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        h1 {
          text-align: center;
          text-shadow: 0 2px 8px #23252699;
          margin-bottom: 2rem;
        }
        h2 {
          color: #fff;
          text-align: center;
          margin: 0.5rem 0 0 0;
        } 
      `}</style>
      <h1>Aliens do seu ominitrix:</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {aliens.map((alien) => (
          <div key={alien.id} className="alien-card">
            <img
              src={alien.imagem}
              alt={alien.nome}
              className="alien-img"
              onClick={() => toggleDetalhes(alien.id)}
            />
            <h2>{alien.nome}</h2>
            {detalhesVisiveis[alien.id] && (
              <div className="alien-details">
                <p><strong>Id:</strong> {alien.id}</p>
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
