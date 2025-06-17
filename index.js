const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao SaaS de Locação de Caçambas!');
});

// Banco de dados fake na memória
let clientes = [];
let cacambas = [];

// === ROTAS DE CLIENTES ===
// Cadastrar cliente
app.post('/clientes', (req, res) => {
  const { nome, telefone, endereco } = req.body;
  const novoCliente = { id: clientes.length + 1, nome, telefone, endereco };
  clientes.push(novoCliente);
  res.json({ mensagem: 'Cliente cadastrado!', cliente: novoCliente });
});

// Listar clientes
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// === ROTAS DE CAÇAMBAS ===
// Cadastrar caçamba
app.post('/cacambas', (req, res) => {
  const { identificacao, tamanho, status } = req.body;
  const novaCacamba = { id: cacambas.length + 1, identificacao, tamanho, status: status || 'disponivel' };
  cacambas.push(novaCacamba);
  res.json({ mensagem: 'Caçamba cadastrada!', cacamba: novaCacamba });
});

// Listar caçambas
app.get('/cacambas', (req, res) => {
  res.json(cacambas);
});

// === TESTE DE VIDA ===
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Start do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
