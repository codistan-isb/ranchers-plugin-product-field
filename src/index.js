import { createRequire } from "module";
import importAsString from "@reactioncommerce/api-utils/importAsString.js";
const mySchema = importAsString("./schema/schema.graphql");
// const pkg = createRequire("../package.json");
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
import SimpleSchema from "simpl-schema";


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

function myStartup(context) {
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

function myPublishProductToCatalog(
    catalogProduct,
    { context, product, shop, variants }
) {
    catalogProduct.variants &&
        catalogProduct.variants.map((catalogVariant) => {
            const productVariant = variants.find(
                (variant) => variant._id === catalogVariant.variantId
            );
            catalogVariant.sku = productVariant.sku || null;
            catalogVariant.isFeatured = productVariant.isFeatured || null;
            catalogVariant.Category = productVariant.Category || null;
            catalogVariant.FuelInformation = productVariant.FuelInformation || null;
            catalogVariant.Attributes = productVariant.Attributes || null;
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