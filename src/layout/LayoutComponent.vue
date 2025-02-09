<script setup></script>

<template>
  <section class="main-wrapper">
    <aside class="sidebar">
      <nav>
        <!-- Add your sidebar navigation here -->
        <router-link to="/">Dashboard</router-link>
        <router-link to="/project">Projects</router-link>
      </nav>
    </aside>
    <main class="main-content">
      <router-view />
    </main>
  </section>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f5f5f5;
  padding: 1rem;
}

.main-content {
  flex: 1;
  padding: 1rem;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #333;
}

a.router-link-active {
  color: #4caf50;
  font-weight: bold;
}
</style>
