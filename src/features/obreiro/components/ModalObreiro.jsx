import { useState } from "react";

import StepProgress from "@/features/obreiro/components/StepProgress";
import { useObreiroForm } from "@/features/obreiro/hooks/useObreiroForm";

import Step1Obreiro from "@/features/obreiro/pages/Step1Obreiro";
import Step2Obreiro from "@/features/obreiro/pages/Step2Obreiro";
import Step3Obreiro from "@/features/obreiro/pages/Step3Obreiro";
import Step4Obreiro from "@/features/obreiro/pages/Step4Obreiro";
import SuccessObreiro from "@/features/obreiro/pages/SuccessObreiro";

import { submitObreiroForm } from "@/services/obreiro.service";
import { mapObreiroPayload } from "@/features/obreiro/lib/mapObreiroPayload";
import { validateStep1Obreiro } from "@/features/obreiro/lib/validateStep1";
import { validateStep2Obreiro } from "@/features/obreiro/lib/validateStep2";
import { validateStep3Obreiro } from "@/features/obreiro/lib/validateStep3";
import { validateStep4Obreiro } from "@/features/obreiro/lib/validateStep4";

export default function ModalObreiro({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    isOpen,
    step,
    setStep,
    form,
    resetAll,
    updateField,
    setSingle,
    toggleInArray,
    nextStep,
    prevStep,
    errors,
    setErrors,
  } = useObreiroForm(open);

  function handleClose() {
    resetAll();
    onClose?.();
  }

  function handleNextStep2() {
    const validationErrors = validateStep2Obreiro(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    nextStep();
  }

  function handleNextStep3() {
    const validationErrors = validateStep3Obreiro(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    nextStep();
  }



  function handleNextStep1() {
    const validationErrors = validateStep1Obreiro(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    nextStep();
  }

  async function Enviar(e) {
    e.preventDefault();
    setError("");

    const validationErrors = validateStep4Obreiro(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      setLoading(true);
      const payload = mapObreiroPayload(form);
      await submitObreiroForm(payload);
      setStep(5);
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Erro ao enviar. Tente novamente.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={!loading ? handleClose : undefined}
      />

      <div
        className="
          relative z-10 w-full max-w-5xl mx-4
          bg-white rounded-2xl shadow-2xl
          p-10 animate-fadeUp
          max-h-[85vh] overflow-y-auto
        "
      >
        <button
          onClick={handleClose}
          disabled={loading}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 disabled:opacity-50"
        >
          ✕
        </button>

        <StepProgress step={step} max={4} />

        {error && (
          <div className="mb-6 p-4 rounded-xl border border-red-200 bg-red-50 text-red-700">
            {error}
          </div>
        )}

        {step === 1 && (
          <Step1Obreiro
            form={form}
            updateField={updateField}
            errors={errors}
            onNext={handleNextStep1}
          />
        )}

        {step === 2 && (
          <Step2Obreiro
            form={form}
            setSingle={setSingle}
            errors={errors}
            onPrev={prevStep}
            onNext={handleNextStep2}
          />
        )}


        {step === 3 && (
          <Step3Obreiro
            form={form}
            setSingle={setSingle}
            errors={errors}
            onPrev={prevStep}
            onNext={handleNextStep3}
          />
        )}


        {step === 4 && (
          <Step4Obreiro
            form={form}
            setSingle={setSingle}
            onPrev={prevStep}
            onSubmit={Enviar}
            loading={loading}
            errors={errors} 
          />
        )}




        {step === 5 && (
          <SuccessObreiro
            onClose={() => {
              resetAll();
              onClose?.();
            }}
          />
        )}
      </div>
    </div>
  );
}
