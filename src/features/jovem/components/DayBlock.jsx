import OptionCard from "@/components/form/OptionCard";

export default function DayBlock({
  dayTitle,
  field,
  value,
  onSelect,
  options,
  disabledOptions, 
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-gray-800 text-center">
        {dayTitle}
      </h3>

      <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
        {options.map((opt) => {
          const disabled = disabledOptions?.has(opt);

          return (
            <OptionCard
              key={opt}
              label={opt}
              checked={value === opt}
              disabled={disabled} 
              onSelect={() => {
                if (disabled) return; 
                onSelect(field, opt);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
