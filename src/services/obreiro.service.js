import { api } from "./api";

export async function submitObreiroForm(payload) {
  const { data } = await api.post("/obreiros", payload);
  return data;
}
