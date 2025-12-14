<script setup lang="ts">
import type { NPC } from '../data/npcs'

interface Props {
  npc: NPC
}

defineProps<Props>()
</script>

<template>
  <div class="npc-item">
    <div class="npc-avatar">{{ npc.sprite }}</div>
    <div class="npc-info">
      <h4>{{ npc.nombre }}</h4>
      <p class="rol">{{ npc.rol }}</p>
      <p class="diálogo">{{ npc.diálogo }}</p>
    </div>
  </div>
</template>

<style scoped>
.npc-item {
  background: #fffaf7;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e8e1d8;
  transition: all 0.2s ease;
}

.npc-item:hover {
  box-shadow: 0 4px 10px rgba(139, 123, 111, 0.1);
}

.npc-avatar {
  font-size: 3rem;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.npc-info h4 {
  margin: 0 0 4px 0;
  color: #6b5b50;
  font-weight: 600;
}

.npc-info .rol {
  margin: 0 0 6px 0;
  font-size: 0.85rem;
  color: #b89968;
  font-weight: 600;
}

.npc-info .diálogo {
  margin: 0;
  font-size: 0.9rem;
  color: #8b7b6f;
  font-style: italic;
}
</style>
