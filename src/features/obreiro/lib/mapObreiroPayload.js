export function mapObreiroPayload(form) {
  return {
    nome: form.nome,
    idade: Number(form.idade),
    congregacao: form.congregacao || null,
    whatsapp: form.whatsapp,

    tempo_igreja: form.tempoIgreja,
    batismo: form.batismo,
    voluntario: form.voluntario,
    area: form.area,
    equipe: form.equipe,

    perfil_pessoal: form.perfilPessoal,
    pressao: form.pressao,
    pontualidade: form.pontualidade,
    preferencia_trabalho: form.preferenciaTrabalho,

    setoresPrioridade: form.setoresPrioridade,
    habilidade_especial: form.habilidadeEspecial || null,
    disponibilidade_geral: form.disponibilidadeGeral,
  };
}
