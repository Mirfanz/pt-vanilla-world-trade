import { SVGProps } from "react";
import { IconType } from "react-icons";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  adventage: string[];
  values: {
    icon: IconType;
    title: string;
    description: string;
  }[];
};
