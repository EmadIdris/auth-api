'use strict';

// THIS IS THE STRETCH GOAL ...
// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema. That's not very DRY!
//================================================================== i hope it work
class DataCollection {
  constructor(model) {
    this.model = model;
  }
//================================================================== get / read
  get(id) {
    if (id) {
      return this.model.findOne({ id });
    }
    else {
      return this.model.findAll({});
    }
  }
//================================================================== post /  create
  create(record) {
    return this.model.create(record);
  }
//==================================================================put / update
  update(id, data) {
    return this.model.findOne({ where: { id } })
      .then(record => record.update(data));
  }
//==================================================================delete
  delete(id) {
    return this.model.destroy({ where: { id }});
  }
}
//================================================================== export
module.exports = DataCollection;