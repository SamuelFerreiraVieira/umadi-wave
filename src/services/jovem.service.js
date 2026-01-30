import { api } from "./api";

export async function submitJovemForm(payload) {
  const { data } = await api.post("/jovens", payload);
  return data;
}
