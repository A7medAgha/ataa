<template>
  <div class="min-h-screen bg-gray-50">
    <CommonHeader title="لوحة تحكم الجمعية" />

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-sm p-6 border-r-4 border-primary-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">التبرعات المعلقة</p>
              <p class="text-2xl font-bold text-gray-900 mt-2">5</p>
            </div>
            <div class="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
              <svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-sm text-success-600">+2 من الأمس</span>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 border-r-4 border-success-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">التبرعات المقبولة</p>
              <p class="text-2xl font-bold text-gray-900 mt-2">12</p>
            </div>
            <div class="h-12 w-12 bg-success-100 rounded-full flex items-center justify-center">
              <svg class="h-6 w-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-sm text-success-600">+3 هذا الأسبوع</span>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 border-r-4 border-secondary-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">الرسائل الجديدة</p>
              <p class="text-2xl font-bold text-gray-900 mt-2">3</p>
            </div>
            <div class="h-12 w-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <svg class="h-6 w-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-sm text-success-600">+1 اليوم</span>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 border-r-4 border-warning-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">إجمالي التبرعات</p>
              <p class="text-2xl font-bold text-gray-900 mt-2">24</p>
            </div>
            <div class="h-12 w-12 bg-warning-100 rounded-full flex items-center justify-center">
              <svg class="h-6 w-6 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <div class="mt-4">
            <span class="text-sm text-success-600">+5 هذا الشهر</span>
          </div>
        </div>
      </div>

      <!-- Recent Activity and Quick Actions -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- آخر التبرعات -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b border-gray-200">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">آخر التبرعات</h2>
                <router-link to="/ngo/received" class="text-sm text-primary-600 hover:text-primary-800">عرض الكل</router-link>
              </div>
            </div>
            <div class="p-6">
              <div class="space-y-6">
                <div class="flex items-start space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <div class="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900">تبرع بملابس شتوية</p>
                    <p class="text-sm text-gray-500">منذ 3 ساعات</p>
                    <div class="mt-2">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-100 text-warning-800">
                        قيد المراجعة
                      </span>
                    </div>
                    <p class="mt-1 text-sm text-gray-600">10 قطع ملابس شتوية - مقاس كبير</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <div class="h-10 w-10 rounded-full bg-success-100 flex items-center justify-center">
                      <svg class="h-6 w-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900">تبرع بأدوات منزلية</p>
                    <p class="text-sm text-gray-500">منذ 5 ساعات</p>
                    <div class="mt-2">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                        تم القبول
                      </span>
                    </div>
                    <p class="mt-1 text-sm text-gray-600">أدوات مطبخ - حالة جيدة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- إجراءات سريعة -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-lg font-semibold text-gray-900">إجراءات سريعة</h2>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <router-link 
                  to="/ngo/new-request"
                  class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <svg class="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  طلب تبرع جديد
                </router-link>
                <router-link 
                  to="/ngo/messages"
                  class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary-600 hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                >
                  <svg class="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  عرض الرسائل
                </router-link>
                <router-link 
                  to="/ngo/settings"
                  class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <svg class="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  تحديث البيانات
                </router-link>
              </div>
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
  name: 'Dashboard',
  components: {
    CommonHeader
  },
  data() {
    return {
      stats: {
        pendingRequests: 5,
        acceptedRequests: 12,
        newMessages: 3,
        totalDonations: 24
      }
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

