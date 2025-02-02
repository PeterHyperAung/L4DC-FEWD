const COFFEE_PRODUCTS = [
  {
    id: 1,
    name: "Gayo Java Blend",
    price: 15.0,
    priceSuffix: "USD per gram",
    img: "coffee-bean-1.jpg",
    description:
      "This thoughtful combination of Gayo beans from Aceh and Java beans from West Java balances earthy depth with a smooth, nutty character.",
    tastingNotes: [
      "Deep chocolate tones with a rich earthy base",
      "Sweet hints of spices and toasted nuts",
      "Medium acidity and a full-bodied finish",
    ],
    device: "Chemex",
    component: ["Medium-coarse grounds and water at 94°C"],
    step: [
      "Measure 30 grams of coffee for every 510 ml of water (1:17 ratio).",
      "Pour 60 ml of water over the grounds and let them bloom for 45 seconds.",
      "Gradually pour the remaining water in slow circular motions.",
      "Aim for a total brew time of 4 to 5 minutes.",
      "Serve and enjoy a clean, smooth cup.",
    ],
  },
  {
    id: 2,
    name: "Cordillera Sunrise",
    price: 20.0,
    priceSuffix: "USD per gram",
    img: "coffee-bean-2.jpg",
    description:
      "This lively blend captures the spirit of the Philippine highlands, featuring Benguet and Sagada Arabica beans for a vibrant and balanced experience.",
    tastingNotes: [
      "Bright citrus and tropical fruit flavors",
      "Sweet caramel with a touch of toasted almonds",
      "Balanced acidity with a medium body",
    ],
    device: "AeroPress",
    component: ["Medium-fine grind, water at 92°C"],
    step: [
      "Add 17 grams of coffee to the AeroPress and pour in 250 ml of hot water.",
      "Stir gently and let steep for 45 seconds.",
      "Slowly plunge over 30 seconds.",
      "Enjoy a clean, crisp cup with a lively character.",
    ],
  },
  {
    id: 3,
    name: "Mekong Midnight",
    price: 30.0,
    priceSuffix: "USD per gram",
    img: "coffee-bean-3.jpg",
    description:
      "A bold and complex blend featuring Vietnam's robusta, Laos' arabica, and Cambodia's liberica beans, offering a powerful cup with intriguing regional nuances.",
    tastingNotes: [
      "Dark chocolate with smoky undertones",
      "Notes of red fruits and warming spices",
      "Heavy body and low acidity",
    ],
    device: "Moka Pot",
    component: ["Finely ground coffee and hot water"],
    step: [
      "Fill the bottom chamber with water, just below the safety valve.",
      "Add finely ground coffee to the filter basket and level the surface.",
      "Assemble the Moka Pot and place it on medium heat.",
      "Remove from heat when you hear a distinct hissing sound.",
      "Serve as a strong espresso-like shot or dilute with hot water for a rich Americano-style brew.",
    ],
  },
  {
    id: 4,
    name: "Gayo Coffee",
    price: 15.0,
    priceSuffix: "USD",
    img: "coffee-1.jpg",
    description:
      "Grown in the lush highlands of Aceh, this premium Arabica variety is cultivated by smallholder farmers. It stands out as one of Indonesia’s most cherished coffee treasures.",
    tastingNotes: [
      "Earthy flavors with hints of herbal undertones",
      "Medium body and low acidity",
      "A pleasant touch of chocolate and caramel",
    ],
    device: "French Press (350 ml capacity)",
    component: [
      "21 grams of medium-coarse ground coffee, 350 ml of water heated to 92-96°C",
    ],
    step: [
      "Preheat your French press with hot water, then discard it.",
      "Add the coffee grounds to the carafe.",
      "Pour hot water evenly over the grounds.",
      "Gently stir for about 10 seconds.",
      "Place the lid with the plunger on top, but wait to press down.",
      "Allow the coffee to brew for 4 minutes.",
      "Slowly press the plunger down.",
      "Serve immediately to appreciate its earthy depth.",
    ],
  },
  {
    id: 5,
    name: "Benguet Coffee",
    price: 20.0,
    priceSuffix: "USD",
    img: "coffee-2.jpg",
    description:
      "Cultivated in the cool, fertile highlands of Benguet, this Arabica coffee thrives in volcanic soil, capturing the vibrant essence of the Cordillera region.",
    tastingNotes: [
      "Bright acidity with floral and fruity hints",
      "Notes of citrus and berries",
      "Medium body with a clean, refreshing finish",
    ],
    device: "Hario V60 Dripper",
    component: [
      "18 grams of medium-ground coffee, 300 ml of water at 92-94°C, filter paper",
    ],
    step: [
      "Rinse the filter paper with hot water, then discard the water.",
      "Add the coffee grounds to the filter.",
      "Start a timer and bloom the grounds by pouring 50 ml of hot water. Wait 30 seconds.",
      "Continue pouring in slow circular motions until you reach 300 ml.",
      "Let the coffee fully drip through (about 2.5 to 3 minutes).",
      "Enjoy a cup bursting with vibrant floral and fruity flavors.",
    ],
  },
  {
    id: 6,
    name: "Da Lat Coffee",
    price: 30.0,
    priceSuffix: "USD",
    img: "coffee-3.jpg",
    description: `Sourced from Da Lat, the "City of Eternal Spring," this Arabica offers a delightful balance of smooth, sweet, and spicy notes.`,
    tastingNotes: [
      "Mild, sweet acidity with a hint of chocolate",
      "Subtle spices and nutty undertones",
      "Smooth, well-rounded profile",
    ],
    device: "Vietnamese Phin Filter",
    component: [
      "20 grams of medium-fine ground coffee, 160 ml of water just off the boil, sweetened condensed milk ",
    ],
    step: [
      "Preheat the Phin filter with hot water and discard the water.",
      "Add the coffee grounds and tamp lightly.",
      "Place the filter over a cup and pour 40 ml of hot water to bloom the grounds for 30 seconds.",
      "Slowly pour the remaining 120 ml of hot water.",
      "Let the coffee drip for 4 to 5 minutes.",
      "Stir and enjoy black, or mix in 1-2 tablespoons of condensed milk for a rich Vietnamese-style treat.",
    ],
  },
];

