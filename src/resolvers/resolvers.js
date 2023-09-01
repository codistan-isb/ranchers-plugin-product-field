import deals from "../utils/deals.json";
import { decodeShopOpaqueId, decodeProductOpaqueId } from "../xforms/id.js";
export default {
  Mutation: {
    async createProductVariantScript(parent, { input }, context, info) {
      try {
        let input;
        deals.forEach(async (element) => {
          // console.log("element", element.Flavors_1.includes("Ranch Special"));
          // console.log("element", element.price);

          input = {
            shopId: "cmVhY3Rpb24vc2hvcDo0TjNzNlNCQ0VUNWpuNlJHZg==",
            productId: "cmVhY3Rpb24vcHJvZHVjdDpXY0V3QXJNRnBSTUJ3YjJnag==",
            variant: {
              isDeleted: false,
              isVisible: true,
              attributeLabel:
                element.Flavors_1 +
                ", " +
                element.Flavors_2 +
                ", " +
                element.Drink,
              optionTitle:
                element.Flavors_1 +
                ", " +
                element.Flavors_2 +
                ", " +
                element.Drink,
              sku: "nan",
              title:
                element.Flavors_1 +
                ", " +
                element.Flavors_2 +
                ", " +
                element.Drink,
              price: element.price,
              isFeatured: "0",
              Attributes: [
                { key: "Flavor 1", name: "Flavor 1", value: element.Flavors_1 },
                { key: "Flavor 2", name: "Flavor 2", value: element.Flavors_2 },
                { key: "Drink", name: "Drink", value: element.Drink },
              ],
              Parent: "cmVhY3Rpb24vcHJvZHVjdDpXY0V3QXJNRnBSTUJ3YjJnag==",
              isTaxable: true,
            },
          };
          //   console.log("input ", input);

          const variantResp = await context.mutations.createProductVariant(
            context,
            {
              productId: decodeProductOpaqueId(input.productId),
              shopId: decodeShopOpaqueId(input.shopId),
              variant: input.variant,
            }
          );
          console.log("variantResp ", variantResp);
          if (variantResp) {
            return true;
          } else {
            return false;
          }
        });
      } catch (error) {
        console.log("error ", error);
      }
    },
  },
};
