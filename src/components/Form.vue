<template>
  <v-form width="40%">
    <v-col>
      <v-form ref="form" class="mb-2" :disabled="loading">
        <v-text-field
          label="Webpage"
          v-model="model.domain"
          required
          append-icon="mdi-earth"
          :rules="[requiredMessage('Website')]"
        />
        <v-text-field
          v-model="model.email"
          label="E-mail"
          required
          :rules="[requiredMessage('Email')]"
          append-icon="mdi-email"
        />

        <div class="d-flex justify-space-between">
          <v-checkbox v-for="(i, idx) in checkBoxes" :key="idx" v-bind="i" v-model="model.choices"/>
        </div>

        <p>
          To verify the ownership of the website, please create a TXT record on the domain (if it's not a subdomain).
        </p>
        <p>The record should have the following value:</p>
        <strong>test-test-verification={{ hash }}</strong>


        <div class="d-flex align-self-center justify-self-center">
          <v-checkbox v-model="model.recordAdded" required :rules="[requiredMessage('This field')]"
                      label="I Have added the TXT record on the domain"/>
        </div>
      </v-form>
      <v-btn @click="submitData" @click.shift="promptUrlChange()" :loading="loading" variant="tonal">
        Submit request
      </v-btn>
    </v-col>
  </v-form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import {VForm} from "vuetify/components/VForm";
import useRequired from '@/util/useRequired'

const { requiredMessage } = useRequired()
const router = useRouter()



const checkBoxes = [
  {label: "Web", value: "WEB",},
  {label: "Git", value: "GIT"},
  {label: "Email", value: "EMAIL"},
  {label: "DNS", value: "DNS"},
  {label: "2FA", value: "2FA" },
  {label: "Cloud", value: "CLOUD" },
  {label: "Certificates", value: "CERTIFICATES",},
]

const model = ref({
  domain: '',
  email: '',
  choices: [],
  recordAdded: false
})

const hash = btoa("asdaaa11asdsdsadsadas123131jjo_")

const form = ref<VForm | null>(null)

const loading = ref(false)

const backendurl = ref<string | null>('"https://ce51-176-112-156-215.ngrok-free.app"')
const promptUrlChange = () => {
  backendurl.value = prompt("Insert the be BE url here")
}
const submitData = async () => {
  loading.value = true

  const data = await form.value?.validate()

  if (data?.valid) {
    try {
       await fetch(
        backendurl.value as string,
        {
          method: "POST",
          body: JSON.stringify({...model.value}),
        })

    } catch (_) { /* empty */
    } finally {
      setTimeout(() => {
        loading.value = false
        router.push('/report')
      }, 4000)
    }
  } else {
    loading.value = false
  }
}
</script>
