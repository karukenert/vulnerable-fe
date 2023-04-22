<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1>Welcome to </h1>
      <Form/>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Form from '@/components/Form.vue'



const htmlDiv = ref<HTMLDivElement | null>(null)

const form = ref({
  welcome: ''
})

const assign = () => {

  htmlDiv.value.innerHTML = form.value.welcome
}
</script>
