import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import getStore from "@/actions/get-store";



const Navbar = async () => {
  const categories = await getCategories();
  const store = await getStore();

  return (
    <div className="border-b py-5">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 justify-between flex items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image src={`${store.storeImage}`} alt="Logo" width={50} height={50} />
          </Link>
          <MainNav data={categories} /> 
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
