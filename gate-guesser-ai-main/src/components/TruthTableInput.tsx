import { TruthTableRow } from "@/pages/Index";

interface TruthTableInputProps {
  truthTable: TruthTableRow[];
  updateRow: (index: number, field: keyof TruthTableRow, value: number) => void;
}

const TruthTableInput = ({ truthTable, updateRow }: TruthTableInputProps) => {
  const handleInputChange = (
    index: number, 
    field: keyof TruthTableRow, 
    value: string
  ) => {
    const numValue = parseInt(value);
    if (numValue === 0 || numValue === 1) {
      updateRow(index, field, numValue);
    }
  };

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-primary">
              <th className="p-3 text-left font-mono text-primary">A</th>
              <th className="p-3 text-left font-mono text-primary">B</th>
              <th className="p-3 text-left font-mono text-primary">Output</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            {truthTable.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-border hover:bg-secondary/50 transition-colors"
              >
                <td className="p-3">
                  <input
                    type="number"
                    min="0"
                    max="1"
                    value={row.a}
                    onChange={(e) => handleInputChange(index, 'a', e.target.value)}
                    className="w-16 px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    min="0"
                    max="1"
                    value={row.b}
                    onChange={(e) => handleInputChange(index, 'b', e.target.value)}
                    className="w-16 px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    min="0"
                    max="1"
                    value={row.output}
                    onChange={(e) => handleInputChange(index, 'output', e.target.value)}
                    className="w-16 px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TruthTableInput;
