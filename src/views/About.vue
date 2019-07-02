<template>
  <div>
    <div class="container mx-auto px-8 lg:px-48">
      <h2 class="text-3xl font-bold">{{ $t('about.title') }}</h2>

      <p class="mt-4" v-html="$t('about.content')" />
    </div>
  </div>
</template>
