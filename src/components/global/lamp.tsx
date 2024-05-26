'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SparklesCore } from './sparkles'
import { useTheme } from 'next-themes'

export function LampComponent() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const textClasses =
    theme === 'light'
      ? 'animate-text bg-gradient-to-r from-purple-100 via-purple-500 to-purple-950 bg-clip-text text-transparent font-black'
      : 'bg-gradient-to-br from-neutral-300 to-neutral-500 bg-clip-text dark:text-transparent';

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className={`mt-20 py-4 text-center text-4xl font-medium tracking-tight md:text-7xl ${textClasses}`}
      >
        Plans That
        <br /> Fit You Best
      </motion.h1>
    </LampContainer>
  )
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[800px] flex-col items-center justify-center overflow-hidden backdrop-blur-sm dark:backdrop-blur-2xl dark:bg-neutral-950 w-full rounded-md z-0',
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[15rem] md:w-[30rem] bg-gradient-conic to-neutral-100 dark:from-neutral-500 via-transparent dark:to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 dark:bg-neutral-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 dark:bg-neutral-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[15rem] md:w-[30rem] bg-gradient-conic dark:from-transparent via-transparent to-neutral-100 dark:to-neutral-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 dark:bg-neutral-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 dark:bg-neutral-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 dark:bg-neutral-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[14rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-neutral-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-30 h-36 w-32 md:w-64 -translate-y-[6rem] rounded-full bg-neutral-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-auto z-50 h-0.5 w-[15rem] md:w-[30rem] -translate-y-[7rem] bg-neutral-400"
        ></motion.div>

        <div className="w-[20rem] md:w-[40rem] h-40 relative">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] dark:bg-neutral-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}