const BREW_PRODUCTS = [
  {
    id: 7,
    name: "Coffee Maker (Small)",
    price: 1000,
    priceSuffix: "USD",
    img: "brew-1.jpg",
    description: `Perfect for brewing just the right amount for 1 to 3 cups, these compact machines fit neatly into small kitchens or office spaces. Many come with programmable settings and auto shut-off for added convenience.`,
    usageTips: [
      "Use freshly ground coffee for the best flavor.",
      "Measure 1 to 2 tablespoons of coffee per 6 oz cup.",
      "Clean the filter and water reservoir regularly to avoid build-up.",
      "Preheat your mug to keep your coffee hotter for longer.",
    ],
  },
  {
    id: 8,
    name: "Coffee Maker (Large)",
    price: 1500,
    priceSuffix: "USD",
    img: "brew-2.jpg",
    description: `Ideal for families or gatherings, large coffee makers brew between 8 and 12 cups in one go. They often feature brew timers, strength settings, and thermal carafes to maintain heat.`,
    usageTips: [
      "Use coarser coffee grounds to avoid filter clogging.",
      "Filtered water enhances the coffee’s flavor.",
      "Keep the warming plate clean to prevent burnt flavors.",
      "Descale every 2 to 3 months for peak performance.",
    ],
  },
  {
    id: 9,
    name: "Expresso Maker",
    price: 1500,
    priceSuffix: "USD",
    img: "brew-3.jpg",
    description: `Designed for those who love bold, strong shots, espresso makers deliver café-quality espresso with high-pressure brewing systems. Many models have steam wands for frothing milk, perfect for lattes and cappuccinos.`,
    usageTips: [
      "Use finely ground coffee for a rich, intense shot.",
      "Tamp the grounds evenly without pressing too hard.",
      "Brew for 25 to 30 seconds for the best shot.",
      "Always clean the steam wand to prevent milk residue.",
    ],
  },
  {
    id: 10,
    name: "French Press",
    price: 1000,
    priceSuffix: "USD",
    img: "brew-1.jpg",
    description: `A traditional method for brewing coffee, the French press delivers a bold, full-bodied cup by steeping coarse coffee grounds in hot water before pressing them with a mesh plunger.`,
    usageTips: [
      "Use coarse ground coffee to avoid sediment in your cup.",
      "Steep the coffee for 4 minutes for balanced flavor.",
      "Stir gently after adding hot water for even extraction.",
      "Rinse the filter thoroughly after each use.",
    ],
  },
  {
    id: 11,
    name: "Chemex",
    price: 1000,
    priceSuffix: "USD",
    img: "brew-1.jpg",
    description: `Known for its sleek design, the Chemex brews clean, bright coffee using special paper filters that remove oils and sediment.`,
    usageTips: [
      "Use medium-coarse grounds for a well-balanced cup.",
      "Wet the filter first to remove any papery taste.",
      "Pour water slowly in circular motions for even extraction.",
      "Rinse and dry carefully to maintain its glass structure.",
    ],
  },
  {
    id: 12,
    name: "Vietnamese Phin Filter",
    price: 1000,
    priceSuffix: "USD",
    img: "brew-1.jpg",
    description: `This compact metal filter delivers robust, flavorful Vietnamese-style coffee. It sits directly on the cup, slowly dripping hot water through the grounds for a smooth, rich brew.`,
    usageTips: [
      "Use medium-coarse coffee grounds for the best flavor.",
      "Add condensed milk for authentic Vietnamese iced coffee (cà phê sữa đá).",
      "Allow the water to drip slowly for about 5 minutes.",
      "Clean the filter thoroughly to prevent blockages.",
    ],
  },
];

const BOTH_PRODUCTS = [...COFFEE_PRODUCTS, ...BREW_PRODUCTS];

function addToCart(id) {
  const cart = localStorage.getItem("__cart__");
  const cartItems = cart ? JSON.parse(cart) : {};
  cartItems[id] = cartItems[id] ? cartItems[id] + 1 : 1;
  localStorage.setItem("__cart__", JSON.stringify(cartItems));
  const toastEl = document.getElementById("toast");
  toastEl.classList.add("active");
  setTimeout(() => {
    toastEl.classList.remove("active");
  }, 1500);
}
