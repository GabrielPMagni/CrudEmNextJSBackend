import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { database } from '../config';

export class Person extends Model<
  InferAttributes<Person>,
  InferCreationAttributes<Person>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare surname: string;
  declare email: string;
  declare password: string;
  declare phone: string;
  declare birthdate: CreationOptional<Date>;
  declare maritalStatus: string;
  declare birthplace: CreationOptional<string>;
  declare cpf: string;
  declare rg: CreationOptional<string>;
  declare occupation: CreationOptional<string>;
  declare spouseName: CreationOptional<string>;
  declare spouseCpf: CreationOptional<string>;
  declare address: string;
  declare neighborhood: string;
  declare city: string;
  declare zipCode: string;
  declare observation: CreationOptional<string>;
  declare purchaseDate: CreationOptional<Date>;
}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    maritalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthplace: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spouseName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spouseCpf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'person',
    modelName: 'Person',
    timestamps: false,
    sequelize: database,
  },
);

(async () => {
  await database.sync({ alter: true });
})();
