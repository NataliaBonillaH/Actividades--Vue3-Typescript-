<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const inBattle = ref(false)
const battleLog = ref<string[]>([])
const playerHP = ref(100)
const enemyHP = ref(100)
const currentTurn = ref('player')
const battleOver = ref(false)
const winner = ref('')

interface SelectedPokemon {
  name: string
  sprite: string
}
const playerPokemon = ref<SelectedPokemon | null>(null)
const enemyPokemon = ref<SelectedPokemon | null>(null)

const spriteIds: Record<string, number> = {
  pikachu: 25,
  charmander: 4,
  squirtle: 7,
  bulbasaur: 1,
  dragonite: 149,
  blastoise: 9,
}

function getSpriteUrl(name: string) {
  const id = spriteIds[name.toLowerCase()]
  return id
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    : ''
}

const pokemones = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur', 'Dragonite', 'Blastoise']

const startBattle = () => {
  inBattle.value = true
  playerHP.value = 100
  enemyHP.value = 100
  battleLog.value = []
  currentTurn.value = 'player'
  battleOver.value = false
  battleLog.value.push('¡Comienza la batalla PVP!')
  // seleccionar pokémones y guardarlos para mostrarlos en las tarjetas
  const playerChoice = pokemones[Math.floor(Math.random() * pokemones.length)]
  const enemyChoice = pokemones[Math.floor(Math.random() * pokemones.length)]
  playerPokemon.value = { name: playerChoice, sprite: getSpriteUrl(playerChoice) }
  enemyPokemon.value = { name: enemyChoice, sprite: getSpriteUrl(enemyChoice) }
  battleLog.value.push(`Tu Pokémon: ${playerChoice}`)
  battleLog.value.push(`Enemigo: ${enemyChoice}`)
}

const attackEnemy = () => {
  if (currentTurn.value !== 'player' || battleOver.value) return

  const damage = Math.floor(Math.random() * 25) + 10
  enemyHP.value = Math.max(0, enemyHP.value - damage)
  battleLog.value.push(`¡Ataque exitoso! Infligiste ${damage} de daño.`)

  if (enemyHP.value <= 0) {
    battleLog.value.push('¡GANASTE LA BATALLA! 🎉')
    battleOver.value = true
    winner.value = 'player'
    return
  }

  currentTurn.value = 'enemy'
  setTimeout(enemyAttack, 1000)
}

const defendEnemy = () => {
  if (currentTurn.value !== 'player' || battleOver.value) return

  battleLog.value.push('¡Te defiendes! Reduciste el daño al 50%.')
  currentTurn.value = 'enemy'
  setTimeout(enemyAttack, 1000)
}

const enemyAttack = () => {
  const damage = Math.floor(Math.random() * 20) + 5
  playerHP.value = Math.max(0, playerHP.value - damage)
  battleLog.value.push(`El enemigo atacó. Recibiste ${damage} de daño.`)

  if (playerHP.value <= 0) {
    battleLog.value.push('¡PERDISTE LA BATALLA! 😢')
    battleOver.value = true
    winner.value = 'enemy'
    return
  }

  currentTurn.value = 'player'
}

const endBattle = () => {
  inBattle.value = false
  // limpiar selección al finalizar
  playerPokemon.value = null
  enemyPokemon.value = null
  router.push('/map')
}
</script>

