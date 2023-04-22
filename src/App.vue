<template>
  <v-app>
    <v-main>
      <LoginModal/>
      <HelloWorld v-if="isLoggedIn"/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import LoginModal from '@/components/LoginModal.vue'
import {useAppStore} from "@/store/app";
import {storeToRefs} from "pinia";

const { isLoggedIn } = storeToRefs(useAppStore())

</script>
