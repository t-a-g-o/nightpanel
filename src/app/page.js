'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurIn from '@/components/magicui/blur-in';
import WordRotate from "@/components/magicui/word-rotate";
import { motion } from 'framer-motion';
import NumberTicker from '@/components/magicui/number-ticker';
import { cn } from "@/lib/utils";
import TypingAnimation from "@/components/magicui/typing-animation";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRight } from '@/components/icons/ArrowRight';
import WordPullUp from '@/components/magicui/word-pull-up';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import Marquee from '@/components/magicui/marquee';
import { IconPlaceholder } from '@/components/icons/IconPlaceholder';

const features = [
  { rotateWord: "Feature1", gradient: "from-blue-500 to-indigo-600", title: "Feature Title 1", icon: IconPlaceholder },
  { rotateWord: "Feature2", gradient: "from-rose-500 to-red-600", title: "Feature Title 2", icon: IconPlaceholder },
  { rotateWord: "Feature3", gradient: "from-green-500 to-emerald-600", title: "Feature Title 3", icon: IconPlaceholder },
  { rotateWord: "Feature4", gradient: "from-cyan-500 to-teal-600", title: "Feature Title 4", icon: IconPlaceholder },
  { rotateWord: "Feature5", gradient: "from-amber-500 to-yellow-600", title: "Feature Title 5", icon: IconPlaceholder },
  { rotateWord: "Feature6", gradient: "from-purple-500 to-fuchsia-600", title: "Feature Title 6", icon: IconPlaceholder },
  { rotateWord: "Feature7", gradient: "from-orange-500 to-pink-600", title: "Feature Title 7", icon: IconPlaceholder }
];

const testimonials = [
  { name: "Alex M.", role: "Gamer", text: "Ascendara revolutionized my gaming experience. It's so easy to use!" },
  { name: "Sarah L.", role: "Streamer", text: "The variety of games is incredible. I always find something new to stream." },
  { name: "Mike R.", role: "Developer", text: "As a dev, I appreciate the clean UI and smooth performance." },
  { name: "Emma K.", role: "Student", text: "Ascendara helps me unwind after long study sessions. Love it!" },
  { name: "David W.", role: "IT Professional", text: "The security features give me peace of mind while gaming." },
  { name: "Olivia P.", role: "Content Creator", text: "Ascendara's library is a goldmine for content ideas." },
  { name: "James T.", role: "Casual Gamer", text: "I've rediscovered my love for gaming thanks to Ascendara." },
  { name: "Sophie H.", role: "Esports Player", text: "The performance is top-notch. No lag, just pure gaming!" },
  { name: "Ryan B.", role: "Game Collector", text: "Finally, a platform that understands game preservation!" },
  { name: "Mia C.", role: "Artist", text: "The UI is beautiful. It's a joy to browse through the game library." },
  { name: "Daniel F.", role: "Retro Gamer", text: "I can relive my childhood games effortlessly. Thank you, Ascendara!" },
  { name: "Lily R.", role: "Mod Developer", text: "The community features are fantastic for sharing mods." },
  { name: "Ethan S.", role: "Tech Enthusiast", text: "Ascendara's innovative approach sets it apart from other platforms." },
  { name: "Zoe A.", role: "Family Gamer", text: "Great for family game nights. Something for everyone!" },
  { name: "Noah P.", role: "Speedrunner", text: "The quick launch feature is a game-changer for speedruns." },
  { name: "Ava M.", role: "Game Reviewer", text: "Ascendara makes game reviewing a breeze with its organized library." },
  { name: "Leo K.", role: "Indie Dev", text: "As an indie dev, I love how Ascendara supports small studios." },
  { name: "Isabella G.", role: "Twitch Streamer", text: "My viewers love when I discover hidden gems on Ascendara." },
  { name: "Oscar T.", role: "VR Enthusiast", text: "The VR game selection and integration is top-notch!" },
  { name: "Chloe B.", role: "Game Journalist", text: "Ascendara is always my go-to source for the latest gaming trends." },
];

