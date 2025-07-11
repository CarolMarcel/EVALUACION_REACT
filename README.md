# 🌟 EVALUACION_REACT – App de Hábitos Diarios

Esta es una aplicación web desarrollada con **React** + **Vite** que permite registrar, organizar y visualizar hábitos diarios.  
Cuenta con **modo claro y oscuro**, animaciones suaves, filtros por estado, ordenamiento, progreso visual y un **calendario mensual** donde se reflejan los hábitos realizados cada día.

> 🧪 Proyecto realizado como parte de una evaluación educativa.

---

## ✨ Características principales

- ✅ Agregar y eliminar hábitos
- 🌓 Alternar entre modo claro y oscuro
- 🔄 Animaciones al agregar o eliminar hábitos
- 🔍 Filtros: Todos | Completados | Pendientes
- 📅 Muestra la fecha del hábito
- 📊 Barra de progreso visual
- 🗓️ Visualización mensual tipo calendario con hábitos registrados por día

---

## 🛠️ Tecnologías utilizadas

| Herramienta       | Versión       |
|-------------------|---------------|
| Node.js           | v22.16.0      |
| npm               | 10.9.2        |
| React             | 19.1.0        |
| React DOM         | 19.1.0        |
| Vite              | 7.0.2         |
| gh-pages          | 6.3.0         |
| ESLint            | 9.30.1        |

---

## ⚙️ Configuración adicional

Algunos comandos no se ejecutaban por permisos. Para resolverlo, se utilizó:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

Esto permitió correr correctamente scripts como npm run build y npm run deploy.

🚀 Scripts disponibles
bash
Copiar
Editar
npm run dev         # Inicia el servidor de desarrollo
npm run build       # Genera la versión de producción (carpeta dist)
npm run preview     # Previsualiza la build local
npm run deploy      # Publica en GitHub Pages
📦 El proyecto está configurado para desplegarse en GitHub Pages desde la carpeta dist/.

✨ Créditos
Desarrollado por Carol marcel como parte de un desafío académico.
Incluye funcionalidades mejoradas y diseño visual intuitivo.

![Captura de la App](./captura-app.png)
