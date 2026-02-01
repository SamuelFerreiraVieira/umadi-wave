import OptionCard from "@/components/form/OptionCard";

export default function DayBlock({ dayTitle, field, value, onSelect, options }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-gray-800 text-center">{dayTitle}</h3>

      <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
        {options.map((opt) => (
          <OptionCard
            key={opt.label}
            label={opt.label}
            checked={value === opt.label}
            onSelect={() => !opt.disabled && onSelect(field, opt.label)}
            disabled={opt.disabled}
          />
        ))}
      </div>
    </div>
  );
}
