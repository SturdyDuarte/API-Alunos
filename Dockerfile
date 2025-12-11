FROM node:18-alpine

# Diretório da aplicação no container
WORKDIR /usr/src/app

# Copia package.json primeiro para otimizar cache
COPY package*.json ./

# Instala dependências (produção)
RUN npm install --production

# Copia o restante do código
COPY . .

# Define variável de ambiente opcional
ENV NODE_ENV=production

# Exponha porta do app
EXPOSE 3000

# Inicia a aplicação
CMD ["node", "src/server.js"]