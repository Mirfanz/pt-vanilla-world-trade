"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-foreground-100 flex flex-col lg:flex-row gap-8 justify-between container py-8 mt-20">
      <div className="px-4 lg:px-0">
        <div className="flex items-center gap-2">
          <Image
            alt="Logo"
            className="h-12 w-12"
            height={512}
            src={"/logo-transparent.png"}
            width={512}
          />
          <div className="">
            <p className="font-bold text-lg">Nusantara Commudities</p>
            <p className="font-bold text-lg -mt-2">International</p>
          </div>
        </div>
        <p className="text-foreground-500 mt-4 lg:text-center">
          Copyright &copy; 2025 By{" "}
          <Link
            className="hover:text-primary duration-150"
            href={"https://instagram.com/mirfan.project"}
            target="_blank"
          >
            Mirfan.Project
          </Link>
        </p>
      </div>
      <div className="px-4 lg:px-0">
        <p className="font-bold mb-1">Main Menu</p>
        <ul className="text-foreground-500 flex flex-col gap-1">
          <li>Home</li>
          <li>About Us</li>
          <li>Product</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="px-4 lg:px-0">
        <p className="font-bold mb-1">Our Product</p>
        <ul className="text-foreground-500 flex flex-col gap-1">
          <li>Vanilla beans</li>
          <li>Others...</li>
        </ul>
      </div>
      <div className="lg:text-end px-4 lg:px-0">
        <p className="font-bold mb-3">Social Media</p>
        <div className="flex gap-2">
          <Button isIconOnly color="primary" radius="full" size="sm">
            <FaInstagram size={20} />
          </Button>
          <Button isIconOnly color="primary" radius="full" size="sm">
            <FaLinkedin size={20} />
          </Button>
          <Button isIconOnly color="primary" radius="full" size="sm">
            <FaWhatsapp size={20} />
          </Button>
          <Button isIconOnly color="primary" radius="full" size="sm">
            <FaXTwitter size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
