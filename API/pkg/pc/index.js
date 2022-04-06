const mongoose = require("mongoose");

const Pc = mongoose.model(
    'pc',
    {
      brand: String,
      model:String,
      cpu_cores: Number,
      ram: Number,
      disk: String,
      price: Number,
      stores: {String},
      num_ports: [String]

    }
)