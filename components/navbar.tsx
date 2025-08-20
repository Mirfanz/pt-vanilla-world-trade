"use client";

import { Button } from "@heroui/button";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaBars, FaWhatsapp, FaX } from "react-icons/fa6";
import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
                    className="font-semibold duration-200 hover:brightness-90 data-[active=true]:text-primary"
                    data-active={item.active?.test(path)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <Button
                className="hidden md:inline-flex"
                color="primary"
                size="sm"
              >
                Login
              </Button>
              <Button
                isIconOnly
                className="md:hidden inline-flex"
                color="primary"
                size="md"
                onPress={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? <FaX size={22} /> : <FaBars size={22} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <Drawer
        shouldBlockScroll
        backdrop="blur"
        isOpen={isOpen}
        placement="left"
        radius="none"
        size="xs"
        onClose={() => setIsOpen(false)}
      >
        <DrawerContent className="!fixed left-0 right-0 max-w-72 top-0 h-dvh">
          <DrawerHeader>Main Menu</DrawerHeader>
          <DrawerBody>
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                className={clsx(
                  "block py-2 px-4 duration-200 hover:brightness-90",
                  item.active?.test(path) && "text-primary font-bold",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </DrawerBody>
          <DrawerFooter>
            <Button
              fullWidth
              as={Link}
              color="success"
              href={siteConfig.links.whatsapp}
              size="md"
              target="_blank"
              variant="ghost"
            >
              <FaWhatsapp size={20} /> WhatsApp Message
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
