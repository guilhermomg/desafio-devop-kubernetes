const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Conectar ao banco de dados utilizando as variáveis de ambiente
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Verificar a conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    process.exit(1); // Termina a aplicação em caso de falha na conexão
  }
  console.log('Conectado ao banco de dados');
});

// Rota de status para verificar a conexão com o banco
app.get('/status', (req, res) => {
  db.query('SELECT 1', (err, result) => {
    if (err) {
      return res.status(500).send('Erro na conexão com o banco');
    }
    res.send('Conexão OK');
  });
});

// Rota para inserir dados no banco de dados
app.post('/dados', express.json(), (req, res) => {
  const { nome, idade } = req.body;

  if (!nome || !idade) {
    return res.status(400).send('Nome e idade são necessários');
  }

  const query = 'INSERT INTO pessoas (nome, idade) VALUES (?, ?)';
  db.query(query, [nome, idade], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao inserir dados');
    }
    res.status(201).send('Dados inseridos com sucesso');
  });
});

// Rota para listar todos os dados
app.get('/dados', (req, res) => {
  db.query('SELECT * FROM pessoas', (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao consultar dados');
    }
    res.json(result);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
