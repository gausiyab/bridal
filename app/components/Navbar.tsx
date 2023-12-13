"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/" },
    { name: "Bridal Couture", href: "/Bridal" },
    { name: "Beaded Fabric", href: "/Beaded" },
    { name: "Bridal Lace", href: "/Lace" },
  ];

export default function Navbar() {
    const pathname = usePathname();
    return(
        <header className="mb-6 border-b fixed w-full z-30 bg-neutral-400 h-12">
            <div className="flex  items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl ">
                <Link href="/">
               <h2 className="text-xl font-bold">Gausiya <span className="text-white">Couture</span></h2>
                </Link>
            <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-white"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold tex text-black transition duration-100 hover:text-white"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
         <div>
           <Button className="bg-[#090808]">
            <Link href="/about">About</Link>
            </Button>
          </div>
            </div>
        </header>
    );
}