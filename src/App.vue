<template>
  <div id="app" class="font-sans text-gray-800">
    <header class="border-t-4 border-blue-700 bg-white z-10 absolute w-full shadow-md">
      <nav class="container mx-auto px-8 flex flex-wrap justify-between items-center py-8">
        <div>
          <a href="/" class="font-bold text-xl flex items-end">
            <img src="@/assets/logo.png" alt="logo" class="w-10">
            <span>ue.js Search</span>
          </a>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        >
          <li class="mr-12 mb-6 lg:mb-0">
            <search-component />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a href="/#about" class="text-copy-primary hover:text-gray-600">About</a>

          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a href="/#contact" class="text-copy-primary hover:text-gray-600">Contact</a>
          </li>
          <li>
            <dropdown-menu />
          </li>
        </ul>
      </nav>
    </header>
    <div class="bg-gray-100 min-h-screen pt-80 lg:pt-40 text-lg">
      <div class="container mx-auto px-8 lg:px-48">
        <div class="pb-16">
          <div class="mb-4 text-2xl font-bold">This is a title</div>
          <p>Lorem ipsum dolor sit amet <a href="#" class="text-blue-600 hover:text-blue-800">consectetur</a> adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint.</p>
        </div>
        <div class="pb-16">
          <div class="mb-4 text-2xl font-bold">This is a title</div>
          <p>Lorem ipsum dolor sit amet <a href="#" class="text-blue-600 hover:text-blue-800">consectetur</a> adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint.</p>
        </div>
        <div class="pb-16">
          <div class="mb-4 text-2xl font-bold">This is a title</div>
          <p>Lorem ipsum dolor sit amet <a href="#" class="text-blue-600 hover:text-blue-800">consectetur</a> adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from './components/SearchComponent.vue'
import DropdownMenu from './components/DropdownMenu.vue'

export default {
  name: 'app',
  components: {
    SearchComponent,
    DropdownMenu
  }
}
</script>

<style src="@/assets/css/tailwind.css" />
