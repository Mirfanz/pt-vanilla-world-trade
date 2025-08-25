import {
  FaBusinessTime,
  FaDollarSign,
  FaHandshake,
  FaMedal,
} from "react-icons/fa6";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PT. Nusantara Commodities International",
  description:
    "PT. Nusantara Commodities International is a leading company in the trade industry, specializing in high-quality products and exceptional customer service.",
  navItems: [
    {
      label: "Home",
      href: "/",
      active: /^\/$/,
    },
    {
      label: "About Us",
      href: "/about",
      active: /^\/about$/,
    },
    {
      label: "Product",
      href: "/product",
      active: /^\/product.*$/,
    },
    {
      label: "Gallery",
      href: "/gallery",
      active: /^\/gallery.*$/,
    },
    {
      label: "Blog",
      href: "/blog",
      active: /^\/blog.*$/,
    },
    {
      label: "Contact",
      href: "/contact",
      active: /^\/contact$/,
    },
  ],
  links: {
    github: "https://github.com/mirfanz",
    instagram: "https://www.instagram.com/nci_trade",
    whatsapp: "https://api.whatsapp.com/send?phone=6281992812420",
    linkedin:
      "https://www.linkedin.com/company/pt-nusantara-commodities-international",
  },

  products: [
    {
      slug: "vanilla-beans",
      name: "Vanilla Beans",
      description: "Premium quality vanilla beans sourced from the best farms.",
      image: "/images/7.png",
    },
  ],
  ourValues: [
    {
      title: "Premium Quality",
      description:
        "We ensure that every product goes through a strict selection and quality testing process.",
      icon: FaMedal,
    },
    {
      title: "Sustainability",
      description:
        "We collaborate with local farmers to build a fair and sustainable supply chain.",
      icon: FaBusinessTime,
    },
    {
      title: "Global Trust",
      description:
        "Our products are prepared to meet international export standards.",
      icon: FaHandshake,
    },
    {
      title: "Best Price",
      description:
        "We offer competitive pricing without compromising on quality, ensuring best value.",
      icon: FaDollarSign,
    },
  ],
  galleries: [
    {
      title: "Vanilla Beans",
      image: "/images/2.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/3.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/4.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/5.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/6.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/7.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/8.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/9.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/10.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/11.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/12.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/13.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/14.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/15.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/16.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/17.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/18.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/19.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/21.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/22.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/23.png",
    },
    {
      title: "Vanilla Beans",
      image: "/images/24.png",
    },
  ],
};
