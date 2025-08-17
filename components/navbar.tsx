"use client";

import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import Link from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon, HeartFilledIcon, SearchIcon, Logo } from "@/components/icons";
import { usePathname } from "next/navigation";

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
      startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
      type="search"
    />
  );

  return (
    <nav className={clsx("bg-secondary text-white z-50", path == "/" ? "absolute left-0 right-0 top-0 bg-transparent" : "")}>
      <div className="container">
        <div className="flex items-center py-4 gap-6">
          <div className="flex items-center gap-4">
            <Logo className="bg-primary-500 rounded-lg" />
            <div className="">
              <p className="font-semibold -mb-2">VANILLA</p>
              <small>World Trade</small>
            </div>
          </div>
          <div className="ms-auto">
            <ul className="hidden md:flex gap-6">
              {siteConfig.navItems.map((item) => (
                <li
                  data-active={item.href == "/"}
                  key={item.href}
                  className="font-semibold duration-250 hover:brightness-90 hover:scale-105 data-[active=true]:text-primary"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <Button size="sm" color="primary" className="hidden md:inline-flex">
              Login
            </Button>
            <Button size="md" color="primary" isIconOnly className="md:hidden inline-flex">
              X
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
