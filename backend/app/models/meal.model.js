const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
  var schema = mongoose.Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: false },
      image: { type: String, required: true },
      price: { type: String, required: true },
      menuitem: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }],
    },
    { timestamps: true }
  );
  // schema.pre('remove', function(next){
  //   console.log(this.db);
  //   this.db.model("MenuItem").deleteMany({ menu: this._id }).exec();
  //   next();
  // })
  schema.plugin(mongoosePaginate);
  const Meal = mongoose.model("Meal", schema);
  module.exports = Meal;