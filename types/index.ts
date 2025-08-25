import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
};
