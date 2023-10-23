export default async function generateVariants(attributes) {
  const attributeCombinations = [];

  for (const attribute of attributes) {
    const values = attribute.value.split(",").map((value) => value.trim());
    attributeCombinations.push(values);
  }

  const cartesian = (a, b) =>
    [].concat(...a.map((a) => b.map((b) => [].concat(a, b))));

  const combinedAttributes = attributeCombinations.reduce(cartesian);
  // console.log("variantCombinations", combinedAttributes);

  const variants = combinedAttributes.map((variant, index) => {
    const variantAttributes = attributes.reduce((acc, attribute, i) => {
      acc[`key ${i + 1}`] = attribute.key;
      acc[`name ${i + 1}`] = attribute.name;
      acc[`value ${i + 1}`] = variant[i];
      return acc;
    }, {});

    return variantAttributes;
  });

  // console.log("variantAttributes", variants);
  return variants;
}

// export default async function generateVariants(attributes) {
//   const attributeCombinations = [];

//   for (const attribute of attributes) {
//     const values = attribute.value.split(",").map((value) => value.trim());
//     attributeCombinations.push(values);
//   }

//   const cartesian = (a, b) =>
//     [].concat(...a.map((a) => b.map((b) => [].concat(a, b))));

//   const combinedAttributes = attributeCombinations.reduce(cartesian);

//   const variants = combinedAttributes.map((variant, index) => {
//     const variantAttributes = attributes.reduce((acc, attribute, i) => {
//       acc[`key ${i + 1}`] = attribute.key;
//       acc[`name ${i + 1}`] = attribute.name;
//       acc[`value ${i + 1}`] = variant[i];
//       return acc;
//     }, {});

//     // Ensure that the names are unique by appending the index
//     variantAttributes[`name 1`] = `${variantAttributes["name 1"]} ${index}`;
//     variantAttributes[`name 2`] = `${variantAttributes["name 2"]} ${index}`;
//     console.log("variantAttributes", variantAttributes);
//     return variantAttributes;
//   });

//   return variants;
// }