export default function Home() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const bentoGridRef = useRef(null);

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  useEffect(() => {
    setShuffledTestimonials(shuffleArray([...testimonials]));
    setIsLoaded(true); // Add this line to set isLoaded to true
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleDownload = async () => {
    try {
      // Link to file to send to user
      window.location.href = "https://example.com/download";
    } catch (error) {
      console.error('Error starting download:', error);
    }
  };

  // Number of rows to display in the moving testimonials marquee
  const marqueeRows = 3;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-12 pt-20 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10 z-0"></div>
      <div className={`absolute inset-0 bg-black z-20 transition-transform duration-1500 ease-in-out ${isLoaded ? 'translate-y-full' : 'translate-y-0'}`}></div>
      <div className="z-10 max-w-6xl w-full text-center">
        <BlurIn>
          <div className="flex items-center justify-center mb-4 pt-10">
            <Link href="https://tago.works/" target="_blank" rel="noopener noreferrer">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                  "transform hover:scale-105 transition-transform duration-300"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>Button above Header</span>
                  <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </Link>
          </div>
          <WordPullUp words="Your Catchy Slogan Here" className="text-4xl md:text-7xl font-extrabold mb-6" />
        </BlurIn>

        <div ref={ref1}>
          <BlurIn isInView={inView1}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Your product description goes here. Highlight the main features and benefits of your application.
            </p>
          </BlurIn>
        </div>

        <div ref={ref2}>
          <BlurIn isInView={inView2}>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
              <button
                onClick={handleDownload}
                className="bg-black text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                Download Hero Button
              </button>
              <Link href="https://ascendara.app/docs" target="_blank" rel="noopener noreferrer" className="bg-black text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-black">
                Hero Button 2
              </Link>
            </div>
            <div className="flex justify-center mb-16">
              <Link href="/learn-more?feature=6" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/builtwith.svg"
                  alt="Built with"
                  width={450}
                  height={600}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </div>
          </BlurIn>
        </div>


        <div className="w-full mb-24 relative">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block text-white bg-clip-text"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            >
              What Our Users Say
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Join thousands of satisfied gamers who have made Ascendara their go-to gaming platform.
          </motion.p>
          
          <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            {Array.from({ length: marqueeRows }).map((_, index) => (
              <Marquee
                key={index}
                className="py-4"
                reverse={index % 2 === 1}
                pauseOnHover
              >
                {shuffledTestimonials.slice(index * Math.ceil(shuffledTestimonials.length / marqueeRows), (index + 1) * Math.ceil(shuffledTestimonials.length / marqueeRows)).map((testimonial, i) => (
                  <div key={i} className="mx-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 shadow-lg w-80">
                    <div className="mb-4">
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  </div>
                ))}
              </Marquee>
            ))}
          </div>
        </div>

        <div ref={ref4}>
          <BlurIn isInView={inView4}>
            <div ref={ref4}>
              <BlurIn isInView={inView4}>
                <h2 className="mb-4 text-4xl md:text-5xl font-bold text-white text-center">
                  Welcome to{' '}
                  <TypingAnimation
                    // You can add more text to the array to type more than two words
                    words={["Your Product", "Your Service"]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    emptyPauseDuration={500}
                    pauseDuration={5000}
                    className="text-white"
                  />
                </h2>
                <h2 className="mb-24 text-4xl md:text-5xl font-bold text-white text-center">
                  <span className="inline-flex items-baseline">
                    That's{' '}
                    <WordRotate
                      className="text-transparent bg-clip-text bg-gradient-to-r inline-block ml-2"
                      duration={3000}
                      words={features.map(f => f.rotateWord)}
                      gradients={features.map(f => f.gradient)}
                    />
                  </span>
                </h2>
              </BlurIn>
            </div>
          </BlurIn>
        </div>

        <div ref={ref5}>
          <BlurIn isInView={inView5}>
            <div
              ref={bentoGridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-24 max-w-6xl mx-auto"
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative p-6 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-lg group
                    ${index === 0 ? "sm:col-span-2 sm:row-span-2" : 
                      index === 1 ? "sm:col-span-2 sm:row-span-1" :
                      index === 2 ? "lg:col-span-1 lg:row-span-2" :
                      "col-span-1 row-span-1"}
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {item.icon && (
                      <div className={`absolute top-2 right-2 w-12 h-12 opacity-20 group-hover:opacity-30 transition-all duration-300 group-hover:scale-110 ${index === 0 ? "sm:w-16 sm:h-16" : ""}`}>
                        <item.icon className={`w-full h-full ${item.gradient}`} />
                      </div>
                    )}
                    <div className="transition-transform duration-300 group-hover:-translate-y-2">
                      <h3
                        className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-2 ${index === 0 ? "sm:text-xl" : ""}`}
                      >
                        {item.title}
                      </h3>
                      <p className={`text-gray-400 group-hover:text-white transition-colors duration-300 ${index === 0 ? "sm:text-base" : "text-sm"}`}>
                        {index === 0
                          ? "Ascendara was designed with a focus on simplicity, to provide a clean and seamless expierence. With an organized layout for browsing and library users can effortlessly navigate through content and access games."
                          : index === 1
                          ? "Experience constant evolution with frequent updates. As we move closer to leaving beta, expect more quality-of-life features and improvements."
                          : index === 2
                          ? "Navigate through a sleek, minimal UI powered by Next.js. The streamlined design focuses solely on browsing and managing your game library."
                          : index === 3
                          ? "Download and play immediately without extraction. Games are ready to launch as soon as they're downloaded."
                          : index === 4
                          ? "Access massive game libraries and enjoy unlimited game storage. Build your collection without limits, constrained only by your available disk space."
                          : index === 5
                          ? "Enjoy a secure gaming environment backed by YOU. Ascendara's community verifies games, ensuring a safe and trustworthy platform for all users."
                          : "Ascendara is built with cutting-edge technologies for optimal performance and user experience."
                        }
                      </p>
                    </div>
                    <div className="mt-4 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-2 group-hover:translate-y-0">
                      <Link
                        href={`/learn-more?feature=${index}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </BlurIn>
        </div>

        

        <div ref={ref6}>
          <BlurIn isInView={inView6}>
            <div className="mb-12 relative w-full max-w-6xl mx-auto">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Look at these numbers!</h2>
                <div className="space-y-8 w-full max-w-lg">
                  <div className="flex flex-col items-center">
                    <p className="text-xl md:text-2xl mb-2">Downloaded by</p>
                    <div className="flex items-baseline">
                      <div className="text-6xl md:text-7xl font-medium tracking-tighter text-white">
                        <NumberTicker value={32421} />
                      </div>
                      <p className="text-xl md:text-2xl ml-2">users</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>
                  <div className="flex flex-col items-center">
                    <p className="text-xl md:text-2xl mb-2">Over</p>
                    <div className="flex items-baseline">
                      <div className="text-6xl md:text-7xl font-medium tracking-tighter text-white">
                        <NumberTicker value={5000} />
                      </div>
                      <p className="text-xl md:text-2xl ml-2">accounts</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>
                  <div className="flex flex-col items-center">
                    <p className="text-xl md:text-2xl mb-2">This site has</p>
                    <div className="flex items-baseline">
                      <div className="text-6xl md:text-7xl font-medium tracking-tighter text-white">
                        <NumberTicker value={3} />
                      </div>
                      <p className="text-xl md:text-2xl ml-2">number tickers</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-x-4">
                  <button
                    onClick={handleDownload}
                    className="inline-block bg-white text-black font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-white/60"
                  >
                    Download Now
                  </button>
                  <Link target="_blank" rel="noopener noreferrer" href="/" className="inline-block bg-black text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-black/60">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </BlurIn>
        </div>
      </div>
    </main>
  );
}