# 1. Usamos una imagen liviana de Node.js como base
FROM node:18-alpine

# 2. Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de configuración de paquetes
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install

# 5. Copiamos todo el resto del código del portafolio
COPY . .

# 6. Compilamos la aplicación de Next.js para producción
RUN npm run build

# 7. Exponemos el puerto por el que corre Next.js
EXPOSE 3000

# 8. Comando para arrancar la app en modo producción
CMD ["npm", "start"]