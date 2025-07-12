import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@workspace/ui/components/logos'
import { cn } from '@workspace/ui/lib/utils'
import { InfiniteSlider } from '@workspace/ui/components/logoCloud/infinite-slider'
import { SVGComponent3 } from '../hero/log'

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-muted dark:bg-background pt-8 md:pt-12 pb-24 md:pb-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
                        <div
                            role="presentation"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}>
                                <IntegrationCard>
                                    <VSCodium />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MediaWiki />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <GooglePaLM />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Gemini />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Replit />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MagicUI />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}
                                reverse>
                                <IntegrationCard>
                                    <Gemini />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Replit />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MediaWiki />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MagicUI />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <VSCodium />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <GooglePaLM />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>
                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}>
                                <IntegrationCard>
                                    <Replit />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MagicUI />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Gemini />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <VSCodium />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MediaWiki />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <GooglePaLM />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>
                        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
                            <IntegrationCard
                                className="shadow-black-950/10 size-16 bg-white/10 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15 w-20 h-20"
                                isCenter={true}>
                                {/* <LogoIcon /> */}
                                <SVGComponent3 width={60} height={60}/>
                            </IntegrationCard>
                        </div>
                    </div>
                    <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">AI at the Core</h2>
                        <p className="text-muted-foreground">At Oceanlab, AI isn't an add-on — it's the foundation. From LLMs to automation, real-time decision engines, AI Workflows, we build systems that learn, adapt, and scale.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?: 'left-top' | 'left-middle' | 'left-bottom' | 'right-top' | 'right-middle' | 'right-bottom';
  isCenter?: boolean;
}) => {
  return (
    <div className={cn('bg-background relative z-20 flex size-12 rounded-full border', className)}>
      <div className={cn('m-auto', isCenter && 'flex items-center justify-center')}>{children}</div>
    </div>
  );
};
