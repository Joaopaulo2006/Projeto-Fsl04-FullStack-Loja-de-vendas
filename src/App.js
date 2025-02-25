// const mysql2 = require("mysql2/promise");

// const executar = async (sql) => {
//   let conexao;
//   try {
//     conexao = await mysql2.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "1234",
//       database: "mercado",
//       port: 3306,
//     });

//     const [result] = await conexao.query(sql);
//     return result;
//   } catch (error) {
//     console.error("Erro ao executar consulta:", error);
//     throw error;
//   }
// };

// module.exports = { executar };
const mysql2 = require("mysql2/promise");

const executar = async (sql) => {
  let conexao;
  try {
    // Cria a conexão com o banco de dados
    conexao = await mysql2.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "mercado",
      port: 3306,
    });

    // Executa a consulta SQL
    const [result] = await conexao.query(sql);

    return result; // Retorna o resultado da consulta
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    throw error; // Lança o erro caso haja algum problema
  } finally {
    if (conexao) {
      // Fecha a conexão com o banco de dados
      await conexao.end();
    }
  }
};

module.exports = { executar };
