export function mapJovemPayload(form) {
  return {
    nome: form.nome,
    idade: Number(form.idade),
    congrega_igreja: form.congregaIgreja,
    congregacao: form.congregacao || null,
    nome_igreja: form.nomeIgreja || null,
    oficina_segunda: form.oficinaSegunda || "",
    oficina_terça: form.oficinaTerca || "",
    oficina_quarta: form.oficinaQuarta || "",
    area_desejada: form.areaDesejada || "",
    campo: form.campo || "",
    como_conheceu: form.comoConheceu || "",
    como_conheceu_outro: form.comoConheceuOutro || "",
    como_soube: form.comoSoube || "",
    como_soube_outro: form.comoSoubeOutro || "",
    nao_congrega_confirm: form.naoCongregaConfirm || "",
    oficina_dia: form.oficinaDia || "",
    oficina_tema: form.oficinaTema || "",
    participa_ministerio: form.participaMinisterio || "",
  };
}
