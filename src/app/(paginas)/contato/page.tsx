"use client";

import { useState } from "react";

export default function Contato() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    
    formData.append("access_key", "194b6c3f-3746-4a1d-afa7-4878b8839b94");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMensagemEnviada(true);
      setTimeout(() => setMensagemEnviada(false), 3000); // Ocultar mensagem após 3 segundos
    }
  };

  return (
    <section className="flex justify-center items-center min-h-full bg-purple-700">
      <form
        onSubmit={onSubmit}
        className="max-w-2xl w-full bg-slate-50 p-8 rounded-lg text-zinc-900 m-6 shadow-lg"
      >
        <h2 className="text-2xl text-center">Me Envie uma Menssagem</h2>
        <div className="mt-5">
          <label htmlFor="">Nome</label>
          <input
            className="caixa-input"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="mt-5">
          <label htmlFor="">Email</label>
          <input
            className="caixa-input"
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Sua Mensagem</label>
          <textarea
            className="h-52 resize-none outline-none p-4 mt-5"
            name="message"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
        </div>
        <button
          className="botao roxo w-full drop-shadow-md cursor-pointer text-lg mt-6"
          type="submit"
        >
          Enviar
        </button>
        {mensagemEnviada && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            Sua mensagem foi enviada com sucesso!
          </div>
        )}
      </form>
    </section>
  );
}
