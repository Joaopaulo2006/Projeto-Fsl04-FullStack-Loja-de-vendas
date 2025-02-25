const express = require("express");
const cors = require("cors");
const { executar } = require("./App.js");

const app = express();
const port = 9090;

app.use(express.json());
app.use(cors());

// Rota para retornar os produtos
app.get("/products", async (req, res) => {
  try {
    const produtos = await executar("SELECT * FROM products;");
    console.log(produtos); // Verifique o que está sendo retornado
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
