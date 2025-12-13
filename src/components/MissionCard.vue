<script setup lang="ts">
import type { Misión } from '../data/npcs'

interface Props {
  misión: Misión
}

defineProps<Props>()
</script>

<template>
  <div class="mission-item" :class="{ completada: misión.completada }">
    <div class="mission-header">
      <h4>{{ misión.nombre }}</h4>
      <span class="recompensa">+{{ misión.recompensa }} XP</span>
    </div>
    <p class="descripción">{{ misión.descripción }}</p>
    <div class="mission-status">
      <span v-if="misión.completada" class="status-badge completed">✓ Completada</span>
      <span v-else class="status-badge pending">⏳ Pendiente</span>
    </div>
  </div>
</template>

<style scoped>
.mission-item {
  background: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
}

.mission-item.completada {
  border-color: #4ade80;
  background: #f0fdf4;
}

.mission-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.mission-header h4 {
  margin: 0;
  color: #333;
}

.recompensa {
  background: #fbbf24;
  color: #78350f;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.descripción {
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  color: #666;
}

.mission-status {
  display: flex;
  gap: 8px;
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-badge.completed {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.pending {
  background: #fee2e2;
  color: #7f1d1d;
}
</style>
