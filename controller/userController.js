const User = require('../model/user');
const secret =require ('../config/auth.json')
const jwt = require('jsonwebtoken')


const createUser = async (req, res) => {
    const { nome, email, senha } = req.body
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

const deleteUser = async(req, res) =>{
User.destroy({
    where: {
        id: parseInt(req.params.id)
    }
}).then(() => {
    res.json('usuário deletado com sucesso!');
    console.log('usuário deletado com sucesso!');
}).catch((erro) => {
    console.log(`Ops, deu erro: ${erro}`);
});
}

const updateUser = async (req, res) => {
    let {id, nome, email, senha} = req.body;
    User.update({
        nome: nome,
        email: email,
        senha: senha
    },
    {
        where: {
            id: id
        }
    }).then(() => {
        res.json('usuário atualizado com sucesso!');
        console.log('usuário atualizado com sucesso!');
    }).catch((erro) => {
        console.log(`Ops, deu erro: ${erro}`);
    });
}


const selectUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (error) {
        console.log(`Erro ao buscar usuários: ${error}`);
        return null;
    }
}

const autenticaUser =async (req,res) => {
    const {email, senha} = req.body;
    try{
const isUserAutenticado = await User.findOne({
    where: {
        email: email,
        senha: senha
    }
})
const token =jwt.sign({id: email})
return res.json(isUserAutenticado)
    }catch(error){
        return res.json("user não encintrado ")
    }
}

module.exports = { createUser, selectUsers, autenticaUser, deleteUser, updateUser }