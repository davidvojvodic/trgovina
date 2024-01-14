"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Image from "next/image";
import React from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    description: route.description,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <NavigationMenu className="ml-6">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kategorije</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid  gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src={"/logo.png"}
                      alt="logo"
                      width={100}
                      height={10}
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      ElectricBikeZone
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore our extensive range of electric bikes and
                      accessories.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              {routes.map((route) => (
                <div key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline text-md font-medium outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors hover:text-black",
                      route.active ? "text-black" : "text-neutral-500"
                    )}
                  >
                    {route.label}
                    {route.description}
                  </Link>
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        
          
            <p className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >

            Kontakt
            </p>
          
          
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
