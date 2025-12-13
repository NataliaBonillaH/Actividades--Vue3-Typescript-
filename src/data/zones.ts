export interface Zone {
  id: number
  nombre: string
  desbloqueado: boolean
}

export const zonas: Zone[] = [
  { id: 1, nombre: 'Bosque Verdoso', desbloqueado: true },
  { id: 2, nombre: 'Cueva Ignea', desbloqueado: false },
  { id: 3, nombre: 'Costa Tormentosa', desbloqueado: false },
]
