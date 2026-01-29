export default function Step1Obreiro({ form, updateField, onNext, errors = {} }) {
  const inputClass = (key) =>
    `w-full px-5 py-4 border rounded-xl focus:ring-2 ${
      errors[key]
        ? "border-red-500 ring-red-200 focus:ring-red-200"
        : "focus:ring-cyan-500"
    }`;

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Inscrição – Obreiro (Etapa 1)
      </h2>

      <form  className="space-y-5">
        <div>
          <input
            value={form.nome}
            onChange={updateField("nome")}
            type="text"
            placeholder="Nome completo"
            className={inputClass("nome")}
          />
          {errors.nome && <p className="text-sm text-red-500 mt-1">{errors.nome}</p>}
        </div>

        <div>
          <input
            value={form.idade}
            onChange={updateField("idade")}
            type="text"
            placeholder="Idade"
            className={inputClass("idade")}
          />
          {errors.idade && <p className="text-sm text-red-500 mt-1">{errors.idade}</p>}
        </div>

        <div>
          <input
            value={form.congregacao}
            onChange={updateField("congregacao")}
            type="text"
            placeholder="Congregação"
            className={inputClass("congregacao")}
          />
          {errors.congregacao && (
            <p className="text-sm text-red-500 mt-1">{errors.congregacao}</p>
          )}
        </div>

        <div>
          <input
            value={form.whatsapp}
            onChange={updateField("whatsapp")}
            type="text"
            placeholder="Telefone / WhatsApp"
            className={inputClass("whatsapp")}
          />
          {errors.whatsapp && (
            <p className="text-sm text-red-500 mt-1">{errors.whatsapp}</p>
          )}
        </div>

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition font-semibold"
        >
          Próximo
        </button>
      </form>
    </>
  );
}
