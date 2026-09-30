const RONDAS=[
 {n:"Responsabilidad del Estado", f:[
  {k:"rol",x:"Eres un magistrado auxiliar con 8 años de experiencia en reparación directa, que proyecta sentencias de segunda instancia."},
  {k:"rol",x:"Eres un oficial que verifica la oportunidad de la demanda antes de que el despacho decida sobre la admisión."},
  {k:"ctx",x:"El Tribunal negó las pretensiones por falta de prueba del nexo causal y el demandante apeló el [fecha]."},
  {k:"ctx",x:"El daño se habría producido el [fecha] y la demanda se radicó el [fecha], con solicitud de conciliación de por medio."},
  {k:"ins",x:"Devuelve una tabla con cada cargo de la apelación y la prueba del expediente que lo respalda."},
  {k:"ins",x:"No propongas el sentido del fallo, presenta solo el análisis de los cargos."}]},
 {n:"Contratos y precedente", f:[
  {k:"rol",x:"Eres un relator con experiencia en jurisprudencia de la Sección Tercera sobre contratación estatal."},
  {k:"rol",x:"Eres un oficial mayor que controla términos, traslados y ejecutorias de los procesos del despacho."},
  {k:"ctx",x:"Hay tres sentencias de la Subsección que resolvieron de forma distinta el mismo problema sobre equilibrio económico del contrato."},
  {k:"ctx",x:"El despacho tiene [N] procesos con traslado para alegatos que vence esta semana."},
  {k:"ins",x:"Marca con [verificar] cualquier número de sentencia o fecha que cites de memoria."},
  {k:"ins",x:"Presenta las sentencias en un cuadro con fecha, tesis y decisión, sin resumir el contenido completo."}]},
 {n:"Las que engañan", f:[
  {k:"rol",x:"Eres un coordinador de despacho que prepara un informe para un magistrado con poco tiempo."},
  {k:"rol",x:"Eres cuidadoso al separar lo que el expediente prueba de lo que solo alega una parte."},
  {k:"ctx",x:"Toda la información de este caso está anonimizada: las partes se nombran como demandante y demandada."},
  {k:"ctx",x:"El dictamen pericial fue contradicho por las partes y el Tribunal no lo valoró de forma expresa."},
  {k:"ins",x:"Separa lo probado, lo alegado sin prueba y lo que el expediente no permite saber."},
  {k:"ins",x:"No decidas el caso, la valoración final de la prueba corresponde al magistrado."}]}
];
