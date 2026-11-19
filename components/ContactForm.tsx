"use client";
import {useState} from 'react';
import {whatsapp,services} from '@/lib/data';
import {MessageCircle} from 'lucide-react';
import {trackLead} from '@/lib/track';

export default function ContactForm({initialService=''}:{initialService?:string}) {
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [service,setService]=useState<string>(initialService);
  const [equipment,setEquipment]=useState('');
  const [urgency,setUrgency]=useState('');
  const [message,setMessage]=useState('');
  function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cleanPhone=phone.replace(/\D/g,'');
    if(cleanPhone.length<10 || cleanPhone.length>13) { alert('Informe um telefone com DDD válido.'); return; }
    const text=[
      'Olá! Gostaria de solicitar atendimento pela HS Refrigeração.',
      `Nome: ${name.trim()}`,
      `Meu WhatsApp: ${phone.trim()}`,
      `Serviço: ${service||'A definir'}`,
      equipment.trim()&&`Equipamento / marca / modelo: ${equipment.trim()}`,
      urgency&&`Situação: ${urgency}`,
      message.trim()&&`Detalhes: ${message.trim()}`,
      'Origem: site HS Refrigeração'
    ].filter(Boolean).join('\n');
    trackLead('formulario',service||'nao_informado');
    // Navegação na mesma aba: evita bloqueadores de pop-up após envio.
    window.location.assign(whatsapp(text));
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-grid">
      <label><span>Seu nome *</span><input required maxLength={100} autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome"/></label>
      <label><span>WhatsApp com DDD *</span><input required type="tel" inputMode="tel" minLength={10} maxLength={25} autoComplete="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="(41) 99999-9999"/></label>
    </div>
    <label><span>Tipo de serviço</span><select value={service} onChange={e=>setService(e.target.value)}><option value="">Selecione o serviço</option>{services.map(s=><option key={s.slug} value={s.name}>{s.name}</option>)}<option value="Plano de manutenção">Plano de manutenção</option><option value="Outro atendimento">Outro atendimento</option></select></label>
    <label><span>Equipamento, marca e modelo</span><input maxLength={160} value={equipment} onChange={e=>setEquipment(e.target.value)} placeholder="Ex.: máquina de gelo, marca e modelo (se souber)"/></label>
    <label><span>Situação do equipamento</span><select value={urgency} onChange={e=>setUrgency(e.target.value)}><option value="">Selecione (opcional)</option><option value="Parado / sem funcionar">Parado / sem funcionar</option><option value="Funcionando com falha">Funcionando com falha</option><option value="Manutenção preventiva">Manutenção preventiva</option><option value="Solicitação de orçamento">Solicitação de orçamento</option></select></label>
    <label><span>Como podemos ajudar?</span><textarea maxLength={1200} rows={3} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Descreva a falha e informe seu bairro ou cidade (opcional)"/></label>
    <button className="btn btn-primary btn-wide" type="submit"><MessageCircle size={18}/> Preparar mensagem no WhatsApp</button>
    <p className="form-note">* Campos obrigatórios. Ao continuar, o WhatsApp será aberto com a mensagem preenchida; você confirma o envio lá. Este formulário não armazena os dados no site.</p>
  </form>;
}
