<template>
    <div class="w-48 bg-white rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-100 focus:outline-none focus:shadow-outline-green" :class="{'bg-green-100 shadow-outline-green' : this.activePlan === this.planName}" tabindex="0" @click="updateActivePlan" @keydown.space="updateActivePlan">
      <div class="flex justify-between items-center mb-3">
        <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">{{ this.planName }}</h1>
        <div v-if="this.activePlan === this.planName">
          <svg class="w-6 h-6" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M31.144 171.84A99.502 99.502 0 1 1 171.841 31.145c37.708 39.043 37.17 101.103-1.212 139.485-38.382 38.381-100.442 38.92-139.485 1.212z" fill="#97EBDC"/><path fill="#00836D" d="M66.667 89.453l22.885 22.985 42.786-42.786 13.93 14.13-56.716 56.517-36.816-36.816 13.93-14.13z"/></g></svg>
        </div>
      </div>

      <div class="mb-1 font-semibold text-gray-800">
        <span class="text-5xl mr-2">{{ this.planGigs }}</span>
        <span class="text-2xl">GB</span>
      </div>

      <div>
        <span class="text-xl text-gray-700">$</span>
        <span class="text-xl font-semibold text-gray-700">{{ this.planDollars }}</span>
        <span class="text-gray-700 mx-1">/</span>
        <span class="text-lg text-gray-700">mo</span>
      </div>
    </div>
</template>

<script>
export default {
  model: {
    prop: 'activePlan',
    event: 'onUpdatePlan'
  },
  props: ['planName', 'planGigs', 'planDollars', 'activePlan'],
  methods: {
    updateActivePlan() {
      this.$emit('onUpdatePlan', this.planName)
    }
  }
}
</script>

