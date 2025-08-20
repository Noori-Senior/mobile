import Link from "next/link";

const sampleProducts = [
  { id: 1, name: "Pro Phone X", price: 799, img: "/hero.png" },
  { id: 2, name: "Air Buds 2", price: 129, img: "/hero.png" },
  { id: 3, name: "Smart Watch S", price: 199, img: "/hero.png" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-semibold">Mobile Shop</h1>
        <p className="text-slate-300 mt-1">PWA starter hosted on Vercel</p>
        <div className="flex gap-2 justify-center mt-4">
          <Link href="/shop" className="btn">Open Shop</Link>
          <Link href="/about" className="rounded-2xl px-4 py-2 border border-slate-600">About</Link>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-3">
        {sampleProducts.map(p => (
          <div key={p.id} className="card p-3">
            <img src={p.img} alt={p.name} className="w-full h-28 object-cover rounded-xl" />
            <div className="mt-2">
              <p className="text-sm text-slate-300">{p.name}</p>
              <p className="text-lg font-semibold">${"{p.price}"}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="text-xs text-center text-slate-400">
        Install this app from your browser menu to use it like a native app.
      </footer>
    </div>
  );
}
