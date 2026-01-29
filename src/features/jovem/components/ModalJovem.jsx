import { useState } from "react";
import axios from "axios";

import Step1Jovem from "../pages/Step1Jovem";
import Step2Jovem from "../pages/Step2Jovem";
import Step3JovemOficinas from "../pages/Step3JovemOficinas";
import SuccessJovem from "../pages/SuccessJovem";

import { validateStep1Jovem } from "@/features/jovem/lib/validateStep1";

export default function ModalJovem({ open, onClose }) {
  const [step, setStep] = useState(1);

  const [errors, setErrors] = useState({}); // ✅ FALTAVA ISSO
  const [loading, setLoading] = useState(false);
const [serverError, setServerError] = useState("");


  const [form, setForm] = useState({
    nome: "",
    idade: "",
    congregaIgreja: "",
    campo: "",
    congregacao: "",
    nomeIgreja: "",
    naoCongregaConfirm: "",

    comoSoube: "",
    comoSoubeOutro: "",
    comoConheceu: "",
    comoConheceuOutro: "",

    oficinaDia: "",
    oficinaTema: "",

    participaMinisterio: "",
    areaDesejada: "",
    oficinaSegunda: "",
    oficinaTerca: "",
    oficinaQuarta: "",
  });

  function handleClose() {
    setStep(1);
    setErrors({}); // ✅ limpa erros ao fechar
    onClose?.();
  }

  function Enviar(e) {
    e?.preventDefault();
    // aqui você decide: só avançar ou já enviar pro back
    nextStep();
  }

  function updateField(key) {
    return (e) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));

      // ✅ limpa erro do campo ao digitar
      setErrors((prev) => {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    };
  }

  function setSingle(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));

    // ✅ limpa erro do campo ao selecionar
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function nextStep() {
    setStep((s) => Math.min(4, s + 1));
  }

  function prevStep() {
    setStep((s) => Math.max(1, s - 1));
  }

  function handleNextStep1() {
    const validationErrors = validateStep1Jovem(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    async function Enviar(e) {
  e.preventDefault();

  if (loading) return;

  setLoading(true);
  setErrors({});

  try {
    const payload = mapJovemPayload(form);

    await api.post("/jovens", payload); // 🚀 tentativa real

    // ✅ SÓ CHEGA AQUI SE DEU CERTO
    setStep(4); // SuccessJovem
  } catch (err) {
    // ❌ NÃO AVANÇA
    if (err.code === "ERR_NETWORK") {
      setErrors({
        server: "Servidor indisponível. Tente novamente mais tarde.",
      });
    } else if (err.response) {
      setErrors({
        server: err.response.data?.message || "Erro ao enviar inscrição.",
      });
    } else {
      setErrors({
        server: "Erro inesperado ao enviar inscrição.",
      });
    }
  } finally {
    setLoading(false);
  }
}


    setErrors({});
    nextStep();
  }

  function handleSubmitFinal() {
    console.log("✅ JOVEM ENVIADO:", form);
    setStep(4);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative z-10 w-full max-w-3xl mx-4 bg-white rounded-2xl shadow-2xl p-10 animate-fadeUp max-h-[85vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="mb-8 flex items-center justify-center gap-3">
          <div className={`h-2 w-16 rounded-full ${step === 1 ? "bg-cyan-600" : "bg-gray-200"}`} />
          <div className={`h-2 w-16 rounded-full ${step === 2 ? "bg-cyan-600" : "bg-gray-200"}`} />
          <div className={`h-2 w-16 rounded-full ${step === 3 ? "bg-cyan-600" : "bg-gray-200"}`} />
          <div className={`h-2 w-16 rounded-full ${step === 4 ? "bg-green-500" : "bg-gray-200"}`} />
        </div>

        {/* ✅ AGORA SIM: render por step */}
        {step === 1 && (
          <Step1Jovem
            form={form}
            updateField={updateField}
            setSingle={setSingle}
            errors={errors}
            onNext={handleNextStep1}
          />
        )}

        {step === 2 && (
          <Step2Jovem
            form={form}
            setSingle={setSingle}
            updateField={updateField}
            onPrev={prevStep}
            onNext={nextStep}
          />
        )}

        {step === 3 && (
          <Step3JovemOficinas
            form={form}
            setSingle={setSingle}
            onPrev={prevStep}
            onSubmit={Enviar}     
            
          />
        )}


        {step === 4 && <SuccessJovem onClose={handleClose} />}
      </div>
    </div>
  );
}
