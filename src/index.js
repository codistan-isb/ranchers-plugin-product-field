import { createRequire } from "module";
import importAsString from "@reactioncommerce/api-utils/importAsString.js";
const mySchema = importAsString("./schema/schema.graphql");
// const pkg = createRequire("../package.json");
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
import SimpleSchema from "simpl-schema";

const AttributesProduct = new SimpleSchema({
    key: {
        type: String,
        optional: true,
    },
    name: {
        type: String,
        optional: true,
    },
    value: {
        type: String,
        optional: true,
    }
});


const Attributes = new SimpleSchema({
    attributeName1: {
        type: String,
        optional: true,
    },
    attributeValue1: {
        type: String,
        optional: true,
    },
    attributeName2: {
        type: String,
        optional: true,
    },
    attributeValue2: {
        type: String,
        optional: true,
    },
    attributeName3: {
        type: String,
        optional: true,
    },
    attributeValue3: {
        type: String,
        optional: true,
    },
    attributeName4: {
        type: String,
        optional: true,
    },
    attributeValue4: {
        type: String,
        optional: true,
    },
});

const Images = new SimpleSchema({
    imageLink: {
        type: String,
        optional: true,
    },
});

function myStartup(context) {
    context.simpleSchemas.Product.extend({
        isDeal: {
            type: Boolean,
            optional: true,
        },
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
            type: AttributesProduct,
        },
        Images: {
            type: Array,
            optional: true,
        },
        "Images.$": {
            type: Images,
        },
        oldId: {
            type: Number,
            optional: true,
        },
        regularPrice: {
            type: Number,
            optional: true,
        },
        Parent: {
            type: String,
            optional: true,
        },
    });
    context.simpleSchemas.ProductVariant.extend({
        isDeal: {
            type: Boolean,
            optional: true,
        },
        Images: {
            type: Array,
            optional: true,
        },
        "Images.$": {
            type: Images,
        },
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
            type: AttributesProduct,
        },
        oldId: {
            type: Number,
            optional: true,
        },
        regularPrice: {
            type: Number,
            optional: true,
        },
        Parent: {
            type: String,
            optional: true,
        },
    });
    context.simpleSchemas.CatalogProduct.extend({
        isDeal: {
            type: Boolean,
            optional: true,
        },
        Attributes: {
            type: Array,
            optional: true,
        },
        "Attributes.$": {
            type: AttributesProduct,
        }

    });
    context.simpleSchemas.CatalogProductVariant.extend({
        isDeal: {
            type: Boolean,
            optional: true,
        },
        Images: {
            type: Array,
            optional: true,
        },
        "Images.$": {
            type: Images,
        },
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
            type: AttributesProduct,
        },
        oldId: {
            type: Number,
            optional: true,
        },
        regularPrice: {
            type: Number,
            optional: true,
        },
        Parent: {
            type: String,
            optional: true,
        },
    });
}

function myPublishProductToCatalog(
    catalogProduct,
    { context, product, shop, variants }
) {
    // console.log("product", catalogProduct)
    if (product.Attributes) {
        catalogProduct.Attributes = product.Attributes;

    }
    if (product.isDeal) {
        catalogProduct.isDeal = product.isDeal;

    }

    catalogProduct.variants &&
        catalogProduct.variants.map((catalogVariant) => {
            const productVariant = variants.find(
                (variant) => variant._id === catalogVariant.variantId
            );
            catalogVariant.sku = productVariant.sku || null;
            catalogVariant.isFeatured = productVariant.isFeatured || null;
            catalogVariant.Category = productVariant.Category || null;
            catalogVariant.Attributes = productVariant.Attributes || null;
            catalogVariant.oldId = productVariant.oldId || null;
            catalogVariant.Parent = productVariant.Parent || null;
            catalogVariant.regularPrice = productVariant.regularPrice || null;
            catalogVariant.isDeal = productVariant.isDeal || null;
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