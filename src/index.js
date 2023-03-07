import { createRequire } from "module";
import importAsString from "@reactioncommerce/api-utils/importAsString.js";
const mySchema = importAsString("./schema/schema.graphql");
// const pkg = createRequire("../package.json");
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

function myStartup(context) {
  context.simpleSchemas.Product.extend({
    Identification: {
      type: String,
      min: 0,
      optional: true,
    },
    EngineInformation: {
      type: String,
      min: 0,
      optional: true,
    },
    Dimensions: {
      type: String,
      min: 0,
      optional: true,
    },
    FuelInformation: {
      type: String,
      min: 0,
      optional: true,
    },
    EngineTechnology: {
      type: String,
      min: 0,
      optional: true,
    },
    FuelDeliverySystem: {
      type: String,
      min: 0,
      optional: true,
    },
    Images: {
      type: String,
      min: 0,
      optional: true,
    },
    SendGiff: {
      type: String,
      min: 0,
      optional: true,
    },
  });
  context.simpleSchemas.ProductVariant.extend({
    Identification: {
      type: String,
      min: 0,
      optional: true,
    },
    EngineInformation: {
      type: String,
      min: 0,
      optional: true,
    },
    Dimensions: {
      type: String,
      min: 0,
      optional: true,
    },
    FuelInformation: {
      type: String,
      min: 0,
      optional: true,
    },
    EngineTechnology: {
      type: String,
      min: 0,
      optional: true,
    },
    FuelDeliverySystem: {
      type: String,
      min: 0,
      optional: true,
    },
    Images: {
      type: String,
      min: 0,
      optional: true,
    },
    SendGiff: {
      type: String,
      min: 0,
      optional: true,
    },
  });
  context.simpleSchemas.CatalogProductVariant.extend({
    Identification: {
      type: String,
      min: 0,
      optional: true,
    },
    EngineInformation: {
      type: String,
      min: 0,
      optional: true,
    },
    Dimensions: {
      type: String,
      min: 0,
      optional: true,
    },

    FuelInformation: {
      type: String,
      min: 0,
      optional: true,
    },
    EngineTechnology: {
      type: String,
      min: 0,
      optional: true,
    },

    FuelDeliverySystem: {
      type: String,
      min: 0,
      optional: true,
    },
    Images: {
      type: String,
      min: 0,
      optional: true,
    },
    SendGiff: {
      type: String,
      min: 0,
      optional: true,
    },
  });
}

function myPublishProductToCatalog(
  catalogProduct,
  { context, product, shop, variants }
) {
  catalogProduct.variants &&
    catalogProduct.variants.map((catalogVariant) => {
      const productVariant = variants.find(
        (variant) => variant._id === catalogVariant.variantId
      );
      catalogVariant.EngineInformation = productVariant.EngineInformation || null;
      catalogVariant.Identification = productVariant.Identification || null;
      catalogVariant.Dimensions = productVariant.Dimensions || null;
      catalogVariant.FuelInformation = productVariant.FuelInformation || null;
      catalogVariant.Images = productVariant.Images || null;
      catalogVariant.EngineTechnology = productVariant.EngineTechnology || null;
      catalogVariant.FuelDeliverySystem = productVariant.FuelDeliverySystem || null;
      catalogVariant.SendGiff = productVariant.SendGiff || null;
    });
}
async function register(app) {
  await app.registerPlugin({
    label: pkg.label,
    name: pkg.name,
    version: pkg.version,
    functionsByType: {
      startup: [myStartup],
      publishProductToCatalog: [myPublishProductToCatalog],
    },
    graphQL: {
      schemas: [mySchema],
    },
  });
}
export default register;
