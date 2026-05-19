# Pake mesin Python versi ringan
FROM python:3.10-slim

# Bikin folder kerja di dalam container
WORKDIR /app

# Copy daftar library dan install
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy semua kode Django lu ke dalam container
COPY . .

# Perintah jalanin server (0.0.0.0 penting biar bisa diakses dari luar container)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]