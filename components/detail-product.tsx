"use client";

import Image from "next/image";
import React from "react";
import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "@heroui/button";

import { Product } from "@/types";
import { siteConfig } from "@/config/site";

type Props = {
  slug: string;
};

const DetailProduct = ({ slug }: Props) => {
  const product: Product = siteConfig.products.filter(
    (item) => item.slug === slug,
  )[0];

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
            <div className="flex gap-3 justify-center items-center">
              <Button isIconOnly className="" variant="light">
                <FaChevronLeft className="text-xl" />
              </Button>
              <Skeleton className="h-12 w-12 rounded-lg" />
              <Skeleton className="h-12 w-12 rounded-lg outline-2 outline-amber-500" />
              <Skeleton className="h-12 w-12 rounded-lg" />
              <Button isIconOnly className="" variant="light">
                <FaChevronRight className="text-xl" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 mb-4">
            <h1 className="text-3xl lg:text-5xl font-bold">{product.name}</h1>
            <p className="text-base mb-4">{product.description}</p>
            <Card className="p-6 w-full">
              <h3 className="font-semibold text-xl mb-2">Benefits</h3>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="text-base list-disc list-inside">
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 w-full mb-4">
              <h3 className="font-semibold text-xl mb-2">Adventage</h3>
              <ul>
                {product.adventage.map((adventage, index) => (
                  <li key={index} className="text-base list-disc list-inside">
                    {adventage}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {product.values.map((item) => (
            <Card key={item.title} className="flex-row p-3 gap-3">
              <div className="aspect-square h-full p-2 flex justify-center items-center">
                <item.icon className="text-primary w-14 h-14" />
              </div>
              <div className="">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DetailProduct;
