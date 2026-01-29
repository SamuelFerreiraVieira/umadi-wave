import axios from "axios";

export default function Step4Obreiro({
  form,
  setSingle,
  onPrev,
  onSubmit,
  loading = false,
  errors = {}, // ✅
}) {
  const setores = [
    "Ordem",
    "Estacionamento",
    "Comunicação e mídia",
    "Acolhimento (recepção e ordem)",
    "Cozinha e equipe dos Lanches",
    "Teatro",
    "WaveUp Team (TIME que levanta a energia da conf. interage com os jovens e conduz momentos de animação)",
    "Sonoplastia e Iluminação",
    "Lanchonete Umadi",
  ];

  function toggleSetor(opt) {
    const atual = form.setoresPrioridade || [];
    const jaTem = atual.includes(opt);

    if (jaTem) {
      setSingle("setoresPrioridade", atual.filter((x) => x !== opt));
      return;
    }

    if (atual.length >= 5) return;

    setSingle("setoresPrioridade", [...atual, opt]);
  }

  const escolhidos = form.setoresPrioridade || [];

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Setores (Etapa 4)
      </h2>

      <form onSubmit={onSubmit} className="space-y-8">
        
        <div
          className={`space-y-4 ${errors.setoresPrioridade ? "p-3 rounded-xl border border-red-300 bg-red-50/40" : ""
            }`}
        >
          <p className="font-semibold text-gray-800">Onde você gostaria de servir:</p>

          <div className="space-y-2">
            {setores.map((nome, idx) => {
              const numero = idx + 1;
              const marcado = escolhidos.includes(nome);
              const ordem = marcado ? escolhidos.indexOf(nome) + 1 : null;

              return (
                <button
                  key={nome}
                  type="button"
                  disabled={loading}
                  onClick={() => toggleSetor(nome)}
                  className={`w-full text-left flex items-center justify-between gap-3
            px-4 py-3 border rounded-xl hover:bg-gray-50 transition
            ${marcado ? "border-cyan-600 ring-2 ring-cyan-200" : "border-gray-200"}
            ${errors.setoresPrioridade ? "border-red-300" : ""}
            ${loading ? "opacity-70 cursor-not-allowed" : ""}
          `}
                >
                  <span className="text-gray-800">
                    {numero}- {nome}
                  </span>

                  {marcado && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-600 text-white">
                      {ordem}ª opção
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <p className="text-sm text-gray-700 font-semibold">Escolha até 5 opções</p>
            <p className="text-sm text-gray-500">
              O primeiro sendo o que você mais quer e até a quinta suas outras opções.
            </p>

            <p className="text-xs text-gray-500 mt-2">
              Selecionadas: <span className="font-semibold">{escolhidos.length}</span>/5
              {escolhidos.length >= 5 && (
                <span className="ml-2 text-red-500"> (limite atingido)</span>
              )}
            </p>

            
            {errors.setoresPrioridade && (
              <p className="text-sm text-red-500 mt-2">{errors.setoresPrioridade}</p>
            )}
          </div>
        </div>


        
        <div className="space-y-2">
          <p className="font-semibold text-gray-800">
            Você tem alguma habilidade que pode ser útil ou acrescentar nos trabalhos que você deseja?
          </p>
          <p className="text-sm text-gray-500">Se sim, escreva embaixo:</p>

          <textarea
            value={form.habilidadeEspecial}
            onChange={(e) => setSingle("habilidadeEspecial", e.target.value)}
            rows={4}
            disabled={loading}
            placeholder="Ex: Habilidade com Som/Audio Visual, Iluminação, Organização, Edição de vídeo, Programas de edição de imagens, cozinha, liderança, mídia..."
            className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-cyan-500 resize-none disabled:opacity-70"
          />
        </div>

        
        <div
          className={`${errors.disponibilidadeGeral
              ? "p-3 rounded-xl border border-red-300 bg-red-50/40"
              : ""
            }`}
        >
          <p className="font-semibold text-gray-700 mb-3">
            Você poderá servir durante toda a conferência?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 mt-4 gap-3">
            {["Sim", "Parcialmente", "Ainda não sei"].map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50
          ${form.disponibilidadeGeral === opt
                    ? "border-cyan-600 ring-2 ring-cyan-200"
                    : "border-gray-200"
                  }
          ${errors.disponibilidadeGeral ? "border-red-300" : ""}
          ${loading ? "opacity-70 cursor-not-allowed" : ""}
        `}
              >
                <input
                  type="radio"
                  name="disponibilidadeGeral"
                  checked={form.disponibilidadeGeral === opt}
                  onChange={() => setSingle("disponibilidadeGeral", opt)}
                  disabled={loading}
                  className="h-5 w-5 accent-cyan-600"
                />
                <span className="text-gray-700">{opt}</span>
              </label>
            ))}
          </div>

          
          {errors.disponibilidadeGeral && (
            <p className="text-sm text-red-500 mt-2">{errors.disponibilidadeGeral}</p>
          )}
        </div>


       
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl transition font-semibold
            ${loading
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
          className="block mx-auto text-sm gap-3 text-gray-500 hover:underline disabled:opacity-60"
        >
          Voltar
        </button>
      </form>
    </>
  );
}
