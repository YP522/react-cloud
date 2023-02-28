# Utiliser une image Node.js en tant que base
FROM node:14.17.6-alpine3.14

# Définir le répertoire de travail de l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install --silent

# Copier tous les fichiers du répertoire actuel dans le répertoire de travail de l'application
COPY . .

# Compiler l'application
RUN npm run build

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Définir la commande à exécuter pour lancer l'application
CMD ["npm", "start"]
