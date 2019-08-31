<template>
  <div>
    <div class="container mx-auto px-8 lg:px-48">
      <div class="pb-16">
        <p>{{ $t('message') }}</p>
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

      <div class="mx-auto pt-8 pb-6 md:flex md:justify-between items-end border-b-2 border-gray-300">
        <div class="text-2xl mb-4 md:mb-0">Change Plan</div>
        <div>
          <a href="#" class="no-underline hover:underline">Cancel your plan</a>
        </div>
      </div>
      <div class="mx-auto py-8 md:flex md:justify-between md:flex-wrap">
        <selectable-plan
          plan-name="Hobby"
          plan-gigs="1"
          plan-dollars="5"
          v-model="activePlan"
        ></selectable-plan>
        <selectable-plan
          plan-name="Growth"
          plan-gigs="5"
          plan-dollars="10"
          v-model="activePlan"
        ></selectable-plan>
        <selectable-plan
          plan-name="Business"
          plan-gigs="10"
          plan-dollars="15"
          v-model="activePlan"
        ></selectable-plan>
        <selectable-plan
          plan-name="Enterprise"
          plan-gigs="20"
          plan-dollars="20"
          v-model="activePlan"
        ></selectable-plan>
      </div>
    </div>
  </div>
</template>

<script>
import SelectablePlan from '@/components/SelectablePlan.vue'

export default {
  components: {
    SelectablePlan,
  },
  data() {
    return {
      activePlan: '',
    }
  }
}
</script>
