'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconPlaceholder } from '@/components/icons/IconPlaceholder';

const features = [
  {
    title: "Feature 1",
    icon: IconPlaceholder,
    description: "Ascendara's interface prioritizes simplicity and efficiency, ensuring a smooth and intuitive user experience.",
    details: (
      <>
        <p>Ascendara was created with a focus on simplicity for newer users, and recognizable for anyone. Heres a deeper dive into its design and features:</p>
        <br />
        <p>• Streamlined Navigation: Easily browse through your library and content with a responsive layout designed for quick access and effortless navigation.</p>
        <br />
        <p>• Optimized for Performance: Ascendara's interface is built for speed, ensuring minimal load times and a consistent experience.</p>
        <br />
        <p>Ascendara is optimized for quick game launches, reducing the time between clicking 'Play' and actually starting your gaming session. This efficiency extends to background processes as well, ensuring minimal impact on system performance while you play.</p>
      </>
    )
  },
  {
    title: "Feature 2",
    icon: IconPlaceholder,
    description: "Enjoy seamless gameplay with easy troubleshooting options.",
    details: (
      <>
        <p>Ascendara is designed to provide a smooth, hassle-free gaming experience from start to finish. Here's how this is achieved:</p>
        <br />
        <p>• One-Click Play: After installation, launching your game is as simple as a single click. No need to navigate through multiple menus or deal with complicated launch procedures.</p>
        <br />
        <p>• Flexible Troubleshooting: In the rare event that you encounter issues, Ascendara offers the option to change the running executable file. This feature allows you to easily switch between different versions or launchers of a game, often resolving compatibility issues without the need for technical expertise.</p>
        <br />
        <p>The intuitive user interface is crafted for effortless navigation and game management. Whether you're browsing your library, installing new games, or adjusting settings, every action is designed to be straightforward and user-friendly.</p>
      </>
    )
  },
  {
    title: "Feature 3",
    icon: IconPlaceholder,
    description: "Contribute to Ascendara's growth and improvement through its open-source model.",
    details: (
      <>
        <p>Ascendara thrives on community involvement, embracing an open-source model that encourages user participation and collaboration. Here's how you can be part of the growing community:</p>
        <br />
        <p>• GitHub: Feature requests and issue reports are welcome directly on the GitHub repository. This approach allows users to actively shape the future of Ascendara.<Link href="https://github.com/tagoworks/ascendara" target="_blank" rel="noopener noreferrer"> View the source code here.</Link></p>
        <br />
        <p>• API: For developers the Ascendara API is public other than app reporting and other small features. The API mostly contains the games list and version numbers. You can learn more on how to use the API on the<Link href="https://github.com/tagoworks/ascendara" target="_blank" rel="noopener noreferrer"> GitHub</Link>.</p>
        <br />
        <p>By joining this collaborative environment, Ascendara will evolve to meet the needs and desires of its usersw.</p>
      </>
    )
  },
  {
    title: "Feature 4",
    icon: IconPlaceholder,
    description: "Ascendara is designed to be lightweight and efficient.",
    details: (
      <>
        <p>Ascendara is a resource-friendly application, designed to minimize impact on your gaming experience. Here's how this balance is achieved:</p>
        <br />
        <p>• Optimized Performance: Ascendara has minimal system impact during downloads and gameplay. This means you can run Ascendara alongside other applications without significant performance degradation.</p>
        <br />
        <p>• Wide Compatibility: Ascendara is optimized for a broad range of PC specifications. Whether you're running on a high-end gaming rig or a more modest setup, Ascendara adjusts to provide the best possible performance.</p>
        <br />
        <p>By focusing on efficiency, Ascendara ensures a smooth gaming experience without making your system try to much.</p>
      </>
    )
  },
  {
    title: "Feature 5",
    icon: IconPlaceholder,
    description: "Personalize your gaming experience with some of Ascendara's features.",
    details: (
      <>
        <p>Ascendara puts you in control of your gaming experience. Ascendara was made with various features to improve user expierence:</p>
        <br />
        <p>• Discord Rich Presence: Showcase your gaming activity on Discord with the integrated Rich Presence feature. Let your friends see what you're playing, how long you've been playing, and even join your game sessions directly.</p>
        <br />
        <p>• Add your Own Games: In the library, you can add your own custom games to launch through Ascendara. This means Ascendara can be your hub to all your games that you already play, and new downloaded ones.</p>
        <br /> 
        <p>These features ensure Ascendara can be used by anyone, as a download manager or your game launcher.</p>
      </>
    )
  },
  {
    title: "Feature 6",
    icon: IconPlaceholder,
    description: "Ascendara prioritizes user safety with trusted game sources and community verification.",
    details: (
      <>
        <p>Ascendara takes your safety seriously. Ascendara has a few different ways of ensuring a safe gaming environment:</p>
        <br />
        <p>• Trusted Sources: Games are sourced only from heavily tested and researched providers. Thorough vetting processes ensure the integrity and safety of every game on Ascendara.</p>
        <br />
        <p>• Community Trusted Games: Leveraging the power of the community, Ascendara implements a user-driven trust system. This allows players to contribute to the safety of Ascendara's games by:</p>
        <br />
        <ul>
          <li>Reporting suspicious content or behavior</li>
          <li>Providing feedback on game authenticity and performance</li>
          <li>Sharing experiences to help others make informed decisions</li>
        </ul>
        <br />
        <p>• Trust Marking: After successfully using a game without issues, you have the option to mark it as trusted. This feature helps build a reliable database of safe games within the community.</p>
        <br />
        <p>• Regular Security Updates: Security measures are continuously updated to address new threats and vulnerabilities, ensuring that Ascendara remains safe and secure for all users.</p>
        <br />
        <p>• Online-Fix Notifications: For games utilizing online-fix technology, you may receive a notification indicating that the game is "made by online-fix." This is normal and indicates that the online features are working correctly. These notifications are part of the legitimate functionality and should not cause concern.</p>
        <br />
        <p>By combining a few security measures with community involvement and transparent notifications, Ascendara creates a trustworthy environment for all your gaming needs.</p>
      </>
    )
  }
];

