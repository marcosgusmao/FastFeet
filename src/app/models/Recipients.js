import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        compl: Sequelize.STRING,
        state: Sequelize.STRING(2),
        city: Sequelize.STRING,
        zip: Sequelize.STRING,
      },

      {
        sequelize,
      }
    );

    return this;
  }
}

export default Recipients;
