"use client";

import { useState } from "react";

export default function Criar() {
    const [form, setForm] = useState({
        nome: "",
        especie: "",
        planeta: "",
        imagem: ""
    });

    const [mensagem, setMensagem] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensagem("");

        try {
            const resposta = await fetch("http://localhost:5154/api/Alien", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!resposta.ok) {
                throw new Error("Erro ao criar Alien");
            }

            setMensagem("Alien criado com sucesso!");

            setForm({
                id: 0,
                nome: "",
                especie: "",
                planeta: "",
                imagem: ""
            });

        } catch (err) {
            setMensagem(err.message);
        }
    };

    return (
        <div>
            <h1>Criar Alien</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={form.nome}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="especie"
                    placeholder="Espécie"
                    value={form.especie}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="planeta"
                    placeholder="Planeta"
                    value={form.planeta}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="imagem"
                    placeholder="URL da Imagem"
                    value={form.imagem}
                    onChange={handleChange}
                />
                <button type="submit">Criar</button>
            </form>

            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}

