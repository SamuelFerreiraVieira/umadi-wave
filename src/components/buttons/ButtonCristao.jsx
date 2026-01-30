import { useState } from "react";
import ModalJovem from "../../features/jovem/components/ModalJovem";

export default function ButtonCristão() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-cyan-500 transition btn-ripple btn-wave btn-appear btn-delay-2 btn-jump-up"
      >
        Participante
      </button>

      <ModalJovem open={open} onClose={() => setOpen(false)} />
    </>
  );
}
