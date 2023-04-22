// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoggedIn: false,
    loginDialog: true
  }),
  actions: {
    login(){
      this.isLoggedIn = true
      this.loginDialog = false
    }
  }
})
