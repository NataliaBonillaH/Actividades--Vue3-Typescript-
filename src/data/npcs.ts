export interface NPC {
  id: number
  nombre: string
  sprite: string
  diálogo: string
  rol: string
}

export interface EntrenadorOnline {
  id: number
  nombre: string
  estado: 'disponible' | 'ocupado'
  nivel: number
}

export interface Misión {
  id: number
  nombre: string
  descripción: string
  recompensa: number
  completada: boolean
  zonaId: number
}

export const npcsPorZona: Record<number, NPC[]> = {
  1: [
    {
      id: 1,
      nombre: 'Prof. Roble',
      sprite: '👨‍🏫',
      diálogo: '¡Bienvenido a Bosque Verdoso! Aquí podrás encontrar muchos Pokémon salvajes.',
      rol: 'Profesor',
    },
    {
      id: 2,
      nombre: 'Vendedora de Pociones',
      sprite: '💊',
      diálogo: 'Vendo pociones de las mejores. ¿Quieres comprar?',
      rol: 'Vendedora',
    },
  ],
  2: [
    {
      id: 3,
      nombre: 'Guía de Cueva',
      sprite: '👨‍🔬',
      diálogo: 'Esta cueva es peligrosa. Asegúrate de traer pociones.',
      rol: 'Guía',
    },
    {
      id: 4,
      nombre: 'Minero',
      sprite: '⛏️',
      diálogo: 'En esta cueva encontrarás Pokémon de tipo fuego y roca.',
      rol: 'Minero',
    },
  ],
  3: [
    {
      id: 5,
      nombre: 'Marinero',
      sprite: '⛵',
      diálogo: 'Las aguas aquí están muy tormentosas. Cuidado con los Pokémon acuáticos.',
      rol: 'Marinero',
    },
    {
      id: 6,
      nombre: 'Salvavidas',
      sprite: '🏊',
      diálogo: 'Espero que sepas nadar. Aquí hace mucho viento.',
      rol: 'Salvavidas',
    },
  ],
}

export const entrenadoresOnline: EntrenadorOnline[] = [
  { id: 1, nombre: 'TrainerAsh', estado: 'disponible', nivel: 25 },
  { id: 2, nombre: 'CampeoneMisty', estado: 'disponible', nivel: 30 },
  { id: 3, nombre: 'RinoceronteBrock', estado: 'ocupado', nivel: 28 },
  { id: 4, nombre: 'Surfista Gary', estado: 'disponible', nivel: 26 },
]

export const misionesPorZona: Record<number, Misión[]> = {
  1: [
    {
      id: 1,
      nombre: 'Captura de Pikachu',
      descripción: 'Captura un Pikachu en el Bosque Verdoso',
      recompensa: 100,
      completada: false,
      zonaId: 1,
    },
    {
      id: 2,
      nombre: 'Derrota 5 Pokémon',
      descripción: 'Derrota a 5 Pokémon salvajes',
      recompensa: 150,
      completada: false,
      zonaId: 1,
    },
  ],
  2: [
    {
      id: 3,
      nombre: 'Captura de Charmander',
      descripción: 'Captura un Charmander en la Cueva Ignea',
      recompensa: 120,
      completada: false,
      zonaId: 2,
    },
    {
      id: 4,
      nombre: 'Explora la cueva completa',
      descripción: 'Visita todas las áreas de la Cueva Ignea',
      recompensa: 200,
      completada: false,
      zonaId: 2,
    },
  ],
  3: [
    {
      id: 5,
      nombre: 'Captura de Squirtle',
      descripción: 'Captura un Squirtle en la Costa Tormentosa',
      recompensa: 120,
      completada: false,
      zonaId: 3,
    },
    {
      id: 6,
      nombre: 'Sobrevive la tormenta',
      descripción: 'Vence 3 batallas en la tormenta',
      recompensa: 250,
      completada: false,
      zonaId: 3,
    },
  ],
}
