import { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function FaleConosco() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      await axios.post("http://localhost:3000/api/contatos", form);
      setStatus("sucesso");
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch (error) {
      setStatus("erro");
    }
  };

  return (
    <div>
      <h2>Fale Conosco</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
        <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
        <textarea name="mensagem" placeholder="Mensagem" value={form.mensagem} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>

      {status === "enviando" && <p>Enviando...</p>}
      {status === "sucesso" && <p>Mensagem enviada com sucesso!</p>}
      {status === "erro" && <p>Erro ao enviar. Tente novamente.</p>}
    </div>
  );
}
