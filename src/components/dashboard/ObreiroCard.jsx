export default function ObreiroCard({ obreiro }) {
  const {
    id,
    nome,
    idade,
    whatsapp,
    congregacao,
    tempo_igreja,
    batismo,
    voluntario,
    area,
    equipe,
    disponibilidade_geral,
    habilidade_especial,
    perfil_pessoal,
    pressao,
    pontualidade,
    preferencia_trabalho,
    setoresPrioridade, // vem do seu controller como array parseado
  } = obreiro;

  const setoresTxt =
    Array.isArray(setoresPrioridade) && setoresPrioridade.length > 0
      ? setoresPrioridade.join(", ")
      : "-";

  return (
    <div className="p-4 border rounded-2xl bg-white">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-gray-900">
            #{id} — {nome}
          </p>
          <p className="text-sm text-gray-500 mt-0.5">{idade} anos</p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
          Obreiro
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">WhatsApp:</span> {whatsapp || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Congregação:</span> {congregacao || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Tempo igreja:</span> {tempo_igreja || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Batismo:</span> {batismo || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Voluntário:</span> {voluntario || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Disponibilidade:</span> {disponibilidade_geral || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Área:</span> {area || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Equipe:</span> {equipe || "-"}
        </p>
      </div>

      <div className="mt-3 space-y-2">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Setores:</span> {setoresTxt}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Habilidade especial:</span> {habilidade_especial || "-"}
        </p>

        <details className="mt-2">
          <summary className="cursor-pointer text-sm text-gray-600 hover:underline">
            Ver mais detalhes
          </summary>

          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Perfil pessoal:</span> {perfil_pessoal || "-"}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Trabalha sob pressão:</span> {pressao || "-"}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Pontualidade:</span> {pontualidade || "-"}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Preferência trabalho:</span> {preferencia_trabalho || "-"}
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
