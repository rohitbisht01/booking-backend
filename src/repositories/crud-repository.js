const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo : create");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo : delete");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo : get");
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo : getAll");
      throw error;
    }
  }

  async udpate(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo : udpate");
      throw error;
    }
  }
}

module.exports = CrudRepository;
