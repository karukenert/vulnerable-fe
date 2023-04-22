<template>
  <v-form>
    <v-col>
      <v-form :disabled="loading">
        <v-text-field
          label="Webpage"
          v-model="model.domain"
          required
        />
        <v-text-field
          v-model="model.email"
          label="E-mail"
          required
        />
      </v-form>
      <v-btn @click="submitData" @click.shift="promptUrlChange()" :loading="loading">
        Submit request
      </v-btn>
    </v-col>
    <v-col v-if="!loading && wasSuccess">
      <h2>
        We have received your request! You will receive an email as soon as the scan is finished!
      </h2>
    </v-col>
  </v-form>
</template>

<script setup lang="ts">
import {ref} from "vue";

const model = ref({
  domain: '',
  email: '',
})

const loading = ref(false)
const wasSuccess = ref(false)

const backendurl = ref<string | null>('"https://ce51-176-112-156-215.ngrok-free.app"')
const promptUrlChange = () => {
  backendurl.value = prompt("Insert the be BE url here")
}
const submitData = async () => {
  loading.value = true
  try {
    const data = await fetch(
      backendurl.value as string,
      {
        method: "POST",
        body: JSON.stringify({...model.value}),
      })

    if (data.status === 200) {
      wasSuccess.value = true
    }
  } finally {
    loading.value = false
  }
}
</script>
