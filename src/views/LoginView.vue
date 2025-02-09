<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import IconComponent from '@/components/IconComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import { ref } from 'vue'

const userDetails = ref({
  email: '',
  password: '',
})

const handleLogin = () => {
  console.log(userDetails.value.email)
  console.log(userDetails.value.password)
}
</script>

<template>
  <main>
    <div class="logo">
      <h2>
        <span class="side">Side</span>
        <span class="projects">Projects</span>
      </h2>
    </div>

    <section>
      <h1>Welcome Back!</h1>

      <!-- User Input -->
      <input-component
        placeholder="eg. johndoe@corporation.com"
        type="email"
        v-model="userDetails.email"
      >
        <template #label> Email </template>
        <template #icon>
          <icon-component icon="pi pi-envelope" />
        </template>
      </input-component>
      <!-- User Input -->

      <!-- Password Input -->
      <input-component
        placeholder="Enter your password"
        type="password"
        v-model="userDetails.password"
      >
        <template #label>Password</template>
        <template #icon>
          <icon-component icon="pi pi-lock" />
        </template>
      </input-component>
      <!-- Password Input -->

      <button-component variant="primary" label="Login" @click="handleLogin" />
    </section>
  </main>
</template>

<style scoped>
/* Full screen */
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
  overflow: hidden;
}

.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 2;
}

.logo h2 {
  font-size: 24px;
  font-weight: 900;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  letter-spacing: 0.5px;
  margin: 0;
}

.logo .side {
  color: #41b883;
}

.logo .projects {
  color: #34495e;
  margin-left: 6px;
}

/* Decorative shapes */
main::before,
main::after {
  content: '';
  position: absolute;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

main::before {
  width: 650px;
  height: 650px;
  background: linear-gradient(135deg, #41b883 0%, #3eaf7c 100%);
  top: -250px;
  right: -100px;
  opacity: 0.2;
}

main::after {
  width: 550px;
  height: 550px;
  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
  bottom: -200px;
  left: -100px;
  opacity: 0.15;
}

section {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

h1 {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}
</style>
