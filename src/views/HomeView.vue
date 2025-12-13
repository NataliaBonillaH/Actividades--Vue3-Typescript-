<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="home-page">
    <div class="hero-section">
      <h1>⚡ Bienvenido a PokéGame</h1>
      <p class="subtitle">Un juego interactivo de estrategia y captura de Pokémon</p>
    </div>

    <div class="features-section">
      <div class="feature-card">
        <h3>🗺️ Mapa Interactivo</h3>
        <p>Explora diferentes zonas y desbloquea nuevas áreas completando misiones.</p>
      </div>
      <div class="feature-card">
        <h3>📋 Misiones</h3>
        <p>Completa misiones emocionantes en cada zona para ganar puntos de experiencia.</p>
      </div>
      <div class="feature-card">
        <h3>⚔️ Batalla PVP</h3>
        <p>Compite contra otros entrenadores en combates épicos estratégicos.</p>
      </div>
      <div class="feature-card">
        <h3>🎯 Captura</h3>
        <p>Captura diferentes Pokémon mientras exploras cada zona del juego.</p>
      </div>
    </div>

    <div class="cta-section">
      <h2>¿Listo para comenzar?</h2>
      <div class="button-group">
        <RouterLink to="/map" class="btn btn-primary">Ir al Mapa</RouterLink>
        <RouterLink to="/missions" class="btn btn-secondary">Ver Misiones</RouterLink>
        <RouterLink to="/pvp" class="btn btn-secondary">Arena PVP</RouterLink>
      </div>
    </div>

    <div class="info-section">
      <h3>💡 Consejos</h3>
      <ul>
        <li>Comienza en el <strong>Bosque Verdoso</strong>, la primera zona disponible</li>
        <li>Habla con los NPCs para obtener información valiosa</li>
        <li>Completa todas las misiones de una zona para progresar</li>
        <li>Desafía a otros entrenadores en la Arena PVP</li>
        <li>Colecciona diferentes tipos de Pokémon para completar tu Pokedex</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.hero-section {
  text-align: center;
  margin-bottom: 50px;
}

.hero-section h1 {
  font-size: 3rem;
  margin: 0 0 12px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 50px;
}

.feature-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #667eea;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);
}

.feature-card h3 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.1rem;
}

.feature-card p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 40px;
}

.cta-section h2 {
  margin: 0 0 20px 0;
  font-size: 1.8rem;
}

.button-group {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.info-section {
  background: white;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.info-section h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.2rem;
}

.info-section ul {
  margin: 0;
  padding-left: 20px;
  color: #666;
  line-height: 1.8;
}

.info-section li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .home-page {
    padding: 16px;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .features-section {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .cta-section {
    padding: 30px 20px;
  }

  .cta-section h2 {
    font-size: 1.4rem;
  }

  .button-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .feature-card h3 {
    font-size: 1rem;
  }

  .feature-card p {
    font-size: 0.85rem;
  }

  .info-section {
    padding: 16px;
  }

  .info-section h3 {
    font-size: 1.1rem;
  }

  .info-section ul {
    padding-left: 16px;
    font-size: 0.9rem;
  }
}
</style>
