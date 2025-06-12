"use client";
import React from 'react';
import { Card, CardBody } from "@heroui/react";

const LegacyQuote: React.FC = () => {
  return (
    <Card>
      <CardBody>
        <blockquote className="text-lg italic text-center">
          &#34;I&#39;m not here just to live — I&#39;m here to evolve, to leave something greater than myself behind.&#34;
        </blockquote>
      </CardBody>
    </Card>
  );
};

export default LegacyQuote;