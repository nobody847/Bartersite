import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, UserCheck, Lock, MapPin, AlertTriangle, Ticket, Eye, ExternalLink } from "lucide-react";

const SafetySection = () => {
  const safetyTips = [
    {
      icon: UserCheck,
      title: "Verify Profiles",
      description: "Check user profiles and history before engaging in trades",
      details: "Look for established accounts with positive trading history",
    },
    {
      icon: Lock,
      title: "Keep Data Private",
      description: "Keep sensitive data private until /finaldeal command",
      details: "Never share personal information outside the secure bot environment",
    },
    {
      icon: MapPin,
      title: "Safe Meeting Places",
      description: "Meet in safe, public contexts for physical exchanges",
      details: "Choose busy, well-lit locations with security cameras if meeting in person",
    },
    {
      icon: AlertTriangle,
      title: "Report Issues",
      description: "Use in-bot reporting for any problems or suspicious activity",
      details: "Quick reporting helps protect the entire community",
    },
  ];

  const fraudWorkflow = [
    {
      step: 1,
      action: "Use /fraudcase",
      description: "Opens a support ticket for fraud reporting",
    },
    {
      step: 2,
      action: "Track with /myticket",
      description: "Monitor progress and status updates",
    },
    {
      step: 3,
      action: "Receive Updates",
      description: "Get real-time status updates from the bot",
    },
  ];

  return (
    <section id="safety" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Safety & Fraud Prevention
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your safety is our priority. Learn how to trade securely and what to do if issues arise.
          </p>
        </div>

        {/* Safety Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {safetyTips.map((tip, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 bg-card border-border/50 group">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <tip.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {tip.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {tip.description}
              </p>
              <div className="bg-light/30 rounded-lg p-3 text-xs text-light-foreground">
                {tip.details}
              </div>
            </Card>
          ))}
        </div>

        {/* Fraud Workflow Panel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-card border-warning/30 border-2 shadow-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-destructive to-warning rounded-xl flex items-center justify-center">
                <Ticket className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Fraud Reporting Workflow</h3>
                <p className="text-muted-foreground">Quick and efficient way to report and track issues</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {fraudWorkflow.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">{item.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.action}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Security Tip Banner */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 border-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  🔒 Security Tip
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Use Telegram deep links and official bot usernames to avoid impostors. 
                  Always verify you're interacting with the authentic bots.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://t.me/lightDMBot", "_blank")}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Verify Main Bot
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://t.me/Dmxsupportbot", "_blank")}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Verify Support Bot
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;