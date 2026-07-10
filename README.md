# Rancho Sagrada Família Landing Page

Projeto Vite + React + TypeScript para a landing page institucional do Rancho Sagrada Família.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Assets

A página já inclui fallbacks visuais em CSS para manter o layout completo quando as imagens reais ainda não existem. Para publicar, substitua os blocos comentados em `src/sections/About.tsx` e `src/sections/Products.tsx` pelos arquivos reais previstos no briefing:

- `hero-fazenda.jpg`
- `manga-palmer.jpg`
- `manga-tommy.jpg`
- `manga-keitt.jpg`
- `manga-kent.jpg`
- `colheita.jpg`
- `packing.jpg`
- `manga-folhas.jpg`
- `mapa-exportacao.svg`
- `logo-rancho.svg` ou `logo-rancho.png`

## Formulário

O formulário está preparado para Web3Forms. Antes de publicar, substitua `SUBSTITUIR_PELA_ACCESS_KEY` em `src/sections/Contact.tsx`.
