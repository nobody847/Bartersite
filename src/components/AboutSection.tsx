import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Code, Shield, Users, ExternalLink } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "User data protection and secure transactions are our top priorities",
    },
    {
      icon: Code,
      title: "Clear & Simple",
      description: "Intuitive bot workflows that anyone can understand and use",
    },
    {
      icon: Users,
      title: "Fair Exchange",
      description: "Building a community where everyone benefits from honest trading",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About the Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building secure, community-driven barter tools for the modern age
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Profile Card */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-card shadow-float border-border/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-glow">
                PT
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Priyam Tagadiya
                </h3>
                <p className="text-xl text-secondary mb-4">
                  Full-Stack Web Developer
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Passionate about building secure, community-driven barter tools for Telegram. 
                  Focused on creating simple, reliable bot workflows that prioritize user privacy 
                  and enable fair exchanges in the digital age.
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    variant="telegram"
                    onClick={() => window.open("mailto:priyamtagdiya@gmail.com", "_blank")}
                    className="group"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Contact
                    <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    variant="telegram-secondary"
                    onClick={() => window.open("https://linkedin.com/in/priyam-tagadiya-90a285360", "_blank")}
                    className="group"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                    <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 bg-card border-border/50 group">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Philosophy Quote */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 border-2 text-center">
            <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-4">
              "Focused on privacy, clarity, and fair exchange through simple, reliable bot workflows."
            </blockquote>
            <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground">
              Building the future of community-driven commerce, one trade at a time.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;