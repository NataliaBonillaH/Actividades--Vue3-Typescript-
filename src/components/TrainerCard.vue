<script setup lang="ts">
import type { EntrenadorOnline } from '../data/npcs'

interface Props {
  entrenador: EntrenadorOnline
}

defineProps<Props>()
</script>

<template>
  <div class="trainer-item" :class="{ [entrenador.estado]: true }">
    <div class="trainer-avatar">👤</div>
    <div class="trainer-info">
      <h4>{{ entrenador.nombre }}</h4>
      <p class="nivel">Nivel: {{ entrenador.nivel }}</p>
      <span class="estado-badge">{{
        entrenador.estado === 'disponible' ? '🟢 Disponible' : '🔴 Ocupado'
      }}</span>
    </div>
  </div>
</template>

<style scoped>
.trainer-item {
  background: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #ddd;
}

.trainer-item.disponible {
  border-left-color: #4ade80;
}

.trainer-item.ocupado {
  border-left-color: #f87171;
  opacity: 0.7;
}

.trainer-avatar {
  font-size: 2.5rem;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trainer-info h4 {
  margin: 0 0 4px 0;
  color: #333;
}

.trainer-info .nivel {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.estado-badge {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.85rem;
}
</style>
