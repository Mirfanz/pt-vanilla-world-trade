"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="">
      <section className="" style={{ backgroundImage: "url(/images/bg1.jpg)", backgroundSize: "cover" }}>
        <div className="container relative backdrop-brightness-50 h-dvh">
          <div className="flex items-center w-full h-full">
            <div className="w-full text-white">
              <h3 className="text-xl font-bold mb-2">Explore Your Ability</h3>
              <h1 className="text-6xl font-bold mb-6">Vanilla World Trade</h1>
              <p className="mb-10">
                Welcome to Vanilla World Trade, your trusted partner in high-quality charcoal exports. We specialize in
                delivering premium-grade charcoal products sourced directly from Indonesia's sustainable and abundant natural
                resources.
              </p>
              <div className="flex gap-4">
                <Button className="text-white" size="lg" radius="none" variant="bordered" color="default">
                  Our Product
                </Button>
                <Button size="lg" radius="none" color="primary">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="mx-32 text-white">
              <div className="w-52 h-52 rotate-45 rounded-lg bg-white opacity-10"></div>
            </div>
          </div>
          <div className="flex justify-center m-3 absolute bottom-0 left-0 right-0">
            <div className="w-32 h-1 bg-white opacity-50 rounded-full"></div>
          </div>
        </div>
      </section>
      <section className="container py-20">
        <div className="flex items-center gap-6">
          <div className="">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="mb-4">
              Welcome to <strong>Vanilla World Trade</strong>, your trusted partner in high-quality charcoal exports. We
              specialize in delivering premium-grade charcoal products sourced directly from Indonesia's sustainable and
              abundant natural resources. Our commitment to excellence and environmental responsibility ensures that our
              products meet the highest international standards.
            </p>
            <p>
              <strong>Vanilla World Trade</strong> is a leading exporter of high-quality charcoal products, catering to
              clients worldwide. Established with a vision to bring Indonesia's natural resources to the global market, we
              prioritize sustainability, quality, and customer satisfaction.
            </p>
          </div>
          <div className="mx-32">
            <div style={{ borderRadius: "0 50%" }} className="w-72 h-72 bg-red-500 overflow-hidden relative">
              <Image
                className="object-cover w-full h-full"
                src={"/images/bg1.jpg"}
                width={500}
                height={500}
                alt="Foto Vanila"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-[#EDEAEA] py-20">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl mb-4">Our Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="overflow-x-hidden">
          <div className="overflow-x-auto flex scrollbar-hide gap-20 mx-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item + "dddf"} className="bg-foreground-200 rounded-lg min-w-72 h-72">
                Lorem, ipsum dolor.
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl mb-4">Why Choose Us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="grid grid-cols-4 justify-evenly content-evenly gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item + "dd"} className="bg-foreground-200 min-w-72 h-92">
              Lorem, ipsum dolor.
            </div>
          ))}
        </div>
      </section>
      <section className="container py-20 bg-secondary text-white">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl mb-4">Our Products Expertise?</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="grid grid-cols-3 justify-evenly content-evenly gap-10">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item + "ds"} className="border p-5 border-solid border-white">
              <h3 className="text-primary mb-3 font-bold text-xl">Premium Quality Standards</h3>
              <p className="text-base">
                Every product we offer is carefully crafted using high-quality raw materials and stringent quality control
                processes to ensure exceptional performance and customer satisfaction.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl mb-4">Blog</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="grid grid-cols-3 justify-evenly content-evenly gap-10">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border p-5 border-solid border-white">
              <h3 className="text-primary mb-3 font-bold text-xl">Premium Quality Standards</h3>
              <p className="text-base">
                Every product we offer is carefully crafted using high-quality raw materials and stringent quality control
                processes to ensure exceptional performance and customer satisfaction.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="container">
        <div className="p-10 rounded-xl bg-secondary text-white">
          <h3 className="text-primary mb-2 text-lg font-bold">QUESTION</h3>
          <h2 className="text-4xl font-bold mb-6">Need more details about our products?</h2>
          <p className="mb-8">Call us now for a free consultation!</p>
          <Button size="lg" radius="none" color="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
