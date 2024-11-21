"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { Home, Info, Briefcase, Mail, AlignJustify } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Become a Driver", icon: Info, link: "/driver" },
  { name: "Services", icon: Briefcase, link: "/services" },
  { name: "About", icon: Briefcase, link: "/about" },
  { name: "Contact", icon: Mail, link: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-trip-black text-white h-16 shadow-lg px-6 md:px-12 lg:px-16 sticky top-0 z-50">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/">
            <Image src={"/logo.svg"} height={80} width={80} alt="Home" />
          </Link>
        </div>

        <ul className="hidden lg:flex space-x-8 lg:space-x-12 text-white">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Link href={item.link}>
                <h2 className="cursor-pointer font-semibold text-base px-4 py-2 rounded-lg transition-all hover:text-white hover:bg-trip-blue flex items-center">
                  {item.name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-x-4">
          {/* <div className="flex items-center bg-white text-black h-10 px-4 py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-200">
            <Image src={"/9ja.png"} height={20} width={20} alt="flag" />
            <ChevronDown className="ml-2" />
          </div> */}
          <AlignJustify
            size={24}
            className="lg:hidden text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className={`absolute right-0 top-0 h-screen w-60 bg-trip-black shadow-lg z-50 transition-transform transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center my-5">
              <Link href="/">
                <Image src={"/logo.svg"} height={60} width={60} alt="Home" />
              </Link>
            </div>

            <ul className="flex-1 flex flex-col space-y-4 text-gray-600 dark:text-gray-300 px-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <h2 className="flex items-center space-x-3 cursor-pointer hover:bg-ubepsa text-sm text-white hover:bg-trip-blue font-medium px-3 py-2 rounded-md transition-colors">
                      <item.icon size={20} />
                      <span>{item.name}</span>
                    </h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
