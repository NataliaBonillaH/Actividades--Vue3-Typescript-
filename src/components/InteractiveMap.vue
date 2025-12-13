<script setup lang="ts">
import ZoneCard from './ZoneCard.vue'
import { zonas } from '../data/zones'
</script>

<template>
  <div class="map-container">
    <h1>🗺️ Mapa Interactivo</h1>
    <p class="map-subtitle">
      Explora las zonas disponibles. Completa misiones para desbloquear nuevas áreas.
    </p>
    <div class="map-path">
      <div v-for="zone in zonas" :key="zone.id" class="zone-wrapper">
        <div class="connector"></div>
        <ZoneCard :zone="zone" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-container {
  padding: 40px 20px;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  min-height: 100vh;
}

.map-container h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 8px;
  color: #333;
}

.map-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 0.95rem;
}

.map-path {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 400px;
  margin: 0 auto;
}

.zone-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connector {
  width: 4px;
  height: 30px;
  background: linear-gradient(180deg, #ddd 0%, #bbb 100%);
  margin-bottom: 10px;
}

.zone-wrapper:first-child .connector {
  display: none;
}

@media (max-width: 768px) {
  .map-container h1 {
    font-size: 2rem;
  }

  .map-subtitle {
    font-size: 0.9rem;
  }

  .map-path {
    gap: 25px;
  }

  .connector {
    height: 25px;
  }
}

@media (max-width: 480px) {
  .map-container {
    padding: 24px 16px;
  }

  .map-container h1 {
    font-size: 1.6rem;
  }

  .map-subtitle {
    font-size: 0.85rem;
    margin-bottom: 30px;
  }

  .map-path {
    gap: 20px;
    max-width: 100%;
  }

  .connector {
    height: 20px;
  }
}
</style>
