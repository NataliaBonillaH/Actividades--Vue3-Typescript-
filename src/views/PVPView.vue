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

const pokemones = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur', 'Dragonite', 'Blastoise']

const startBattle = () => {
  inBattle.value = true
  playerHP.value = 100
  enemyHP.value = 100
  battleLog.value = []
  currentTurn.value = 'player'
  battleOver.value = false
  battleLog.value.push('¡Comienza la batalla PVP!')
  battleLog.value.push(`Tu Pokémon: ${pokemones[Math.floor(Math.random() * pokemones.length)]}`)
  battleLog.value.push(`Enemigo: ${pokemones[Math.floor(Math.random() * pokemones.length)]}`)
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
  router.push('/map')
}
</script>

<template>
  <div class="pvp-page">
    <h1>⚔️ PVP Arena</h1>

    <div v-if="!inBattle" class="pvp-lobby">
      <p>Bienvenido a la Arena PVP. Aquí podrás combatir contra otros entrenadores.</p>
      <button class="btn-start-battle" @click="startBattle">Iniciar Batalla</button>
      <button class="btn-back" @click="router.push('/map')">← Volver al Mapa</button>
    </div>

    <div v-else class="pvp-battle">
      <!-- Battle Header -->
      <div class="battle-header">
        <div class="player-side">
          <h3>TÚ</h3>
          <div class="hp-bar">
            <div class="hp-fill" :style="{ width: playerHP + '%' }"></div>
          </div>
          <p class="hp-text">HP: {{ playerHP }}/100</p>
        </div>

        <div class="vs-text">VS</div>

        <div class="enemy-side">
          <h3>ENEMIGO</h3>
          <div class="hp-bar">
            <div class="hp-fill" :style="{ width: enemyHP + '%' }"></div>
          </div>
          <p class="hp-text">HP: {{ enemyHP }}/100</p>
        </div>
      </div>

      <!-- Battle Log -->
      <div class="battle-log">
        <div v-for="(log, idx) in battleLog" :key="idx" class="log-entry">
          {{ log }}
        </div>
      </div>

      <!-- Battle Actions -->
      <div v-if="!battleOver" class="battle-actions">
        <button class="btn-action attack" @click="attackEnemy" :disabled="currentTurn !== 'player'">
          ⚡ Atacar
        </button>
        <button class="btn-action defend" @click="defendEnemy" :disabled="currentTurn !== 'player'">
          🛡️ Defender
        </button>
      </div>

      <!-- Battle Over -->
      <div v-else class="battle-result">
        <h2 v-if="winner === 'player'" class="win">¡GANASTE! 🏆</h2>
        <h2 v-else class="lose">DERROTA 💔</h2>
        <button class="btn-end-battle" @click="endBattle">Volver al Mapa</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pvp-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
}

.pvp-page h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.pvp-lobby {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.pvp-lobby p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.btn-start-battle,
.btn-back {
  display: block;
  width: 100%;
  padding: 14px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-start-battle {
  background: #fff;
  color: #667eea;
  margin-bottom: 20px;
}

.btn-start-battle:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.btn-back {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-back:hover {
  background: white;
  color: #667eea;
}

/* Battle Arena */
.pvp-battle {
  max-width: 800px;
  margin: 0 auto;
}

.battle-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
}

.player-side,
.enemy-side {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.player-side h3,
.enemy-side h3 {
  margin: 0 0 10px 0;
  font-size: 1.3rem;
}

.vs-text {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
}

.hp-bar {
  width: 100%;
  height: 24px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 8px;
}

.hp-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ade80 0%, #22c55e 100%);
  transition: width 0.5s ease;
}

.hp-text {
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
}

.battle-log {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 16px;
  max-height: 250px;
  overflow-y: auto;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  min-height: 200px;
}

.log-entry {
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
}

.log-entry:last-child {
  border-bottom: none;
}

.battle-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.btn-action {
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-action.attack {
  background: #ff4757;
  color: white;
}

.btn-action.attack:hover:not(:disabled) {
  background: #ff3838;
  transform: translateY(-3px);
}

.btn-action.defend {
  background: #ffa502;
  color: white;
}

.btn-action.defend:hover:not(:disabled) {
  background: #ff8c00;
  transform: translateY(-3px);
}

.btn-action:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.battle-result {
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 40px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.battle-result h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.battle-result .win {
  color: #4ade80;
}

.battle-result .lose {
  color: #ff4757;
}

.btn-end-battle {
  background: white;
  color: #667eea;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-end-battle:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .pvp-page h1 {
    font-size: 1.8rem;
  }

  .battle-header {
    grid-template-columns: 1fr;
  }

  .vs-text {
    order: -1;
    margin-bottom: 10px;
  }

  .battle-log {
    max-height: 200px;
    min-height: 150px;
  }

  .pvp-lobby {
    padding: 20px;
  }

  .btn-start-battle,
  .btn-back {
    font-size: 0.9rem;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .pvp-page {
    padding: 12px;
  }

  .pvp-page h1 {
    font-size: 1.5rem;
  }

  .battle-actions {
    grid-template-columns: 1fr;
  }

  .btn-action {
    padding: 12px 16px;
    font-size: 0.9rem;
  }
}
</style>
