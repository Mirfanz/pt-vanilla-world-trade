"use client";

import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

import { siteConfig } from "@/config/site";

type Props = {};

const FAB = (props: Props) => {
  return (
    <div className="sticky bottom-4 px-4 mb-2 flex justify-end">
      <Button
        as={Link}
        className="animate-bounce"
        color="success"
        href={siteConfig.links.whatsapp}
        radius="full"
        startContent={<FaWhatsapp className="text-base" />}
        target="_blank"
        variant="shadow"
      >
        WhatsApp
      </Button>
    </div>
  );
};

export default FAB;
