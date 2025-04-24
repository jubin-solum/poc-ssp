<script setup>
import { useCounterStore } from '@/stores/index'

const counter = useCounterStore()
</script>

<template>
    
  <v-btn @click="counter.increment">
    Count is: {{ counter.count }}
  </v-btn>
</template>
