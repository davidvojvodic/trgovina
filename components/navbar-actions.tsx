"use client";

import { Mail, ShoppingBag } from "lucide-react";
import Button from "./ui/button-custom";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMouted, setIsMouted] = useState(false);

  useEffect(() => {
    setIsMouted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMouted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/contact")}
        className="group transition-all flex gap-3 text-sm bg-white text-black border border-black rounded-full items-center px-4 py-2 hover:bg-white/60"
      >
        <Mail
          size={20}
          color="black"
          className="group-hover:animate-pulse transition"
        />
        Contact us
      </Button>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
