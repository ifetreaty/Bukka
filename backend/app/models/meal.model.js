module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: false },
      image: { type: String, required: true },
      price: { type: String, required: true },
      menuitem: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }],
    },
    { timestamps: true },
  );
  schema.plugin(mongoosePaginate);
  const Meal = mongoose.model("Meal", schema);
  return Meal;
};
