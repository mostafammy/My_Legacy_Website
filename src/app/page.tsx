"use client";
import './globals.css'
import {Avatar, Card, CardBody, Divider} from "@heroui/react";
import {CardHeader} from "@heroui/card";
import BackgroundMusic from "@/app/components/BackgroundMusic";
import About from "@/app/components/About";
import ContactLinks from "@/app/components/ContactLinks";
import Timeline from "@/app/components/Timeline";
import LegacyQuote from "@/app/components/LegacyQuote";
export default function Home() {
  return (
      <div className="min-h-screen bg-background flex flex-col items-center p-4">
          <Card className="w-full max-w-4xl mb-8">
              <CardHeader className="flex flex-col items-center gap-3">
                  <Avatar
                      src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
                      size="lg"
                  />
                  <div className="flex flex-col items-center">
                      <h1 className="text-2xl font-bold">Welcome to the World of DaphiEternalSSJ</h1>
                      <p className="text-small text-default-500">Mostafa Yaser</p>
                  </div>
              </CardHeader>
              <CardBody>
                  <BackgroundMusic audioUrl="https://open.spotify.com/embed/track/4nEUSuOwUawlNB3KorNT2c"/>
                  <Divider className="my-4"/>
                  <About/>
                  <Divider className="my-4"/>
                  <ContactLinks/>
                  <Divider className="my-4"/>
                  <Timeline/>
                  <Divider className="my-4"/>
                  <LegacyQuote/>
              </CardBody>
          </Card>
      </div>
  );
}
