<template>
  <section v-if="isLoading">
    <LoadingSpinner />
  </section>
  <section v-else>
    <HelloWorld />
  </section>
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
