<template>
  <section>
    <Navbar />
    <router-view/>
  </section>
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
