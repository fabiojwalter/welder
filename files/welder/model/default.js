import * as messages from 'i18n';

export default (sequelize, DataTypes) => {
  const ${model} = sequelize.define(
    '${model}',
    {
      ${field}: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: messages.__('validation.field.cannotBeNull', '${field}')
          }
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      tableName: '${model}s',
      underscored: true,
      schema: process.env.DATABASE_SCHEMA || 'public'
    }
  );


  return ${model};
};
