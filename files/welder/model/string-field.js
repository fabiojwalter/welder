$field: {
    type: DataTypes.STRING(${ 2: 60 }),
    allowNull: ${2|true,false|},
    validate: {
      notNull: {
        msg: messages.__('validation.field.cannotBeNull', '$field')
      }
    }
}