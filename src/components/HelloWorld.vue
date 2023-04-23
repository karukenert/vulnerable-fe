<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="mb-10">
        <h1>Welcome to SafeWebGuard</h1>
        <p>Enter your details to get a comprehensive cyber security overview</p>
      </div>
      <Form/>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import Form from '@/components/Form.vue'
</script>
