<template>
  <article id="AboutMe" class="AboutMe mx-auto max-w-7xl px-4 sm:mt-3 sm:px-6 lg:px-8 mb-4">
    <div class="sectionHead my-2 relative">
      <span class="font-semibold text-sm">
        SOME INFO
      </span>
      <h2 class="font-black text-4xl mt-2">
        ABOUT ME &#128536;
      </h2>
    </div>
    <div class="flex flexing justify-between items-center p-2">
      <div class="max-w-3xl p-2 mr-5">
        <p class="text-lg text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0 capitalize">
          Am a tech ethuasist &#128175;, who loves spending most of his times catching up with trend on the latest technologies and code. I used to write poems but now i got focused into programming &#128187;. I am passionate about
          <span class="text-indigo-800 mx-1">JavaScript &#128175;</span>
          and its all related stacks. Recently I did finish my Diploma Studies in
          <span class="text-indigo-800 mx-1">Information Communication Technology</span>
          at
          <span class="text-blue-900">Kenya Coast National Polytechnic</span>
        </p>
        <p class="mt-2 text-lg text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0 capitalize">
          Other than coding, I spend most of my times reading articles from the
          <span class="text-indigo-800">daily.dev</span>
          website. I've also been trying to read more so feel free to reach out to me with any book recommendations.
        </p>
        <div class="mt-2 text-lg text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0 capitalize">
          <h3 class="text-2xl capitalize text-indigo-500 my-3 text-center">Besides &#129396;</h3>
          <p class="text-xl text-center">
            <span class="mx-1">I Love</span>
            <VueWriter
              class="text-red-600 inline underscore"
              :array="replace"
            />
          </p>
        </div>
      </div>
      <div class="max-w-2xl">
        <p class="text-xl capitalize text-indigo-500 my-3 text-center">Check Out My daily.dev card.</p>
        <div class="max-w-xs">
          <img src="../assets/AmChrisKE.png" alt="AmChrisKE" class="object-cover">
        </div>
        <!-- <a href="https://app.daily.dev/AmChrisKE" class="max-w-xs">
          <img src="https://api.daily.dev/devcards/d3ea14fc089a472d86ab7cd8d6edf422.png?r=jhi" width="400" alt="Christopher Odhiambo's Dev Card"/>
        </a> -->
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueWriter from 'vue-writer'
import TypeWriter from '@/types/TypeWriter'

export default defineComponent({
  name: 'AboutMe',
  components: {
    VueWriter
  },
  setup () {
    const replace = ref<TypeWriter[]>([
      'Swimming.',
      'Travelling.',
      'Watching Movies.',
      'Gaming.'
    ])
    return {
      replace
    }
  }
})
</script>

<style>
.sectionHead span{
  margin-left: 60px;
}
.sectionHead span::before {
  content: '';
  position: absolute;
  left: 0;
  top: 13px;
  width: 50px;
  height: 1px;
  background-color: #000;
}
.secretColor {
  color: #8444d8;
}

@media screen and (max-width: 640px) {
  .flexing {
    flex-direction: column;
    justify-content: left;
    align-items: initial
  }
}
</style>
