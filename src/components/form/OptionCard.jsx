export default function OptionCard({ label, checked, onSelect, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={`w-full text-left flex items-center gap-3 p-4 border rounded-2xl transition
      ${checked ? "border-cyan-600 ring-2 ring-cyan-200" : ""}
      ${disabled ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50" : "hover:bg-gray-50"}`}
    >
      <span
        className={`h-5 w-5 shrink-0 rounded-md border flex items-center justify-center
        ${checked ? "bg-cyan-600 border-cyan-600" : disabled ? "bg-gray-300 border-gray-300" : "bg-white border-gray-400"}`}
      >
        {checked ? <span className="h-2.5 w-2.5 bg-white rounded-sm" /> : null}
      </span>

      <span className={`text-gray-800 ${disabled ? "line-through" : ""}`}>{label}</span>
      {disabled && <span className="text-red-500 text-sm ml-auto">Cheio</span>}
    </button>
  );
}
