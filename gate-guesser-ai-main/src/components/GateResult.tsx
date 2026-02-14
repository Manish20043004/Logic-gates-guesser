import { GateType } from "@/pages/Index";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface GateResultProps {
  result: GateType;
  isAnalyzing: boolean;
  confidence: number;
}

const GateResult = ({ result, isAnalyzing, confidence }: GateResultProps) => {
  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <Loader2 className="w-16 h-16 text-primary animate-spin" />
        <p className="text-muted-foreground">Analyzing truth table...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="w-24 h-24 rounded-full border-2 border-dashed border-muted flex items-center justify-center">
          <span className="text-4xl text-muted-foreground">?</span>
        </div>
        <p className="text-muted-foreground">No analysis yet</p>
        <p className="text-sm text-muted-foreground">Enter a truth table and click analyze</p>
      </div>
    );
  }

  const gateDescriptions = {
    AND: "Output is 1 only when both inputs are 1",
    OR: "Output is 1 when at least one input is 1",
    XOR: "Output is 1 when inputs are different",
  };

  const gateSymbols = {
    AND: "∧",
    OR: "∨",
    XOR: "⊕",
  };

  return (
    <div className="space-y-6">
      {/* Gate Type Display */}
      <div className="flex items-center justify-center py-8">
        <div className="relative">
          <div className="absolute inset-0 bg-success/20 blur-xl rounded-full"></div>
          <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-glow">
            <div className="text-center space-y-2">
              <div className="text-6xl font-bold text-primary-foreground font-mono">
                {gateSymbols[result]}
              </div>
              <div className="text-3xl font-bold text-primary-foreground">
                {result}
              </div>
              <div className="text-sm text-primary-foreground/80">
                Logic Gate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confidence Score */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Confidence Score</span>
          <span className="text-sm font-mono text-success font-bold">{confidence}%</span>
        </div>
        <Progress value={confidence} className="h-2" />
      </div>

      {/* Description */}
      <div className="p-4 bg-secondary/50 rounded-lg border border-border">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Classification</p>
            <p className="text-sm text-muted-foreground">{gateDescriptions[result]}</p>
          </div>
        </div>
      </div>

      {/* Visual Representation */}
      <div className="p-4 bg-secondary/50 rounded-lg border border-border">
        <p className="text-sm font-semibold text-foreground mb-3">Logic Expression</p>
        <div className="font-mono text-lg text-primary text-center py-2">
          {result === "AND" && "Y = A · B"}
          {result === "OR" && "Y = A + B"}
          {result === "XOR" && "Y = A ⊕ B"}
        </div>
      </div>
    </div>
  );
};

export default GateResult;
