# 🧪 Tutorial Git desde Cero lab1 uss 2025

Laboratorio de uso de git desde cero pero con la cuenta ya creada

---

## ✅ Requisitos Previos

- Tener Git instalado (puedes verificar con `git --version`)
- Tener una cuenta en GitHub creada
- Configurar tu usuario de Git (solo la primera vez):

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@dominio.com"
```

---

## 🐣 Paso 1: Crear el proyecto local

```bash
mkdir proyecto-ejemplo
cd proyecto-ejemplo
```

---

## 🧠 Paso 2: Inicializar el repositorio Git

```bash
git init
```

Esto crea una carpeta `.git` que guarda el historial de versiones.

---

## 📄 Paso 3: Crear el primer archivo

```bash
echo "# Proyecto de ejemplo" > README.md
```

---

## 📌 Paso 4: Verificar el estado del proyecto

```bash
git status
```

---

## ✅ Paso 5: Agregar archivos al staging area

```bash
git add README.md
```

O todos los archivos:

```bash
git add .
```

---

## 🧾 Paso 6: Hacer el primer commit

```bash
git commit -m "Primer commit: agregando README"
```

---

## 🌐 Paso 7: Crear el repositorio en GitHub

1. Ir a [https://github.com](https://github.com)
2. Click en **"New repository"**
3. Nombrarlo `proyecto-ejemplo`
4. NO agregar README, ni .gitignore, ni licencia
5. Copiar la URL del repositorio, por ejemplo:  
   `https://github.com/usuario/proyecto-ejemplo.git`

---

## 🔗 Paso 8: Conectar el repositorio local con GitHub

```bash
git remote add origin https://github.com/usuario/proyecto-ejemplo.git
```

---

## 🚀 Paso 9: Subir tu proyecto a GitHub

```bash
git branch -M main       # Cambia a rama main, si es necesario
git push -u origin main  # Sube el proyecto
```

---

## ✏️ Paso 10: Hacer cambios y sincronizar

```bash
echo "Este es un cambio de prueba" >> README.md
git status
git add README.md
git commit -m "Agrego línea de prueba al README"
git push
```

---

## 🧽 Paso 11 (Opcional): Clonar desde otro computador

```bash
git clone https://github.com/usuario/proyecto-ejemplo.git
```

---

## 🎉 ¡Listo!

Ya sabes cómo crear, versionar y subir un proyecto desde cero usando Git y GitHub.

---

 
