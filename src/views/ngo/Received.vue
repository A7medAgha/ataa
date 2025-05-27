<template>
  <div class="min-h-screen bg-gray-50">
    <CommonHeader title="التبرعات المستلمة" />

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm mb-6">
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label for="search" class="block text-sm font-medium text-gray-700">بحث</label>
              <input
                type="text"
                id="search"
                v-model="filters.search"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="ابحث عن تبرع..."
              />
            </div>
            <div>
              <label for="type" class="block text-sm font-medium text-gray-700">نوع التبرع</label>
              <select
                id="type"
                v-model="filters.type"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="">الكل</option>
                <option value="clothes">ملابس</option>
                <option value="furniture">أثاث</option>
                <option value="electronics">إلكترونيات</option>
                <option value="books">كتب</option>
                <option value="toys">ألعاب</option>
                <option value="other">أخرى</option>
              </select>
            </div>
            <div>
              <label for="status" class="block text-sm font-medium text-gray-700">الحالة</label>
              <select
                id="status"
                v-model="filters.status"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="">الكل</option>
                <option value="pending">قيد المراجعة</option>
                <option value="accepted">تم القبول</option>
                <option value="rejected">مرفوض</option>
                <option value="completed">مكتمل</option>
              </select>
            </div>
            <div>
              <label for="sort" class="block text-sm font-medium text-gray-700">ترتيب حسب</label>
              <select
                id="sort"
                v-model="filters.sort"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="newest">الأحدث</option>
                <option value="oldest">الأقدم</option>
                <option value="urgent">عاجل</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Donations List -->
      <div class="bg-white rounded-lg shadow-sm">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  التبرع
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  النوع
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الكمية
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الحالة
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  المتبرع
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  التاريخ
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="donation in filteredDonations" :key="donation.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full object-cover" :src="donation.image" alt="" />
                    </div>
                    <div class="mr-4">
                      <div class="text-sm font-medium text-gray-900">{{ donation.name }}</div>
                      <div class="text-sm text-gray-500">{{ donation.description }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ getTypeName(donation.type) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ donation.quantity }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    {
                      'bg-warning-100 text-warning-800': donation.status === 'pending',
                      'bg-success-100 text-success-800': donation.status === 'accepted',
                      'bg-danger-100 text-danger-800': donation.status === 'rejected',
                      'bg-primary-100 text-primary-800': donation.status === 'completed'
                    }
                  ]">
                    {{ getStatusName(donation.status) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ donation.donor }}</div>
                  <div class="text-sm text-gray-500">{{ donation.donorPhone }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatDate(donation.date) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                  <button
                    @click="viewDetails(donation)"
                    class="text-primary-600 hover:text-primary-900 ml-4"
                  >
                    التفاصيل
                  </button>
                  <button
                    v-if="donation.status === 'pending'"
                    @click="updateStatus(donation.id, 'accepted')"
                    class="text-success-600 hover:text-success-900"
                  >
                    قبول
                  </button>
                  <button
                    v-if="donation.status === 'pending'"
                    @click="updateStatus(donation.id, 'rejected')"
                    class="text-danger-600 hover:text-danger-900 mr-4"
                  >
                    رفض
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header.vue'

export default {
  name: 'Received',
  components: {
    CommonHeader
  },
  data() {
    return {
      filters: {
        search: '',
        type: '',
        status: '',
        sort: 'newest'
      },
      donations: [
        {
          id: 1,
          name: 'ملابس شتوية',
          description: '10 قطع ملابس شتوية - مقاس كبير',
          type: 'clothes',
          quantity: '10 قطع',
          status: 'pending',
          donor: 'أحمد محمد',
          donorPhone: '0123456789',
          date: '2024-02-20',
          image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 2,
          name: 'أدوات منزلية',
          description: 'أدوات مطبخ - حالة جيدة',
          type: 'furniture',
          quantity: '5 قطع',
          status: 'accepted',
          donor: 'سارة أحمد',
          donorPhone: '0123456788',
          date: '2024-02-19',
          image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    }
  },
  computed: {
    filteredDonations() {
      let result = [...this.donations]

      // Apply search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        result = result.filter(donation => 
          donation.name.toLowerCase().includes(search) ||
          donation.description.toLowerCase().includes(search) ||
          donation.donor.toLowerCase().includes(search)
        )
      }

      // Apply type filter
      if (this.filters.type) {
        result = result.filter(donation => donation.type === this.filters.type)
      }

      // Apply status filter
      if (this.filters.status) {
        result = result.filter(donation => donation.status === this.filters.status)
      }

      // Apply sorting
      result.sort((a, b) => {
        if (this.filters.sort === 'newest') {
          return new Date(b.date) - new Date(a.date)
        } else if (this.filters.sort === 'oldest') {
          return new Date(a.date) - new Date(b.date)
        }
        return 0
      })

      return result
    }
  },
  methods: {
    getTypeName(type) {
      const types = {
        clothes: 'ملابس',
        furniture: 'أثاث',
        electronics: 'إلكترونيات',
        books: 'كتب',
        toys: 'ألعاب',
        other: 'أخرى'
      }
      return types[type] || type
    },
    getStatusName(status) {
      const statuses = {
        pending: 'قيد المراجعة',
        accepted: 'تم القبول',
        rejected: 'مرفوض',
        completed: 'مكتمل'
      }
      return statuses[status] || status
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('ar-SA')
    },
    viewDetails(donation) {
      // Implement view details functionality
      console.log('View details for donation:', donation)
    },
    updateStatus(donationId, newStatus) {
      const donation = this.donations.find(d => d.id === donationId)
      if (donation) {
        donation.status = newStatus
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
