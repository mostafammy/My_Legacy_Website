"use client";
import { Accordion, AccordionItem } from "@heroui/react";

const About: React.FC = () => {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="About" title="About Mostafa Yaser">
        <p>
          Full Name: Mostafa Yaser<br />
          Nicknames: DaphiEternalSSJ, DaphiSuperSaiyanUltra, DaphiCelestialGoku<br />
          Location: Tanta, Gharbia, Egypt<br />
          Age: 20<br />
          <br />
          Mission: To evolve and leave something greater behind.<br />
          Passions: Programming, Medicine, Robotics, Raising Children, Helping People<br />
          Role Models: Tony Stark (Iron Man), Goku
        </p>
      </AccordionItem>
    </Accordion>
  );
};

export default About;