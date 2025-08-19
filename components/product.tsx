"use client";

import React from "react";
import { Skeleton } from "@heroui/skeleton";

type Props = {};

const Product = (props: Props) => {
  return (
    <main className="container">
      <h2 className="text-5xl font-bold text-center mt-12 mb-14">
        OUR <span className="text-primary">PRODUCT</span>
      </h2>
      <div className="grid gap-8 grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="flex flex-col">
            <Skeleton className="h-48 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Product Name {item}</h3>

            <p className="line-clamp-4 text-foreground-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              repudiandae odit aliquam sed nulla expedita ducimus dolor optio
              adipisci hic quibusdam numquam deleniti tempora perferendis, ipsum
              impedit natus amet, itaque a eveniet. Tempore aliquam et sunt.
              Distinctio ratione ex maxime tenetur, cumque omnis voluptatem, aut
              aspernatur necessitatibus excepturi, at qui.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
