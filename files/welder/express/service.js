import ValidationError from '../../../common/exceptions/ValidationError';
import model from '../../../models';
import paginate from '../../../common/paginate';
import projection from '../../../common/projection';
import { Op } from 'sequelize';
import ApplicationError from '../../../common/exceptions/ApplicationError';
import * as yup from 'yup';
import * as messages from 'i18n';

const { $model } = model;

class TechnologyService {
  async all({ title = null, active = true, page = 0, pageSize = 10, select = null }) {
    const pagination = paginate(page, pageSize);
    const attributes = projection(select);
    const conditions = [];
    const where = { active };

    if (title != null && title !== '') {
      conditions.push({ title: { [Op.iLike]: `%${title}%` } });
    }

    if (conditions.length > 0) {
      where[Op.or] = conditions;
    }

    const count = await $model.count({ where });
    const items = await $model.findAll({
      order: [['service_master_type', 'ASC'], ['title', 'ASC']],
      attributes,
      where,
      ...pagination
    });

    return { items, page, pageSize, count };
  }

  create(technology) {
    return $model.create(technology);
  }

  byId(id) {
    return $model.findOne({ where: { id } });
  }

  updateById(id, technology) {
    return $model.update(technology, { where: { id } });
  }

  async deleteById(id) {
    try {
      const technology = await $model.destroy({ where: { id } });

      return technology;
    } catch (error) {
      if (error.name == 'SequelizeForeignKeyConstraintError') {
        throw new ValidationError(messages.__('validation.field.delete'), '*');
      }

      throw error;
    }
  }
}

export default new TechnologyService();
