'use client';

import { ReactNode } from 'react';
import { motion, TargetAndTransition, Variant } from 'framer-motion';

type AnimationType = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'bounce';

interface AnimatedElementProps {
  children: ReactNode;
  type: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedElement({
  children,
  type,
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
}: AnimatedElementProps) {
  const animations: Record<AnimationType, { initial: Variant; animate: Variant }> = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    bounce: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }},
    },
  };

  const { initial, animate } = animations[type];

  return (
    <motion.div
      initial={initial as TargetAndTransition}
      whileInView={animate as TargetAndTransition}
      viewport={{ once }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 