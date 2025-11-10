const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
app.use(cors());
app.use(express.json());

// 🗄️ Conexão com o banco MySQL (sem senha)
const sequelize = new Sequelize("db_pontuada", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// 🧩 Modelo da tabela "Contatos"
const Contato = sequelize.define("Contato", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// 🚀 Rota teste
app.get("/", (req, res) => {
  res.send("✅ API Fale Conosco está funcionando!");
});

// 🔹 GET → listar todos os contatos
app.get("/api/contatos", async (req, res) => {
  try {
    const contatos = await Contato.findAll();
    res.json(contatos);
  } catch (error) {
    console.error("Erro ao buscar contatos:", error);
    res.status(500).json({ mensagem: "Erro ao buscar contatos." });
  }
});

// 🔹 POST → receber mensagem do formulário
app.post("/api/contatos", async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;

    if (!nome || !email || !telefone || !mensagem) {
      return res.status(400).json({ mensagem: "Preencha todos os campos." });
    }

    const novoContato = await Contato.create({
      nome,
      email,
      telefone,
      mensagem,
    });

    return res
      .status(201)
      .json({ mensagem: "Contato salvo com sucesso!", contato: novoContato });
  } catch (error) {
    console.error("Erro ao criar contato:", error);
    return res.status(500).json({ mensagem: "Erro ao salvar contato." });
  }
});

// 🧩 Sincronizar banco e iniciar servidor
const PORT = 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 API rodando em http://localhost:${PORT}`);
      console.log("📦 Conectado ao banco MySQL (db_pontuada).");
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao banco:", err);
  });
