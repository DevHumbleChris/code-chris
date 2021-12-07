<template>
  <div class="bg-white sticky z-40 w-full mb-2 top-0 right-0 left-0">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div class="px-4 pt-5 pb-2 flex">
              <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="open = false">
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Logo -->
            <div class="ml-4 flex justify-center lg:ml-0">
              <router-link to="/" @click="open = false">
                <!-- Author Image -->
                <div class="imgWrapper flex justify-center">
                  <img src="../assets/author.jpg" alt="author" class="w-28 rounded-full">
                </div>
                <span class="sr-only">Coder Chris</span>
                <p class="text-4xl font-extrabold">
                  <FontAwesomeIcon :icon="['fas', 'code']" class="text-green-600 mx-1" />
                  <span class="text-blue-700">Coder Chris</span>
                </p>
              </router-link>
            </div>

            <p class="text-center font-base p-3 text-gray-500">
                Am not a great programmer, but a good programmer with great habits.
            </p>

            <div class="absolute bottom-3 right-0 left-0 text-center mt-4 py-2 px-4">
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
              <div>
                Made With
                <FontAwesomeIcon :icon="['fas', 'heart']" class="mx-1 text-red-600" />,
                Am.Chris_KE
              </div>
            </div>

            <div class="py-3 px-4 space-y-6">
              <div v-for="page in pages" :key="page.name" class="flow-root">
                <router-link :to="page.href" class="-m-2 p-2 block font-extrabold text-gray-900" @click="open = false">
                  <FontAwesomeIcon :icon="page.fontIcon" class="text-lg leading-lg text-black opacity-75" />
                  <span class="uppercase mx-1">
                    {{ page.name }}
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-gray-100 shadow-xl">
      <nav aria-label="Top" class="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="">
          <div class="h-16 flex items-center">
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <router-link to="/">
                <span class="sr-only">Coder Chris</span>
                <p class="text-2xl font-extrabold">
                  <FontAwesomeIcon :icon="['fas', 'code']" class="text-green-600 mx-1" />
                  <span class="text-blue-700">Coder Chris</span>
                </p>
              </router-link>
            </div>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:ml-8 lg:block lg:self-stretch">
                <div class="h-full flex space-x-8">
                  <router-link v-for="page in pages" :key="page.name" :to="page.href" class="flex mx-1 items-center text-sm font-medium text-blue-500 hover:text-blue-900">
                    <FontAwesomeIcon :icon="page.fontIcon" class="text-lg leading-lg opacity-75" />
                    <span class="uppercase mx-1">
                      {{ page.name }}
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import {
  Dialog,
  DialogOverlay,
  // Popover,
  // PopoverButton,
  // PopoverGroup,
  // PopoverPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

export default defineComponent({
  components: {
    Dialog,
    DialogOverlay,
    // Popover,
    // PopoverButton,
    // PopoverGroup,
    // PopoverPanel,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon
  },
  setup () {
    const open = ref(false)
    const pages = ref([
      { name: 'About Me', href: '#', fontIcon: ['fas', 'user-astronaut'] },
      { name: 'Skills', href: '#', fontIcon: ['fas', 'brain'] },
      { name: 'Projects', href: '#', fontIcon: ['fas', 'laptop-code'] },
      { name: 'My Blog', href: '/about', fontIcon: ['fas', 'book-reader'] },
      { name: 'Contacts', href: '#', fontIcon: ['fas', 'address-card'] }
    ])

    return {
      open,
      pages
    }
  }
})
</script>

<style>
.author {
  color: #4018ac;
}
</style>
