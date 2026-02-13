import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    {
      name: "Biscuits & Chocolates",
      products: [
        { name: "Britannia 50-50 Biscuits", image: "https://www.bigbasket.com/media/uploads/p/l/102102_12-britannia-50-50-potazos-spicy-biscuits.jpg", price: 10 },
        { name: "Parle-G Gold Biscuits", image: "https://www.bigbasket.com/media/uploads/p/l/40075454_7-parle-g-gold-biscuits.jpg", price: 20 },
        { name: "Cadbury 5 Star Chocolate", image: "https://www.bigbasket.com/media/uploads/p/l/40019371_21-cadbury-5-star-chocolate-bar.jpg", price: 30 },
        { name: "Nestle Kitkat", image: "https://www.bigbasket.com/media/uploads/p/l/1215446_1-nestle-kitkat-share-and-snap-chocolate-wafer-bar.jpg", price: 50 },
        { name: "Oreo Biscuits", image: "https://www.bigbasket.com/media/uploads/p/l/1204487_1-cadbury-oreo-sandwich-biscuits-vanilla-cream.jpg", price: 100 },
      ]
    },
    {
      name: "Snacks & Namkeen",
      products: [
        { name: "Lay's Magic Masala Chips", image: "https://www.bigbasket.com/media/uploads/p/l/1203444_2-lays-potato-chips-india-s-magic-masala.jpg", price: 10 },
        { name: "Kurkure Masala Munch", image: "https://www.bigbasket.com/media/uploads/p/l/1203437_2-kurkure-namkeen-masala-munch.jpg", price: 20 },
        { name: "Haldiram Bhujia", image: "https://www.bigbasket.com/media/uploads/p/l/40051185_4-haldiram-nagpur-namkeen-bhujia-sev.jpg", price: 30 },
        { name: "Bingo Mad Angles", image: "https://www.bigbasket.com/media/uploads/p/l/102555_10-bingo-mad-angles-namkeen-achaari-masti.jpg", price: 50 },
        { name: "Peanuts (Moongphali)", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80", price: 100 },
      ]
    },
    {
      name: "Noodles & Chowmein",
      products: [
        { name: "Maggi Masala Noodles", image: "https://www.bigbasket.com/media/uploads/p/l/266109_28-maggi-2-minute-instant-noodles-masala.jpg", price: 10 },
        { name: "Chings Manchurian Noodles", image: "https://www.bigbasket.com/media/uploads/p/l/40125433_5-chings-secret-manchurian-instant-noodles.jpg", price: 20 },
        { name: "Chowmein Noodles", image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=300&q=80", price: 30 },
        { name: "Maggi Pasta", image: "https://www.bigbasket.com/media/uploads/p/l/2000494_12-maggi-pazzta-cheese-macaroni.jpg", price: 50 },
        { name: "Bambino Vermicelli", image: "https://www.bigbasket.com/media/uploads/p/l/123048_4-bambino-vermicelli.jpg", price: 100 },
      ]
    },
    {
      name: "Staples: Aata, Chawal, Dal",
      products: [
        { name: "Aata (Flour)", image: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=300&q=80", price: 10 },
        { name: "Chawal (Rice)", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80", price: 20 },
        { name: "Dal (Lentils)", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=300&q=80", price: 30 },
        { name: "Moong Dal", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=300&q=80", price: 50 },
        { name: "Urad Dal", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=300&q=80", price: 100 },
      ]
    },
    {
      name: "Essentials: Sugar, Oil, Masale",
      products: [
        { name: "Sugar", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=300&q=80", price: 10 },
        { name: "Gud (Jaggery)", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=300&q=80", price: 20 },
        { name: "Oil", image: "https://images.unsplash.com/photo-1601033201520-25e24399e82c?auto=format&fit=crop&w=300&q=80", price: 30 },
        { name: "Masale (Spices)", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80", price: 50 },
        { name: "Tea Leaves", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80", price: 100 },
      ]
    },
    {
      name: "Fun Stuff: Pens, Pencils, Toothpaste",
      products: [
        { name: "Pens", image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80", price: 10 },
        { name: "Pencils", image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80", price: 20 },
        { name: "Cutters", image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80", price: 30 },
        { name: "Toothpaste", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80", price: 50 },
        { name: "Fun Stationery Set", image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80", price: 100 },
      ]
    }
  ];

  // For a future filter feature, you could combine all products
  // const allProducts = categories.flatMap(cat => cat.products);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#14532d] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-[#facc15]">राजकुमारी किराना</span> स्टोर
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            रोज़मर्रा की जरूरतें, अब और भी आसान – ₹10 से ₹100 तक के सस्ते दाम!
          </p>
          {/* Quick Category Pills (optional) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-[#facc15] text-[#14532d]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category, catIdx) => (
          // Only show category if activeCategory is "All" or matches
          (activeCategory === "All" || activeCategory === category.name) && (
            <div key={catIdx} className="mb-16 last:mb-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#14532d] relative">
                  {category.name}
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#facc15] rounded-full"></span>
                </h2>
                <a href="#" className="text-[#14532d] hover:text-[#facc15] font-medium text-sm transition-colors">
                  सभी देखें →
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {category.products.map((product, pIdx) => (
                  <ProductCard
                    key={pIdx}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}