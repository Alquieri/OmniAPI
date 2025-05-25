"use client";

import { useState } from "react";

export default function EditarAlien() {
  const [inputId, setInputId] = useState('');
  const [alien, setAlien] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const buscarAlien = async () => {
    setMensagem('');
    setAlien(null);
    try {
      const resposta = await fetch(`http://localhost:5154/api/Alien/${inputId}`);
      if (!resposta.ok) {
        throw new Error('Alien não encontrado.');
      }
      const dados = await resposta.json();
      setAlien(dados);
    } catch (err) {
      setMensagem(err.message);
    }
  };

  const handleChange = (e) => {
    setAlien({ ...alien, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    try {
      const resposta = await fetch(`http://localhost:5154/api/Alien/${alien.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alien)
      });

      if (!resposta.ok) {
        throw new Error('Erro ao atualizar Alien.');
      }

      setMensagem('Alien atualizado com sucesso!');
    } catch (err) {
      setMensagem(err.message);
    }
  };

  return (
    <div>
      <h1>Editar Alien</h1>

      <div>
        <input
          type="text"
          placeholder="Digite o ID do Alien"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <button onClick={buscarAlien}>Buscar</button>
      </div>

      {mensagem && <p>{mensagem}</p>}

      {alien && (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="id"
            value={alien.id}
            readOnly
          />
          <input
            type="text"
            name="nome"
            value={alien.nome}
            onChange={handleChange}
            placeholder="Nome"
          />
          <input
            type="text"
            name="especie"
            value={alien.especie}
            onChange={handleChange}
            placeholder="Espécie"
          />
          <input
            type="text"
            name="planeta"
            value={alien.planeta}
            onChange={handleChange}
            placeholder="Planeta"
          />
          <input
            type="text"
            name="imagem"
            value={alien.imagem}
            onChange={handleChange}
            placeholder="Imagem"
          />
          <button type="submit">Salvar</button>
        </form>
      )}
    </div>
  );
}
