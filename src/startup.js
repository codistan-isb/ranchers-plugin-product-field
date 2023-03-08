export default function myStartup(context) {
  context.simpleSchemas.CreateProductInput.extend({
    Chassis: {
      type: String,
      min: 0,
      optional: true,
    },
    Colour: {
      type: String,
      min: 0,
      optional: true,
    },
    Sunroof: {
      type: String,
      min: 0,
      optional: true,
    },
  });

  context.simpleSchemas.ProductVariant.extend({
    Chassis: {
      type: String,
      min: 0,
      optional: true,
    },
    Colour: {
      type: String,
      min: 0,
      optional: true,
    },
    Sunroof: {
      type: String,
      min: 0,
      optional: true,
    },
  });

  context.simpleSchemas.CatalogProductVariant.extend({
    Sunroof: {
      type: String,
      min: 0,
      optional: true,
    },
    Colour: {
      type: String,
      min: 0,
      optional: true,
    },
    Chassis: {
      type: String,
      min: 0,
      optional: true,
    },
  });
}
