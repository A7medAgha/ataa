<template>
  <div class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <h1 class="text-3xl font-bold text-primary-900">{{ title }}</h1>
          <nav class="hidden md:flex space-x-4 rtl:space-x-reverse">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              class="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-primary-600': isCurrentRoute(item.path) }"
            >
              {{ item.name }}
            </router-link>
          </nav>
        </div>
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <span class="text-sm text-gray-500">مرحباً، {{ organizationName }}</span>
          <div class="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
            {{ organizationInitial }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    organizationName: {
      type: String,
      default: 'ATAA'
    },
    organizationInitial: {
      type: String,
      default: 'A'
    }
  },
  data() {
    return {
      navigationItems: [
        { name: 'لوحة التحكم', path: '/ngo/dashboard' },
        { name: 'طلب تبرع جديد', path: '/ngo/new-request' },
        { name: 'التبرعات المستلمة', path: '/ngo/received' },
        { name: 'الرسائل', path: '/ngo/messages' },
        { name: 'الإعدادات', path: '/ngo/settings' }
      ]
    }
  },
  methods: {
    isCurrentRoute(path) {
      return this.$route.path === path
    }
  }
}
</script>

<style scoped>
.router-link-active {
  @apply text-primary-600;
}
</style> 