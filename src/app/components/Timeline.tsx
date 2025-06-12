"use client";
import React from 'react';
import { Card, CardBody } from "@heroui/react";

const Timeline: React.FC = () => {
  const events = [
    { year: 2020, title: "Started Programming Journey" },
    { year: 2022, title: "First Major Project Completion" },
    { year: 2023, title: "Internship at Tech Company" },
    { year: 2024, title: "Graduated from University" },
    { year: 2025, title: "Launched Personal Legacy Website" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Timeline / Achievements</h2>
      {events.map((event, index) => (
        <Card key={index}>
          <CardBody>
            <h3 className="font-bold">{event.year}</h3>
            <p>{event.title}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Timeline;