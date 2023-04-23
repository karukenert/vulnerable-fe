<template>
  <v-app>
    <LoginModal v-if="!isLoggedIn"/>
    <v-main v-else>
      <v-app-bar elevation="2">
        <template #prepend>
          <Logo/>
        </template>
      </v-app-bar>
      <router-view  />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import LoginModal from '@/components/LoginModal.vue'
import Logo from '@/components/Logo.vue'
import {useAppStore} from "@/store/app";
import {storeToRefs} from "pinia";

const { isLoggedIn } = storeToRefs(useAppStore())
</script>
