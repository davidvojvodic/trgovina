"use client";

import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image alt="Image" src={data?.images?.[0]?.url} fill />
      </div>
    </div>
  );
};

export default ProductCard;
