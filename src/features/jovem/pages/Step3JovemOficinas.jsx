import { useState, useEffect } from "react";
import DayBlock from "@/features/jovem/components/DayBlock";
import { api } from "@/services/api";
import { buildDisabledFromStatus } from "@/features/jovem/lib/step3Oficinas";
import {
  getOficinasPorDia,
  canGoNextStep3,
  handleSelectOficina,
} from "@/features/jovem/lib/step3Oficinas";
import { getOficinasStatus } from "@/services/jovem.service";

export default function Step3JovemOficinas({
  form,
  setSingle,
  onPrev,
  onSubmit,          // ✅ agora é onSubmit
  loading = false,   // opcional
  errors = {},
}) {
  const [statusOficinas, setStatusOficinas] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const data = await getOficinasStatus();
        setStatusOficinas(data.oficinasChecadas || []);
      } catch (error) {
        console.error("Erro ao buscar status das oficinas:", error);
        // Fallback: assume todas disponíveis se API falhar
        setStatusOficinas([]);
      } finally {
        setLoadingStatus(false);
      }
    }
    fetchStatus();
  }, []);

  const oficinasPorDia = getOficinasPorDia(statusOficinas);

  const podeIr = canGoNextStep3(form, statusOficinas);

  function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    if (!podeIr) return;
    onSubmit(e); // ✅ chama o submit do pai
  }

<<<<<<< HEAD
  const [disabledByField, setDisabledByField] = useState({
    oficinaSegunda: new Set(),
    oficinaTerca: new Set(),
    oficinaQuarta: new Set(),
  });

  useEffect(() => {
    async function loadStatus() {
      try {
        const { data } = await api.get("/jovens/oficinas-status");
        setDisabledByField(buildDisabledFromStatus(data));
      } catch (e) {
        // se ainda não existir endpoint, só não bloqueia
        console.warn("Não foi possível carregar o status das oficinas.");
      }
    }

    loadStatus();
  }, []);

=======
  if (loadingStatus) {
    return <p className="text-center">Carregando status das oficinas...</p>;
  }
>>>>>>> 77df40b718e300842fdcf6cca091a6fc6b7ee2ff

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Oficinas (Etapa 3)
      </h2>

      <p className="text-center text-gray-500 mb-8">
        Escolha <b>1 oficina por dia</b> (Segunda, Terça e Quarta).
      </p>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-10">
          {oficinasPorDia.map((d) => (
            <DayBlock
              key={d.field}
              dayTitle={d.dayTitle}
              field={d.field}
              value={form[d.field]}
              options={d.options}
              disabledOptions={disabledByField[d.field]} // ✅ NOVO
              onSelect={(field, opt) =>
                handleSelectOficina(setSingle, field, opt, disabledByField) // ✅ NOVO
              }
            />
          ))}

        </div>

        <div className="mt-10 space-y-4">

          {errors.server && (
            <p className="text-center text-sm text-red-500 mt-4">
              {errors.server}
            </p>
          )}

          <button
            type="submit"
            disabled={!podeIr || loading}
            className={`w-full py-4 rounded-xl transition font-semibold
              ${!podeIr || loading
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-cyan-600 text-white hover:bg-cyan-500"
              }`}
          >
            {loading ? "Enviando..." : "Enviar inscrição"}
          </button>

          <button
            type="button"
            onClick={onPrev}
            disabled={loading}
            className="block mx-auto text-sm text-gray-500 hover:underline disabled:opacity-60"
          >
            Voltar
          </button>
        </div>
      </form>
    </>
  );
}
