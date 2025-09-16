import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Users, Mail, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "Main Bot", url: "https://t.me/lightDMBot", icon: MessageCircle },
    { title: "Support Bot", url: "https://t.me/Dmxsupportbot", icon: Shield },
    { title: "Trading Group", url: "https://t.me/BarterDM", icon: Users },
    { title: "Discussion Group", url: "https://t.me/Dmdiscussion", icon: Users },
  ];

  const sections = [
    {
      title: "Resources",
      links: [
        { title: "How It Works", href: "#how-it-works" },
        { title: "Commands", href: "#commands" },
        { title: "Safety Guide", href: "#safety" },
        { title: "Join Community", href: "#join" },
      ],
    },
    {
      title: "Bots & Groups",
      links: [
        { title: "Main Barter Bot", url: "https://t.me/lightDMBot", external: true },
        { title: "Support Bot", url: "https://t.me/Dmxsupportbot", external: true },
        { title: "Trading Group", url: "https://t.me/BarterDM", external: true },
        { title: "Discussion Group", url: "https://t.me/Dmdiscussion", external: true },
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-2xl">BarterBot</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Revolutionizing community commerce through secure, Telegram-based bartering. 
              Connect, trade, and build relationships without money changing hands.
            </p>
            
            {/* Quick Access Buttons */}
            <div className="grid grid-cols-2 gap-3 max-w-md">
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open(link.url, "_blank")}
                  className="justify-start group bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20"
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.title}
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <button
                        onClick={() => window.open(link.url, "_blank")}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 flex items-center gap-2 group"
                      >
                        {link.title}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href!)}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                      >
                        {link.title}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm">
              © 2024 BarterBot. Built with ❤️ for the bartering community.
            </div>

            {/* Developer Contact */}
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/60 text-sm">Developer:</span>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open("mailto:priyamtagdiya@gmail.com", "_blank")}
                  className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  Email
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open("https://linkedin.com/in/priyam-tagadiya-90a285360", "_blank")}
                  className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="text-center py-4 border-t border-primary-foreground/10">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
        >
          Back to Top ↑
        </Button>
      </div>
    </footer>
  );
};

export default Footer;