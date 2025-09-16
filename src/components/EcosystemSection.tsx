import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Shield, Users, MessageCircle, Settings, ExternalLink } from "lucide-react";

const EcosystemSection = () => {
  const roles = [
    {
      title: "Main Barter Bot",
      description: "Create and manage deals, chat, finalize trades, report fraud, and view tickets",
      icon: Bot,
      badges: ["Manage", "Shield"],
      features: [
        "Create and manage barter deals",
        "Secure chat with matched users", 
        "Finalize trades safely",
        "Report fraud and track tickets",
        "View deal history",
      ],
      link: "https://t.me/lightDMBot",
      buttonText: "Open Main Bot",
      variant: "telegram" as const,
    },
    {
      title: "Support Bot",
      description: "Help center with guides, quick fraud reports without deal IDs, admin contact, and basic user lookups",
      icon: Shield,
      badges: ["Help", "Report"],
      features: [
        "Comprehensive help guides",
        "Quick fraud reporting",
        "Direct admin contact",
        "User information lookup",
        "Command references",
      ],
      link: "https://t.me/Dmxsupportbot",
      buttonText: "Open Support Bot",
      variant: "telegram-secondary" as const,
    },
    {
      title: "Trading Group",
      description: "Public feed where posted deals appear so people can discover and jump to the bot for negotiations",
      icon: Users,
      badges: ["Discover", "Community"],
      features: [
        "Browse available deals",
        "Discover new opportunities",
        "Community interactions",
        "Quick access to negotiations",
        "Real-time deal updates",
      ],
      link: "https://t.me/BarterDM",
      buttonText: "Join Trading Group",
      variant: "telegram-accent" as const,
    },
  ];

  const joinLinks = [
    {
      title: "Main Group",
      description: "Primary trading community",
      url: "https://t.me/BarterDM",
      buttonText: "Join Main Group",
    },
    {
      title: "Discussion Group", 
      description: "General discussions and feedback",
      url: "https://t.me/Dmdiscussion",
      buttonText: "Join Discussion",
    },
  ];

  return (
    <section id="ecosystem" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ecosystem Roles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three specialized tools working together to create a safe and efficient bartering experience
          </p>
        </div>

        {/* Ecosystem Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {roles.map((role, index) => (
            <Card key={index} className="p-8 hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-border/50 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:animate-pulse-glow">
                  <role.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex gap-2">
                  {role.badges.map((badge, badgeIndex) => (
                    <div key={badgeIndex} className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {role.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {role.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {role.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={role.variant}
                size="lg"
                onClick={() => window.open(role.link, "_blank")}
                className="w-full group/btn"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {role.buttonText}
                <ExternalLink className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Join Links */}
        <div id="join" className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Join Our Community
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {joinLinks.map((link, index) => (
              <Card key={index} className="p-6 text-center border-border/50 hover:shadow-card transition-all duration-300">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {link.title}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {link.description}
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open(link.url, "_blank")}
                  className="w-full"
                >
                  <Users className="w-4 h-4 mr-2" />
                  {link.buttonText}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;