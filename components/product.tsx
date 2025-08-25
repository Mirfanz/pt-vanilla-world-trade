"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";

import { siteConfig } from "@/config/site";

type Props = {};

const Product = (props: Props) => {
  return (
    <main className="container">
      <h2 className="text-5xl font-bold text-center mt-12 mb-14">
        OUR <span className="text-primary">PRODUCT</span>
      </h2>
      <div className="grid lg:gap-8 gap-12 grid-cols-1 lg:grid-cols-3">
        {siteConfig.products.map((item) => (
          <div key={item.slug} className="flex flex-col">
            {/* <Skeleton className="h-48 mb-4" /> */}
            <Image
              alt={"Photo " + item.name}
              className="mb-4"
              height={500}
              src={item.image}
              width={500}
            />
            <h3 className="text-xl font-semibold mb-3">{item.name}</h3>

            <p className="line-clamp-4 text-foreground-600 text-justify mb-4">
              {item.description}
            </p>
            <Button
              as={Link}
              color="primary"
              href={`/product/${item.slug}`}
              variant="ghost"
            >
              View Product
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
