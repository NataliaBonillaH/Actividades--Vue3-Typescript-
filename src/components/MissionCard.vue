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
  background: #fffaf7;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border: 2px solid #d4ccc2;
  transition: all 0.2s ease;
}

.mission-item:hover {
  box-shadow: 0 4px 10px rgba(139, 123, 111, 0.1);
}

.mission-item.completada {
  border-color: #a8d5a8;
  background: #f5faf5;
}

.mission-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.mission-header h4 {
  margin: 0;
  color: #6b5b50;
  font-weight: 600;
}

.recompensa {
  background: #e8d4a0;
  color: #8b7355;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
}

.descripción {
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  color: #8b7b6f;
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
  background: #d1e7d1;
  color: #5a7a5a;
}

.status-badge.pending {
  background: #e8d4d4;
  color: #8b6a6a;
}
</style>
