'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import BlurIn from '@/components/magicui/blur-in';
import WordRotate from "@/components/magicui/word-rotate";
import { useScroll, motion, useTransform } from 'framer-motion';
import NumberTicker from '@/components/magicui/number-ticker';
import { cn } from "@/lib/utils";
import TypingAnimation from "@/components/magicui/typing-animation";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { WarningTriangle } from '@/components/icons/WarningTriangle';
import { ArrowRight } from '@/components/icons/ArrowRight';
import WordPullUp from '@/components/magicui/word-pull-up';
import { IconModernInterface, IconBrowser, IconCommunity, IconDownload, IconCustomize, IconShield, IconCode } from '@/components/icons/FeatureIcons';
import { useInView } from 'react-intersection-observer';
import Marquee from '@/components/magicui/marquee';

// Features displayed on the bento grid
const features = [
  { rotateWord: "Feature 1", gradient: "from-blue-500 to-indigo-600", title: "Feature 1 Again", icon: IconModernInterface },
  { rotateWord: "Feature 2", gradient: "from-rose-500 to-red-600", title: "Feature 2 Again", icon: IconBrowser },
  { rotateWord: "Feature 3", gradient: "from-green-500 to-emerald-600", title: "Feature 3 Again", icon: IconCommunity },
  { rotateWord: "Feature 4", gradient: "from-cyan-500 to-teal-600", title: "Feature 4 Again", icon: IconDownload },
  { rotateWord: "Feature 5", gradient: "from-amber-500 to-yellow-600", title: "Feature 5 Again", icon: IconCustomize },
  { rotateWord: "Feature 6", gradient: "from-purple-500 to-fuchsia-600", title: "Feature 6 Again", icon: IconShield }
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const bentoGridRef = useRef(null);
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);


  const [apiStatus, setApiStatus] = useState('loading');

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Example testimonials
  const testimonials = [
    {
      quote: "This service has transformed my gaming experience. I can't imagine playing without it!",
      author: "Alex R."
    },
    {
      quote: "I love how user-friendly this platform is! It makes discovering new games so much fun.",
      author: "Maya T."
    },
    {
      quote: "The selection of games is incredible. I've found so many hidden gems here!",
      author: "Chris H."
    },
    {
      quote: "The download speeds are amazing. I can jump into my games almost instantly!",
      author: "Jessica B."
    },
    {
      quote: "I appreciate the regular updates and new releases. There's always something exciting to try!",
      author: "Liam J."
    },
    {
      quote: "The community feedback and reviews help me choose the best games. It's a game-changer!",
      author: "Nina W."
    },
    {
      quote: "I never knew I could access so many games in one place. This is a dream come true!",
      author: "Mark S."
    },
    {
      quote: "Customer support is top-notch! They really care about their users.",
      author: "Olivia P."
    },
    {
      quote: "I love the curated lists. They make finding new favorites so easy!",
      author: "Ethan M."
    },
    {
      quote: "This platform has everything I need. It's perfect for gamers like me!",
      author: "Chloe F."
    },
    {
      quote: "The interface is sleek and intuitive. I can navigate it effortlessly!",
      author: "Ryan C."
    },
    {
      quote: "I’ve met some amazing people through this community. It feels like home!",
      author: "Sophie D."
    },
    {
      quote: "The exclusive content available here is phenomenal. I feel like I'm part of something special!",
      author: "Tyler N."
    },
    {
      quote: "It's so refreshing to find a platform that truly values its gamers. I feel heard!",
      author: "Ava K."
    },
    {
      quote: "This has become my go-to platform for all my gaming needs. Highly recommend!",
      author: "Jake L."
    },
    {
      quote: "I love the diversity of games available. There's something for everyone!",
      author: "Grace T."
    },
    {
      quote: "I appreciate how easy it is to track my game progress. It's a great feature!",
      author: "Ben A."
    },
    {
      quote: "The integration with social features makes gaming even more enjoyable!",
      author: "Ella S."
    },
    {
      quote: "I've discovered so many new genres thanks to this platform. It's opened my eyes!",
      author: "Leo R."
    },
    {
      quote: "It's refreshing to find a service that keeps gamers' interests at heart. I'm a fan for life!",
      author: "Zoe M."
    }    
  ];



  useEffect(() => {
    setIsLoaded(true);
    const generatedId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('downloadId', generatedId);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bentoGridRef.current) {
      observer.observe(bentoGridRef.current);
    }

    return () => {
      if (bentoGridRef.current) {
        observer.unobserve(bentoGridRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setScrollProgress(Math.min(latest / 100, 1));
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('https://api.ascendara.app/', { method: 'HEAD' });
        setApiStatus(response.ok ? 'online' : 'offline');
      } catch (error) {
        console.error('Error checking API status:', error);
        setApiStatus('offline');
      }
    };

    checkApiStatus();
  }, []);

  const handleDownload = async () => {
    try {
      window.location.href = "https://installer.exe/";
    } catch (error) {
      console.error('Error starting download:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-12 pt-20 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10 z-0"></div>
      <div className={`absolute inset-0 bg-black z-20 transition-transform duration-1500 ease-in-out ${isLoaded ? 'translate-y-full' : 'translate-y-0'}`}></div>
      <div className="z-10 max-w-6xl w-full text-center">
        <BlurIn>
          <div className="flex items-center justify-center mb-4 pt-10">
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                  "transform hover:scale-105 transition-transform duration-300"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>Welcome to NightPanel</span>
                  <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </Link>
          </div>
          {apiStatus === 'offline' && (
            <Link href="https://status.ascendara.app/" className="w-full">
              <div className="bg-red-600 text-white h-2 p-4 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors duration-300">
                <WarningTriangle className="w-6 h-6 mr-2" />
                <span>API may be down. Check status page or Discord for updates.</span>
              </div>
            </Link>
          )}
          <WordPullUp words="Word Pullup Header" className="text-4xl md:text-7xl font-extrabold mb-6" />
        </BlurIn>

        <div ref={ref1}>
          <BlurIn isInView={inView1}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Describe your product or project here.
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
                Download Now
              </button>
              <Link href="/" target="_blank" rel="noopener noreferrer" className="bg-black text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-black">
                Another Button
              </Link>
            </div>
          </BlurIn>
          <div className="h-32"></div>
        </div>


        <div className="w-full mb-24">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block text-transparent text-white"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            >
              See What Others Have to Say
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Read over 100 testimonials from others around the world.
          </motion.p>
          
          <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            {[1, 2, 3].map((row, index) => (
              <Marquee
                  className="py-2"
                  reverse={index % 2 === 1}
                  pauseOnHover
                  onScroll={(e) => {
                    // Pause the scrolling when the user scrolls the page
                    e.target.classList.add('paused');
                  }}
                >
                {[...Array(30)].map((_, i) => {
                  const randomIndex = Math.floor(Math.random() * testimonials.length);
                  return (
                    <div
                      key={i}
                      className="inline-block mx-2 text-gray-300 text-sm md:text-base"
                    >
                      <p className="mb-2">
                        &quot;{testimonials[randomIndex].quote}&quot;
                      </p>
                      <p className="text-gray-400">
                        - {testimonials[randomIndex].author}
                      </p>
                    </div>
                  );
                })}
              </Marquee>
            ))}
          </div>
        </div>

        <div ref={ref4}>
          <BlurIn isInView={inView4}>
            <div ref={ref4}>
              <BlurIn isInView={inView4}>
                <h2 className="mb-4 text-4xl md:text-5xl font-bold text-white text-center">
                  Woah,{' '}
                  <TypingAnimation
                    words={["This Text Turns Into", "This text... then"]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    emptyPauseDuration={500}
                    pauseDuration={5000}
                    className="text-white"
                  />
                </h2>
                <h2 className="mb-24 text-4xl md:text-5xl font-bold text-white text-center">
                  <span className="inline-flex items-baseline">
                    Don't worry, we got{' '}
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
              className="grid grid-cols-4 gap-4 text-left mb-24 max-w-6xl mx-auto transition-all duration-1000 ease-out opacity-0 translate-y-20"
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative p-6 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-lg group
                    ${index === 0 ? "col-span-2 row-span-2" : 
                      index === 1 ? "col-span-2 row-span-1" :
                      index === 2 ? "col-span-1 row-span-2" :
                      index === 3 ? "col-span-1 row-span-1" :
                      "col-span-1 row-span-1"}
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {item.icon && (
                      <div className={`absolute top-2 right-2 w-12 h-12 opacity-20 group-hover:opacity-30 transition-all duration-300 group-hover:scale-110 ${index === 0 ? "w-16 h-16" : ""}`}>
                        <item.icon className={`w-full h-full ${item.gradient}`} />
                      </div>
                    )}
                    <div className="transition-transform duration-300 group-hover:-translate-y-2">
                      <h3
                        className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-2 ${index === 0 ? "text-xl" : ""}`}
                      >
                        {item.title}
                      </h3>
                      <p className={`text-gray-400 group-hover:text-white transition-colors duration-300 ${index === 0 ? "text-base" : "text-sm"}`}>
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
                          : "Enjoy a secure gaming environment backed by YOU. Ascendara's community verifies games, ensuring a safe and trustworthy platform for all users."
                        }
                      </p>
                    </div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
            <div className="mb-12 relative w-full max-w-6xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Here are some stats</h2>
                  <div className="space-y-8">
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-xl md:text-2xl mb-2">Downloaded by</p>
                      <div className="flex items-baseline">
                        <div className="text-6xl md:text-7xl font-medium tracking-tighter text-white">
                          <NumberTicker value={6500} />
                        </div>
                        <p className="text-xl md:text-2xl ml-2">people</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-xl md:text-2xl mb-2">Contributed by</p>
                      <div className="flex items-baseline">
                        <div className="text-6xl md:text-7xl font-medium tracking-tighter text-white">
                          <NumberTicker value={600} />
                        </div>
                        <p className="text-xl md:text-2xl ml-2">others</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-xl md:text-2xl mb-2">There are</p>
                      <div className="flex items-baseline">
                      <div className="text-6xl md:text-7xl font-medium tracking-tighter text-white">
                          <NumberTicker value={3} />
                        </div>
                        <p className="text-xl md:text-2xl ml-2">tickers on this site</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleDownload}
                    className="inline-block mt-8 bg-white text-black font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-white/60"
                  >
                    Download Today
                  </button>
                </div>
              </div>
            </div>
          </BlurIn>
        </div>

        <div className="mb-12 relative w-full max-w-6xl">
          <div className="relative">
              <HeroVideoDialog
                className="w-full h-full"
                thumbnailSrc="/thumbnail.png"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/usqQFbyQWBs?si=QLlRxKvg9SRY2Ue7"
              />
          </div>
        </div>
      </div>
    </main>
  );
}