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
  background: linear-gradient(180deg, #fff, #f6f6f6);
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  padding: 12px;
  text-align: center;
  display: inline-block;
  margin: 8px;
}
.pokemon-card .sprite {
  width: 120px;
  height: 120px;
  object-fit: contain;
}
.pokemon-card .name {
  margin: 8px 0 4px;
  font-size: 1.1rem;
}
.pokemon-card .type {
  font-size: 0.9rem;
  color: #666;
}
</style>
