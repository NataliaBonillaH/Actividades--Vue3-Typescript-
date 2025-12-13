<script setup lang="ts">
import PokemonCard from './PokemonCard.vue'

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>

    <div class="cards">
      <PokemonCard
        nombre="Pikachu"
        sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        tipo="Eléctrico"
      />
      <PokemonCard
        nombre="Charmander"
        sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        tipo="Fuego"
      />
      <PokemonCard
        nombre="Squirtle"
        sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        tipo="Agua"
      />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 18px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
