"use client";

import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const path = usePathname();
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <nav
      className={clsx(
        "bg-secondary text-white z-50",
        path == "/"
          ? "absolute left-0 right-0 top-0 bg-transparent"
          : "sticky top-0",
      )}
    >
      <div className="container">
        <div className="flex items-center py-4 gap-6">
          <div className="flex items-center gap-2">
            <Image
              alt="logo"
              className="w-10 h-10 rounded"
              height={512}
              src={"/logo-transparent.png"}
              width={512}
            />
            <p className="font-bold text-2xl">NCI</p>
          </div>
          <div className="ms-auto">
            <ul className="hidden md:flex gap-6">
              {siteConfig.navItems.map((item) => (
                <li
                  key={item.href}
                  className="font-semibold duration-250 hover:brightness-90 hover:scale-105 data-[active=true]:text-primary"
                  data-active={path.startsWith(item.href)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <Button className="hidden md:inline-flex" color="primary" size="sm">
              Login
            </Button>
            <Button
              isIconOnly
              className="md:hidden inline-flex"
              color="primary"
              size="md"
            >
              X
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
