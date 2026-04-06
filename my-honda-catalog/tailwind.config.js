// pages/index.js
import Head from 'next/head'

const products = [
  { id: 1, name: 'Vario 160', category: 'Matic', image: '/vario.png' },
  { id: 2, name: 'CBR250RR', category: 'Sport', image: '/cbr.png' },
  { id: 3, name: 'Super Cub C125', category: 'Cub', image: '/cub.png' },
  { id: 4, name: 'EM1 e:', category: 'EV', image: '/ev.png' },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Katalog Honda Clone</title>
      </Head>

      {/* Header Sederhana */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">HONDA</h1>
          <div className="space-x-6 hidden md:flex font-medium">
            <a href="#" className="hover:text-red-600">PRODUCT</a>
            <a href="#" className="hover:text-red-600">PROMO</a>
            <a href="#" className="hover:text-red-600">DEALERS</a>
          </div>
        </div>
      </nav>

      {/* Grid Produk */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">OUR PRODUCTS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs italic">{item.name} Image</span>
                </div>
              </div>
              <div className="p-4 border-t">
                <p className="text-xs text-gray-500 uppercase tracking-widest">{item.category}</p>
                <h3 className="text-lg font-bold mt-1 uppercase">{item.name}</h3>
                <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
