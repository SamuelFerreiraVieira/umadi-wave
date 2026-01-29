import { useEffect, useState } from "react";
import { api } from "@/services/api";

import JovemCard from "../components/dashboard/JovemCard";
import ObreiroCard from "../components/dashboard/ObreiroCard";

export default function Dashboard() {
  const [jovens, setJovens] = useState([]);
  const [obreiros, setObreiros] = useState([]);
  const [tab, setTab] = useState("jovens");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function carregar() {
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/");
      setJovens(res.data?.jovens || []);
      setObreiros(res.data?.obreiros || []);
    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar os dados. Verifique o backend/CORS.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm">Dados vindos do backend (GET /)</p>
        </div>

        <button
          onClick={carregar}
          disabled={loading}
          className={`px-4 py-2 rounded-xl font-semibold transition
          ${loading ? "bg-gray-200 text-gray-400" : "bg-cyan-600 text-white hover:bg-cyan-500"}`}
        >
          {loading ? "Atualizando..." : "Atualizar"}
        </button>
      </header>

      <div className="flex gap-2">
        <button
          onClick={() => setTab("jovens")}
          className={`px-4 py-2 rounded-xl font-semibold transition border
          ${tab === "jovens" ? "bg-cyan-600 text-white border-cyan-600" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}
        >
          Jovens ({jovens.length})
        </button>

        <button
          onClick={() => setTab("obreiros")}
          className={`px-4 py-2 rounded-xl font-semibold transition border
          ${tab === "obreiros" ? "bg-cyan-600 text-white border-cyan-600" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}
        >
          Obreiros ({obreiros.length})
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="p-6 border rounded-2xl text-gray-500">Carregando...</div>
      ) : tab === "jovens" ? (
        <section className="space-y-3">
          {jovens.length === 0 ? (
            <div className="p-6 border rounded-2xl text-gray-500">
              Nenhum jovem cadastrado.
            </div>
          ) : (
            jovens.map((j) => <JovemCard key={j.id} jovem={j} />)
          )}
        </section>
      ) : (
        <section className="space-y-3">
          {obreiros.length === 0 ? (
            <div className="p-6 border rounded-2xl text-gray-500">
              Nenhum obreiro cadastrado.
            </div>
          ) : (
            obreiros.map((o) => <ObreiroCard key={o.id} obreiro={o} />)
          )}
        </section>
      )}
    </div>
  );
}
