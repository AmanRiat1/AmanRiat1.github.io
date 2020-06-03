var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenfree: true,
		organic: true,
		vegetable: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenfree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenfree: true,
		organic: true,
		meat: true,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenfree: true,
		organic: true,
		meat: true,
		price: 13.00
	},
	{
		name: "apple",
		vegetarian: true,
		glutenfree: true,
		organic: true,
		fruit: true,
		price: 0.99
	},
	{
		name: "cucumber",
		vegetarian: true,
		glutenfree: true,
		organic: false,
		vegetable: true,
		price: 1.50
	},
	{
		name: "bagel",
		vegetarian: true,
		glutenfree: false,
		organic: false,
		price: 3.00
	},
	{
		name: "shrimp",
		vegetarian: false,
		glutenfree: true,
		organic: true,
		meat: true,
		price: 10.00
	},
	{
		name: "orange",
		vegetarian: true,
		glutenfree: true,
		organic: true,
		fruit:true,
		price: 2.50
	},
	{
		name: "muffin",
		vegetarian: true,
		glutenfree: false,
		organic: false,
		price: 1.50
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let filteredList = [];
	for (let i=0; i<prods.length; i+=1) {
		let indicator = true; 
		for (let x =0; x < restriction.length; x++){
			let key = restriction[x].toLowerCase(); 
			indicator = indicator && (prods[i][key] == true);

		}
		if (indicator){
			filteredList.push([prods[i].name, prods[i].price]);
		}

	}
	filteredList = filteredList.sort((product1,product2) => product2[1] - product1[1]);
	return filteredList;
}

function sortCategories(prods, category){
	if (category == null){
		return prods;
	}

	let newList = [];
	for (let i=0; i<prods.length; i+=1) {
		for (let x=0; x<products.length; x+=1){
			if (prods[i][0] == products[x]['name']){
				if (products[x][category] == true){
					newList.push([prods[i][0], prods[i][1]]);
				}
			}

		}

	}
	console.log(newList);
	return newList;



}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}