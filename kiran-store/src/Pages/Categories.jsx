// pages/Categories.jsx
import CategoryCard from "../components/CategoryCard";

export default function Categories() {
  // Sample data with item counts (you can replace with real counts from your backend)
  const categories = [
    {
      title: "Biscuits & Chocolates 🍪",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80",
      itemCount: 24,
    },
    {
      title: "Snacks & Namkeen 🥨",
      image: "https://images.unsplash.com/photo-1600492193202-31d04135508a?auto=format&fit=crop&w=300&q=80",
      itemCount: 18,
    },
    {
      title: "Noodles & Chowmein 🍜",
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=300&q=80",
      itemCount: 12,
    },
    {
      title: "Staples: Aata, Chawal, Dal 🌾",
      image: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=300&q=80",
      itemCount: 15,
    },
    {
      title: "Essentials: Sugar, Oil, Masale 🧂",
      image: "https://images.unsplash.com/photo-1601033201520-25e24399e82c?auto=format&fit=crop&w=300&q=80",
      itemCount: 20,
    },
    {
      title: "Fun Stuff: Pens, Pencils, Toothpaste ✏️",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80",
      itemCount: 30,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#14532d] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-[#facc15]">खरीदारी करें</span> श्रेणी के अनुसार
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            आपकी पसंद की हर चीज़, बिल्कुल सही श्रेणी में – ढूंढना हुआ आसान!
          </p>
          {/* Optional quick filter chips (just for show) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {["All", "Popular", "New Arrivals", "Special Offers"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white cursor-pointer hover:bg-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <CategoryCard
              key={i}
              title={category.title}
              image={category.image}
              itemCount={category.itemCount}
            />
          ))}
        </div>
      </div>

      {/* Trust Section (optional but adds depth) */}
      <div className="bg-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#14532d] mb-8">हमारी गारंटी</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-bold text-[#14532d]">ताज़ा उत्पाद</h3>
              <p className="text-gray-600 text-sm">हर श्रेणी में सिर्फ ताज़ा और शुद्ध सामान</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-bold text-[#14532d]">फ्री होम डिलीवरी</h3>
              <p className="text-gray-600 text-sm">आस-पास के इलाकों में 2 घंटे में डिलीवरी</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-[#14532d]">कम से कम दाम</h3>
              <p className="text-gray-600 text-sm">हर उत्पाद पर सबसे सस्ता रेट, कोई मिलावट नहीं</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}