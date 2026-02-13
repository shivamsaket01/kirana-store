import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#14532d] text-gray-200 pt-16 pb-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#facc15] via-[#14532d] to-[#facc15] opacity-50"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#facc15]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#facc15]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* 🏛️ Column 1: Brand & About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <span className="text-3xl">🛒</span>
              <span className="text-[#facc15]">
                राजकुमारी किराना
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              मैहर का सबसे भरोसेमंद किराना स्टोर। हम पिछले 5+ वर्षों से आपके घर तक शुद्ध और ताज़ा सामान पहुँचा रहे हैं। गुणवत्ता और भरोसा ही हमारी पहचान है।
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#facc15]/20 hover:border-[#facc15]/50 transition-all duration-300">
                <span className="text-lg">📱</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#facc15]/20 hover:border-[#facc15]/50 transition-all duration-300">
                <span className="text-lg">📧</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#facc15]/20 hover:border-[#facc15]/50 transition-all duration-300">
                <span className="text-lg">📍</span>
              </a>
            </div>
          </div>

          {/* 🔗 Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Categories", path: "/categories" },
                { name: "My Cart", path: "/cart" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#facc15] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-sm group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#facc15] transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🛠️ Column 3: Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full"></span>
              हमारी श्रेणियाँ
            </h3>
            <ul className="space-y-4">
              {[
                "आटा, चावल, दाल",
                "तेल, मसाले, नमक",
                "बिस्कुट, चॉकलेट",
                "नमकीन, स्नैक्स",
                "चाय, कॉफी, दूध",
                "साबुन, शैम्पू"
              ].map((item) => (
                <li key={item}>
                  <Link to="/categories" className="text-gray-300 hover:text-[#facc15] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 📞 Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full"></span>
              Store Address
            </h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <span className="text-xl">📍</span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Maihar, Satna District,<br />
                  Madhya Pradesh - 485771
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <p className="text-sm text-gray-300 font-semibold">+91 9131XXXXXX</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <p className="text-sm text-gray-300">support@maiharkirana.com</p>
              </div>
              <div className="pt-4">
                <div className="bg-[#facc15]/10 border border-[#facc15]/20 rounded-2xl p-4">
                  <p className="text-[#facc15] text-xs font-bold uppercase tracking-wider mb-1">Store Timings</p>
                  <p className="text-white text-sm font-semibold">08:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 📜 Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs text-center md:text-left">
            © {currentYear} <span className="text-[#facc15] font-semibold border-b border-[#facc15]/20">राजकुमारी किराना स्टोर</span>. सर्वाधिकार सुरक्षित।
          </p>
          <div className="flex gap-8 text-xs text-gray-400">
            <Link to="/privacy" className="hover:text-[#facc15] transition-colors">गोपनीयता नीति</Link>
            <Link to="/terms" className="hover:text-[#facc15] transition-colors">सेवा की शर्तें</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}