const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let fiscaliaSchema = new Schema({

/* _id :{
  type: String
}, */

  FiscaliaNombre: {
    type: String
  },
  FiscaliaDepartamento: {
    type: String
  },
  FiscaliaMunicipio: {
  type: String
  },
  FiscaliaDireccion: {
    type: String
  },
  FiscaliaTelefono: {
  type: String
  }
  },{
    collection: 'fiscalias'
  })

module.exports = mongoose.model('fiscalias', fiscaliaSchema)