const ChevronDown = ({ isFlipped }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 transition-transform duration-300 ${isFlipped ? 'transform rotate-180' : ''}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

function LearnMoreContent() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const featureRefs = useRef(features.map(() => useRef(null)));
  const techStackRef = useRef(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const featureParam = searchParams.get('feature');
    if (featureParam === '6') {
      techStackRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      const featureIndex = parseInt(featureParam, 10);
      if (!isNaN(featureIndex) && featureIndex >= 0 && featureIndex < features.length) {
        setExpandedFeature(featureIndex);
        featureRefs.current[featureIndex].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [searchParams]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-12 pt-32 md:pt-20 bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Learn More About Ascendara</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isExpanded = expandedFeature === index;
          return (
            <motion.div
              key={index}
              ref={featureRefs.current[index]}
              className="bg-black border border-white text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, borderColor: 'rgb(229, 231, 235)' }}
            >
              <div className="flex items-center mb-4">
                {Icon && <Icon className="w-10 h-10 mr-4 text-white" />}
                <h2 className="text-2xl font-semibold text-white">{feature.title}</h2>
              </div>
              <p className="mb-4 text-white">{feature.description}</p>
              <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="text-white space-y-2">
                  {feature.details}
                </div>
              </motion.div>
              <button
                className="mt-4 text-white hover:text-gray-200 transition-colors duration-200 flex items-center"
                onClick={() => setExpandedFeature(isExpanded ? null : index)}
              >
                {isExpanded ? 'Hide Details' : 'Read More'}
                <ChevronDown isFlipped={isExpanded} className="ml-2" />
              </button>
            </motion.div>
          );
        })}
      </div>
      <div ref={techStackRef} className="mt-16 w-full max-w-6xl">
        <motion.div
          className="bg-black border border-white text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.02, borderColor: 'rgb(229, 231, 235)' }}
        >
          <h1 className="mb-4 text-2xl font-semibold text-white">Feature 7 / Tech Stack</h1>
          <div className="text-white space-y-2">
            <p>Ascendara leverages a modern tech stack to deliver a fast, responsive, and feature-rich gaming platform:</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Python:</strong> Powers the backend, handling game downloads, installations, and server-side operations with efficiency and reliability.</li>
              <li><strong>JavaScript:</strong> The primary language for frontend development, enabling dynamic and interactive user interfaces.</li>
              <li><strong>React:</strong> A JavaScript library for building user interfaces, allowing for efficient updates and rendering of components.</li>
              <li><strong>Next.js:</strong> A React framework that enables server-side rendering and generates static websites for faster page loads and improved SEO.</li>
              <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.</li>
              <li><strong>Electron:</strong> Enables the creation of cross-platform desktop applications using web technologies, allowing Ascendara to run as a native desktop app.</li>
              <li><strong>TypeScript:</strong> A typed superset of JavaScript that compiles to plain JavaScript, adding optional static typing for improved code quality and developer productivity.</li>
              <li><strong>Framer Motion:</strong> A production-ready motion library for React that powers animations and transitions in the UI.</li>
            </ul>
           </div>
        </motion.div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl pt-16 font-semibold mb-4 text-white">Roadmap</h2>
        <p className="mb-6 max-w-2xl mx-auto text-white">Here you can put links to show your roadmap to other users.</p>
        <Link target="_blank" rel="noopener noreferrer" href="/" className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200">
          View Roadmap
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </main>
  );
}

export default function LearnMore() {
  return (
    <Suspense>
      <LearnMoreContent />
    </Suspense>
  );
}