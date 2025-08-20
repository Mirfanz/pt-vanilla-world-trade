"use client";

import { Skeleton } from "@heroui/skeleton";
import React from "react";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <main className="container">
      <h2 className="text-5xl font-bold text-center mt-12 mb-14">GALLERY</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Skeleton key={item} className="aspect-video w-full"></Skeleton>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
