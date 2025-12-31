# Nekos — Sitio ejemplo

Este directorio contiene una maqueta sencilla de sitio web para un sistema operativo (Nekos).

Archivos principales:
- index.html — Página principal.
- styles.css — Estilos.
- script.js — Interactividad mínima (modal de descarga).

Cómo ver el sitio:
1. Abrir `Nekos/os-website/index.html` en un navegador (doble clic o arrastrar al navegador).
2. Alternativamente, servir la carpeta con un servidor local (por ejemplo, Python):

```powershell
# Desde la carpeta Nekos/os-website:
python -m http.server 8000
# luego abrir http://localhost:8000
```

Siguientes pasos sugeridos:
- Añadir logos y capturas reales en la carpeta `assets/` o usar las imágenes existentes `Speed.png`, `Compatible.png`, `Safe.png`.
- Rellenar las URLs reales de descarga y la documentación.
- Integrar un CMS o sistema de versiones para las releases.

Nota: el encabezado usa `Nekos-logo.png` como favicon y logo. Las capturas en la sección "Capturas" usan `Speed.png`, `Compatible.png` y `Safe.png`.
