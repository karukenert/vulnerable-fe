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
        <v-form ref="form" @submit.prevent>
          <v-text-field
            label="Username"
            v-model="model.username"
            required
            :rules="[required]"
            append-icon="mdi-account"
          />
          <v-text-field
            label="Password"
            v-model="model.password"
            required
            type="password"
            :rules="[requiredPassword]"
            append-icon="mdi-lock"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn size="large" variant="tonal">
          Create an account
        </v-btn>
        <v-btn size="large" variant="tonal" @click="login">
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

const store = useAppStore()

const form = ref<VForm | null>(null)
const model = ref({
  username: '',
  password: ''
})
const required = (value: string) => {
  if (value) return true
  return 'You must enter a username.'
};

const requiredPassword = (value: string) => {
  if (value) return true
  return 'You must enter your password.'
};

const login = async () => {
  const data = await form.value?.validate()
  if (data?.valid) store.login()
}
</script>
