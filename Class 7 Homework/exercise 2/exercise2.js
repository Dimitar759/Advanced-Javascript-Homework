fetch("https://dummyjson.com/products")
.then(function (response) {
  return response.json();
})
.then(function (response) {
  console.log(laptopsDescendingByPrice(response.products))
  console.log(firstGroceryItem(response.products))
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

