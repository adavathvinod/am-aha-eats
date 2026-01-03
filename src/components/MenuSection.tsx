import { useState, useMemo } from "react";
import { Search, Leaf, Drumstick, Fish, UtensilsCrossed } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { menuData, filterCategories, FilterType } from "@/data/menuData";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodChicken from "@/assets/food-chicken65.jpg";
import foodFish from "@/assets/food-fish.jpg";
import foodPaneer from "@/assets/food-paneer.jpg";
import foodMarag from "@/assets/food-marag.jpg";
import foodPrawns from "@/assets/food-prawns.png";

const categoryImages: Record<string, string> = {
  "Biryani & Pulao": foodBiryani,
  "Chicken Starters": foodChicken,
  "Seafood": foodFish,
  "Veg Starters": foodPaneer,
  "Soups": foodMarag,
  "Live Charcoal Grill": foodPrawns,
};

const filters: { id: FilterType; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All", icon: <UtensilsCrossed className="w-4 h-4" /> },
  { id: "veg", label: "Veg", icon: <Leaf className="w-4 h-4" /> },
  { id: "nonveg", label: "Non-Veg", icon: <Drumstick className="w-4 h-4" /> },
  { id: "seafood", label: "Seafood", icon: <Fish className="w-4 h-4" /> },
  { id: "biryani", label: "Biryani & Pulao", icon: <UtensilsCrossed className="w-4 h-4" /> },
];

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = useMemo(() => {
    return filterCategories(menuData, activeFilter, searchQuery);
  }, [activeFilter, searchQuery]);

  const getCategoryImage = (categoryName: string): string | null => {
    for (const [key, image] of Object.entries(categoryImages)) {
      if (categoryName.includes(key) || key.includes(categoryName)) {
        return image;
      }
    }
    return null;
  };

  return (
    <section id="menu" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-copper uppercase tracking-widest text-sm font-medium">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-4">
            A Feast of <span className="text-gradient-copper">Telugu Flavors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the aromatic biryanis to the sizzling charcoal grills, every dish tells a story of authentic Telugu culinary traditions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search dishes... (e.g., Biryani, Prawns)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-copper focus:ring-copper"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`gap-2 transition-all ${
                activeFilter === filter.id
                  ? "bg-gradient-copper shadow-copper"
                  : "border-border hover:border-copper hover:text-copper"
              }`}
            >
              {filter.icon}
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="space-y-12">
          {filteredMenu.map((category, categoryIndex) => {
            const categoryImage = getCategoryImage(category.name);
            return (
              <div
                key={category.name}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  {categoryImage && (
                    <div className="hidden md:block w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={categoryImage} alt={category.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-serif text-foreground">{category.name}</h3>
                    <div className="w-20 h-1 bg-gradient-copper rounded-full mt-2" />
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={`${category.name}-${item.name}-${itemIndex}`}
                      className="menu-card group bg-card rounded-lg p-4 border border-border hover:border-copper/50"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {/* Veg/Non-veg indicator */}
                            <span
                              className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center ${
                                item.isVeg ? "border-green-500" : "border-red-500"
                              }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  item.isVeg ? "bg-green-500" : "bg-red-500"
                                }`}
                              />
                            </span>
                            <h4 className="font-medium text-foreground group-hover:text-copper transition-colors">
                              {item.name}
                            </h4>
                          </div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          )}
                          {item.isSpecial && (
                            <Badge variant="outline" className="mt-2 border-gold text-gold text-xs">
                              Chef's Special
                            </Badge>
                          )}
                        </div>
                        <span className="text-copper font-semibold whitespace-nowrap">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredMenu.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No dishes found matching your search.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="text-copper mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
