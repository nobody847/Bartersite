import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Shield, Code, ExternalLink } from "lucide-react";

const CommandsSection = () => {
  const mainBotCommands = [
    { command: "/start", description: "Open the main menu and get started" },
    { command: "/help", description: "Access comprehensive guide and safety information" },
    { command: "/mydeal", description: "Create a new barter deal with guided setup" },
    { command: "/mydeals", description: "List and manage all your active deals" },
    { command: "/mychats", description: "View and manage active conversations" },
    { command: "/endchat", description: "End a specific chat conversation" },
    { command: "/endallchat", description: "End all active chat conversations" },
    { command: "/canceldeal", description: "Cancel an active deal" },
    { command: "/finaldeal", description: "Securely exchange files or information" },
    { command: "/checkbot", description: "Test bot connectivity and status" },
    { command: "/fraudcase", description: "Report fraudulent activity" },
    { command: "/myticket", description: "Check status of your support tickets" },
    { command: "/mytickets", description: "View all your support tickets" },
  ];

  const supportBotCommands = [
    { command: "/start", description: "Open support menu with six helpful buttons" },
    { command: "/fraudcase", description: "Quick fraud report without needing deal IDs" },
  ];

  const supportMenuItems = [
    "Command Guide - Complete reference for all bot commands",
    "What is Barter - Learn about the bartering system",
    "Group & Bot Links - Access all official links",
    "Your Info - View your account information",
    "Other User Info - Look up other users (limited access)",
    "Admin Contact - Direct line to @Sallubhai106",
  ];

  return (
    <section id="commands" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Commands Reference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guide to all available commands and features across our bot ecosystem
          </p>
        </div>

        {/* Commands Tabs */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="main-bot" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="main-bot" className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Main Bot Commands
              </TabsTrigger>
              <TabsTrigger value="support-bot" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Support Bot Commands
              </TabsTrigger>
            </TabsList>

            {/* Main Bot Tab */}
            <TabsContent value="main-bot">
              <Card className="p-8 bg-gradient-card border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Main Barter Bot</h3>
                    <p className="text-muted-foreground">@lightDMBot</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://t.me/lightDMBot", "_blank")}
                    className="ml-auto"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Bot
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {mainBotCommands.map((cmd, index) => (
                    <div key={index} className="bg-card rounded-lg p-4 border border-border/30 hover:shadow-card transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <code className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-mono">
                            {cmd.command}
                          </code>
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            {cmd.description}
                          </p>
                        </div>
                        <Code className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Support Bot Tab */}
            <TabsContent value="support-bot">
              <Card className="p-8 bg-gradient-card border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Support Bot</h3>
                    <p className="text-muted-foreground">@Dmxsupportbot</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://t.me/Dmxsupportbot", "_blank")}
                    className="ml-auto"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Bot
                  </Button>
                </div>

                {/* Commands */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Available Commands</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {supportBotCommands.map((cmd, index) => (
                      <div key={index} className="bg-card rounded-lg p-4 border border-border/30 hover:shadow-card transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <code className="bg-accent/10 text-accent px-2 py-1 rounded text-sm font-mono">
                              {cmd.command}
                            </code>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                              {cmd.description}
                            </p>
                          </div>
                          <Code className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Menu Items */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Support Menu Options</h4>
                  <div className="bg-card rounded-lg p-6 border border-border/30">
                    <ul className="space-y-3">
                      {supportMenuItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pro Tip */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="p-6 bg-light/20 border-warning/30 border-2">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                💡 Pro Tip
              </h4>
              <p className="text-muted-foreground">
                Keep menus and commands concise since Telegram supports scoped command lists 
                by chat type or user language if expanded later.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;