<template>
  <main>
    <h1>⚔️ Battle Pokémon Arena</h1>

    <!-- Sección de información general -->
    <section class="info-section">
      <div class="info-card">
        <h3>📊 Estado de Batalla</h3>
        <p>
          <strong>Turno:</strong> {{ currentTurn === 'player' ? 'Tu turno' : 'Turno del enemigo' }}
        </p>
        <p><strong>Estado:</strong> {{ inBattle ? 'En batalla' : 'Esperando batalla' }}</p>
      </div>
    </section>

    <!-- Estado del juego si está terminada -->
    <div v-if="battleOver && inBattle" class="gameOver">
      <h2>🏆 ¡Batalla Finalizada!</h2>
      <p>
        El ganador es: <strong>{{ winner === 'player' ? '¡Tú!' : 'El oponente' }}</strong>
      </p>
    </div>

    <!-- Lobby de batalla (antes de iniciar) -->
    <div v-if="!inBattle" class="battle-section">
      <div class="pokemon-card">
        <h2>⚔️ Arena PVP</h2>
        <p>
          Bienvenido a la Arena PVP. Aquí podrás combatir contra otros entrenadores en duelos
          épicos.
        </p>
        <button class="btn-attack" @click="startBattle">🎮 Iniciar Batalla</button>
      </div>
    </div>

    <!-- Sección de batalla activa -->
    <div v-else class="battle-section">
      <div class="pokemon-card">
        <h2>🎯 Tu Pokémon</h2>
        <div class="sprite-wrap">
          <img
            v-if="playerPokemon && playerPokemon.sprite"
            :src="playerPokemon.sprite"
            :alt="playerPokemon.name"
            class="pokemon-sprite"
          />
        </div>
        <p><strong>Nombre:</strong> {{ playerPokemon ? playerPokemon.name : 'N/A' }}</p>
        <p><strong>HP:</strong> {{ playerHP }}/100</p>
        <div class="hp-bar">
          <div class="hp-fill" :style="{ width: playerHP + '%' }"></div>
        </div>
      </div>

      <div class="pokemon-card">
        <h2>⚔️ Pokémon Oponente</h2>
        <div class="sprite-wrap">
          <img
            v-if="enemyPokemon && enemyPokemon.sprite"
            :src="enemyPokemon.sprite"
            :alt="enemyPokemon.name"
            class="pokemon-sprite"
          />
        </div>
        <p><strong>Nombre:</strong> {{ enemyPokemon ? enemyPokemon.name : 'N/A' }}</p>
        <p><strong>HP:</strong> {{ enemyHP }}/100</p>
        <div class="hp-bar">
          <div class="hp-fill" :style="{ width: enemyHP + '%' }"></div>
        </div>
      </div>
    </div>

    <!-- Log de batalla -->
    <div v-if="inBattle" class="panels-container">
      <div class="battle-log">
        <h3>📜 Registro de Batalla</h3>
        <div class="log-content">
          <div v-for="(log, idx) in battleLog" :key="idx" class="log-entry">
            {{ log }}
          </div>
        </div>
      </div>
    </div>

    <!-- Botones principales centrados -->
    <div v-if="inBattle && !battleOver" class="button-group">
      <button class="btn-primary" @click="attackEnemy" :disabled="currentTurn !== 'player'">
        ⚡ Atacar
      </button>
      <button class="btn-primary" @click="defendEnemy" :disabled="currentTurn !== 'player'">
        🛡️ Defender
      </button>
    </div>

    <!-- Botón para volver -->
    <div v-if="!inBattle || battleOver" class="button-group">
      <button class="btn-primary" @click="endBattle">← Volver al Mapa</button>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  text-align: center;
  padding: 1.5rem;
  width: 98%;
  margin: 0 auto;
  min-height: 100vh;
}

h1 {
  color: #6b5b50;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.battle-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  gap: 2rem;
  flex-wrap: wrap;
}

.pokemon-card {
  border: 1px solid #d4ccc2;
  padding: 1.5rem;
  border-radius: 8px;
  width: 220px;
  background: #fffaf7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.pokemon-card h2 {
  margin: 0 0 1rem 0;
  color: #6b5b50;
  font-size: 1.1rem;
}

.pokemon-card p {
  margin: 0.7rem 0;
  text-align: left;
  color: #8b7b6f;
  font-size: 0.95rem;
}

.hp-bar {
  width: 100%;
  height: 24px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  margin: 0.5rem 0;
}

