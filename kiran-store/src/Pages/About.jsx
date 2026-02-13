import React from 'react';

export default function About() {
  const stats = [
    { label: 'Happy Kids & Families', value: '5000+' },
    { label: 'Fun Products', value: '1000+' },
    { label: 'Years of Fun', value: '15+' },
    { label: 'Delivery Heroes', value: '10+' },
  ];

  const features = [
    {
      title: "Yummy Freshness",
      desc: "Har product ko bacchon ke liye extra tasty aur fresh banate hain!",
      icon: "🥬"
    },
    {
      title: "Super Fast Delivery",
      desc: "Aapke ghar tak saaman 30 minute mein – jaldi se khushiyan laayein!",
      icon: "🚀"
    },
    {
      title: "Best Prices Ever",
      desc: "Sirf 10-100 rupaye mein sab kuch – bacchon ke liye sabse sasta!",
      icon: "💰"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-yellow-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Hamari Fun Kahani! 🎉</h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            15 saalon se bacchon aur families ke bharose ka saathi! Hum sirf saaman nahi,
            khushiyan aur mazedaar cheezein bechte hain. Yummy grocery ab aapke darwaze par! 🍬
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto -mt-10 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl text-center border border-gray-100 transition-transform hover:scale-105">
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hum Kyun Sabse Fun Hain? 😄</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-sm border border-blue-100 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bacchon Ka Apna Fun Store! 🛒</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Humne ek chhoti si dukaan se shuruat ki thi, aur aaj bacchon ke pyaar ki wajah se hum
              pure area ke sabse mazedaar online grocery partner ban chuke hain.
              Hamara maqsad hai har ghar tak yummy aur sasta saaman pahunchana – biscuits, chocolates, aur sab kuch!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Explore Fun Products →
            </button>
          </div>
          <div className="flex-1 w-full h-64 bg-yellow-100 rounded-2xl flex items-center justify-center">
            <span className="text-blue-600 font-bold italic text-lg text-center px-4">
              [Yummy Fun Image Placeholder] 🍪🍫
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}