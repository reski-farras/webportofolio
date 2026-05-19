# Pake mesin Node.js versi ringan
FROM node:18-alpine

# Bikin folder kerja di dalam container
WORKDIR /app

# Copy catatan instalasi (package.json) dan install
COPY package.json .
RUN npm install

# Copy semua kode React lu
COPY . .

# Perintah jalanin React (harus pake --host biar kedeteksi browser lu)
CMD ["npm", "run", "dev", "--", "--host"]