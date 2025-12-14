<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import NPCCard from './NPCCard.vue'
import TrainerCard from './TrainerCard.vue'
import MissionCard from './MissionCard.vue'
import { npcsPorZona, entrenadoresOnline, misionesPorZona } from '../data/npcs'
import { zonas as zonasData } from '../data/zones'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()

const zoneId = parseInt(route.params.id as string)
const zoneData = zonasData.find((z) => z.id === zoneId)
const npcs = npcsPorZona[zoneId] || []
const misiones = misionesPorZona[zoneId] || []

const showCaptureModal = ref(false)
const capturedPokemon = ref('')

const iniciarCaptura = () => {
  showCaptureModal.value = true
  const pokemones = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur', 'Dragonite']
  capturedPokemon.value = pokemones[Math.floor(Math.random() * pokemones.length)]

  setTimeout(() => {
    alert(`¡Capturaste un ${capturedPokemon.value}!`)
    showCaptureModal.value = false
  }, 2000)
}

const verMisiones = () => {
  router.push('/missions')
}

const iniciarBatallaPVP = () => {
  router.push('/pvp')
}

const volverAlMapa = () => {
  router.push('/map')
}
</script>

<template>
  <div class="zone-lobby">
    <!-- Header -->
    <div class="lobby-header">
      <button class="btn-back" @click="volverAlMapa">← Volver</button>
      <div class="header-title">
        <h1>Zona {{ zoneId }}</h1>
        <h2 v-if="zoneData">{{ zoneData.nombre }}</h2>
      </div>
    </div>

    <!-- Quick Actions -->
    <section class="quick-actions">
      <button class="btn-primary" @click="iniciarCaptura">🎯 Capturar Pokémon</button>
      <button class="btn-secondary" @click="verMisiones">📋 Misiones</button>
      <button class="btn-secondary" @click="iniciarBatallaPVP">⚔️ Batalla PVP</button>
    </section>

    <!-- Capture Modal -->
    <div v-if="showCaptureModal" class="capture-modal">
      <div class="modal-content">
        <p class="loading">🎣 ¡Buscando Pokémon!</p>
        <div class="spinner"></div>
      </div>
    </div>

    <div class="lobby-content">
      <!-- NPCs Section -->
      <section class="lobby-section npcs-section">
        <h2>👥 NPCs disponibles</h2>
        <div v-if="npcs.length > 0" class="content-list">
          <NPCCard v-for="npc in npcs" :key="npc.id" :npc="npc" />
        </div>
        <p v-else class="no-data">No hay NPCs en esta zona</p>
      </section>

      <!-- Online Trainers Section -->
      <section class="lobby-section trainers-section">
        <h2>🎮 Entrenadores en línea</h2>
        <div v-if="entrenadoresOnline.length > 0" class="content-list">
          <TrainerCard
            v-for="trainer in entrenadoresOnline"
            :key="trainer.id"
            :entrenador="trainer"
          />
        </div>
        <p v-else class="no-data">No hay entrenadores disponibles</p>
      </section>

      <!-- Missions Section -->
      <section class="lobby-section missions-section">
        <h2>⚡ Misiones disponibles</h2>
        <div v-if="misiones.length > 0" class="content-list">
          <MissionCard v-for="mision in misiones" :key="mision.id" :misión="mision" />
        </div>
        <p v-else class="no-data">No hay misiones en esta zona</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.zone-lobby {
  min-height: 100vh;
  background: #f5f3f0;
  padding: 20px;
  padding-bottom: 40px;
}

.lobby-header {
  width: 100%;
  margin: 0 auto 30px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-back {
  background: #8b7b6f;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 100px;
}

.btn-back:hover {
  background: #6b5b50;
  transform: translateX(-2px);
}

.header-title {
  text-align: left;
}

.lobby-header h1 {
  font-size: 2.2rem;
  margin: 0;
  color: #6b5b50;
  font-weight: 800;
}

.lobby-header h2 {
  font-size: 1.3rem;
  margin: 4px 0 0 0;
  color: #b89968;
  font-weight: 600;
}

/* Quick Actions Section */
.quick-actions {
  width: 100%;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.btn-primary {
  background: linear-gradient(135deg, #8b7b6f 0%, #b89968 100%);
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(139, 123, 111, 0.3);
}

.btn-primary:active {
  transform: translateY(-1px);
}

.btn-secondary {
  background: white;
  color: #8b7b6f;
  border: 2px solid #d4ccc2;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #8b7b6f;
  color: white;
  border-color: #8b7b6f;
  transform: translateY(-2px);
}

/* Capture Modal */
.capture-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: #fffaf7;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid #e8e1d8;
}

.loading {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #6b5b50;
  font-weight: 600;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e8e1d8;
  border-top: 4px solid #b89968;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Content Sections */
.lobby-content {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.lobby-section {
  background: #fffaf7;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e8e1d8;
}

.lobby-section h2 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #6b5b50;
  font-size: 1.1rem;
  border-bottom: 2px solid #b89968;
  padding-bottom: 8px;
  font-weight: 600;
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.no-data {
  text-align: center;
  color: #a89888;
  padding: 20px;
  font-style: italic;
}

@media (max-width: 768px) {
  .zone-lobby {
    padding: 16px;
  }

  .lobby-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .lobby-header h1 {
    font-size: 1.8rem;
  }

  .lobby-header h2 {
    font-size: 1.1rem;
  }

  .quick-actions {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .btn-back,
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .lobby-content {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .modal-content {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .lobby-header h1 {
    font-size: 1.5rem;
  }

  .quick-actions {
    grid-template-columns: 1fr;
  }
}
</style>
