<template>
  <UButton
    v-if="$route.path == '/'"
    to="/getting-started/installation"
    color="neutral"
    size="sm"
    class="hidden lg:inline-flex"
  >
    Get Started
  </UButton>
  <UContentSearchButton
    :collapsed="false"
    variant="soft"
    :ui="{
      leadingIcon: 'size-4 mr-1',
    }"
  />
  
  <ThemePicker />
</template>