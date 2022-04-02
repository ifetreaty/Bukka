module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema({
    meal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  });
  schema.plugin(mongoosePaginate);
  const MenuItem = mongoose.model("menuItem", schema);
  return MenuItem;
};
