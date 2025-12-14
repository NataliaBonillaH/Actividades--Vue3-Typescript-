<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Zone } from '../data/zones'

interface Props {
  zone: Zone
}

const props = defineProps<Props>()
const router = useRouter()

const handleZoneClick = () => {
  if (props.zone.desbloqueado) {
    router.push(`/zone/${props.zone.id}`)
  }
}
</script>

<template>
  <div
    class="zone-card"
    :class="{ 'zone-locked': !zone.desbloqueado, 'zone-unlocked': zone.desbloqueado }"
    @click="handleZoneClick"
  >
    <div class="zone-content">
      <div class="zone-number">{{ zone.id }}</div>
      <div class="zone-name">{{ zone.nombre }}</div>
      <div v-if="!zone.desbloqueado" class="zone-lock">🔒</div>
    </div>
  </div>
</template>

<style scoped>
.zone-card {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.zone-unlocked {
  background: linear-gradient(135deg, #8b7b6f 0%, #b89968 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(139, 123, 111, 0.3);
  font-weight: 700;
}

.zone-unlocked:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(139, 123, 111, 0.4);
}

.zone-unlocked:active {
  transform: translateY(-2px);
}

.zone-locked {
  background: #e8e1d8;
  color: #a89888;
  cursor: not-allowed;
  opacity: 0.6;
}

.zone-content {
  text-align: center;
  position: relative;
}

.zone-number {
  font-size: 1.8rem;
  font-weight: bold;
}

.zone-name {
  font-size: 0.75rem;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.zone-lock {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 1rem;
}

@media (max-width: 480px) {
  .zone-card {
    width: 100px;
    height: 100px;
  }

  .zone-number {
    font-size: 1.4rem;
  }

  .zone-name {
    font-size: 0.7rem;
  }
}
</style>
