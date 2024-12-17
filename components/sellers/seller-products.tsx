"use client";

import { useEffect } from 'react';
import { SellerHeader } from "./seller-header";
import { ProductGrid } from "./product-grid";
import { SellerProductFilters } from "./product-filters";
import { useSellerProductFilters } from "@/lib/hooks/use-seller-product-filters";
import { useSellers } from "@/lib/hooks/use-sellers";
import { Skeleton } from "@/components/ui/skeleton";
import type { Seller } from '@/lib/types/seller';

interface SellerProductsProps {
  seller: Seller;
}

export function SellerProducts({ seller }: SellerProductsProps) {
  const { priceRange, categories, types, minRating, search } = useSellerProductFilters();
  const { getSellerProducts, isLoading } = useSellers();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const sellerProducts = await getSellerProducts(seller.id);
      setProducts(sellerProducts);
    };
    loadProducts();
  }, [seller.id]);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-[200px] w-full" />
        <div className="flex gap-8">
          <Skeleton className="h-[600px] w-64" />
          <div className="flex-1 space-y-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[200px] w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = categories.length === 0 || categories.includes(product.category);
    const matchesType = types.length === 0 || types.includes(product.type);
    const matchesRating = product.rating >= minRating;
    const matchesSearch = search === '' || 
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    return matchesPrice && matchesCategory && matchesType && matchesRating && matchesSearch;
  });

  return (
    <>
      <SellerHeader seller={seller} />
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="w-full md:w-64">
          <SellerProductFilters />
        </aside>
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </>
  );
}
