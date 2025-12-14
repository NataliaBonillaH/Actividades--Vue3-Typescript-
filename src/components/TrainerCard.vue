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
  background: #fffaf7;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #d4ccc2;
  border: 1px solid #e8e1d8;
  transition: all 0.2s ease;
}

.trainer-item:hover {
  box-shadow: 0 4px 10px rgba(139, 123, 111, 0.1);
}

.trainer-item.disponible {
  border-left-color: #a8d5a8;
}

.trainer-item.ocupado {
  border-left-color: #e8d4d4;
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
  color: #6b5b50;
  font-weight: 600;
}

.trainer-info .nivel {
  margin: 0;
  font-size: 0.9rem;
  color: #8b7b6f;
}

.estado-badge {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.85rem;
}
</style>
