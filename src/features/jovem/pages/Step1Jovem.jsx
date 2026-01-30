import SingleChoice from "@/components/form/SingleChoice";
import TextField from "@/components/form/TextField";
import { computeStep1State, resetAfterCongregaChange, resetAfterCampoChange } from "@/features/jovem/lib/step1";

export default function Step1Jovem({ form, updateField, setSingle, onNext, errors = {} }) {
  const { congrega, campo, precisaConfirmarNao, podeIr } = computeStep1State(form);

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Inscrição – Participante (Etapa 1)
      </h2>

      <form className="space-y-6">
        <div className="space-y-4">
          <p className="font-semibold text-gray-700">1. Informações básicas</p>

          <TextField
            value={form.nome}
            onChange={updateField("nome")}
            placeholder="Nome completo"
            error={errors.nome}
          />

          <TextField
            value={form.idade}
            onChange={updateField("idade")}
            placeholder="Idade (anos)"
            error={errors.idade}
          />
        </div>

        <SingleChoice
          title="2. Você congrega em alguma igreja?"
          name="congregaIgreja"
          value={form.congregaIgreja}
          onChange={(v) => resetAfterCongregaChange(setSingle, v)}
          options={[
            { label: "Sim", value: "Sim" },
            { label: "Não", value: "Não" },
          ]}
          error={errors.congregaIgreja}
        />

        {precisaConfirmarNao && (
          <SingleChoice
            title="7. Você não congrega em nenhuma igreja no momento, certo?"
            name="naoCongregaConfirm"
            value={form.naoCongregaConfirm}
            onChange={(v) => setSingle("naoCongregaConfirm", v)}
            options={[{ label: "Sim", value: "Sim" }]}
            error={errors.naoCongregaConfirm}
          />
        )}

        {congrega === "Sim" && (
          <SingleChoice
            title="3. Sua igreja faz parte do nosso campo (Assembleia de Deus – Templo Central Itaitinga)?"
            name="campo"
            value={form.campo}
            onChange={(v) => resetAfterCampoChange(setSingle, v)}
            options={[
              { label: "Sim, sou do campo", value: "Campo" },
              { label: "Não, sou de outra igreja", value: "Outra" },
            ]}
            error={errors.campo}
          />
        )}

        {congrega === "Sim" && campo === "Campo" && (
          <div>
            <p className="font-semibold text-gray-700 mb-3">
              4. Congregação (opcional, mas recomendado)
            </p>

            <TextField
              value={form.congregacao}
              onChange={updateField("congregacao")}
              placeholder="Digite sua congregação"
              
            />
          </div>
        )}

        {congrega === "Sim" && campo === "Outra" && (
          <div>
            <p className="font-semibold text-gray-700 mb-3">
              5. Nome da sua igreja
            </p>

            <TextField
              value={form.nomeIgreja}
              onChange={updateField("nomeIgreja")}
              placeholder="Digite o nome da igreja"
              error={errors.nomeIgreja}
            />
          </div>
        )}

        <button
          type="button"
          onClick={onNext}
          disabled={!podeIr}
          className={`w-full py-4 rounded-xl transition font-semibold
          ${podeIr ? "bg-cyan-600 text-white hover:bg-cyan-500" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          Próximo
        </button>
      </form>
    </>
  );
}
