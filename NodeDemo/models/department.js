var SchemaDepartment = require('../schema/Department')


module.exports = {
    getall: function (query) {       
        return SchemaDepartment.find();
    },
    getByID: function (id) {
        return SchemaDepartment.findById(id);
    },
    createDepartment: function (Department) {
        return new SchemaDepartment(Department).save();
    },
    updateDepartment: function (id, updatedData) {
        return SchemaDepartment.findByIdAndUpdate(id, updatedData, { new: true });
    },
    deleteDepartment: function (id) {
        return SchemaDepartment.findByIdAndRemove(id);
    },
}