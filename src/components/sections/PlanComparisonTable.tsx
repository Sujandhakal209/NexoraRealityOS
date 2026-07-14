import { Check, Minus } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/data";

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={17} className="mx-auto text-primary" aria-label="Included" />;
  if (value === false) return <Minus size={17} className="mx-auto text-outline-variant" aria-label="Not included" />;
  return <span className="text-xs font-semibold text-on-surface">{value}</span>;
}

export function PlanComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-light-border bg-white shadow-low" tabIndex={0} aria-label="Scrollable plan comparison">
      <table className="w-full min-w-[660px] text-left">
        <thead>
          <tr className="border-b border-light-border bg-cream">
            {['Feature', 'Basic', 'Plus', 'Pro'].map((heading) => <th key={heading} className={`px-5 py-4 text-xs font-bold uppercase tracking-wide md:px-6 ${heading === 'Feature' ? 'text-left' : 'text-center'} ${heading === 'Plus' ? 'text-primary' : 'text-on-surface'}`}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row, index) => (
            <tr key={row.feature} className={`border-b border-light-border/70 last:border-0 ${index % 2 ? 'bg-cream/30' : 'bg-white'}`}>
              <td className="px-5 py-3.5 text-xs font-medium text-on-surface md:px-6">{row.feature}</td>
              <td className="px-5 py-3.5 text-center md:px-6"><CellValue value={row.basic} /></td>
              <td className="bg-secondary-container/15 px-5 py-3.5 text-center md:px-6"><CellValue value={row.plus} /></td>
              <td className="px-5 py-3.5 text-center md:px-6"><CellValue value={row.pro} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
