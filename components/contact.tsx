"use client";

import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaMapLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";

import { siteConfig } from "@/config/site";

type Props = {};

const Contact = (props: Props) => {
  return (
    <main className="container">
      <h2 className="text-5xl font-bold text-center mt-12 mb-14">
        CONTACT <span className="text-primary">US</span>
      </h2>
      <h2 className="text-2xl font-bold mb-6">
        PT. Nusantara Commudities International
      </h2>
      <div className="flex justify-between items-center gap-6 mb-10">
        <div className="flex gap-4 items-center hover:text-primary duration-150">
          <FaMapLocationDot size={20} />
          <p className="max-w-sm">
            Kawasan Industri KIIC, Jl. Maligi III No.Lot N, Wadas, Telukjambe
            Timur, Karawang, Jawa Barat 41361{" "}
          </p>
        </div>
        <Link
          className="flex gap-2 items-center hover:text-primary duration-150"
          href={siteConfig.links.whatsapp}
          target="_blank"
        >
          <FaWhatsapp size={20} /> 082383432423
        </Link>
        <Link
          className="flex gap-2 items-center hover:text-primary duration-150"
          href={siteConfig.links.instagram}
          target="_blank"
        >
          <FaInstagram size={20} /> @nci_trade
        </Link>
        <Link
          className="flex gap-2 items-center hover:text-primary duration-150"
          href={"mailto:nci.trade@gmail.com"}
          target="_blank"
        >
          <FaEnvelope size={20} /> nci.trade@gmail.com
        </Link>
      </div>
      <iframe
        allowFullScreen
        className="w-full aspect-video max-h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.7171306138803!2d107.26855520316778!3d-6.369224077370615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699d8eae6c886d%3A0x59323d0226ee6a7f!2sPT.%20Fujita%20Indonesia!5e0!3m2!1sid!2sid!4v1755517132549!5m2!1sid!2sid"
        title="maps location"
      />
    </main>
  );
};

export default Contact;
