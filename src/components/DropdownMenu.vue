<template>
  <div class="relative">
    <a
      href="#"
      class="flex items-center"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <img src="avatar.jpg" alt="avatar" class="w-8 h-8 rounded-full">
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
    </a>
    <transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        v-on-clickaway="hideDropdown"
        ref="dropdown"
        class="absolute normal-case font-normal right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 z-20"
      >
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{ 'border-b border-gray-400' : item.borderBottom }"
        >
          <a
            :href="item.link"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.tab.exact="focusNext(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
          >
            <svg fill="currentColor" width="24" height="24" class="text-gray-600">
              <use :xlink:href="item.svgId" />
            </svg>
            <span class="ml-2">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </transition>

    <!-- I would extract this to a "svgs" component. I'm leaving it here to be explicit -->
    <div style="display:none">
      <svg id="svg-avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"></path></svg>

      <svg id="svg-billing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"></path></svg>

      <svg id="svg-analytics" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="heroicon-ui" d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"></path></svg>

      <svg id="svg-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="heroicon-ui" d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>

      <svg id="svg-help" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>

      <svg id="svg-logout" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [ clickaway ],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
      menuItems: [
        {
          name: 'Account',
          link: 'https://google.ca',
          svgId: '#svg-avatar',
          borderBottom: false,
        },
        {
          name: 'Billing',
          svgId: '#svg-billing',
          link: 'https://vuejs.org',
          borderBottom: false,
        },
        {
          name: 'Analytics',
          svgId: '#svg-analytics',
          link: 'https://tailwindcss.com',
          borderBottom: false,
        },
        {
          name: 'Settings',
          svgId: '#svg-settings',
          link: 'https://laravel.com',
          borderBottom: true,
        },
        {
          name: 'Help',
          svgId: '#svg-help',
          link: 'https://github.com',
          borderBottom: false,
        },
        {
          name: 'Another',
          svgId: '#svg-avatar',
          link: 'https://twitter.com',
          borderBottom: false,
        },
        {
          name: 'Logout',
          svgId: '#svg-logout',
          link: 'https://andremadarang.com',
          borderBottom: false,
        },
      ]
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      if (this.focusedIndex > 0) {
        this.focusedIndex = this.focusedIndex - 1
        if (isArrowKey) {
          this.focusItem()
        }
      }
    },
    focusNext(isArrowKey) {
      if (this.focusedIndex < this.menuItems.length - 1) {
        this.focusedIndex = this.focusedIndex + 1
        if (isArrowKey) {
          this.focusItem()
        }
      } else { // case where it's on last item and we want tab to hide dropdown
        if (!isArrowKey) {
          this.hideDropdown()
        }
      }

    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    }

  }
}
</script>

<style scoped>
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>

