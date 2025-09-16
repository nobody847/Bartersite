import { Card } from "@/components/ui/card";
import { ArrowRight, DollarSign, Recycle, Users, Handshake } from "lucide-react";

const OverviewSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      description: "Exchange goods and services without spending cash",
    },
    {
      icon: Recycle,
      title: "Reduce Waste",
      description: "Give items a second life instead of throwing them away",
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Connect with neighbors and create lasting relationships",
    },
  ];

  const tradingSteps = [
    { step: "Have", icon: "📦", description: "What you offer" },
    { step: "Want", icon: "🎯", description: "What you need" },
    { step: "Match", icon: "🤝", description: "Find someone" },
    { step: "Chat", icon: "💬", description: "Negotiate terms" },
    { step: "Finalize", icon: "✅", description: "Complete trade" },
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* What is Barter */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            What is Barter?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Barter is a direct exchange of goods or services with no money; list what is offered 
            and what is needed, match with others, chat, and trade safely.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-border/50">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Trading Flow */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            How Trading Works
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {tradingSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Card */}
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110 shadow-glow">
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-foreground text-lg">{step.step}</div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                </div>

                {/* Arrow (except for last item) */}
                {index < tradingSteps.length - 1 && (
                  <div className="hidden md:flex mx-4">
                    <ArrowRight className="w-6 h-6 text-secondary animate-flow-arrow" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;