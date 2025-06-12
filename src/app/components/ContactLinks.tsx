"use client";
import React from 'react';
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const ContactLinks: React.FC = () => {
  const links = [
    { icon: "lucide:mail", url: "mailto:mostafa.mmy.student3sec@gmail.com", label: "Email" },
    { icon: "lucide:phone", url: "tel:+201116988273", label: "Phone" },
    { icon: "lucide:map-pin", url: "#", label: "Tanta, Gharbia" },
    { icon: "lucide:globe", url: "https://mostafayaserdevportfolio.vercel.app/", label: "Portfolio" },
    { icon: "logos:linkedin-icon", url: "https://www.linkedin.com/in/mostafa-yaser", label: "LinkedIn" },
    { icon: "logos:facebook", url: "https://www.facebook.com/mostafa.elmarasy.10", label: "Facebook" },
    { icon: "logos:twitter", url: "https://x.com/MostafaYaserDev", label: "Twitter/X" },
    { icon: "logos:whatsapp-icon", url: "https://wa.me/+201116988273", label: "WhatsApp" },
    { icon: "logos:leetcode", url: "https://leetcode.com/u/mostafammy/", label: "LeetCode" },
    { icon: "logos:hackerrank", url: "https://www.hackerrank.com/profile/mostafa_mmy_10", label: "HackerRank" },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {links.map((link, index) => (
        <Button
          key={index}
          as="a"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          startContent={<Icon icon={link.icon} />}
          size="sm"
        >
          {link.label}
        </Button>
      ))}
    </div>
  );
};

export default ContactLinks;