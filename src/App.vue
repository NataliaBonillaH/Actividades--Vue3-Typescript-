<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'
import PokemonCard from './components/PokemonCard.vue'

const menuOpen = ref(false)

const demoPokemons = [
  {
    nombre: 'Pikachu',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    tipo: 'Eléctrico',
  },
  {
    nombre: 'Charmander',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    tipo: 'Fuego',
  },
  {
    nombre: 'Bulbasaur',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    tipo: 'Planta',
  },
]
</script>

<template>
  <div id="app">
    <header class="app-header">
      <div class="header-container">
        <RouterLink to="/" class="brand"> <span class="logo-icon">⚡</span> PokéGame </RouterLink>

        <button class="menu-toggle" @click="menuOpen = !menuOpen">
          <span v-if="!menuOpen">☰</span>
          <span v-else>✕</span>
        </button>

        <nav class="main-nav" :class="{ open: menuOpen }">
          <RouterLink to="/" @click="menuOpen = false">🏠 Inicio</RouterLink>
          <RouterLink to="/map" @click="menuOpen = false">🗺️ Mapa</RouterLink>
          <RouterLink to="/missions" @click="menuOpen = false">📋 Misiones</RouterLink>
          <RouterLink to="/pvp" @click="menuOpen = false">⚔️ PVP</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <section class="demo-cards" aria-label="tarjetas de ejemplo">
        <h2>Tarjetas de ejemplo</h2>
        <div class="cards-row">
          <PokemonCard
            v-for="p in demoPokemons"
            :key="p.nombre"
            :nombre="p.nombre"
            :sprite="p.sprite"
            :tipo="p.tipo"
          />
        </div>
      </section>

      <RouterView />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025 PokéGame. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  width: 98%;
  margin: 0 auto;
  background: #f5f3f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app-header {
  position: sticky;
  top: 0;
  background: linear-gradient(90deg, #8b7b6f 0%, #a89888 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.header-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.brand {
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: transform 0.2s;
}

.brand:hover {
  transform: scale(1.05);
}
.logo-icon {
  font-size: 1.6rem;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px 8px;
}

.main-nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.main-nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.main-nav a.router-link-active {
  background: rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid white;
}

.main-content {
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.demo-cards {
  width: 100%;
  margin: 16px auto 28px;
  display: none; /* oculto en móviles */
}
.demo-cards h2 {
  font-size: 1.1rem;
  margin: 0 0 12px 0;
  color: #6b5b50;
  font-weight: 600;
}
.cards-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

@media (min-width: 1024px) {
  .demo-cards {
    display: block;
  }
}

.app-footer {
  background: #d4ccc2;
  color: #7a6e65;
  text-align: center;
  padding: 16px;
  font-size: 0.9rem;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .main-nav {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background: #667eea;
    flex-direction: column;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .main-nav.open {
    max-height: 200px;
  }

  .main-nav a {
    padding: 12px 20px;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .header-container {
    padding: 10px 16px;
  }

  .brand {
    font-size: 1.2rem;
  }
  .logo-icon {
    font-size: 1.4rem;
  }

  .main-content {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .brand {
    font-size: 1rem;
    gap: 4px;
  }

  .logo-icon {
    font-size: 1.2rem;
  }

  .main-nav a {
    font-size: 0.85rem;
  }
}
</style>
