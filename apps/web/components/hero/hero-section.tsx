"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@workspace/ui/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@workspace/ui/components/hero/text-effect'
import { AnimatedGroup } from '@workspace/ui/components/hero/animated-group'
import { HeroHeader } from './header'
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedGradientText } from '@workspace/ui/components/ui/animated-gradient-text'
import { cn } from '@workspace/ui/lib/utils'
import { getCalApi } from '@calcom/embed-react'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
} as const

const gradientColors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F'
]




export default function HeroSection() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                layout: "month_view",
                hideEventTypeDetails: false,
            });
        })();
    }, []);

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                {/* <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Product Engineering. Enterprise Infrastructure. AI at the Core.</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup> */}
                                {/* <AnimatedGroup variants={transitionVariants}>
                                    <div className="relative mx-auto w-fit rounded-full p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md shadow-zinc-950/5">
                                        <Link
                                            href="#link"
                                            className="hover:bg-background dark:hover:border-t-border bg-muted group flex items-center gap-4 rounded-full border border-transparent p-1 pl-4 dark:border-t-white/5 dark:shadow-zinc-950 transition-colors duration-300"
                                        >
                                            <span className="text-foreground text-sm">
                                                Product Engineering. Enterprise Infrastructure. AI at the Core.
                                            </span>
                                            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                                            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </AnimatedGroup> */}
                                <AnimatedGroup variants={transitionVariants}>
                                    <div className="relative mx-auto w-fit rounded-full p-[1px]" style={{
                                        background: 'linear-gradient(90deg, #FF5733, #33FF57, #3357FF, #F1C40F)'
                                    }}>
                                        <Link
                                            href="#link"
                                            className="hover:bg-background dark:hover:border-t-border bg-muted group flex items-center gap-4 rounded-full border border-transparent p-1 pl-4 dark:border-t-white/5 dark:shadow-zinc-950 transition-colors duration-300"
                                        >
                                            <span className="text-foreground text-sm">
                                                Launched 50+ MVPs in just 3 months
                                            </span>
                                            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                                            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </AnimatedGroup>





                                {/* <RotatingTextLink /> */}

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-5 text-balance text-6xl md:text-7xl lg:mt-8 xl:text-[5.25rem]">
                                    Build MVP. Reach Millions. Leave the Tech to Us.
                                    {/* MVP Today. Millions Tomorrow. No CTO Needed */}
                                    {/* Launch MVP. Scale Smart. Grow Big */}
                                    {/* From MVP to Enterprise — We Power Unlimited Growth */}
                                    {/* Launch MVP. Scale to Enterprise. Grow Without Limits */}
                                    {/* We Build Software That Scales From MVP to Millions */}
                                    {/* From MVP to Millions of Users — We Engineer for Scale */}
                                    {/* Launch Fast. Scale to Millions */}
                                    {/* No CTO? No Dev Team? No Worries. */}
                                    {/* MVP? CTO? No Tech Team? No Problem. */}
                                    {/* MVP? CTO? Tech Team? Enterprise Systems? */}
                                    {/* Your Tech Partner — From MVP to Millions */}
                                    {/* MVP to Enterprise Systems — We Build It All */}
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    {/* Oceanlab helps startups and enterprises turn ideas into scalable, intelligent software — fast. From launch-ready MVPs to global systems serving millions. */}
                                    Oceanlab helps startups and enterprises turn ideas into scalable, intelligent software — fast. From launch-ready MVPs to global systems serving millions.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    {/* <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Book a Discovery Call</span>
                                            </Link>
                                        </Button>
                                    </div> */}
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                                    >
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base"
                                            data-cal-namespace="30min"
                                            data-cal-link="vanshdev/30min"
                                            data-cal-config='{"layout":"month_view"}'
                                        >
                                            <Link href="#">
                                                <span className="text-nowrap">Book a Discovery Call</span>
                                            </Link>
                                        </Button>
                                    </div>


                                    {/* <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button> */}
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/abcfinal.png"
                                        alt="app screen"
                                        width="3000"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/abcfinal.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}


export function RotatingTextLink() {
    const messages = [
        "🚀 Launched 50+ MVPs in just 3 months with $50M+ in funding",
        "🌍 Serving 30M+ users globally in real-time",
        "🤖 AI is deeply integrated — not an afterthought ",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
        >
            {/* <Link
        href="#link"
        className="group mx-auto flex w-fit max-w-full items-center gap-4 rounded-full border bg-muted px-3 py-1.5 shadow-md transition-colors duration-300 hover:bg-background dark:border-white/10"
      > */}
            <Link
                href="#link"
                className="group mx-auto flex w-fit max-w-full items-center gap-4 rounded-full  px-3 py-1.5 shadow-md transition-colors duration-300 bg-background dark:border-white/10"
            >

                <div className="relative w-full max-w-[72vw] text-left">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.4 }}
                            className="block text-sm font-medium text-foreground sm:text-sm"
                        >
                            {/* <AnimatedGradientText>
                                <span
                                    className={cn(
                                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                                    )}
                                >
                                    {messages[index]}
                                </span>
                            </AnimatedGradientText> */}
                            {/* <AnimatedGradientText>
                                <span
                                    className={cn(
                                    `inline animate-gradient bg-gradient-to-r from-[#00FFA3] via-[#DC1FFF] to-[#00FFA3] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                                    )}
                                >
                                    {messages[index]}
                                </span>
                            </AnimatedGradientText> */}
                            <AnimatedGradientText>
                                <span
                                    className={cn(
                                        `inline animate-gradient bg-gradient-to-r from-[#00C9FF] via-[#92FE9D] to-[#00C9FF] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                                    )}
                                >
                                    {messages[index]}
                                </span>
                            </AnimatedGradientText>

                        </motion.span>
                    </AnimatePresence>
                </div>
            </Link>
        </motion.div>
    );
}
