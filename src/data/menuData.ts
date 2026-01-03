export interface MenuItem {
  name: string;
  price: number;
  isVeg: boolean;
  description?: string;
  isSpecial?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Soups",
    items: [
      { name: "Miriyala Rasam", price: 199, isVeg: true },
      { name: "Veg Lemon Coriander Soup", price: 209, isVeg: true },
      { name: "Chicken Lemon Coriander Soup", price: 229, isVeg: false },
      { name: "Veg Sweet Corn Soup", price: 209, isVeg: true },
      { name: "Chicken Sweet Corn Soup", price: 229, isVeg: false },
      { name: "Veg Manchow Soup", price: 209, isVeg: true },
      { name: "Chicken Manchow Soup", price: 229, isVeg: false },
      { name: "Miriyala Kodi Charu", price: 239, isVeg: false, description: "Chicken Preparation" },
      { name: "Mutton Marag", price: 299, isVeg: false, isSpecial: true },
      { name: "Paya Shorba", price: 299, isVeg: false },
    ],
  },
  {
    name: "Veg Starters",
    items: [
      { name: "Coriander Mushroom", price: 449, isVeg: true },
      { name: "Mokka Jonna Garelu", price: 389, isVeg: true },
      { name: "Karivepaku Mushroom", price: 419, isVeg: true },
      { name: "Miriyala Paneer Vepudu", price: 449, isVeg: true },
      { name: "Mushroom Roast", price: 419, isVeg: true },
      { name: "Crispy Corn Masala", price: 389, isVeg: true },
      { name: "Chilli Paneer", price: 449, isVeg: true },
      { name: "Paneer 65", price: 449, isVeg: true },
      { name: "Ulli Rings", price: 329, isVeg: true },
      { name: "Golden Fried Baby Corn", price: 389, isVeg: true },
      { name: "Veg Manchurian", price: 389, isVeg: true },
      { name: "Bangaladumpa Fries", price: 269, isVeg: true, description: "Salt & Peri Peri" },
    ],
  },
  {
    name: "Egg Starters",
    items: [
      { name: "Miriyala Egg Roast", price: 349, isVeg: false },
      { name: "Chilli Egg", price: 389, isVeg: false },
      { name: "Egg 65", price: 389, isVeg: false },
    ],
  },
  {
    name: "Chicken Starters",
    items: [
      { name: "Dragon Chicken", price: 499, isVeg: false },
      { name: "Konaseema Kodi Vepudu With Bone", price: 499, isVeg: false, isSpecial: true },
      { name: "Kadapa Kodi Wings", price: 499, isVeg: false },
      { name: "Chilli Chicken", price: 499, isVeg: false },
      { name: "Bandi Style Chicken 65", price: 499, isVeg: false, isSpecial: true },
      { name: "Kodi Karam Chips", price: 519, isVeg: false },
      { name: "Chicken Drumstick", price: 489, isVeg: false },
      { name: "Kalchina Natukodi Roast", price: 529, isVeg: false },
      { name: "Chicken Lollipops", price: 489, isVeg: false },
      { name: "Chicken Kheema Mirchi Bhajji", price: 469, isVeg: false },
      { name: "Lemon Coriander Chicken", price: 529, isVeg: false },
      { name: "Kaju Kodi Pakodi", price: 509, isVeg: false },
    ],
  },
  {
    name: "Seafood",
    items: [
      { name: "Gongura Royyalu", price: 599, isVeg: false, isSpecial: true },
      { name: "Apollo Fish", price: 589, isVeg: false, isSpecial: true },
      { name: "Chilli Prawns", price: 629, isVeg: false },
      { name: "Loose Prawns", price: 629, isVeg: false },
      { name: "Palakollu Royyalu Pakoda", price: 629, isVeg: false },
      { name: "Bhimavaram Royyalu Vepudu", price: 629, isVeg: false },
      { name: "Rajahmundry Royyala Kura", price: 599, isVeg: false },
      { name: "Gongura Royyalu Pulao", price: 599, isVeg: false },
    ],
  },
  {
    name: "Mutton Special",
    items: [
      { name: "Golichina Mamsam Boneless", price: 629, isVeg: false, isSpecial: true },
    ],
  },
  {
    name: "Live Charcoal Grill",
    items: [
      { name: "Hara Bhara Kebab", price: 379, isVeg: true },
      { name: "Paneer Tikka", price: 469, isVeg: true },
      { name: "Bharwani Paneer Tikka", price: 499, isVeg: true },
      { name: "Clay Pot Cheese Broccoli", price: 489, isVeg: true },
      { name: "Batti Ka Murgh", price: 529, isVeg: false },
      { name: "Village Style Wings", price: 519, isVeg: false },
      { name: "Tandoori Chicken", price: 449, isVeg: false },
      { name: "Spicy Fish Tikka", price: 569, isVeg: false },
      { name: "Murgh Chilli Kebab", price: 529, isVeg: false },
      { name: "Murgh Malai Kebab", price: 549, isVeg: false },
      { name: "Village Style Prawns Kebab", price: 629, isVeg: false },
    ],
  },
  {
    name: "Veg Curries",
    items: [
      { name: "Gutti Vankaya Kura", price: 389, isVeg: true, isSpecial: true },
      { name: "Mushroom Hara Pyaza", price: 399, isVeg: true },
      { name: "Veg Diwani Handi", price: 389, isVeg: true },
      { name: "Paneer Butter Masala", price: 469, isVeg: true },
      { name: "Kadai Paneer", price: 469, isVeg: true },
      { name: "Kaju Paneer Masala", price: 499, isVeg: true },
      { name: "Tomato Pappu", price: 359, isVeg: true },
    ],
  },
  {
    name: "Egg Curries",
    items: [
      { name: "Anda Bhurji", price: 349, isVeg: false },
      { name: "Anda Masala", price: 389, isVeg: false },
    ],
  },
  {
    name: "Chicken Curries",
    items: [
      { name: "Kodi Iguru", price: 499, isVeg: false },
      { name: "Gongura Kodi Kura", price: 499, isVeg: false, isSpecial: true },
      { name: "Andhra Kodi Kura", price: 499, isVeg: false },
      { name: "Ankapur Natukodi Kodi Kura", price: 569, isVeg: false },
      { name: "Butter Chicken Masala", price: 549, isVeg: false },
    ],
  },
  {
    name: "Mutton Curries",
    items: [
      { name: "Armoor Mamsam Kura", price: 599, isVeg: false, isSpecial: true },
      { name: "Gongura Mamasam", price: 599, isVeg: false },
    ],
  },
  {
    name: "Am Aha Specials",
    items: [
      { name: "Avakaya Mudda Pappu Annam", price: 379, isVeg: true, isSpecial: true },
      { name: "Bagara Rice With Mutton Dalcha", price: 599, isVeg: false, isSpecial: true },
      { name: "Mamsam Sangati", price: 589, isVeg: false, isSpecial: true },
      { name: "Poori With Chicken Curry", price: 549, isVeg: false },
      { name: "Poori With Mamsam Kura", price: 649, isVeg: false },
      { name: "Poori With Natukodi Kura", price: 499, isVeg: false },
      { name: "Ragi Mudda Natukodi Pulusu", price: 599, isVeg: false },
      { name: "Ragi Mudda With Kodi Kura", price: 549, isVeg: false },
      { name: "Ragi Mudda Yata Mamsamkura", price: 649, isVeg: false },
      { name: "Rasam Annam Aloo Fry", price: 399, isVeg: true },
      { name: "Rasam Annam Chicken Fry", price: 499, isVeg: false },
      { name: "Rasam Annam Mutton Fry", price: 599, isVeg: false },
      { name: "Egg Fried Rice With Butter Chicken", price: 599, isVeg: false },
    ],
  },
  {
    name: "Breads",
    items: [
      { name: "Plain Tandoori Roti", price: 99, isVeg: true },
      { name: "Butter Tandoori Roti", price: 109, isVeg: true },
      { name: "Plain Naan", price: 109, isVeg: true },
      { name: "Butter Naan", price: 119, isVeg: true },
      { name: "Garlic Naan", price: 129, isVeg: true },
      { name: "Chilli Naan", price: 129, isVeg: true },
      { name: "Plain Phulka", price: 89, isVeg: true },
      { name: "Butter Phulka", price: 99, isVeg: true },
      { name: "Chapati", price: 119, isVeg: true, description: "One Piece" },
      { name: "Malabar Paratha", price: 149, isVeg: true },
      { name: "Poori", price: 139, isVeg: true, description: "4 Pieces" },
    ],
  },
  {
    name: "Biryani & Pulao",
    items: [
      { name: "Mushroom Biryani", price: 489, isVeg: true },
      { name: "Traditional Royyala Pulao", price: 599, isVeg: false, isSpecial: true },
      { name: "Paneer Tikka Biryani", price: 499, isVeg: true },
      { name: "Gutti Vankaya Pulao", price: 449, isVeg: true },
      { name: "Pachimirchi Paneer Pulao", price: 499, isVeg: true },
      { name: "Ulavacharu Paneer Pulao", price: 499, isVeg: true },
      { name: "Ghee Roast Mutton Biryani Boneless", price: 699, isVeg: false, isSpecial: true },
      { name: "Gongura Kodi Pulao", price: 499, isVeg: false },
      { name: "Ulavacharu Kodi Pulao", price: 499, isVeg: false },
      { name: "Pachimirchi Kodi Pulao", price: 499, isVeg: false },
      { name: "Konaseema Fry Piece Chicken Biryani", price: 519, isVeg: false },
      { name: "Palle Natu Kodi Fry Piece Pulao", price: 569, isVeg: false },
      { name: "Pachimirchi Royyala Pulao", price: 599, isVeg: false },
      { name: "Special Chicken Biryani Boneless", price: 599, isVeg: false },
      { name: "Chicken Hyderabadi Dum Biryani", price: 469, isVeg: false, isSpecial: true },
      { name: "Mutton Hyderabadi Dum Biryani", price: 549, isVeg: false, isSpecial: true },
      { name: "Gongura Mutton Biryani", price: 599, isVeg: false },
      { name: "Military Canteen Mutton Biryani Boneless", price: 749, isVeg: false, isSpecial: true },
      { name: "Nizami Nalli Gosh Biryani", price: 749, isVeg: false, isSpecial: true },
    ],
  },
  {
    name: "Matka Pulaos",
    items: [
      { name: "Veg Matka Pulao", price: 549, isVeg: true },
      { name: "Chicken Matka Pulao", price: 699, isVeg: false, isSpecial: true },
      { name: "Chicken Kalchatti Curry", price: 549, isVeg: false },
      { name: "Natukodi Kalchatti Curry", price: 599, isVeg: false },
      { name: "Mutton Kalchatti Curry", price: 699, isVeg: false },
    ],
  },
  {
    name: "Rice & Noodles",
    items: [
      { name: "Steam Rice", price: 199, isVeg: true },
      { name: "Rayalaseema Ragi Mudda", price: 299, isVeg: true },
      { name: "Bagara Rice", price: 349, isVeg: true },
      { name: "Perugu Annam", price: 339, isVeg: true },
      { name: "Veg Fried Rice", price: 399, isVeg: true },
      { name: "Chicken Fried Rice", price: 429, isVeg: false },
      { name: "Veg Sechzwan Fried Rice", price: 399, isVeg: true },
      { name: "Chicken Schezwan Fried Rice", price: 429, isVeg: false },
      { name: "Veg Burnt Garlic Fried Rice", price: 409, isVeg: true },
      { name: "Chicken Burnt Garlic Fried Rice", price: 439, isVeg: false },
      { name: "Veg Hakka Noodles", price: 389, isVeg: true },
      { name: "Chicken Hakka Noodles", price: 419, isVeg: false },
      { name: "Veg Chilli Garlic Noodles", price: 399, isVeg: true },
      { name: "Chicken Chilli Garlic Noodles", price: 429, isVeg: false },
      { name: "Chicken Special Shanghai Fried Rice", price: 499, isVeg: false },
      { name: "Veg Special Shanghai Fried Rice", price: 449, isVeg: true },
    ],
  },
  {
    name: "Salads & Raita",
    items: [
      { name: "Green Salad", price: 149, isVeg: true },
      { name: "Plain Curd", price: 119, isVeg: true },
      { name: "Chat Pata Chips Chat", price: 199, isVeg: true },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Tender Coconut Pudding", price: 289, isVeg: true },
      { name: "Patha Basthi Malai Bun", price: 249, isVeg: true },
      { name: "Tresleches", price: 289, isVeg: true },
      { name: "Creamy Kunafa", price: 339, isVeg: true, isSpecial: true },
    ],
  },
];

export type FilterType = "all" | "veg" | "nonveg" | "seafood" | "biryani";

export const filterCategories = (data: MenuCategory[], filter: FilterType, searchQuery: string): MenuCategory[] => {
  return data
    .map(category => {
      let filteredItems = category.items;

      // Apply type filter
      if (filter === "veg") {
        filteredItems = filteredItems.filter(item => item.isVeg);
      } else if (filter === "nonveg") {
        filteredItems = filteredItems.filter(item => !item.isVeg);
      } else if (filter === "seafood") {
        if (!category.name.toLowerCase().includes("seafood")) {
          return { ...category, items: [] };
        }
      } else if (filter === "biryani") {
        if (!category.name.toLowerCase().includes("biryani") && !category.name.toLowerCase().includes("pulao") && !category.name.toLowerCase().includes("matka")) {
          return { ...category, items: [] };
        }
      }

      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredItems = filteredItems.filter(
          item => item.name.toLowerCase().includes(query) || 
                  item.description?.toLowerCase().includes(query)
        );
      }

      return { ...category, items: filteredItems };
    })
    .filter(category => category.items.length > 0);
};
