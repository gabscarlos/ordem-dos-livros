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
    <section className="flex justify-center items-center min-h-full bg-gradient-to-br from-indigo-600 to-purple-700 py-10 rounded-xl">
      <form
        onSubmit={onSubmit}
        className="max-w-2xl w-full bg-white p-8 sm:p-12 rounded-2xl text-zinc-900 mx-4 shadow-2xl"
      >
        <h2 className="text-3xl font-serif font-bold text-center mb-8 text-zinc-800">Me Envie uma Mensagem</h2>
        <div className="mt-5">
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Nome</label>
          <input
            id="name"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
          <input
            id="email"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
          />
        </div>
        <div className="mt-5">
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">Sua Mensagem</label>
          <textarea
            id="message"
            className="w-full h-40 bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
            name="message"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
        </div>
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-8 transform hover:-translate-y-0.5"
          type="submit"
        >
          Enviar Mensagem
        </button>
        {mensagemEnviada && (
          <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg text-center text-green-700 font-medium animate-pulse">
            Sua mensagem foi enviada com sucesso!
          </div>
        )}
      </form>
    </section>
  );
}
