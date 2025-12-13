<script setup lang="ts">
import { misionesPorZona } from '../data/npcs'
import { useRouter } from 'vue-router'

const router = useRouter()
const allMissions = Object.values(misionesPorZona).flat()
</script>

<template>
  <div class="missions-page">
    <div class="missions-header">
      <h1>📋 Misiones Disponibles</h1>
      <button class="btn-back" @click="router.push('/map')">← Volver al Mapa</button>
    </div>

    <div class="missions-list">
      <div v-for="m in allMissions" :key="m.id" class="mission-card">
        <div class="mission-badge">Zona {{ m.zonaId }}</div>
        <h3>{{ m.nombre }}</h3>
        <p class="description">{{ m.descripción }}</p>
        <div class="mission-footer">
          <span class="reward">⭐ +{{ m.recompensa }} XP</span>
          <span v-if="m.completada" class="status completed">✓ Completada</span>
          <span v-else class="status pending">⏳ Pendiente</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.missions-page {
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
}

.missions-header {
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.missions-header h1 {
  font-size: 2.2rem;
  margin: 0;
  color: #333;
}

.btn-back {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-back:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.missions-list {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.mission-card {
  background: white;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid #667eea;
}

.mission-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);
}

.mission-badge {
  position: absolute;
  top: -8px;
  right: 12px;
  background: #667eea;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
}

.mission-card h3 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.1rem;
}

.description {
  margin: 0 0 12px 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.mission-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.reward {
  background: #fbbf24;
  color: #78350f;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status.completed {
  background: #d1fae5;
  color: #065f46;
}

.status.pending {
  background: #fee2e2;
  color: #7f1d1d;
}

@media (max-width: 768px) {
  .missions-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .missions-header h1 {
    font-size: 1.8rem;
  }

  .btn-back {
    width: 100%;
  }

  .missions-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .missions-page {
    padding: 12px;
  }

  .missions-header h1 {
    font-size: 1.5rem;
  }

  .mission-card {
    padding: 14px;
  }

  .mission-card h3 {
    font-size: 1rem;
  }
}
</style>
