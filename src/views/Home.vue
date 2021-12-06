<template>
  <article v-if="isLoading">
    <LoadingSpinner />
  </article>
  <article v-else>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </article>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    LoadingSpinner
  },
  setup () {
    const store = useStore()

    const isLoading = computed(() => {
      return store.state.isLoading
    })

    onMounted(() => {
      store.commit('LOADING')

      setTimeout(() => {
        store.commit('LOADING')
      }, 6000)
    })
    return {
      isLoading
    }
  }
})
</script>
