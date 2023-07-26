const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("Informe a url do elephantSQL",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    //FALTA CÓDIGO AQUI
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Anteção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};