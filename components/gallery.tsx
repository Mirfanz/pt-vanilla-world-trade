"use client";

import Image from "next/image";
import React from "react";

import { siteConfig } from "@/config/site";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <main className="container">
      <h2 className="text-5xl font-bold text-center mt-12 mb-14">GALLERY</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {siteConfig.galleries.map((item, i) => (
          <div key={item.image} className="relative overflow-hidden">
            <Image
              alt={item.title}
              className="aspect-square w-full hover:scale-110 duration-200"
              height={500}
              loading="lazy"
              src={item.image}
              width={500}
            />
            <div className="bg-black/30 text-white absolute bottom-0 left-0 right-0 p-2">
              {i + 1}. {item.title}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
