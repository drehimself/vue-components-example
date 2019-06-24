<template>
  <div class="normal-case tracking-normal">
    <a href="/#register" @click.prevent="show" class="text-copy-primary uppercase hover:text-gray-600">Register</a>
    <modal name="modal-register" @opened="opened" :adaptive="true" :height="460" :width="400">
      <div class="px-10 py-8">
        <h2 class="mb-4 uppercase tracking-wide text-xl">Register</h2>
        <form action="#" method="post">
          <div class="form-group mb-4">
            <label for="email" class="block font-normal uppercase tracking-wide text-xs mb-1">Email</label>
            <input type="email" id="email" name="email" class="border px-4 py-2 w-full rounded bg-gray-200" ref="email" @keydown.shift.tab.prevent="">
          </div>
          <div class="form-group mb-4">
            <label for="password" class="block font-normal uppercase tracking-wide text-xs mb-1">Password</label>
            <input type="password" id="password" name="password" class="border px-4 py-2 w-full rounded bg-gray-200">
          </div>
          <div class="form-group mb-8">
            <label for="confirm_password" class="block font-normal uppercase tracking-wide text-xs mb-1">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" class="border px-4 py-2 w-full rounded bg-gray-200">
          </div>
          <div class="form-group mb-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Register</button>
          </div>
        </form>
        <div class="text-sm font-normal text-center">
          <p>Already have an account? <a href="#" class="text-blue-600 hover:text-blue-800" @click.prevent="showLogin" @keydown.tab.exact.prevent="">Login</a></p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show('modal-register')
    },
    showLogin() {
      this.$modal.show('modal-login')
      this.$modal.hide('modal-register')
    },
    opened() {
      this.$refs.email.focus()
    },
    hide() {
      this.$modal.hide('modal-register')
    }
  }
}
</script>

