export default (sequelize, DataTypes) => {
  const Issue = sequelize.define(
    'Issue',
    {
      content: {
        type: DataTypes.STRING(800),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Content não pode ser nulo'
          }
        }
      },
      issueStatus: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'IsssueStatus não pode ser nulo'
          },
          isIn: {
            args: [['OPEN', 'IN PROGRESS', 'WAITING', 'DONE']],
            msg: 'Opção invalida! Validos = OPEN, IN PROGRESS, WAITING, DONE'
          }
        }
      },
      closedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'A data de fechamento não pode ser nula'
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
      tableName: 'issues',
      underscored: true,
      schema: process.env.DATABASE_SCHEMA || 'public'
    }
  );

  Issue.associate = (models) => {
    Issue.belongsTo(models.Project);
  };

  return Issue;
};
