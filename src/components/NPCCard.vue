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
  background: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  color: #333;
}

.npc-info .rol {
  margin: 0 0 6px 0;
  font-size: 0.85rem;
  color: #667eea;
  font-weight: 600;
}

.npc-info .diálogo {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}
</style>
