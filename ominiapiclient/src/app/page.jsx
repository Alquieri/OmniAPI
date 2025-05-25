"use client";

import { useState } from 'react';

/**
 * @typedef {Object} Alien
 * @property {number} id
 * @property {string} nome
 * @property {string} especie
 * @property {string} planeta
 * @property {string} imagem
 */

export default function Home() {
  const [input, setInput] = useState('');
  const [alien, setAlien] = useState(null);
  const [erro, setErro] = useState('');

  const buscarAlien = async (e) => {
    e.preventDefault();
    setErro('');
    setAlien(null);

    try {
      const resposta = await fetch(`http://localhost:5154/api/Alien/${input}`);

      if (!resposta.ok) {
        throw new Error('Alien não encontrado.');
      }

      const dados = await resposta.json();

      setAlien({
        id: dados.id,
        nome: dados.nome,
        especie: dados.especie,
        planeta: dados.planeta,
        imagem: dados.imagem,
      });

    } catch (err) {
      setErro(err.message);
    }
  };
  return (
    <div>
      <h1>Buscar Alien</h1>
      <br/>
      <form onSubmit={buscarAlien}>
        <input
          type="text"
          placeholder="Digite o ID do Alien"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          Buscar
        </button>
      </form>

      {erro && <p>{erro}</p>}

      {alien && (
        <div>
          <h2>{alien.nome} (#{alien.id})</h2>
          <p><strong>Espécie:</strong> {alien.especie}</p>
          <p><strong>Planeta:</strong> {alien.planeta}</p>
          {alien.imagem && (
            <img src={alien.imagem} alt={alien.nome} />
          )}
        </div>
      )}
    </div>
  );
}
