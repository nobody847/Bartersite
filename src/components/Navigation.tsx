import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Shield, Users } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#overview", label: "Overview" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#commands", label: "Commands" },
    { href: "#safety", label: "Safety" },
    { href: "#join", label: "Join" },
    { href: "#about", label: "About" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">BarterBot</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="hover:bg-primary/10"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Floating Action Buttons (Mobile) */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 md:hidden z-40">
        <Button
          variant="floating"
          size="floating-icon"
          onClick={() => window.open("https://t.me/lightDMBot", "_blank")}
          className="shadow-float"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <Button
          variant="floating"
          size="floating-icon"
          onClick={() => window.open("https://t.me/Dmxsupportbot", "_blank")}
          className="shadow-float"
        >
          <Shield className="w-6 h-6" />
        </Button>
        <Button
          variant="floating"
          size="floating-icon"
          onClick={() => window.open("https://t.me/BarterDM", "_blank")}
          className="shadow-float"
        >
          <Users className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
};

export default Navigation;