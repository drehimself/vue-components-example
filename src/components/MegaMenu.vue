<template>
  <div
    class="relative"
    @mouseover="showMenu"
    @mouseleave="hideMenu"
  >
    <a
      href="/#features"
      class="text-copy-primary hover:text-gray-600"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      {{ $t('nav.features') }}
    </a>

    <div class="absolute w-full">&nbsp;</div>
    <transition name="mega-menu-fade">
      <div v-show="isVisible" class="mega-menu absolute normal-case font-normal bg-white shadow-md rounded-lg overflow-hidden border mt-4 w-full lg:w-160 z-30 lg:z-10 left-0 lg:-left-16">
        <div class="flex flex-col lg:flex-row px-8 py-6 border-b -mx-4">
          <ul class="w-full lg:w-1/2 px-4">
            <li class="mb-8">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent=""
              >
                <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"/></svg>
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800 flex items-center">
                    <span>Engagement</span>
                    <span class="ml-2 bg-yellow-500 text-yellow-800 px-2 py-1 rounded-full uppercase font-bold text-xxs">New</span>
                  </span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800">Measure actions users take</span>
                </span>
              </a>
            </li>
            <li class="mb-8">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7a1 1 0 0 1-.3-.7V8a1 1 0 0 1 2 0v3.59z"/></svg>
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Test Missle Alert</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800">Probably meant to click this one</span>
                </span>
              </a>
            </li>
            <li class="mb-8 lg:mb-0">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z"/></svg>
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Automations</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800">Create your own custom rules</span>
                </span>
              </a>
            </li>
          </ul>
          <ul class="w-full lg:w-1/2 px-4">
            <li class="mb-8">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"/></svg>
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Notifications</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800">Keep customers informed</span>
                </span>
              </a>
            </li>
            <li class="mb-8">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M16.21 16.95a5 5 0 0 1-4.02 4.9l-3.85.77a1 1 0 0 1-.9-.27l-.71-.7a2 2 0 0 1 0-2.83l1.44-1.45a13.17 13.17 0 0 1-1.42-1.41L5.31 17.4a2 2 0 0 1-2.83 0l-.7-.7a1 1 0 0 1-.28-.9l.77-3.86a5 5 0 0 1 4.9-4.02h.86a13.07 13.07 0 0 1 12.82-5.47 1 1 0 0 1 .83.83A12.98 12.98 0 0 1 16.2 16.1v.85zm-4.41 2.94a3 3 0 0 0 2.41-2.94v-1.4a1 1 0 0 1 .47-.84A11.04 11.04 0 0 0 19.8 4.33 10.98 10.98 0 0 0 9.42 9.45a1 1 0 0 1-.85.47h-1.4a3 3 0 0 0-2.94 2.4l-.66 3.34.33.33 2.24-2.24a1 1 0 0 1 1.52.12 11.08 11.08 0 0 0 2.6 2.6 1 1 0 0 1 .12 1.52l-2.24 2.24.33.33 3.33-.67zM15 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Missle Alert</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800">Cause widespread panic</span>
                </span>
              </a>
            </li>
            <li class="">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M20 15a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1h-8a1 1 0 0 0 0 2h5.59L13 13.59l-3.3-3.3a1 1 0 0 0-1.4 0l-6 6a1 1 0 0 0 1.4 1.42L9 12.4l3.3 3.3a1 1 0 0 0 1.4 0L20 9.4V15z"/></svg>
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Advanced Reports</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800">Keep track of your growth</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <ul class="bg-gray-100 px-8 py-8">
          <li class="mb-6">
            <a
              href="#"
              class="flex lg:items-center group"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="focusNext(false)"
              @keydown.shift.tab="focusPrevious(false)"
              @keydown.up.exact.prevent="focusPrevious(true)"
              @keydown.down.exact.prevent="focusNext(true)"
            >
              <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M18 21H7a4 4 0 0 1-4-4V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3zm-3-3V5H5v12c0 1.1.9 2 2 2h8.17a3 3 0 0 1-.17-1zm-7-3h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm9 11a1 1 0 0 0 2 0V7h-2v11z"/></svg>

              <span class="flex flex-col lg:flex-row lg:items-center">
                <span class="block ml-2 font-bold text-blue-800 group-hover:text-blue-800">Documentation</span>
                <span class="block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800">Start integrating products and tools</span>
              </span>
            </a>
          </li>
          <li class="mb-6">
            <a
              href="#"
              class="flex lg:items-center group"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="focusNext(false)"
              @keydown.shift.tab="focusPrevious(false)"
              @keydown.up.exact.prevent="focusPrevious(true)"
              @keydown.down.exact.prevent="focusNext(true)"
            >
              <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" width="24" height="24"><path class="heroicon-ui" d="M17 22a2 2 0 0 1-2-2v-1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3H5a3 3 0 1 1 0-6h1V8a2 2 0 0 1 2-2h3V5a3 3 0 1 1 6 0v1h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3zm3-2v-3h-1a3 3 0 1 1 0-6h1V8h-3a2 2 0 0 1-2-2V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8v3a2 2 0 0 1-2 2H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3h3v-1a3 3 0 1 1 6 0v1h3z"/></svg>
              <span class="flex flex-col lg:flex-row lg:items-center">
                <span class="block ml-2 font-bold text-blue-800 group-hover:text-blue-800">Full API Reference</span>
                <span class="block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800">Official libraries for our API</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex lg:items-center group"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="hideMenu"
              @keydown.shift.tab="focusPrevious(false)"
              @keydown.up.exact.prevent="focusPrevious(true)"
              @keydown.down.exact.prevent=""
            >
              <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4A1 1 0 0 1 6.7 8.7L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"/></svg>

              <span class="flex flex-col lg:flex-row lg:items-center">
                <span class="block ml-2 font-bold text-blue-800 group-hover:text-blue-800">Open Source</span>
                <span class="block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800">Giving back to the community</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.menuItems = document.querySelectorAll('.mega-menu a')
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    }
  },
  methods: {
    showMenu() {
      this.isVisible = true
    },
    hideMenu() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      this.menuItems[0].focus()
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1

      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1

      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus()
    }
  }
}
</script>

<style scoped>
  .mega-menu-fade-enter-active, .mega-menu-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .mega-menu-fade-enter, .mega-menu-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>
