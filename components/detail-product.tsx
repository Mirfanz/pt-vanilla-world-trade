"use client";

import Image from "next/image";
import React from "react";

import { Product } from "@/types";

type Props = {
  product: Product;
};

const DetailProduct = ({ product }: Props) => {
  return (
    <main>
      <div className="container mt-4 lg:mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex lg:min-w-96 lg:w-96 flex-col gap-6">
            <Image
              alt={"Photo " + product.name}
              className="aspect-square shadow-2xl rounded-lg object-cover"
              height={500}
              src={product.image}
              width={500}
            />
            {/* <div className="flex gap-2 justify-center">
              <Skeleton className="h-2 aspect-square rounded-full" />
              <Skeleton className="h-2 aspect-square rounded-full" />
              <Skeleton className="h-2 aspect-square rounded-full" />
              <Skeleton className="h-2 aspect-square rounded-full" />
              <Skeleton className="h-2 aspect-square rounded-full" />
            </div> */}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl lg:text-5xl font-bold">{product.name}</h1>
            <p className="text-base">{product.description}</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            doloremque facere rerum dolore beatae quod, placeat qui assumenda
            voluptate voluptatem deleniti numquam quidem, inventore ullam atque
            totam ratione natus a iusto ipsa blanditiis dolores excepturi quam
            tempora? Praesentium, reiciendis earum eos aperiam ad eum, quisquam
            eaque amet recusandae odio officia?
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailProduct;
