# Use a imagem base do Node.js
FROM node:16-alpine

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Defina o comando para rodar a aplicação
CMD ["node", "index.js"]
