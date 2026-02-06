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
<<<<<<< HEAD
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
=======
        {options.map((opt) => (
          <OptionCard
            key={opt.label}
            label={opt.label}
            checked={value === opt.label}
            onSelect={() => !opt.disabled && onSelect(field, opt.label)}
            disabled={opt.disabled}
          />
        ))}
>>>>>>> 77df40b718e300842fdcf6cca091a6fc6b7ee2ff
      </div>
    </div>
  );
}
