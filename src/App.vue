<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4"> ataa
          <router-link to="/" class="text-xl font-bold text-gray-800"></router-link>
          <div class="space-x-4">
            <router-link to="/" class="text-gray-800 hover:text-blue-500">Home</router-link>
            <router-link to="/register" class="text-gray-800 hover:text-blue-500">Register</router-link>
            <router-link to="/contact" class="text-gray-800 hover:text-blue-500">Contact</router-link>
            <router-link to="/ourdevices" class="text-gray-800 hover:text-blue-500">OurDevices</router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import './assets/tailwind.css';
</style> 