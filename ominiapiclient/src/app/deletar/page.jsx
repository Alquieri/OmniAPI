"use client";

import { useState } from "react";

export default function DeletarAlien() {
  const [inputId, setInputId] = useState('');
  const [mensagem, setMensagem] = useState('');

  const deletarAlien = async (e) => {
    e.preventDefault();
    setMensagem('');

    try {
      const resposta = await fetch(`http://localhost:5154/api/Alien/${inputId}`, {
        method: 'DELETE',
      });

      if (!resposta.ok) {
        throw new Error('Erro ao deletar Alien.');
      }

      setMensagem('Alien deletado com sucesso!');
      setInputId('');
    } catch (err) {
      setMensagem(err.message);
    }
  };

  return (
    <div>
      <h1>Deletar Alien</h1>

      <form onSubmit={deletarAlien}>
        <input
          type="text"
          placeholder="Digite o ID do Alien"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <button type="submit">Deletar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
