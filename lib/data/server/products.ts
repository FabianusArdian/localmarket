import { Product } from './types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Paket Sayur Organik Premium",
    description: "Sayuran organik segar dari petani lokal terpilih. Dipanen langsung dan dikirim dalam kondisi terbaik.",
    price: 150000,
    stock: 50,
    category: "Fresh Produce",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400"],
    rating: 4.8,
    sellerId: "1",
    createdAt: new Date("2024-03-20"),
  },
  {
    id: "2",
    name: "Telur Ayam Kampung Organik",
    description: "Telur ayam kampung segar dari peternakan bebas kandang. Kaya nutrisi dan organik.",
    price: 45000,
    stock: 100,
    category: "Dairy",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=400"],
    rating: 4.9,
    sellerId: "1",
    createdAt: new Date("2024-03-19"),
  },
  {
    id: "3",
    name: "Roti Sourdough Premium",
    description: "Roti sourdough autentik dengan fermentasi alami. Dibuat dengan tepung organik premium.",
    price: 85000,
    stock: 30,
    category: "Bakery",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=400"],
    rating: 4.7,
    sellerId: "2",
    createdAt: new Date("2024-03-20"),
  },
  {
    id: "4",
    name: "Kopi Arabika Gayo Premium",
    description: "Kopi arabika premium dari dataran tinggi Gayo. Single origin dengan profil rasa unik.",
    price: 125000,
    stock: 40,
    category: "Beverages",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400"],
    rating: 4.9,
    sellerId: "6",
    createdAt: new Date("2024-03-18"),
  },
  {
    id: "5",
    name: "Daging Sapi Wagyu A5",
    description: "Daging wagyu kualitas tertinggi dengan marbling sempurna. Cocok untuk steak premium.",
    price: 950000,
    stock: 15,
    category: "Meat & Poultry",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400"],
    rating: 4.9,
    sellerId: "4",
    createdAt: new Date("2024-03-20"),
  },
  {
    id: "6",
    name: "Keju Mozzarella Fresh",
    description: "Keju mozzarella segar produksi lokal. Sempurna untuk pizza dan masakan Italia.",
    price: 75000,
    stock: 35,
    category: "Dairy",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=400"],
    rating: 4.8,
    sellerId: "5",
    createdAt: new Date("2024-03-19"),
  },
  {
    id: "7",
    name: "Granola Premium",
    description: "Granola premium dengan campuran kacang dan buah kering lokal. Dibuat tanpa pengawet.",
    price: 89000,
    stock: 60,
    category: "Breakfast",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1517593456930-2fd3f2277a5e?auto=format&fit=crop&q=80&w=400"],
    rating: 4.7,
    sellerId: "2",
    createdAt: new Date("2024-03-20"),
  },
  {
    id: "8",
    name: "Sambal Bajak Homemade",
    description: "Sambal bajak autentik dengan level kepedasan yang bisa disesuaikan. Tahan lama dan tanpa pengawet.",
    price: 42000,
    stock: 100,
    category: "Condiments",
    type: "standard",
    images: ["https://images.unsplash.com/photo-1614778265188-dff1832ae5a2?auto=format&fit=crop&q=80&w=400"],
    rating: 4.6,
    sellerId: "1",
    createdAt: new Date("2024-03-18"),
  },
  {
    id: "9",
    name: "Yogurt Probiotik Premium",
    description: "Yogurt probiotik segar dengan buah-buahan lokal. Kaya akan nutrisi dan baik untuk pencernaan.",
    price: 35000,
    stock: 40,
    category: "Dairy",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400"],
    rating: 4.8,
    sellerId: "5",
    createdAt: new Date("2024-03-19"),
  },
  {
    id: "10",
    name: "Rendang Sapi Premium",
    description: "Rendang sapi autentik dari resep turun temurun. Dibuat dengan daging sapi pilihan dan rempah berkualitas.",
    price: 185000,
    stock: 25,
    category: "Ready to Eat",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=400"],
    rating: 4.9,
    sellerId: "4",
    createdAt: new Date("2024-03-20"),
  },
  {
    id: "11",
    name: "Teh Putih Premium",
    description: "Teh putih premium dari kebun teh Jawa Barat. Dipetik dan diproses dengan hati-hati.",
    price: 125000,
    stock: 30,
    category: "Beverages",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400"],
    rating: 4.8,
    sellerId: "6",
    createdAt: new Date("2024-03-19"),
  },
  {
    id: "12",
    name: "Keripik Pisang Premium",
    description: "Keripik pisang premium dengan berbagai varian rasa. Dibuat dari pisang raja pilihan.",
    price: 35000,
    stock: 80,
    category: "Snacks",
    type: "premium",
    images: ["https://images.unsplash.com/photo-1599114943361-e56b0a56d895?auto=format&fit=crop&q=80&w=400"],
    rating: 4.7,
    sellerId: "2",
    createdAt: new Date("2024-03-18"),
  }
];