"use strict";
module.exports = (mongoose, mongoosePaginate) => {
    var schema = mongoose.Schema({
        meal: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Meal",
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Category",
        },
    });
    schema.plugin(mongoosePaginate);
    const MenuItem = mongoose.model("MenuItem", schema);
    return MenuItem;
};
