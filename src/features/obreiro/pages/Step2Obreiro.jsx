function SingleChoiceGroup({ title, options, value, onChange, error }) {
  return (
    <div className={error ? "p-3 rounded-xl border border-red-300 bg-red-50/40" : ""}>
      <p className="font-semibold text-gray-700 mb-3">{title}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 p-3 border rounded-xl hover:bg-gray-50 cursor-pointer
            ${value === opt ? "border-cyan-600 ring-2 ring-cyan-200" : "border-gray-200"}
            ${error ? "border-red-300" : ""}`}
          >
            
            <input
              type="radio"
              name={title} 
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="h-5 w-5 accent-cyan-600"
            />
            <span className="text-gray-700">{opt}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default function Step2Obreiro({ form, setSingle, onPrev, onNext, errors = {} }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Vida na igreja (Etapa 2)
      </h2>

      <form  className="space-y-6">
        <SingleChoiceGroup
          title="Há quanto tempo você congrega?"
          options={["Menos de 1 ano", "1 a 3 anos", "4 a 7 anos", "8 anos ou mais"]}
          value={form.tempoIgreja}
          onChange={(opt) => setSingle("tempoIgreja", opt)}
          error={errors.tempoIgreja}
        />

        <SingleChoiceGroup
          title="Você é batizado nas águas?"
          options={["Sim", "Não"]}
          value={form.batismo}
          onChange={(opt) => setSingle("batismo", opt)}
          error={errors.batismo}
        />

        <SingleChoiceGroup
          title="Você já participou como obreiro/voluntário em eventos da igreja antes?"
          options={["Sim", "Não"]}
          value={form.voluntario}
          onChange={(opt) => setSingle("voluntario", opt)}
          error={errors.voluntario}
        />

        <SingleChoiceGroup
          title="Hoje você serve em algum ministério ou área da igreja?"
          options={[
            "Não sirvo em área fixa",
            "Auxílio em eventos",
            "Louvor",
            "Mídia",
            "Recepção",
            "Ensino / discipulado",
            "Liderança de jovens",
            "Outros",
          ]}
          value={form.area}
          onChange={(opt) => setSingle("area", opt)}
          error={errors.area}
        />

        <SingleChoiceGroup
          title="Você lidera ou já liderou alguma equipe ou grupo na igreja?"
          options={["Sim", "Não"]}
          value={form.equipe}
          onChange={(opt) => setSingle("equipe", opt)}
          error={errors.equipe}
        />

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition font-semibold"
        >
          Próximo
        </button>

        <button
          type="button"
          onClick={onPrev}
          className="block mx-auto text-sm text-gray-500 hover:underline"
        >
          Voltar
        </button>
      </form>
    </>
  );
}
