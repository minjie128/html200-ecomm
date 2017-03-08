var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid-600w.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable-600w.jpg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights-600w.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity-600w.jpeg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid-600w.jpg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color-600w.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro-600w.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill-600w.jpg"
  }
]

// loop to print out name, description and price for each object to the console
// note that this is the syntax for looping through arrays; for...in loops are specifically for looping through objects
for (var i = 0; i < products.length; i++) {
  console.log("Name: " + products[i].name);
  console.log("Description: " + products[i].description);
  console.log("Price: $" + products[i].price);
}

//TODO: trigger on change of cart contents
function sumPrices(cartArray) {
  // for loop through array, sum value of price attribute for each object
  var total = 0;  
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].price) {
      total = total + cartArray[i].price;
    }
  }
  // TODO: print total as HTML to page, next to cart icon
  console.log(total);
}

// add or remove items from cart
var cart = [];

function addItem(productName) {
  var index = cart.indexOf(productName);
  if (index < 0) {
    cart.push(productName);
  }
  console.log("Items in your cart: ", cart);
}

function removeItem (productName) {
  var index = cart.indexOf(productName);
  if (index >= 0) {
    cart.splice(index, 1);
  }
  console.log("Items in your cart: ", cart);
}

function sortByPrice(a, b) {
  return a.price - b.price;  
}

function sortByName(a, b) {
  return a.name.toLowerCase() > b.name.toLowerCase();
}

function sortProducts() {
  var sortBy = document.filterBy.filter.value;
  console.log("The items are filtered by " + sortBy + ".");
  if (sortBy == "price") {
    console.log("Sorted with price: ", products.sort(sortByPrice));
  } else if (sortBy == "name") {
    console.log("Sorted with name: ", products.sort(sortByName));
  } else if (sortBy == "default") {
    console.log("Please select a filter criteria option.")
  }
  event.preventDefault();  
}












