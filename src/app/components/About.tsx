"use client";
import { Accordion, AccordionItem } from "@heroui/react";

const About: React.FC = () => {
  return (
    <Accordion className="w-full max-w-4xl mx-auto">
      <AccordionItem 
        key="1" 
        aria-label="About" 
        title="About Mostafa Yaser"
        className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-xl"
      >
        <div className="p-6 text-gray-100 space-y-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Personal Information</h2>
            <p className="space-y-2">
              <span className="block"><span className="text-blue-300">Full Name:</span> Mostafa Yaser</span>
              <span className="block"><span className="text-blue-300">Nicknames:</span> DaphiEternalSSJ, DaphiSuperSaiyanUltra, DaphiCelestialGoku</span>
              <span className="block"><span className="text-blue-300">Location:</span> Tanta, Gharbia, Egypt</span>
              <span className="block"><span className="text-blue-300">Age:</span> 20</span>
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Mission & Passions</h2>
            <p className="space-y-2">
              <span className="block"><span className="text-blue-300">Mission:</span> To evolve and leave something greater behind.</span>
              <span className="block"><span className="text-blue-300">Passions:</span> Programming, Medicine, Robotics, Raising Children, Helping People</span>
              <span className="block"><span className="text-blue-300">Role Models:</span> Tony Stark (Iron Man), Goku</span>
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Connect With Me</h2>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/mostafa-yaser/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LinkedIn Profile
              </a>

            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">My Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 leading-relaxed mb-4">
                In a world where countless young people grow up confined by limits—geographical, societal, and even mental—Mostafa Yaser chose a different path.
                Born and raised in Basyoun, a modest town in Gharbia, Egypt, he refused early on to let his surroundings define his destiny. What made him different wasn&apos;t simply ambition—it was depth. A rare awareness of life&apos;s weight and purpose, forged not by privilege, but by observation, struggle, and a heart tuned to meaning.
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">A Mind That Refuses Simplicity</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Mostafa&apos;s passions are not hobbies. They are pieces of a whole person.
                • He is a medical student at New Valley University, not merely to earn a title but to understand the complex machinery of life. Medicine, for him, is not just healing bodies—it&apos;s unlocking how existence works on a cellular, human, and spiritual level.
                • At the same time, he is deeply immersed in technology. His love for programming, full-stack development, and web technologies reveals a mind that craves creation. He&apos;s built over 30 projects, including complex systems like sign-in/sign-up flows with secure backend logic, e-commerce platforms, and UI replications—all largely self-taught. This is not a side skill; it&apos;s a second field of expertise.
                • But it doesn&apos;t end there. Mostafa is a language enthusiast, pushing himself in English (C2), Arabic (Native), French (B1), and German (A1). To him, languages are keys—not only to opportunity but to people&apos;s souls and cultures.
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">What Drives Him: A Vision Too Big for One Field</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                While many are taught to specialize narrowly, Mostafa&apos;s dream is holistic. He wants to combine disciplines, to blend science, technology, and humanity into something greater.
                His goals are not just professional—they are philosophical.
                • To build companies that solve real problems, especially in health, education, and communication.
                • To raise a family of strength, ethics, and wisdom, viewing fatherhood as one of the noblest missions a man can pursue.
                • To uplift others—especially those who&apos;ve been ignored or unseen—by leaving a legacy in their hearts, even if he never meets them again.
                • To fund breakthroughs in physics, robotics, and AI—fields he loves but cannot yet pursue fully due to economic limitations.
                • To become wealthy not for vanity, but for freedom, to support innovations that could shift humanity forward.
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">His Inspirations: More Than Fiction</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                When Mostafa speaks of Tony Stark or Goku, he is not quoting from fantasy. He is referencing ideals.
                • From Tony Stark, he takes the principle of building despite your wounds, creating from both pain and genius.
                • From Goku, he adopts the never-ending pursuit of growth—not to be better than others, but to evolve past yourself, again and again.
                But his real role models aren&apos;t limited to fiction. They are every person who fights silently for goodness, those who choose purpose over comfort, kindness over clout, depth over display.
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">A Personal Philosophy</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                What makes Mostafa special is not just what he does—it&apos;s how he thinks.
                He is not obsessed with fame. He is obsessed with impact. He wants people to grow because of something he built, a word he shared, a moment he inspired.
                He often speaks about the reality that some people will only pass through your life once. So he leaves his mark with intention—through actions, not noise. Through help, not ego.
                He thinks about freedom, purity, and alignment—how to live in a way that honors your inner voice, even when the world distracts you.
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">In His Own Words</h3>
              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-200 mb-4">
                &quot;I want to help people. I want to lead a tech movement. I want to go to a country that helps me unlock my full potential. I want to meet people who are creative and value work deeply. I want to build businesses that solve real problems. I want to evaluate investment opportunities not for greed, but to support what matters. I want to be wealthy not to live lavishly, but to fund my passion for physics, robotics, and mathematics—fields I can&apos;t show the world yet, because of my financial situation.&quot;
              </blockquote>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">Why You Should Listen to His Story</h3>
              <p className="text-gray-200 leading-relaxed">
                If you&apos;re reading this, know this: Mostafa Yaser is not asking for attention—he is preparing for leadership.
                His story is not one of completed victories, but of someone building his wings while already flying.
                He is not a perfect man. He is a real one.
                And in a world where many chase likes, and few chase legacy—he&apos;s chosen the harder path.
                But it&apos;s the one that matters most.
              </p>
            </div>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default About;