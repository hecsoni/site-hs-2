# HS Refrigeração — Entrega 06 (candidata a produção)

Projeto Next.js 15, TypeScript, React 19 e CSS existente. Mantém o visual aprovado e o formulário que encaminha para WhatsApp.

## Windows — execução local

1. Instale Node.js 22 LTS.
2. Extraia este ZIP em uma pasta própria (não misture arquivos de entregas anteriores).
3. Abra `cmd` na pasta que contém `package.json`.
4. Execute `npm install`.
5. Execute `npm run build`.
6. Execute `npm run start` e acesse http://localhost:3000 para testar o modo produção.

Para desenvolvimento: `npm run dev`.

## Publicação (somente após aprovação)

Suba **o conteúdo da pasta do projeto** ao repositório GitHub, sem `node_modules`, `.next` ou arquivos `.env`. Conecte o repositório ao Netlify. O arquivo `netlify.toml` configura o build e a versão do Node; a integração Next.js do Netlify deve ser detectada automaticamente. Configure o domínio oficial e HTTPS no Netlify. Não use `out` como diretório de publicação sem converter o projeto explicitamente para exportação estática.

## Checklist de aceite

- [ ] `npm run build` sem erros
- [ ] `npm run start` e abrir todas as páginas, inclusive serviços
- [ ] Conferir desktop e mobile e a foto da seção “Seu equipamento não pode parar”
- [ ] Testar WhatsApp com dados reais e confirmar o número de destino
- [ ] Confirmar dados empresariais, textos, serviços e ausência de avaliações fictícias
- [ ] Após publicar, abrir `/robots.txt` e `/sitemap.xml` no domínio final
- [ ] Conferir canonical, títulos e descrições no HTML servido
- [ ] Testar formulário e botões em dispositivo móvel real
- [ ] Medir Core Web Vitals/PageSpeed com site publicado
- [ ] Conectar Search Console e validar indexação (não é automática)

## Observações

- O formulário **não armazena** contatos em banco de dados: abre o WhatsApp para envio manual.
- Os eventos de conversão só serão medidos se uma ferramenta de analytics for configurada.
- Nenhuma publicação, acesso a contas ou modificação do site público foi realizada nesta entrega.
