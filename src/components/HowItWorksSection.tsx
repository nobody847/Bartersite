import { Card } from "@/components/ui/card";
import { Play, Edit, Eye, MessageCircle, CheckCircle, AlertTriangle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Start the Main Bot",
      description: "Open the Main Bot and choose to post a deal",
      icon: Play,
      details: "Tap the Main Bot button and use /start to access the guided menu system",
    },
    {
      number: 2,
      title: "Create Your Deal",
      description: "Fill \"I have\" and \"I want,\" then confirm to publish",
      icon: Edit,
      details: "Use /mydeal command to create a structured barter proposal with clear terms",
    },
    {
      number: 3,
      title: "Deal Goes Live",
      description: "The deal appears in the Trading Group where others can tap to request",
      icon: Eye,
      details: "Your deal is automatically posted to the public feed for discovery",
    },
    {
      number: 4,
      title: "Match & Chat",
      description: "When both agree, interested users can open a secure chat",
      icon: MessageCircle,
      details: "Negotiate terms safely through the bot's built-in chat system",
    },
    {
      number: 5,
      title: "Finalize Safely",
      description: "Use /finaldeal to exchange files or info securely via the bot",
      icon: CheckCircle,
      details: "Complete the exchange with built-in safety features and verification",
    },
  ];

  const safetyTip = {
    title: "Safety First",
    description: "If there's an issue, file /fraudcase and track with /myticket",
    icon: AlertTriangle,
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            How Trading Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple 5-step process to safely exchange goods and services with your community
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line (Hidden on mobile) */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-warning rounded-full flex items-center justify-center text-warning-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 ml-8">
                  <Card className="p-6 hover:shadow-float transition-all duration-300 transform hover:-translate-y-1 bg-card border-border/50">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <div className="bg-light/50 rounded-lg p-4 border-l-4 border-accent">
                      <p className="text-sm text-light-foreground">
                        <strong>Details:</strong> {step.details}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}

            {/* Safety Tip */}
            <div className="relative flex items-start">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-warning to-destructive rounded-full flex items-center justify-center shadow-glow">
                  <safetyTip.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1 ml-8">
                <Card className="p-6 bg-warning/10 border-warning/30 border-2">
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {safetyTip.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {safetyTip.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Bartering?
            </h3>
            <p className="text-muted-foreground mb-6">
              Deep-link buttons open the bots directly, letting you start with a guided /start flow instantly.
            </p>
            <div className="bg-gradient-glow rounded-lg p-4">
              <p className="text-sm text-foreground/80">
                "Bartering revives the oldest form of commerce with modern safety and support tooling."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;