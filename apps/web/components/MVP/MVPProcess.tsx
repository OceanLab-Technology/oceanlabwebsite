'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@workspace/ui/components/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BorderBeam } from '@workspace/ui/components/magicui/border-beam'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: '/f1.png',
            alt: 'Discover Meetings',
        },
        'item-2': {
            image: '/f2.png',
            alt: 'UI/UX',
        },
        'item-3': {
            image: '/f3.png',
            alt: 'Develop Your MVP',
        },
        'item-4': {
            image: '/f4.png',
            alt: 'Analytics dashboard',
        },
    }

    return (
        <section className="py-12 md:py-20 lg:py-32" id="Process">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Our 4-Step MVP Process</h2>
                    <p>From idea to launch, we guide you through a clear, fast, and focused journey — built for speed, scale, and product-market fit.</p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Database className="size-4" />
                                    Understand of your vision
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>We dive deep into your idea, audience, and product goals. Clear documentation ensures we build exactly what matters.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Fingerprint className="size-4" />
                                    Design the UI/UX
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>We design wireframes and high-fidelity mockups tailored to users, Every screen is optimized for simplicity, clarity, and engagement.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <IdCard className="size-4" />
                                    Develop Your MVP
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Robust, scalable code using the latest full-stack technologies. APIs, auth, and databases — built right from day one. </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <ChartBarIncreasingIcon className="size-4" />
                                    Ship to Real Users
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>We deploy to real environments with CI/CD and monitoring in place. Your product is live, trackable, and ready to evolve.</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
