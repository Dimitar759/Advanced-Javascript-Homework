fetch("https://dummyjson.com/products")
.then(function (response) {
  return response.json();
})
  .then(function (response) {
  console.log(response)
  console.log(laptopsDescendingByPrice(response.products));
  console.log(firstGroceryItem(response.products));
  console.log(firstSamsungSmartPhone(response.products));
  console.log(itemFromSonyBrand(response.products));
  console.log(nameOfHighestRatedSkinCareProduct(response.products));
  console.log(avgDiscountForProductsAboveFourPointFiveRating(response.products));
  console.log(productWithHighestPrice(response.products));
  console.log(avgPriceOfAllIPhones(response.products));
  console.log(lowestPriceProduct(response.products));
})
.catch(function (response) {
  console.log("failed request " + response.status);
});

const laptopsDescendingByPrice = response => {
  let laptops = response.filter(gadget => gadget.category === "laptops");
  laptops.sort((a, b) => b.price - a.price);

  return laptops;
}

const firstGroceryItem = response => {
  let firstItemIndex = response.findIndex(product => product.category === "groceries");
  return firstItemIndex;
}

const firstSamsungSmartPhone = response => {
  let firstSamsungPhone = response.findIndex(product => product.brand === "Samsung" && product.category === "smartphones");
  return firstSamsungPhone;
}

const itemFromSonyBrand = response => {
  let sonyItem = response.find(product => product.brand === "Sony"); 
  if (sonyItem !== undefined) {
    return sonyItem;
  } else {
    return "There are no products from the brand Sony";
  }
}

const nameOfHighestRatedSkinCareProduct = response => {
  let skincareProducts = response.filter(product => product.category === "skincare"); 
   let highestRatedSkinCareProduct = skincareProducts.sort((a, b) => b.rating - a.rating)[0];
  return highestRatedSkinCareProduct;
}

const avgDiscountForProductsAboveFourPointFiveRating = response => {
  let productsOverFourPointFive = response.filter(product => product.rating > 4.5); 
   if (productsOverFourPointFive.length > 0) {
    let avgDiscountPercent = productsOverFourPointFive.reduce((accumulator, current) => accumulator + current.discountPercentage, 0) / productsOverFourPointFive.length;
    
    return Math.round(avgDiscountPercent);
  } else {

    return "No products with a rating above 4.5 found";
  }

}

const productWithHighestPrice = response => {
  let products = response.filter(product => product.price !== undefined && product.price !== null); 
   let highestPriceProduct = products.sort((a, b) => b.price - a.price)[0];

  return highestPriceProduct;
}


const avgPriceOfAllIPhones  = response => {
  let iphones = response.filter(product => product.brand === "Apple" && product.title.includes("iPhone")); 
   let avgPrice = iphones.reduce((accumulator, current) => accumulator + current.price, 0) / iphones.length;

  return avgPrice;
}



const lowestPriceProduct  = response => {
   let products = response.filter(product => product.price !== undefined && product.price !== null);
   let lowestPrice = products.sort((a, b) => a.price - b.price)[0];
  return lowestPrice;
}


