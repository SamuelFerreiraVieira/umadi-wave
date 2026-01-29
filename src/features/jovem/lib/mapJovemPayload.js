export function mapJovemPayload(form) {
  return {
    nome: form.nome,
    idade: Number(form.idade),
    congrega_igreja: form.congregaIgreja === "Sim" ? 1 : 0,
    congregacao: form.congregacao || null,
    nome_igreja: form.nomeIgreja || null,
    oficina_segunda: form.oficinaSegunda || null,
    oficina_terca: form.oficinaTerca || null,
    oficina_quarta: form.oficinaQuarta || null,
  };
}
