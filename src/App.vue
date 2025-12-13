<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'

const menuOpen = ref(false)
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
  min-height: 100vh;
  background: #f8f9fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app-header {
  position: sticky;
  top: 0;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
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
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.app-footer {
  background: #333;
  color: #999;
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
