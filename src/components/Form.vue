<template>
  <v-form width="40%">
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

        <div class="d-flex justify-space-between">
        <v-checkbox v-for="(i, idx) in checkBoxes" :key="idx" v-bind="i" v-model="model.choices"/>
        </div>
      </v-form>
      <v-btn @click="submitData" @click.shift="promptUrlChange()" :loading="loading" variant="tonal">
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

const checkBoxes = [
  { label: "Git", value: "GIT" },
  { label: "Email", value: "EMAIL" },
  { label: "DNS", value: "DNS" },
  { label: "2FA", value: "2FA", disabled: true },
  { label: "Cloud",  value: "CLOUD", disabled: true },
  { label: "Certificates", value: "CERTIFICATES", },
]

const model = ref({
  domain: '',
  email: '',
  choices: []
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
