"use client";

import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <main className="container">
      <h2 className="text-5xl font-bold text-center mt-12 mb-14">
        ABOUT <span className="text-primary">US</span>
      </h2>
      <section className="mb-6">
        <p>
          <strong>PT Nusantara Commodities International</strong> is a company
          engaged in the export of Indonesian agricultural commodities, with a
          primary focus on vanilla and Nusantara spices. We are committed to
          bringing Indonesia’s finest natural products to the international
          market, delivering premium quality that meets global standards.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold text-xl mb-1">Main Focus</h3>
        <p>
          Currently, our main focus is on vanilla export, one of Indonesia’s
          flagship commodities known for its distinctive aroma and exceptional
          quality. Our vanilla is sourced directly from local farmers through
          sustainable partnerships.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="font-bold text-xl mb-2">Our Products</h3>
        <ol className="list-inside list-decimal px-4">
          <li>Vanilla beans (whole pods)</li>
        </ol>
      </section>
      <section className="mb-6">
        <h3 className="font-bold text-xl mb-2">Our Values</h3>
        <ol className="list-inside list-decimal px-4">
          <li>
            Premium Quality – We ensure that every product goes through a strict
            selection and quality testing process.
          </li>
          <li>
            Sustainability – We collaborate with local farmers to build a fair
            and sustainable supply chain.
          </li>
          <li>
            Global Trust – Our products are prepared to meet international
            export standards.
          </li>
          <li>
            Best Price - We offer competitive pricing without compromising on
            quality, ensuring best value.
          </li>
        </ol>
      </section>
      <section className="mb-6">
        <h3 className="font-bold text-xl mb-1">Vision</h3>
        <p>
          To become a trusted exporter of vanilla and Nusantara spices in the
          global market by delivering the highest quality and professional
          services.
        </p>
      </section>
      <section className="">
        <h3 className="font-bold text-xl mb-2">Mission</h3>
        <ol className="list-inside list-disc px-4">
          <li>
            To connect Indonesia’s finest vanilla and spices with buyers
            worldwide through professional and reliable export services.
          </li>
          <li>
            To uphold the highest quality standards with a commitment to
            integrity, authenticity, and sustainability.
          </li>
          <li>
            To build long-term partnerships based on trust, transparency, and
            mutual growth with global buyers and distributors.
          </li>
          <li>
            To empower and support local farmers through fair trade practices
            and sustainable agriculture.
          </li>
        </ol>
      </section>
    </main>
  );
};

export default AboutUs;
