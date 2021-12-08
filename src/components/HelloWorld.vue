<template>
  <article class="flex HelloWorld">
    <div class="mt-7 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-12 lg:mt-16 lg:px-8 xl:mt-24">
      <div class="sm:text-center lg:text-left">
        <h4 class="uppercase text-xl my-2">Hi There &#128075;, I am</h4>
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="text-indigo-600 mr-2">Christopher</span>
          <span>Odhiambo</span>
        </h1>
        <p class="mt-2 text-base text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0 capitalise">
          Am a Passionate Fullstack (MEVN & MERN stack) Web Developer based in Mombasa - Kenya, that loves creating things for the web. If you're looking for a Developer to add to your team, I would love to hear from you.
        </p>
        <div class="text-center mt-4 py-2 px-4 text-indigo-600">
          <a href="https://github.com/DevHumbleChris" class="text-2xl mx-2">
            <FontAwesomeIcon :icon="['fab', 'github']" />
          </a>
          <a href="https://www.instagram.com/am.chris_ke/" class="text-2xl mx-2">
            <FontAwesomeIcon :icon="['fab', 'instagram']" />
          </a>
          <a href="https://www.facebook.com/people/Humble-Chris/100011196098630/" class="text-2xl mx-2">
            <FontAwesomeIcon :icon="['fab', 'facebook-square']" />
          </a>
          <a href="https://www.linkedin.com/in/dev-humble-chris-2870331aa/" class="text-2xl mx-2">
            <FontAwesomeIcon :icon="['fab', 'linkedin']" />
          </a>
          <a href="https://twitter.com/AmChrisKE" class="text-2xl mx-2">
            <FontAwesomeIcon :icon="['fab', 'twitter']" />
          </a>
          <a href="https://wa.me/message/BSLLTZE6NKUIF1" class="text-2xl mx-2">
            <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
          </a>
        </div>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              <FontAwesomeIcon :icon="['fas', 'pen-fancy']" class="mx-1" />
              Hire Me
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              <FontAwesomeIcon :icon="['fas', 'file-download']" class="mx-1" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-xl">
      <img src="../assets/Programming-rafiki.png" alt="Programming-rafiki">
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media screen and (max-width: 640px) {
  .HelloWorld {
    flex-direction: column;
  }
}
@media screen and (min-width: 640px) {
  .HelloWorld {
    flex-direction: column;
  }
}
@media screen and (min-width: 768px) {
  .HelloWorld {
    flex-direction: column;
  }
}
@media screen and (min-width: 1024px) {
  .HelloWorld {
    flex-direction: row;
  }
}
@media screen and (min-width: 1280px) {
  .HelloWorld {
    flex-direction: row;
  }
}
</style>
