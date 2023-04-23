<template>
  <v-dialog
    v-model="store.loginDialog"
    width="60%"
    height="60%"
    :close-on-back="false"
    persistent
  >
    <v-card title="Please log in">
      <v-card-text>
        <v-form ref="form" @submit.prevent :disabled="loading">
          <v-text-field
            label="Username"
            v-model="model.username"
            required
            :rules="[requiredMessage('Username'), isEmail]"
            append-icon="mdi-account"
          />
          <v-text-field
            label="Password"
            v-model="model.password"
            required
            type="password"
            :rules="[requiredMessage('Password')]"
            append-icon="mdi-lock"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn size="large" variant="tonal" :disabled="loading">
          Create an account
        </v-btn>
        <v-btn size="large" variant="tonal" @click="login" :loading="loading">
          Log in
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {useAppStore} from "@/store/app";
import {ref} from "vue";
import {VForm} from "vuetify/components/VForm";
import useRequired from '@/util/useRequired'

const { requiredMessage } = useRequired()

const store = useAppStore()

const loading = ref(false)

const form = ref<VForm | null>(null)
const model = ref({
  username: '',
  password: ''
})
const isEmail = (e: string) => {
  const result = e && e.includes('@') && e.includes('.')
  if (result) return true;
  return "Email is not correct"
}

const login = async () => {
  loading.value = true;
  setTimeout(async () => {
    const data = await form.value?.validate()
    if (data?.valid) store.login()
    loading.value = false
  }, 1000)

}
</script>
