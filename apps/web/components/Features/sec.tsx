import { Sparkles, Plus, Globe, ArrowUp } from "lucide-react";

export default function FeaturesSection() {
    return (
        <div className="bg-white py-24 px-4" id="MVP">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-balance text-3xl font-semibold text-gray-900 md:text-4xl">
                        <span className="text-gray-700 font-medium text-3xl md:text-4xl">Empowering Founders with Fast</span>{" "}
                        Scalable MVP Development
                    </h2>
                </div>

                {/* Image Card with AI Illustration */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1635776062043-223faf322554?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 px-4 py-6">
                        <div className="relative z-10 p-6 max-[500px]:p-0 space-y-6">
                            <AIAssistantIllustration />
                        </div>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
                    <div className="space-y-2">
                        <h3 className="text-xl font-medium text-gray-900">Speed to Launch</h3>
                        <p className="text-muted-foreground">
                            Bring your idea to life in just 4-6 weeks with lean, agile development workflows focused on fast results.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-medium text-gray-900">Built to Scale</h3>
                        <p className="text-muted-foreground">
                            Developed on robust, cloud-native technologies that grow effortlessly with your user base.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-medium text-gray-900">Designed to Impress</h3>
                        <p className="text-muted-foreground">
                            Sleek interfaces that resonate with users and make a lasting impact on investors and stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


const AIAssistantIllustration = () => {
    return (
        <div className="min-w-[300px] max-w-[400px] mx-auto relative space-y-4 p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
            {/* AI Question & Stats */}
            <div className="w-fit">
                <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
                <p className="mt-2 line-clamp-2 text-m text-gray-800">
                    How can I bring my product idea to life in just weeks—with the right tech to scale?
                </p>

                <ul className="text-gray-500 mt-3 space-y-2 text-sm">
                    {[
                            { value: "4-6 Weeks", emoji: "⚡️", label: "Rapid MVP Delivery" },
                            { value: "100% Scalable", emoji: "🧠", label: "Future-Proof Tech Stack" },
                            { value: "24/7 Access", emoji: "📞", label: "Expert Tech Support" },
                            { value: "Fully Modular", emoji: "🧩", label: "Built to Evolve" },
                            { value: "Investor-Ready", emoji: "🚀", label: "Polished UX/UI Design" }
                    ].map((stat, index) => (
                        <li key={index} className="-ml-0.5 flex items-center gap-2">
                            <span>{stat.emoji}</span>
                            <span className="text-gray-900 font-medium">{stat.value}</span> {stat.label}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 -mx-3 -mb-3 space-y-3 rounded-lg p-3">
                <div className="text-gray-500 text-sm">Ask AI Assistant</div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <button className="size-7 rounded-2xl bg-white border border-gray-300 flex items-center justify-center">
                            <Plus className="w-4 h-4 text-gray-700" />
                        </button>
                        <button className="size-7 rounded-2xl bg-white border border-gray-300 flex items-center justify-center">
                            <Globe className="w-4 h-4 text-gray-700" />
                        </button>
                    </div>

                    <button className="size-7 rounded-2xl bg-black flex items-center justify-center">
                        <ArrowUp className="w-4 h-4 text-white" strokeWidth={3} />
                    </button>
                </div>
            </div>
        </div>
    );
};
