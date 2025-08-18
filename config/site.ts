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
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Product",
      href: "/product",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Product",
      href: "/product",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Settings",
      href: "/settings",
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
      name: "Vanilla Beans",
      description: "Premium quality vanilla beans sourced from the best farms.",
      image: "/images/bg2.jpg",
      href: "/product/vanilla-beans",
    },
    {
      name: "Spices",
      description:
        "A variety of spices including cinnamon, cloves, and nutmeg.",
      image: "/images/bg3.jpg",
      href: "/product/spices",
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
};
