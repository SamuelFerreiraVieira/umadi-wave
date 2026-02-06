import { api } from "./api";

export async function submitJovemForm(payload) {
  const { data } = await api.post("/jovens", payload);
  return data;
}

export async function getOficinasStatus() {
  const { data } = await api.get("/oficinas/");
  return data;
}
