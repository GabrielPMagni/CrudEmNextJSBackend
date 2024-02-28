import { Sequelize } from 'sequelize';

export const database = new Sequelize('database', 'root', 'root', {
  dialect: 'mysql',
});

database
  .authenticate()
  .then(function () {
    console.log('Sucesso com Database');
  })
  .catch(function () {
    console.error('Erro ao conectar com Database');
  });
