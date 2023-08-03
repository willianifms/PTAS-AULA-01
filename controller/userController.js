const User = require('../model/user');

const createUser = async (req, res) => {
    const {nome, email, senha} = req.body
    await User.create({
        nome: nome,
        email: email,
        senha: senha
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        console.log(`Ops, deu erro: ${erro}`);
    })
}

const selectUsers = async (req,res) => {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.log(`Erro ao buscar usuários: ${error}`);
      return null;
    }
}  

module.exports = { createUser, selectUsers }