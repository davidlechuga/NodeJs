let pared = {
  construida: false,
  aplanada: false,
  pintada: false
}
function aplanarPared (pared, accion) {
  console.log('aplanar pared')
  pared.aplanada = true
  accion(pared, () => console.log('terminamos!', pared))
}
function pintarPared (pared, accion) {
  console.log('pintar pared')
  pared.pintada = true
  accion()
}
function construirPared (pared) {
  console.log('construir pared')
  pared.construida = true
  aplanarPared(pared, pintarPared)
}
construirPared(pared)