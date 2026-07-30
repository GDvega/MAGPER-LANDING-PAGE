# MAGPER Landing Page

Landing independiente del catálogo principal. Su único objetivo es convertir una necesidad de
abastecimiento industrial en una conversación de cotización por WhatsApp. No muestra SKU, precios,
stock, checkout ni fichas de producto.

## Decisiones de conversión

- La propuesta de valor aparece en el primer pantallazo y explica qué puede hacer el visitante.
- La página mantiene un solo objetivo: **enviar un requerimiento por WhatsApp**.
- Las siete categorías ayudan a reconocer la oferta sin fingir un inventario disponible.
- La confianza se apoya en datos verificables: razón social, RUC, cobertura y marcas confirmadas.
- Las objeciones sobre códigos, disponibilidad, despachos y listas mixtas se responden antes del
  CTA final.
- No se incluyeron testimonios, certificaciones, tiempos de respuesta, garantías o cifras de venta
  porque MAGPER no ha proporcionado evidencia que permita publicarlos.

## Sistema visual

- **Colores:** azul profundo `#041F35`, azul MAGPER `#0B4776`, rojo de acción `#E9003C`,
  hielo `#EFF4F8`, blanco `#FFFFFF` y grafito `#17212B`.
- **Tipografía:** familia condensada del sistema para titulares y sans-serif del sistema para
  lectura. No se descargan fuentes externas.
- **Composición:** cabecera compacta, hero diagonal, franja de pruebas verificables, categorías,
  proceso, marcas, preguntas y cierre comercial.
- **Firma visual:** el corte diagonal del hero y las líneas rojas de señal industrial conectan la
  identidad MAGPER con la fotografía sin convertir la página en una plantilla genérica.

Esquema:

```text
[contacto + brochure]
[logo | navegación | CTA]
[propuesta de valor | fotografía industrial diagonal]
[7 categorías | 25 marcas | cotización por necesidad]
[categorías generales]
[proceso en 3 pasos]
[marcas confirmadas]
[preguntas frecuentes]
[CTA WhatsApp]
[datos legales y contacto]
```

## Investigación aplicada

- Google recomienda que la landing sea relevante y útil, mantenga coherencia con la promesa,
  facilite la navegación, sea móvil y cargue rápido:
  <https://support.google.com/google-ads/answer/6167130>
- Para móvil, Google prioriza navegación simple, llamadas directas, pocos distractores y campos
  mínimos; por eso esta versión usa WhatsApp en lugar de un formulario:
  <https://support.google.com/google-ads/answer/2549057>
- La anatomía de Unbounce propone propuesta de valor, hero, beneficios, prueba social y un solo
  objetivo de conversión. Aquí la prueba social se limita a marcas realmente confirmadas:
  <https://unbounce.com/landing-page-articles/the-anatomy-of-a-landing-page/>
- WCAG 2.2 exige contraste, foco visible, reflujo y objetivos operables. Los controles principales
  tienen al menos 44 px y el documento conserva una jerarquía semántica:
  <https://www.w3.org/TR/WCAG22/>
- Los objetivos técnicos siguen Core Web Vitals: LCP ≤ 2.5 s, INP ≤ 200 ms y CLS ≤ 0.1 en el
  percentil 75:
  <https://web.dev/articles/defining-core-web-vitals-thresholds>

## Uso local

La landing usa React 19 y Vite. Instala una vez y levanta el servidor:

```bash
cd "/home/gerson/proyectos/tiendaFerreteria/MAGPER LANDING PAGE"
npm install
npm run dev
```

Abrir la URL que muestra Vite, normalmente <http://localhost:5173>. La landing no modifica MAGPER
ni se ha publicado.

## Imágenes de categorías

Las siete imágenes `public/assets/categories/*-v2.webp` fueron generadas con la herramienta
integrada de generación de imágenes y optimizadas a WebP de 1600 × 900. El prompt común solicita
fotografía editorial de catálogo industrial, taller azul grafito, iluminación de estudio,
productos físicamente plausibles y ausencia de personas, logos, marcas, texto, precios y marcas de
agua. Cada variante cambia únicamente el conjunto de productos para representar electricidad,
EPP, herramientas, iluminación, ferretería, limpieza o repuestos.
