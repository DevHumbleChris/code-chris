<template>
  <article class="flex justify-center mt-72">
    <SelfBuildingSquareSpinner
      :animation-duration="4000"
      :size="90"
      color="#064789"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SelfBuildingSquareSpinner } from 'epic-spinners'

export default defineComponent({
  name: 'LoadingSpinner',
  components: {
    SelfBuildingSquareSpinner
  }
})
</script>
