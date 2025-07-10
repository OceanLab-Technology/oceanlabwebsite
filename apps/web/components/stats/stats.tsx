export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Oceanlab in Numbers</h2>
                    <p>We're not just building code — we're engineering products that scale from first users to millions.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+100</div>
                        <p>Companies Served</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">10M+</div>
                        <p>Users Managed</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+150</div>
                        <p>MVPs Delivered</p>
                    </div>
                </div>
            </div>
        </section>
    )
}