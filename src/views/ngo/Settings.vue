<template>
  <div class="min-h-screen bg-gray-50">
    <CommonHeader title="الإعدادات" />

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- معلومات المنظمة -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-lg font-semibold text-gray-900">معلومات المنظمة</h2>
            </div>
            <div class="p-6">
              <form @submit.prevent="saveOrganizationInfo">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">اسم المنظمة</label>
                    <input
                      type="text"
                      id="name"
                      v-model="organizationInfo.name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                    <input
                      type="email"
                      id="email"
                      v-model="organizationInfo.email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                    <input
                      type="tel"
                      id="phone"
                      v-model="organizationInfo.phone"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label for="website" class="block text-sm font-medium text-gray-700">الموقع الإلكتروني</label>
                    <input
                      type="url"
                      id="website"
                      v-model="organizationInfo.website"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="address" class="block text-sm font-medium text-gray-700">العنوان</label>
                    <input
                      type="text"
                      id="address"
                      v-model="organizationInfo.address"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="description" class="block text-sm font-medium text-gray-700">وصف المنظمة</label>
                    <textarea
                      id="description"
                      v-model="organizationInfo.description"
                      rows="4"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    ></textarea>
                  </div>
                </div>
                <div class="mt-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    حفظ التغييرات
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- إعدادات إضافية -->
        <div class="space-y-6">
          <!-- إعدادات الإشعارات -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-lg font-semibold text-gray-900">إعدادات الإشعارات</h2>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">إشعارات البريد الإلكتروني</h3>
                    <p class="text-sm text-gray-500">استلام إشعارات على البريد الإلكتروني</p>
                  </div>
                  <button
                    type="button"
                    :class="[
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                      notifications.email ? 'bg-primary-600' : 'bg-gray-200'
                    ]"
                    @click="notifications.email = !notifications.email"
                  >
                    <span
                      :class="[
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                        notifications.email ? 'translate-x-5' : 'translate-x-0'
                      ]"
                    />
                  </button>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="newRequests"
                      v-model="notifications.newRequests"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label for="newRequests" class="mr-2 block text-sm text-gray-900">
                      إشعارات الطلبات الجديدة
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="messages"
                      v-model="notifications.messages"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label for="messages" class="mr-2 block text-sm text-gray-900">
                      إشعارات الرسائل الجديدة
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="updates"
                      v-model="notifications.updates"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label for="updates" class="mr-2 block text-sm text-gray-900">
                      إشعارات تحديثات الطلبات
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- تغيير كلمة المرور -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-lg font-semibold text-gray-900">تغيير كلمة المرور</h2>
            </div>
            <div class="p-6">
              <form @submit.prevent="changePassword">
                <div class="space-y-4">
                  <div>
                    <label for="currentPassword" class="block text-sm font-medium text-gray-700">كلمة المرور الحالية</label>
                    <input
                      type="password"
                      id="currentPassword"
                      v-model="password.current"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label for="newPassword" class="block text-sm font-medium text-gray-700">كلمة المرور الجديدة</label>
                    <input
                      type="password"
                      id="newPassword"
                      v-model="password.new"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700">تأكيد كلمة المرور</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      v-model="password.confirm"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div class="mt-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    تغيير كلمة المرور
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header.vue'

export default {
  name: 'Settings',
  components: {
    CommonHeader
  },
  data() {
    return {
      organizationInfo: {
        name: 'جمعية الرحمة',
        email: 'info@rahma.org',
        phone: '0123456789',
        website: 'www.rahma.org',
        address: 'القاهرة، مصر',
        description: 'جمعية خيرية تهدف إلى مساعدة المحتاجين وتقديم التبرعات لهم.'
      },
      notifications: {
        email: true,
        newRequests: true,
        messages: true,
        updates: true
      },
      password: {
        current: '',
        new: '',
        confirm: ''
      }
    }
  },
  methods: {
    saveOrganizationInfo() {
      // Implement save organization info functionality
      console.log('Saving organization info:', this.organizationInfo)
    },
    changePassword() {
      if (this.password.new !== this.password.confirm) {
        alert('كلمة المرور الجديدة غير متطابقة')
        return
      }
      // Implement change password functionality
      console.log('Changing password:', this.password)
    }
  }
}
</script>

<style scoped>
/* Custom styles for RTL support */
[dir="rtl"] .rtl\:space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}
</style>
