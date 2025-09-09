import { notFound } from "next/navigation";

import DetailProduct from "@/components/detail-product";
import { siteConfig } from "@/config/site";

export default async function DetailProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = siteConfig.products.filter((item) => item.slug === slug)[0];

  if (!result) notFound();

  return <DetailProduct slug={slug} />;
}
