module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: false },
      image: { type: String, required: true },
      price: { type: String, required: true },
    },
    { timestamps: true }
  );
  schema.plugin(mongoosePaginate);
  const Meal = mongoose.model("meal", schema);
  return Meal;
};