.hp-fill {
  height: 100%;
  background: linear-gradient(90deg, #a8d5a8 0%, #7fbf7f 100%);
  transition: width 0.5s ease;
}

.btn-attack {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #b89968;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 180px;
}

.btn-attack:hover {
  background-color: #a0845a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(184, 153, 104, 0.2);
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 1rem 2.5rem;
  background-color: #fff;
  color: #6b5b50;
  border: 2px solid #d4ccc2;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.4s ease;
  min-width: 210px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.btn-primary:hover:not(:disabled) {
  border-color: #b89968;
  background-color: #faf8f5;
  color: #b89968;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(184, 153, 104, 0.15);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.panels-container {
  margin-top: 2rem;
  animation: slideIn 0.3s ease-in-out;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.battle-log {
  background: #fffaf7;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d4ccc2;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.battle-log h3 {
  margin: 0 0 1rem 0;
  color: #6b5b50;
  font-size: 1.1rem;
}

.log-content {
  max-height: 300px;
  overflow-y: auto;
  text-align: left;
}

.log-entry {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e8e1d8;
  color: #8b7b6f;
  font-size: 0.95rem;
}

.log-entry:last-child {
  border-bottom: none;
}

.gameOver {
  background-color: #f5deb3;
  border: 2px solid #d4af6f;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: #8b7355;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.gameOver h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.gameOver p {
  margin: 0;
  font-size: 1rem;
}

.info-section {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
}

.info-card {
  background: #fffaf7;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d4ccc2;
  min-width: 250px;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.info-card h3 {
  margin: 0 0 1rem 0;
  color: #6b5b50;
  font-size: 1.1rem;
}

.info-card p {
  margin: 0.5rem 0;
  color: #8b7b6f;
  font-size: 0.95rem;
}

/* Responsive Design */
.pokemon-sprite {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 8px;
}

.sprite-wrap {
  display: flex;
  justify-content: center;
}

@media (max-width: 1024px) {
  main {
    padding: 1.2rem;
    max-width: 100%;
  }

  h1 {
    font-size: 1.7rem;
    margin-bottom: 1.2rem;
  }

  .battle-section {
    gap: 1.5rem;
    margin: 1.5rem 0;
  }

  .pokemon-card {
    width: 200px;
  }

  .btn-primary {
    min-width: 180px;
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  main {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .battle-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .pokemon-card {
    width: 100%;
    max-width: 280px;
    padding: 1rem;
  }

  .pokemon-card h2 {
    font-size: 1rem;
  }

  .pokemon-card p {
    font-size: 0.9rem;
  }

  .button-group {
    gap: 1.2rem;
    margin: 1.8rem 0;
  }

  .btn-primary {
    min-width: 140px;
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
  }

  .info-section {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .info-card {
    min-width: 100%;
    max-width: 100%;
    padding: 1.2rem;
  }

  .info-card h3 {
    font-size: 1rem;
  }

  .info-card p {
    font-size: 0.9rem;
  }

  .battle-log {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  main {
    padding: 0.8rem;
  }

  h1 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  .battle-section {
    gap: 0.8rem;
    margin: 1rem 0;
  }

  .pokemon-card {
    width: 100%;
    padding: 0.8rem;
  }

  .pokemon-card h2 {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .pokemon-card p {
    font-size: 0.85rem;
    margin: 0.4rem 0;
  }

  .btn-attack {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  .button-group {
    gap: 0.8rem;
    margin: 1.2rem 0;
    justify-content: center;
  }

  .btn-primary {
    min-width: 130px;
    padding: 0.7rem 1.4rem;
    font-size: 0.85rem;
  }

  .info-card {
    padding: 1rem;
    min-width: 100%;
  }

  .gameOver {
    padding: 1rem;
  }

  .gameOver h2 {
    font-size: 1.1rem;
  }

  .gameOver p {
    font-size: 0.9rem;
  }
}
</style>
