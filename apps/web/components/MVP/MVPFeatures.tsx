// import { Card, CardContent, CardHeader } from '@workspace/ui/components/card'
// // import { Globe } from 'lucide-react'
// import Image from 'next/image'
// // import { Users } from './icons/user'

// export default function Features() {
//     return (
//         <section className="dark:bg bg-zinc-50 py-16 md:py-32">
//             <div className="mx-auto max-w-5xl px-6">
//                 <div className="mx-auto grid gap-2 sm:grid-cols-5">
//                     <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl sm:rounded-bl-xl">
//                         <CardHeader>
//                             <div className="md:p-6">
//                                 <p className="font-medium">🧭 Live Project Tracking</p>
//                                 <p className="text-muted-foreground mt-3 max-w-sm text-sm">Track progress in real-time with live updates, timelines, and transparent communication at every step...</p>
//                             </div>
//                         </CardHeader>

//                         <div className="relative h-fit pl-6 md:pl-12">
//                             <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

//                             <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
//                                 <Image
//                                     src="/mvp.png"
//                                     className="hidden dark:block"
//                                     alt="payments illustration dark"
//                                     width={1207}
//                                     height={929}
//                                 />
//                                 <Image
//                                     src="/mvp.png"
//                                     className="shadow dark:hidden"
//                                     alt="payments illustration light"
//                                     width={1207}
//                                     height={929}
//                                 />
//                             </div>
//                         </div>
//                     </Card>

//                     <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl sm:rounded-br-xl">
//                         <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">⚡ Launch-Ready MVP in 4-8 Weeks.</p>

//                         {/* <CardContent className="mt-auto h-fit">
//                             <div className="relative mb-6 sm:mb-0">
//                                 <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
//                                 <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
//                                     <Image
//                                         src="/timeMVP.png"
//                                         className="hidden dark:block"
//                                         alt="payments illustration dark"
//                                         width={1207}
//                                         height={929}
//                                     />
//                                     <Image
//                                         src="/timeMVP.png"
//                                         className="shadow dark:hidden"
//                                         alt="payments illustration light"
//                                         width={1207}
//                                         height={929}
//                                     />
//                                 </div>
//                             </div>
//                         </CardContent> */}
//                         <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
//                             <div className="grid grid-cols-4 gap-2 md:grid-cols-3">
//                                 {/* <div className="rounded-(--radius) aspect-square border border-dashed"></div> */}
//                                 <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
//                                     <img
//                                         className="m-auto size-8 invert dark:invert-0"
//                                         src="https://oxymor-ns.tailus.io/logos/linear.svg"
//                                         alt="Linear logo"
//                                         width="32"
//                                         height="32"
//                                     />
//                                 </div>
//                                 {/* <div className="rounded-(--radius) aspect-square border border-dashed"></div> */}
//                                 <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
//                                     <img
//                                         className="m-auto size-8 invert dark:invert-0"
//                                         src="https://oxymor-ns.tailus.io/logos/netlify.svg"
//                                         alt="Netlify logo"
//                                         width="32"
//                                         height="32"
//                                     />
//                                 </div>
//                                 {/* <div className="rounded-(--radius) aspect-square border border-dashed"></div> */}
//                                 <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
//                                     <img
//                                         className="m-auto size-8 invert dark:invert-0"
//                                         src="https://oxymor-ns.tailus.io/logos/github.svg"
//                                         alt="github logo"
//                                         width="32"
//                                         height="32"
//                                     />
//                                 </div>
//                             </div>
//                         </CardContent>

//                     </Card>
//                     {/* <Card className="group shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl "> */}
//                     {/* <Card className="group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12"> */}
//                     {/* <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">User-Centered Design.</p> */}

//                     {/* <div className="flex justify-center gap-6">
//                             <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
//                                 <span className="absolute right-2 top-1 block text-sm">fn</span>
//                                 <Globe className="mt-auto size-4" />
//                                 <Users />
//                             </div>
//                             <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
//                                 <span>K</span>
//                                 <Magnet />
//                             </div>
//                         </div> */}
//                     {/* <EvervaultCard text="User Centred Design" /> */}
//                     {/* </Card> */}
//                     {/* <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
//                         <CardHeader className="p-6 md:p-12">
//                             <p className="font-medium">Scalable Tech Stack</p>
//                             <p className="text-muted-foreground mt-2 max-w-sm text-sm">Built with battle-tested tools so you can grow without rewriting from scratch...</p>
//                         </CardHeader>
//                         <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
//                             <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
//                                 <div className="rounded-(--radius) aspect-square border border-dashed"></div>
//                                 <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
//                                     <img
//                                         className="m-auto size-8 invert dark:invert-0"
//                                         src="https://oxymor-ns.tailus.io/logos/linear.svg"
//                                         alt="Linear logo"
//                                         width="32"
//                                         height="32"
//                                     />
//                                 </div>
//                                 <div className="rounded-(--radius) aspect-square border border-dashed"></div>
//                                 <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
//                                     <img
//                                         className="m-auto size-8 invert dark:invert-0"
//                                         src="https://oxymor-ns.tailus.io/logos/netlify.svg"
//                                         alt="Netlify logo"
//                                         width="32"
//                                         height="32"
//                                     />
//                                 </div>
//                                 <div className="rounded-(--radius) aspect-square border border-dashed"></div>
//                                 <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
//                                     <img
//                                         className="m-auto size-8 invert dark:invert-0"
//                                         src="https://oxymor-ns.tailus.io/logos/github.svg"
//                                         alt="github logo"
//                                         width="32"
//                                         height="32"
//                                     />
//                                 </div>
//                             </div>
//                         </CardContent>
//                     </Card> */}
//                 </div>
//             </div>
//         </section>
//     )
// }


