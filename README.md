# Umadi Wave

Uma aplicação web para inscrições em eventos da Umadi Wave, permitindo o cadastro de jovens e obreiros com formulários interativos e um painel administrativo para visualização das inscrições.

## Funcionalidades

- Formulário de inscrição para jovens com múltiplas etapas (informações pessoais, oficinas, etc.)
- Formulário de inscrição para obreiros com validações específicas
- Painel administrativo (/dashboard) para visualizar todas as inscrições
- Integração com API externa para armazenamento e recuperação de dados
- Design responsivo com Tailwind CSS

## Tecnologias Utilizadas

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router
- **Build Tool**: Vite
- **Linter**: ESLint

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/SamuelFerreiraVieira/umadi-wave.git
   cd umadi-wave
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:4173`.

## Uso

- **Página Inicial**: Acesse `/` para a landing page.
- **Inscrição de Jovens**: Acesse `/jovens` para iniciar o formulário de inscrição.
- **Inscrição de Obreiros**: Acesse `/obreiros` para iniciar o formulário de inscrição.
- **Painel Administrativo**: Acesse `/dashboard` para visualizar as inscrições (requer API ativa).

## API Externa

Esta aplicação utiliza uma API externa para gerenciar as inscrições. A API está hospedada em `umadiapi.jadson.cloud` e o código fonte está disponível em [https://github.com/httpsJadson/api-umadi](https://github.com/httpsJadson/api-umadi).

### Endpoints Principais
- `GET /` - Lista todas as inscrições
- `GET /jovens` - Lista inscrições de jovens
- `POST /jovens` - Envia inscrição de jovem
- `GET /obreiros` - Lista inscrições de obreiros
- `POST /obreiros` - Envia inscrição de obreiro

## Autores

- **Jadson Araújo da Silva** - [httpsJadson](https://github.com/httpsJadson)
- **Samuel Ferreira Vieira** - [SamuelFerreiraVieira](https://github.com/SamuelFerreiraVieira)

## Licença

Este projeto é licenciado sob a MIT License.
