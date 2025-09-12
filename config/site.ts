import {
  FaBusinessTime,
  FaClock,
  FaClockRotateLeft,
  FaCubesStacked,
  FaDollarSign,
  FaHandshake,
  FaLeaf,
  FaLocationPinLock,
  FaMedal,
  FaShieldHalved,
  FaTimeline,
  FaTruck,
  FaUserCheck,
  FaVirusCovidSlash,
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
    // {
    //   label: "Gallery",
    //   href: "/gallery",
    //   active: /^\/gallery.*$/,
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    //   active: /^\/blog.*$/,
    // },
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
      slug: "vanilla-beans-a",
      name: "Vanilla Beans A",
      description:
        "Grade A represents the highest quality vanilla beans, dark glossy in appearance with high vanillin content, supple texture, and a rich sweet aroma. Perfect for premium food industries, bakeries, ice cream, and perfumery.",
      image: "/images/7.png",
      benefits: [
        "Enhances the luxury taste and aroma of gourmet products.",
        "Increases the market value and exclusivity of end products.",
        "Delivers consistent quality for premium applications.",
        "Strengthens brand reputation with authentic natural vanilla.",
      ],
      adventage: [
        "Length 15–20 cm with optimal moisture",
        "Strong, naturally sweet aroma",
        "Ideal for high-end international markets",
      ],
      values: [
        {
          icon: FaHandshake,
          title: "Trusted Supplier",
          description:
            "Trusted supplier with strict quality control and grading standards.",
        },
        {
          icon: FaVirusCovidSlash,
          title: "Carefully Cured",
          description:
            "Beans are cured traditionally to preserve natural richness.",
        },
        {
          icon: FaClock,
          title: "Long Term Supply",
          description: "Reliable long-term supply chain for global partners.",
        },
        {
          icon: FaTruck,
          title: "Source Directly",
          description:
            "Direct sourcing from Indonesian farmers with sustainable practices.",
        },
      ],
    },
    {
      slug: "vanilla-beans-b",
      name: "Vanilla Beans B",
      description:
        "Grade B vanilla beans are mid-grade, typically used for extraction. Lighter in appearance compared to Grade A, but still carry strong signature aroma.",
      image: "/images/5.png",
      benefits: [
        "Cost-effective choice for large-scale production.",
        "Maintains the authentic vanilla aroma for extracts and flavorings.",
        "Provides flexibility for food and beverage manufacturers.",
        "Ideal balance of price and quality.",
      ],
      adventage: [
        "More economical price.",
        "Perfect for vanilla extract production.",
        "Length 12–15 cm, with lower moisture content.",
      ],
      values: [
        {
          icon: FaTimeline,
          title: "Consistent Grading",
          description: "Consistent grading and supply for industrial use.",
        },
        {
          icon: FaShieldHalved,
          title: "Trusted Partner",
          description:
            "Trusted by global manufacturers for extract production.",
        },
        {
          icon: FaClockRotateLeft,
          title: "Sustainable Sourcing",
          description: "Sustainable sourcing ensures reliable shipments.",
        },
        {
          icon: FaUserCheck,
          title: "Expert Support",
          description: "Supported by NCI’s export expertise and customer care.",
        },
      ],
    },
    {
      slug: "vanilla-beans-c",
      name: "Vanilla Beans C",
      description:
        "Grade C vanilla is an option for large-scale industrial needs, with less perfect appearance but still retains distinctive vanilla aroma.",
      image: "/images/8.png",
      benefits: [
        "Maximizes cost efficiency without losing vanilla’s essence.",
        "Suitable for industries requiring bulk volume.",
        "Maintains natural aroma in large-scale processed goods.",
        "Accessible entry point for price-sensitive markets.",
      ],
      adventage: [
        "Most affordable option.",
        "Suitable for mass food processing industries.",
        "Alternative for bulk extraction.",
      ],
      values: [
        {
          icon: FaTimeline,
          title: "Consistent Quality",
          description: "Standardized quality even in lower grades.",
        },
        {
          icon: FaCubesStacked,
          title: "Reliable Supply",
          description: "Reliable bulk supply for international industries.",
        },
        {
          icon: FaDollarSign,
          title: "Competitive Pricing",
          description: "Competitive pricing with guaranteed authenticity.",
        },
        {
          icon: FaUserCheck,
          title: "Expert Support",
          description: "Commitment to sustainable and ethical sourcing.",
        },
      ],
    },
    {
      slug: "vanilla-powder",
      name: "Vanilla Powder",
      description:
        "NCI’s vanilla powder is made from high-quality dried vanilla beans, finely ground to produce intense aroma and easy-to-use form for various applications.",
      image: "/images/10.png",
      benefits: [
        "Versatile for food, beverage, and cosmetic industries.",
        "Offers a convenient and consistent vanilla solution.",
        "Enhances flavors without altering product texture.",
        "Long-lasting aroma and easy storage.",
      ],
      adventage: [
        "Easy to blend in recipes.",
        "Stable, long shelf life, and practical.",
        "High aroma concentration.",
      ],
      values: [
        {
          icon: FaLeaf,
          title: "Purity",
          description: "100% pure, no additives or artificial flavoring.",
        },
        {
          icon: FaLocationPinLock,
          title: "Authenticity",
          description: "Sourced from authentic Indonesian vanilla.",
        },
        {
          icon: FaCubesStacked,
          title: "Reliability",
          description: "Reliable supply chain tailored for global markets.",
        },
        {
          icon: FaUserCheck,
          title: "Expertise",
          description:
            "Backed by NCI’s quality assurance and export standards.",
        },
      ],
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
