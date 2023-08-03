const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://egxirdwi:ZQ74xcXGxRTadHivx4-6bFB5jy6aNtjP@silly.db.elephantsql.com",{
  define:{
    timetamps:true,
    underscored:true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Atenção, a conexão falhou!:', error);
}

module.exports={Sequelize, sequelize };