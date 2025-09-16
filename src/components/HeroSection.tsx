import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const telegramLinks = [
    {
      title: "Open Main Bot",
      description: "Create and manage deals",
      icon: MessageCircle,
      url: "https://t.me/lightDMBot",
      variant: "telegram" as const,
    },
    {
      title: "Open Support Bot", 
      description: "Get help and report issues",
      icon: Shield,
      url: "https://t.me/Dmxsupportbot",
      variant: "telegram-secondary" as const,
    },
    {
      title: "Join Trading Group",
      description: "Discover available deals",
      icon: Users,
      url: "https://t.me/BarterDM",
      variant: "telegram-accent" as const,
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/40" />
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent animate-shimmer" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Barter Smart,{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Barter Safe
            </span>
            <br />
            Only on Telegram
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Swap items or services without money by posting what's available and what's needed, 
            then match, chat, and complete an exchange safely.
          </p>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {telegramLinks.map((link, index) => (
              <div key={index} className="group">
                <Button
                  variant={link.variant}
                  size="xl"
                  onClick={() => window.open(link.url, "_blank")}
                  className="w-full flex flex-col items-center p-8 h-auto gap-4 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <link.icon className="w-8 h-8 relative z-10" />
                  <div className="relative z-10">
                    <div className="font-semibold text-lg">{link.title}</div>
                    <div className="text-sm opacity-90">{link.description}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </Button>
              </div>
            ))}
          </div>

          {/* Quick Info Banner */}
          <div className="bg-card/20 backdrop-blur-sm border border-border/30 rounded-2xl p-6 text-center">
            <p className="text-primary-foreground/80 text-lg">
              All trading happens on Telegram via our Main Barter Bot and Trading Group; 
              this website is a guide and launchpad, not a marketplace.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;