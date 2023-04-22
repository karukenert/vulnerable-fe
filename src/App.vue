<template>
  <v-app>
    <v-main>
      <LoginModal/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import LoginModal from '@/components/LoginModal.vue'
</script>
