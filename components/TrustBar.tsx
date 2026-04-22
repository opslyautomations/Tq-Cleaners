const ITEMS = [
  { icon: "⭐", text: "5-Star Rated by Texas Families" },
  { icon: "🛡️", text: "Licensed & Insured" },
  { icon: "📍", text: "Serving 30+ Cities Across Texas" },
  { icon: "💯", text: "100% Satisfaction Guarantee" },
  { icon: "📞", text: "Same-Day Quotes Available" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#4FC3F7]/10 border-y border-[#4FC3F7]/20 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {ITEMS.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-[#F5F9FC]/90 whitespace-nowrap">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
