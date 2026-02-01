const oficinasBase = [
  {
    dayTitle: "Segunda-feira",
    field: "oficinaSegunda",
    options: [
      "Evangelismo Pessoal",
      "Projetos que Nascem no Coração de Deus",
      "Discipulado que Funciona",
    ],
  },
  {
    dayTitle: "Terça-feira",
    field: "oficinaTerca",
    options: ["Chamados para Cuidar", "Jovens que Lideram", "Louvor e Adoração"],
  },
  {
    dayTitle: "Quarta-feira",
    field: "oficinaQuarta",
    options: [
      "Chamados para Cuidar (continuação)",
      "Jovens que Lideram (continuação)",
      "Evangelismo Digital",
    ],
  },
];

export function getOficinasPorDia(statusOficinas = []) {
  return oficinasBase.map((dia) => ({
    ...dia,
    options: dia.options.map((opt) => {
      const status = statusOficinas.find((s) => s.oficina === opt);
      return {
        label: opt,
        disabled: status ? status.cheio : false,
      };
    }),
  }));
}

export const oficinasPorDia = getOficinasPorDia(); // fallback sem status

export function canGoNextStep3(form, statusOficinas = []) {
  const selected = [form.oficinaSegunda, form.oficinaTerca, form.oficinaQuarta];
  if (!selected.every(Boolean)) return false;
  return selected.every((oficina) => {
    const status = statusOficinas.find((s) => s.oficina === oficina);
    return !status || !status.cheio;
  });
}

export function handleSelectOficina(setSingle, field, opt) {
  setSingle(field, opt);
}
