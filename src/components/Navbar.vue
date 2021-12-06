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
              <router-link to="/">
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
                Am not a great programmer, just a good programmer with great habits.
            </p>

            <div class="absolute bottom-3 right-0 left-0 text-center mt-4 border-t border-gray-200 py-2 px-4">
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
              <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <router-link :to="page.href" class="-m-2 p-2 block font-extrabold text-lg text-gray-900">
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

    <header class="relative bg-white">
      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center">
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <router-link to="">
                <span class="sr-only">Coder Chris</span>
                <p class="text-2xl font-extrabold">
                  <FontAwesomeIcon :icon="['fas', 'code']" class="text-green-600 mx-1" />
                  <span class="text-blue-700">Coder Chris</span>
                </p>
              </router-link>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
                <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                  <div class="relative flex">
                    <PopoverButton :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px']">
                      {{ category.name }}
                    </PopoverButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <PopoverPanel class="absolute top-full inset-x-0 text-sm text-gray-500">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                      <div class="relative bg-white">
                        <div class="max-w-7xl mx-auto px-8">
                          <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                            <div class="col-start-2 grid grid-cols-2 gap-x-8">
                              <div v-for="item in category.featured" :key="item.name" class="group relative text-base sm:text-sm">
                                <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                  <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                                </div>
                                <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                                  <span class="absolute z-10 inset-0" aria-hidden="true" />
                                  {{ item.name }}
                                </a>
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                              </div>
                            </div>
                            <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                              <div v-for="section in category.sections" :key="section.name">
                                <p :id="`${section.name}-heading`" class="font-medium text-gray-900">
                                  {{ section.name }}
                                </p>
                                <ul role="list" :aria-labelledby="`${section.name}-heading`" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                  <li v-for="item in section.items" :key="item.name" class="flex">
                                    <a :href="item.href" class="hover:text-gray-800">
                                      {{ item.name }}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
              </div>
            </PopoverGroup>

            <div class="ml-auto flex items-center">
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
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' }
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' }
          ]
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' }
          ]
        }
      ]
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.'
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' }
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' }
          ]
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' }
          ]
        }
      ]
    }
  ],
  pages: [
    { name: 'About Me', href: '#', fontIcon: ['fas', 'user-astronaut'] },
    { name: 'Skills', href: '#', fontIcon: ['fas', 'brain'] },
    { name: 'Projects', href: '#', fontIcon: ['fas', 'laptop-code'] },
<<<<<<< HEAD
    { name: 'My Blog', href: '#', fontIcon: ['fas', 'book-reader'] },
=======
>>>>>>> frontend
    { name: 'Contacts', href: '#', fontIcon: ['fas', 'address-card'] }
  ]
}

export default defineComponent({
  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon
  },
  setup () {
    const open = ref(false)

    return {
      navigation,
      open
    }
  }
})
</script>

<style>
.author {
  color: #4018ac;
}
</style>
