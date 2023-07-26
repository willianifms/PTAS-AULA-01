const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://urwcvwzi:i0J7zUZT4JAKp1UU7AJPzV_KEXxyeN--@silly.db.elephantsql.com/urwcvwzi",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    sequelize.authenticate();
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Anteção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};