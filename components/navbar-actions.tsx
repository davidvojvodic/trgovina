"use client";

import { Mail, ShoppingBag, User2Icon } from "lucide-react";
import {Button} from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const NavbarActions = () => {
  const [isMouted, setIsMouted] = useState(false);
  const [user, setUser] = useState(true);

  useEffect(() => {
    setIsMouted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMouted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">

      {/* TO DO: Če user ne obstaja, rendera login button */}
    
      {!user && (
        <Link href="/login">
          <Button>
            Login
          </Button>
        </Link>
      )}
      
      <Button
        onClick={() => router.push("/cart")}
        className="p-2 rounded-full"
        variant={"ghost"}
      >
        <ShoppingBag size={20} color="black" />
        <span className="text-md ml-1 font-medium">
          {cart.items.length}
        </span>
      </Button>

        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>

              <Link href="/account">
                <DropdownMenuItem className="flex justify-between">
                 <div>Account</div>
                 

                  <User2Icon className="w-5 h-5" />

                </DropdownMenuItem>
              </Link>  
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <Link href={"/logout"}>
                <DropdownMenuItem>
                  Sign out
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>

          </DropdownMenu>
        )}

        {!user && (
          <Avatar> 
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
        )}

    </div>
  );
};

export default NavbarActions;
