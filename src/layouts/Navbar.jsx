import { useState } from "react";
import ButtonContato from "@/components/buttons/ButtonContato";

const LINKS = [
  { label: "João 3:16", href: "#joao-316" },
  { label: "Salmos 116", href: "#salmos-116" },
  { label: "Lucas 23:33", href: "#lucas-2333" },
  { label: "Filipenses 4:13", href: "#filipenses-413" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-appear nav-delay w-full bg-transparent relative z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            <span className="text-cyan-600">Wave<span className=" text-black">Conference</span></span>
          </span>
        </div>

        
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-black font-medium">
          {LINKS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-6 py-3 bg-black text-white text-base lg:text-lg rounded-full hover:bg-cyan-500 transition btn-ripple btn-wave btn-jump-up inline-block"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="hidden md:block">
          <ButtonContato />
        </div>

        
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-gray-200 bg-white/70 backdrop-blur hover:bg-white transition"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 px-4 sm:px-6">
          <div className="mt-2 rounded-2xl border border-gray-200 bg-white/95 backdrop-blur shadow-xl">
            <div className="p-3">
              
              <div className="grid grid-cols-1 gap-2 max-h-[55vh] overflow-auto pr-1">
                {LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="w-full px-4 py-3 bg-black text-white text-sm rounded-xl hover:bg-cyan-500 transition"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-2">
                  <ButtonContato />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
