"use client";
import { useState } from "react";

type Product = { id: number; name: string; price: number; stock: number };

const initial: Product[] = [
  { id: 1, name: "Pro Phone X", price: 799, stock: 12 },
  { id: 2, name: "Air Buds 2", price: 129, stock: 25 },
  { id: 3, name: "Smart Watch S", price: 199, stock: 8 },
];

export default function Shop() {
  const [query, setQuery] = useState("");
  const products = initial.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Shop</h2>
      <input
        placeholder="Search products"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full"
      />
      <ul className="space-y-3">
        {products.map(p => (
          <li key={p.id} className="card p-3 flex items-center justify-between">
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-slate-300">${"{p.price}"} · Stock: {p.stock}</p>
            </div>
            <button className="btn">Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
