import SimpleSchema from "simpl-schema";

SimpleSchema.extendOptions(["mockValue"]);


const Attributes = new SimpleSchema({
    attributeName: {
        type: String,
        min: 0,
        optional: true,
    },
    attributeValue: {
        type: String,
        min: 0,
        optional: true,
    },
});
