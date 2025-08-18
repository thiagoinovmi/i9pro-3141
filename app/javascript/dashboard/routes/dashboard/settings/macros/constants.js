export const MACRO_ACTION_TYPES = [
  {
    key: 'assign_team',
    label: 'Atribuir ao time',
    inputType: 'search_select',
  },
  {
    key: 'assign_agent',
    label: 'Atribuir ao agente',
    inputType: 'search_select',
  },
  {
    key: 'add_label',
    label: 'Adicionar etiquetas',
    inputType: 'multi_select',
  },
  {
    key: 'remove_label',
    label: 'Remover etiqueta',
    inputType: 'multi_select',
  },
  {
    key: 'remove_assigned_team',
    label: 'Remover time atribuído',
    inputType: null,
  },
  {
    key: 'send_email_transcript',
    label: 'Enviar uma transcrição por e-mail',
    inputType: 'email',
  },
  {
    key: 'mute_conversation',
    label: 'Silenciar conversa',
    inputType: null,
  },
  {
    key: 'snooze_conversation',
    label: 'Adiar conversa',
    inputType: null,
  },
  {
    key: 'resolve_conversation',
    label: 'Resolver conversa',
    inputType: null,
  },
  {
    key: 'send_webhook_event',
    label: 'Enviar webhook',
    inputType: 'url',
  },
  {
    key: 'send_attachment',
    label: 'Enviar anexo',
    inputType: 'attachment',
  },
  {
    key: 'send_message',
    label: 'Enviar uma mensagem',
    inputType: 'textarea',
  },
  {
    key: 'add_private_note',
    label: 'Adicionar uma nora privada',
    inputType: 'textarea',
  },
  {
    key: 'change_priority',
    label: 'Alterar prioridade',
    inputType: 'search_select',
  },
];
