import React from "react";

const products = [
  {
    id: 1,
    name: "Cannabis Flower - Blue Dream",
    price: "฿500 / g",
    image: "/images/blue_dream.jpg",
  },
  {
    id: 2,
    name: "Cannabis Oil - OG Kush",
    price: "฿1200 / bottle",
    image: "/images/og_kush_oil.jpg",
  },
  {
    id: 3,
    name: "Edibles - CBD Gummies",
    price: "฿350 / pack",
    image: "/images/cbd_gummies.jpg",
  },
  // เพิ่มสินค้าได้ตามต้องการ
];

export default function ProductList() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 text-center font-bold text-xl">
        Cannabis Shop
      </header>

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">สินค้าของเรา</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg text-center">{product.name}</h3>
              <p className="text-green-700 font-bold mt-2">{product.price}</p>
              <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                ดูรายละเอียด
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
