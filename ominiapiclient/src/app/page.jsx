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
    <div style={{ padding: '2rem', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>Buscar Alien</h1>
      <br/>
      <form onSubmit={buscarAlien}>
        <input
          type="text"
          placeholder="Digite o ID do Alien"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ padding: '0.5rem', marginLeft: '1rem' }}>
          Buscar
        </button>
      </form>

      {erro && <p style={{ color: 'red', marginTop: '30px' }}>{erro}</p>}

      {alien && (
        <div style={{ marginTop: '2rem' }}>
          <h2>{alien.nome} (#{alien.id})</h2>
          <p><strong>Espécie:</strong> {alien.especie}</p>
          <p><strong>Planeta:</strong> {alien.planeta}</p>
          {alien.imagem && (
            <img src={alien.imagem} alt={alien.nome} style={{ width: '200px', marginTop: '1rem' }} />
          )}
        </div>
      )}
    </div>
  );
}
