"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import { siteConfig } from "@/config/site";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="">
      <section
        className=""
        style={{
          backgroundImage: "url(/images/bg2.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container relative backdrop-brightness-20 h-dvh">
          <div className="flex items-center w-full h-full">
            <div className="w-full text-white">
              <h3 className="text-xl font-bold mb-2 text-primary">
                Exportir Vanilla & Spices
              </h3>
              <h1 className="text-5xl font-bold mb-6">
                Nusantara Commodities International
              </h1>
              <p className="mb-10">
                <strong>PT Nusantara Commodities International</strong> is a
                company engaged in the export of Indonesian agricultural
                commodities, with a primary focus on vanilla and Nusantara
                spices.
              </p>
              <div className="flex gap-6">
                {/* <Button className="text-white" as={Link} href="/product" size="lg" variant="bordered" color="default">
                  Our Product
                </Button> */}
                <Button as={Link} color="primary" href="/contact" size="lg">
                  OUR PRODUCT
                </Button>
                <Button
                  isIconOnly
                  as={Link}
                  color="primary"
                  href={siteConfig.links.instagram}
                  radius="full"
                  size="lg"
                  variant="ghost"
                >
                  <FaInstagram size={24} />
                </Button>
                <Button
                  isIconOnly
                  as={Link}
                  color="primary"
                  href={siteConfig.links.linkedin}
                  radius="full"
                  size="lg"
                  variant="ghost"
                >
                  <FaLinkedin size={24} />
                </Button>
                <Button
                  isIconOnly
                  as={Link}
                  color="primary"
                  href={siteConfig.links.whatsapp}
                  radius="full"
                  size="lg"
                  variant="ghost"
                >
                  <FaWhatsapp size={24} />
                </Button>
              </div>
            </div>
            <div className="mx-32 text-white flex justify-center items-center relative">
              <div className="w-52 h-52 rounded-lg absolute bg-white opacity-10" />
              <div className="w-52 h-52 rounded-lg relative hover:scale-105 duration-300 overflow-hidden rotate-45">
                <Image
                  alt="Foto Vanila"
                  className="object-cover w-full h-full"
                  height={500}
                  src={"/images/bg3.jpg"}
                  width={500}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center m-3 absolute bottom-0 left-0 right-0">
            <div className="w-32 h-1 bg-white opacity-50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="flex items-center gap-6">
          <div className="">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="mb-4">
              <strong>PT Nusantara Commodities International</strong> is a
              company engaged in the export of Indonesian agricultural
              commodities, with a primary focus on vanilla and Nusantara spices.
              We are committed to bringing Indonesia’s finest natural products
              to the international market, delivering premium quality that meets
              global standards.
            </p>
            <p className="mb-4">
              <strong>PT Nusantara Commodities International</strong> focused on
              vanilla export, one of Indonesia’s flagship commodities known for
              its distinctive aroma and exceptional quality. Our vanilla is
              sourced directly from local farmers through sustainable
              partnerships.
            </p>
          </div>
          <div className="mx-24">
            <div className="w-80 h-80 relative not-hover:animate-pulse hover:scale-110 duration-300">
              <Image
                alt="Foto Vanila"
                className="object-cover w-full h-full"
                height={512}
                src={"/logo.png"}
                width={512}
              />
            </div>
            {/* <div className="w-72 h-72 not-hover:rounded-tl-[50%] not-hover:rounded-br-[50%] hover:rounded-tr-[50%] hover:rounded-bl-[50%] duration-300 overflow-hidden relative">
              <Image
                className="object-cover w-full h-full"
                src={"/images/bg3.jpg"}
                width={500}
                height={500}
                alt="Foto Vanila"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="container bg-[#EDEAEA] py-20">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl mb-4">Our Products</h2>
          <p className="max-w-xl text-center mx-auto">
            We offer a diverse range of premium vanilla and spices sourced
            directly from Indonesian farmers, ensuring quality and authenticity
            in every product.
          </p>
        </div>
        <div className="overflow-x-hidden">
          <div className="overflow-x-auto flex justify-center scrollbar-hide gap-20 mx-12">
            {siteConfig.products.map((item) => (
              <div key={item.href} className="w-xs">
                <Image
                  alt={item.name}
                  className="w-full object-cover !aspect-video rounded-lg mb-4"
                  height={256}
                  src={item.image}
                  width={256}
                />
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <Button as={Link} color="primary" href={item.href} size="sm">
                  View Product
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl mb-4">Why Choose Us?</h2>
          <p className="max-w-xl mx-auto">
            We prioritize quality, reliability, and sustainable partnerships
            with local farmers to deliver the finest Indonesian vanilla and
            spices to the global market.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {siteConfig.ourValues.map((item, i) => (
            <div
              key={"values-" + i}
              className="bg-foreground-200 hover:scale-105 hover:bg-primary hover:shadow-lg hover:!text-primary-foreground duration-300 p-4 rounded-lg w-full flex gap-2 flex-col items-center"
            >
              <item.icon className="my-4" size={50} />
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="container py-20 bg-secondary text-white">
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
      </section> */}
      <section className="container">
        <div className="p-10 rounded-xl bg-secondary text-white">
          <h3 className="text-primary mb-2 text-lg font-bold">ANY QUESTION</h3>
          <h2 className="text-4xl font-bold mb-6">
            Need more details about our products and services?
          </h2>
          <p className="mb-8">Contact us for a free consultation!</p>
          <Button color="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
