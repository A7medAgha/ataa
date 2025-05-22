<template>
    <div class="min-h-screen bg-gray-100">
      <nav class="bg-white shadow-lg">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <router-link to="/" class="text-xl font-bold text-gray-800"></router-link>
            <div class="space-x-4">
              <router-link to="/Dashboard" class="text-gray-600 hover:text-gray-900">Dashboard</router-link>
              <router-link to="/Messages" class="text-gray-600 hover:text-gray-900">Messages</router-link>
              <router-link to="/NewRequest" class="text-gray-600 hover:text-gray-900">New Request</router-link>
              <router-link to="/Received" class="text-gray-600 hover:text-gray-900">Received</router-link>
              <router-link to="/Settings" class="text-gray-600 hover:text-gray-900">Settings</router-link>
              
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
