<template>
  <main>
    <Navbar />
    <router-view/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: {
    Navbar
  }
})
</script>

<style>
</style>
