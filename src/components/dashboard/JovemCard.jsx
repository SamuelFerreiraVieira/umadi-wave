export default function JovemCard({ jovem }) {
  const {
    id,
    nome,
    idade,
    congrega_igreja,
    congregacao,
    nome_igreja,
    oficina_segunda,
    oficina_terça,
    oficina_quarta,
  } = jovem;

  const congregaTxt =
    congrega_igreja === 1 ? "Congrega" : congrega_igreja === 0 ? "Não congrega" : "-";

  return (
    <div className="p-4 border rounded-2xl bg-white">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-gray-900">
            #{id} — {nome}
          </p>
          <p className="text-sm text-gray-500 mt-0.5">
            {idade} anos • {congregaTxt}
          </p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
          Jovem
        </span>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Congregação:</span> {congregacao || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Igreja:</span> {nome_igreja || "-"}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Oficinas:</span>{" "}
          {oficina_segunda || "-"} / {oficina_terça || "-"} / {oficina_quarta || "-"}
        </p>
      </div>
    </div>
  );
}
