<template>
  <v-form>
      <v-col>
        <v-form :disabled="loading">
          <v-text-field
            :counter="10"
            label="Webpage"
            required
          />
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          />
        </v-form>
        <v-btn @click="submitData">
          Submit
        </v-btn>
      </v-col>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";


const domain = ref('')
const email = ref('')

const loading = ref(false)
const wasSuccess = ref(false)

const submitData = async () => {
  try {


    loading.value = true

    const data = await fetch(
      "https://ce51-176-112-156-215.ngrok-free.app",
      {
        method: "POST",
        body: JSON.stringify({
          domain: domain.value,
          email: email.value
        }),
      })


    if (data.status === 200) {
      wasSuccess.value = true
    }
  } finally {
    loading.value = false
  }
}
</script>
