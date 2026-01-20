import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles, Bot, AlertTriangle } from "lucide-react";

interface SynBotAssistantProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SynBotAssistant = ({ open, onOpenChange }: SynBotAssistantProps) => {
  const [message, setMessage] = useState("");

  const suggestedPrompts = [
    "Explain this experiment",
    "Is this safe?",
    "What should I observe?",
    "How do sensors work?",
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md rounded-l-3xl border-l-border/50 p-0 flex flex-col">
        <SheetHeader className="p-6 pb-4 border-b border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-synbot flex items-center justify-center shadow-glow animate-glow-pulse">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <SheetTitle className="text-xl font-display">SynBot</SheetTitle>
              <p className="text-sm text-muted-foreground">AI Lab Assistant</p>
            </div>
          </div>
        </SheetHeader>

        {/* Chat Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Welcome Message */}
          <div className="flex gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-synbot flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="bg-muted/50 rounded-2xl rounded-tl-sm p-4">
                <p className="text-foreground">
                  Hello! 👋 I'm SynBot, your AI lab assistant. I can help you understand 
                  experiments, explain sensor readings, and guide you through safe lab practices.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  What would you like to know?
                </p>
              </div>
            </div>
          </div>

          {/* Suggested Prompts */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">
              Suggested Questions
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(prompt)}
                  className="px-4 py-2 rounded-full bg-primary-soft border border-primary/20 text-sm text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Disclaimer */}
        <div className="px-6 py-3 bg-status-idle/10 border-t border-status-idle/20">
          <div className="flex items-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4 text-status-idle" />
            <span className="text-muted-foreground">
              <span className="font-medium text-foreground">Demo Mode</span> – AI Assistant is in Pilot Version
            </span>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-border/50">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask SynBot anything..."
              className="flex-1 rounded-xl border-border/50 focus:border-primary/50"
            />
            <Button 
              size="icon"
              className="w-11 h-11 rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity"
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SynBotAssistant;
