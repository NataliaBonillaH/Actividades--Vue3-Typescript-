<script setup lang="ts">
interface Props {
  nombre: string
  sprite: string
  tipo: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="pokemon-card">
    <img :src="props.sprite" :alt="props.nombre" class="sprite" />
    <h2 class="name">{{ props.nombre }}</h2>
    <p class="type">{{ props.tipo }}</p>
  </div>
</template>

<style scoped>
.pokemon-card {
  width: 200px;
  background: #fffaf7;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 12px;
  text-align: center;
  display: inline-block;
  margin: 8px;
  border: 1px solid #e8e1d8;
  transition: all 0.3s ease;
}

.pokemon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(139, 123, 111, 0.15);
}

.pokemon-card .sprite {
  width: 120px;
  height: 120px;
  object-fit: contain;
}
.pokemon-card .name {
  margin: 8px 0 4px;
  font-size: 1.1rem;
  color: #6b5b50;
  font-weight: 600;
}
.pokemon-card .type {
  font-size: 0.9rem;
  color: #8b7b6f;
}
</style>
