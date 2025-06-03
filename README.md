# Trading Bot para Binance

Um bot de trading automatizado para a plataforma Binance, com interface de usuário para configuração e monitoramento em tempo real.

## Visão Geral

Este projeto consiste em um bot de trading que se conecta à API da Binance, permitindo monitorar mercados e executar operações automáticas. O sistema é dividido em duas partes principais:

- **Backend**: API RESTful em Node.js com Express e WebSockets para dados em tempo real
- **Frontend**: Interface de usuário em React para gerenciamento e monitoramento

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Sequelize (ORM)
- WebSockets (ws)
- node-binance-api
- JWT para autenticação
- MySQL/PostgreSQL

### Frontend
- React
- React Router
- Axios
- WebSockets

## Estrutura do Projeto

```
├── backend/
│   ├── config/           # Configurações do Sequelize
│   ├── migrations/       # Migrações do banco de dados
│   ├── seeders/          # Seeds iniciais do banco
│   ├── src/
│   │   ├── controllers/  # Controladores da API
│   │   ├── middlewares/  # Middlewares de autenticação e erro
│   │   ├── models/       # Modelos de dados
│   │   ├── repositories/ # Camada de acesso a dados
│   │   ├── routers/      # Rotas da API
│   │   ├── utils/        # Utilitários e integrações
│   │   ├── app.js        # Configuração do Express
│   │   ├── app-ws.js     # Configuração de WebSockets
│   │   ├── server.js     # Ponto de entrada da aplicação
│   ├── .env              # Variáveis de ambiente
│   └── package.json      # Dependências do backend
├── frontend/
│   ├── public/           # Arquivos estáticos
│   ├── src/              # Código fonte do React
│   └── package.json      # Dependências do frontend
```

## Funcionalidades

- Conexão com a API da Binance (suporte para ambiente de teste)
- Autenticação e autorização com JWT
- Monitoramento de saldo e transações em tempo real
- Configuração de parâmetros de trading
- Gerenciamento de símbolos/pares de trading
- Stream de dados em tempo real via WebSockets

## Requisitos

- Node.js (v14+)
- NPM ou Yarn
- MySQL ou PostgreSQL
- Conta na Binance (ou Binance Testnet para testes)

## Instalação

### Backend

1. Navegue até a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env` na raiz do diretório backend:
```env
NODE_ENV=development
PORT=3001
CORS_ORIGIN=http://localhost:3000

# JWT Secret
JWT_SECRET=seu_jwt_secret

# Database
DB_NAME=trading_bot
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql

# Binance API (Testnet para desenvolvimento)
API_URL=https://testnet.binance.vision/api
STREAM_URL=wss://testnet.binance.vision/ws
ACCESS_KEY=sua_binance_access_key
SECRET_KEY=sua_binance_secret_key
```

4. Crie o banco de dados e execute as migrações:
```bash
npm run createdb
npm run migratedb
npm run seeddb
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

## Uso

1. Acesse a interface web em `http://localhost:3000`
2. Faça login com as credenciais configuradas no seed do banco de dados
3. Configure suas chaves de API da Binance em Configurações
4. Configure os pares de trading e estratégias desejadas
5. Inicie o monitoramento e trading automático

## Segurança

- As chaves de API da Binance são armazenadas de forma criptografada no banco de dados
- Autenticação via JWT com expiração de tokens
- Helmet para proteção contra vulnerabilidades comuns

## Desenvolvimento

### Comandos úteis

**Backend:**
```bash
npm run dev        # Iniciar servidor com nodemon
npm start          # Iniciar servidor em produção
```

**Frontend:**
```bash
npm start          # Iniciar servidor de desenvolvimento
npm run build      # Construir para produção
```

## Avisos

- Este bot é destinado para fins educacionais e de desenvolvimento
- Trading de criptomoedas envolve riscos significativos
- Recomenda-se testar extensivamente em ambiente de testes (testnet) antes de usar com fundos reais
- Não nos responsabilizamos por quaisquer perdas financeiras decorrentes do uso deste software

## Licença

ISC
