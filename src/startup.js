export default function myStartup(context) {
  context.simpleSchemas.Product.extend({
    sku: {
      type: String,
      optional: true,
    },
    isFeatured: {
      type: String,
      optional: true,
    },
    Category: {
      type: String,
      optional: true,
    },
    Attributes: {
      type: Array,
      optional: true,
    },
    "Attributes.$": {
      type: Attributes,
    },
  });
  context.simpleSchemas.ProductVariant.extend({
    sku: {
      type: String,
      optional: true,
    },
    isFeatured: {
      type: String,
      optional: true,
    },
    Category: {
      type: String,
      optional: true,
    },
    Attributes: {
      type: Array,
      optional: true,
    },
    "Attributes.$": {
      type: Attributes,
    },
  });
  context.simpleSchemas.CatalogProductVariant.extend({
    sku: {
      type: String,
      optional: true,
    },
    isFeatured: {
      type: String,
      optional: true,
    },
    Category: {
      type: String,
      optional: true,
    },
    Attributes: {
      type: Array,
      optional: true,
    },
    "Attributes.$": {
      type: Attributes,
    },
  });
}
