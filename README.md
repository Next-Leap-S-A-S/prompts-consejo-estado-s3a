# Prompts RCI: Consejo de Estado, Sección Tercera, Subsección A

Herramienta de apoyo para la capacitación en escritura de prompts bajo la
metodología **Rol · Contexto · Instrucción**, adaptada al trabajo de un
despacho de la Sección Tercera, Subsección A del Consejo de Estado
(responsabilidad del Estado y contratación estatal).

## Qué contiene

- **Biblioteca**: 52 prompts listos para usar, 13 por cada uno de los 4 frentes
  de trabajo: **Estudio del expediente**, **Jurisprudencia y precedente**,
  **Proyectos de providencia** y **Gestión del despacho**. Cada prompt es una
  tarea concreta y se filtra por frente o por búsqueda.
  Los campos entre corchetes son editables en la propia página; al copiar se
  copia el texto ya editado. Cada prompt trae el "antes" (la versión vaga),
  por qué falla y un tip.
- **Laboratorio**: constructor con medidor de calidad en vivo sobre 8
  criterios, más un detector de datos personales y de identificadores
  sensibles (cédulas, NIT, radicados) antes de copiar.
- **Ejercicio**: clasificación de fragmentos en Rol / Contexto / Instrucción,
  con tres rondas y temporizador para facilitación en sala.

## Cómo está construido

Un único archivo `index.html` **autocontenido**: tipografías (Inter, IBM Plex
Mono) y logo van incrustados en base64. No hace ninguna petición externa. Es
ASCII puro: las tildes van como entidades HTML y como escapes `\uXXXX` en el
JavaScript.

### Editar el contenido

El `index.html` se genera desde `src/`:

```
src/
  template.html              marcado, estilos y logica (UTF-8, legible)
  prompts-expediente.js      13 prompts de estudio del expediente
  prompts-jurisprudencia.js  13 prompts de jurisprudencia y precedente
  prompts-providencia.js     13 prompts de proyectos de providencia
  prompts-despacho.js        13 prompts de gestion del despacho
  rondas.js                  rondas del ejercicio
  assets/                    tipografias .woff2 y logo
  build.py                   ensambla y convierte a ASCII
```

Edita los `.js` o la plantilla con tildes normales y corre:

```
python3 src/build.py
```

Cada prompt es un objeto `{a, t, r, c, i, mal, por, tip}`: frente,
título, rol, contexto, instrucción, prompt "antes", por qué falla y tip. Los
marcadores editables se escriben entre corchetes: `[fecha]`.

## Manejo de información

Los prompts están diseñados para trabajar con información anonimizada. Antes
de pegar contenido en una herramienta de IA hay que reemplazar nombres de las
partes, cédulas, NIT y números de radicado por marcadores genéricos. No pegar
información sujeta a reserva ni expedientes con datos de menores de edad.
Usar únicamente las herramientas de IA aprobadas por la Corporación. La salida
del modelo es un borrador: la decisión, la valoración de la prueba y la cita
de cada norma y sentencia siguen siendo del funcionario responsable, que debe
verificarlas en la fuente.

Las normas y sentencias que aparecen en los prompts van marcadas con
`[verificar]` donde se citan de memoria. Antes de la capacitación, un abogado
del despacho debe revisarlas.

---

Next Leap S.A.S.
