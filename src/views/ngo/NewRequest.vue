<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">طلب تبرع جديد</h1>
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <span class="text-sm text-gray-500">مرحباً، جمعية الرحمة</span>
            <div class="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              ر
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-lg font-semibold text-gray-900">تفاصيل التبرع</h2>
        </div>
        <div class="p-6">
          <form @submit.prevent="submitRequest" class="space-y-6">
            <!-- نوع التبرع -->
            <div class="form-group">
              <label for="donationType" class="block text-sm font-medium text-gray-700">نوع التبرع</label>
              <select 
                id="donationType" 
                v-model="request.type"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">اختر نوع التبرع</option>
                <option value="clothes">ملابس</option>
                <option value="furniture">أثاث</option>
                <option value="electronics">أجهزة إلكترونية</option>
                <option value="books">كتب</option>
                <option value="toys">ألعاب</option>
                <option value="other">أخرى</option>
              </select>
            </div>

            <!-- تفاصيل إضافية حسب النوع -->
            <div v-if="request.type === 'clothes'" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="form-group">
                <label for="clothesType" class="block text-sm font-medium text-gray-700">نوع الملابس</label>
                <select 
                  id="clothesType" 
                  v-model="request.clothesType"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">اختر نوع الملابس</option>
                  <option value="winter">ملابس شتوية</option>
                  <option value="summer">ملابس صيفية</option>
                  <option value="formal">ملابس رسمية</option>
                  <option value="casual">ملابس عادية</option>
                </select>
              </div>

              <div class="form-group">
                <label for="size" class="block text-sm font-medium text-gray-700">المقاس</label>
                <select 
                  id="size" 
                  v-model="request.size"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">اختر المقاس</option>
                  <option value="small">صغير</option>
                  <option value="medium">متوسط</option>
                  <option value="large">كبير</option>
                  <option value="xlarge">كبير جداً</option>
                </select>
              </div>
            </div>

            <!-- الكمية -->
            <div class="form-group">
              <label for="quantity" class="block text-sm font-medium text-gray-700">الكمية</label>
              <input 
                type="number" 
                id="quantity" 
                v-model="request.quantity"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                min="1"
              >
            </div>

            <!-- الحالة -->
            <div class="form-group">
              <label for="condition" class="block text-sm font-medium text-gray-700">الحالة</label>
              <select 
                id="condition" 
                v-model="request.condition"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">اختر الحالة</option>
                <option value="new">جديد</option>
                <option value="like_new">كالجديد</option>
                <option value="good">جيد</option>
                <option value="fair">مقبول</option>
              </select>
            </div>

            <!-- الوصف -->
            <div class="form-group">
              <label for="description" class="block text-sm font-medium text-gray-700">وصف التبرع</label>
              <textarea 
                id="description" 
                v-model="request.description"
                rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder="وصف تفصيلي للتبرع..."
              ></textarea>
            </div>

            <!-- الصور -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700">صور التبرع</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>رفع صور</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple accept="image/*">
                    </label>
                    <p class="pr-1 rtl:pr-0 rtl:pl-1">أو اسحب وأفلت</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF حتى 10MB</p>
                </div>
              </div>
            </div>

            <!-- الموقع -->
            <div class="form-group">
              <label for="location" class="block text-sm font-medium text-gray-700">الموقع</label>
              <input 
                type="text" 
                id="location" 
                v-model="request.location"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder="عنوان استلام التبرع"
              >
            </div>

            <!-- ملاحظات إضافية -->
            <div class="form-group">
              <label for="notes" class="block text-sm font-medium text-gray-700">ملاحظات إضافية</label>
              <textarea 
                id="notes" 
                v-model="request.notes"
                rows="3"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="أي معلومات إضافية تريد إضافتها..."
              ></textarea>
            </div>

            <!-- أزرار التحكم -->
            <div class="flex justify-end space-x-4 rtl:space-x-reverse">
              <button 
                type="button"
                @click="cancel"
                class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                إلغاء
              </button>
              <button 
                type="submit"
                class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                تقديم الطلب
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewRequest',
  data() {
    return {
      request: {
        type: '',
        clothesType: '',
        size: '',
        quantity: 1,
        condition: '',
        description: '',
        location: '',
        notes: '',
        images: []
      }
    }
  },
  methods: {
    submitRequest() {
      // Implement request submission logic
      console.log('Submitting request:', this.request)
    },
    cancel() {
      // Implement cancel logic
      this.$router.push('/ngo/dashboard')
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
