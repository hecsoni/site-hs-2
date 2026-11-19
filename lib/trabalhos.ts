export type Trabalho = {
  slug: string;
  titulo: string;
  categoria: string;
  descricao: string;
  imagem: string;
  antes?: string;
  depois?: string;
};
export const trabalhos: Trabalho[] = [
  {slug:'maquina-gelo-diagnostico',titulo:'Máquina de gelo — acesso aos componentes',categoria:'Máquinas de gelo',descricao:'Registro real de equipamento aberto para inspeção dos componentes internos.',imagem:'/images/trabalhos/maquina-gelo-aberta.webp'},
  {slug:'maquina-gelo-limpeza',titulo:'Máquina de gelo — registro antes e depois',categoria:'Máquinas de gelo',descricao:'Comparação fotográfica do reservatório durante um processo de limpeza.',imagem:'/images/trabalhos/maquina-gelo-depois.webp',antes:'/images/trabalhos/maquina-gelo-antes.webp',depois:'/images/trabalhos/maquina-gelo-depois.webp'},
  {slug:'camara-fria-comercial',titulo:'Câmara fria comercial',categoria:'Câmaras frias',descricao:'Registro de uma instalação de câmara fria e de seus equipamentos de refrigeração.',imagem:'/images/trabalhos/camara-fria.webp'},
  {slug:'evaporador-camara-fria',titulo:'Evaporador de câmara fria',categoria:'Câmaras frias',descricao:'Detalhe técnico do evaporador e dos ventiladores instalados no interior da câmara.',imagem:'/images/trabalhos/evaporador-camara.webp'},
  {slug:'conjunto-refrigeracao',titulo:'Conjunto de refrigeração comercial',categoria:'Refrigeração comercial',descricao:'Registro de componentes de um sistema de refrigeração comercial.',imagem:'/images/trabalhos/unidade-refrigeracao.webp'},
  {slug:'condensacao-comercial',titulo:'Unidades de condensação',categoria:'Refrigeração comercial',descricao:'Registro de equipamentos de condensação em instalação comercial.',imagem:'/images/trabalhos/sistema-condensacao.webp'}
];
