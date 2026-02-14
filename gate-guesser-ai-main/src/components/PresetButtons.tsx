import { Button } from "@/components/ui/button";

interface PresetButtonsProps {
  loadPreset: (gate: "AND" | "OR" | "XOR") => void;
}

const PresetButtons = ({ loadPreset }: PresetButtonsProps) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground font-semibold">Quick Presets:</p>
      <div className="flex gap-2 flex-wrap">
        <Button 
          variant="secondary"
          onClick={() => loadPreset("AND")}
          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border font-mono transition-all"
        >
          AND Gate
        </Button>
        <Button 
          variant="secondary"
          onClick={() => loadPreset("OR")}
          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border font-mono transition-all"
        >
          OR Gate
        </Button>
        <Button 
          variant="secondary"
          onClick={() => loadPreset("XOR")}
          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border font-mono transition-all"
        >
          XOR Gate
        </Button>
      </div>
    </div>
  );
};

export default PresetButtons;
