<template>
  <div class="donations">
    <div class="donations-container">
      <h1>تبرعاتي</h1>

      <div class="filters">
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="ابحث عن تبرع..."
            @input="filterDonations"
          >
        </div>
        <div class="filter-group">
          <select v-model="statusFilter" @change="filterDonations">
            <option value="">جميع الحالات</option>
            <option value="pending">قيد الانتظار</option>
            <option value="in_progress">قيد التنفيذ</option>
            <option value="completed">مكتمل</option>
            <option value="cancelled">ملغي</option>
          </select>
          <select v-model="typeFilter" @change="filterDonations">
            <option value="">جميع الأنواع</option>
            <option value="diagnostic">أجهزة تشخيصية</option>
            <option value="monitoring">أجهزة مراقبة</option>
            <option value="treatment">أجهزة علاجية</option>
          </select>
        </div>
      </div>

      <div class="donations-list">
        <div v-for="donation in filteredDonations" :key="donation.id" class="donation-card">
          <div class="donation-image">
            <img :src="donation.image" :alt="donation.deviceName">
          </div>
          <div class="donation-details">
            <h3>{{ donation.deviceName }}</h3>
            <p class="donation-type">{{ getTypeName(donation.type) }}</p>
            <p class="donation-date">تاريخ التبرع: {{ formatDate(donation.date) }}</p>
            <p class="donation-status" :class="donation.status">
              {{ getStatusText(donation.status) }}
            </p>
            <p class="donation-description">{{ donation.description }}</p>
          </div>
          <div class="donation-actions">
            <button 
              class="action-button view"
              @click="viewDonation(donation.id)"
            >
              عرض التفاصيل
            </button>
            <button 
              v-if="donation.status === 'pending'"
              class="action-button cancel"
              @click="cancelDonation(donation.id)"
            >
              إلغاء التبرع
            </button>
          </div>
        </div>
      </div>

      <div v-if="filteredDonations.length === 0" class="no-donations">
        <i class="fas fa-box-open"></i>
        <p>لا توجد تبرعات</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonationsPage',
  data() {
    return {
      searchQuery: '',
      statusFilter: '',
      typeFilter: '',
      donations: [
        {
          id: 1,
          deviceName: 'جهاز تخطيط القلب',
          type: 'diagnostic',
          date: '2024-03-15',
          status: 'completed',
          description: 'جهاز حديث لتشخيص أمراض القلب',
          image: '@/assets/devices/ecg.jpg'
        },
        {
          id: 2,
          deviceName: 'جهاز قياس السكر',
          type: 'monitoring',
          date: '2024-03-10',
          status: 'pending',
          description: 'جهاز لقياس مستوى السكر في الدم',
          image: '@/assets/devices/glucometer.jpg'
        },
        {
          id: 3,
          deviceName: 'جهاز التنفس الصناعي',
          type: 'treatment',
          date: '2024-03-05',
          status: 'in_progress',
          description: 'جهاز للتنفس الصناعي للمرضى',
          image: '@/assets/devices/ventilator.jpg'
        }
      ]
    }
  },
  computed: {
    filteredDonations() {
      return this.donations.filter(donation => {
        const matchesSearch = donation.deviceName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            donation.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesStatus = !this.statusFilter || donation.status === this.statusFilter
        const matchesType = !this.typeFilter || donation.type === this.typeFilter
        return matchesSearch && matchesStatus && matchesType
      })
    }
  },
  methods: {
    filterDonations() {
      // Additional filtering logic if needed
    },
    getTypeName(type) {
      const types = {
        diagnostic: 'أجهزة تشخيصية',
        monitoring: 'أجهزة مراقبة',
        treatment: 'أجهزة علاجية'
      }
      return types[type] || type
    },
    getStatusText(status) {
      const statuses = {
        pending: 'قيد الانتظار',
        in_progress: 'قيد التنفيذ',
        completed: 'مكتمل',
        cancelled: 'ملغي'
      }
      return statuses[status] || status
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('ar-SA')
    },
    viewDonation(id) {
      // Implement view donation details logic
      console.log('Viewing donation:', id)
    },
    cancelDonation(id) {
      // Implement cancel donation logic
      console.log('Cancelling donation:', id)
    }
  }
}
</script>

<style scoped>
.donations {
  direction: rtl;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.donations-container {
  max-width: 1200px;
  margin: 0 auto;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.search-box {
  flex: 1;
  min-width: 300px;
}

.filter-group {
  display: flex;
  gap: 1rem;
}

.search-box input,
.filter-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.donations-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.donation-card {
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.donation-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.donation-details h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.donation-type {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.donation-date {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.donation-status {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.donation-status.pending {
  background-color: #fff3e0;
  color: #ef6c00;
}

.donation-status.in_progress {
  background-color: #e3f2fd;
  color: #1565c0;
}

.donation-status.completed {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.donation-status.cancelled {
  background-color: #ffebee;
  color: #c62828;
}

.donation-description {
  color: #666;
  margin: 0;
  line-height: 1.4;
}

.donation-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
}

.action-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  white-space: nowrap;
}

.action-button.view {
  background-color: #4CAF50;
  color: white;
}

.action-button.cancel {
  background-color: #dc3545;
  color: white;
}

.action-button.view:hover {
  background-color: #45a049;
}

.action-button.cancel:hover {
  background-color: #c82333;
}

.no-donations {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.no-donations i {
  font-size: 3rem;
  color: #ddd;
  margin-bottom: 1rem;
}

.no-donations p {
  color: #666;
  margin: 0;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

@media (max-width: 768px) {
  .donation-card {
    grid-template-columns: 1fr;
  }

  .donation-image {
    max-width: 300px;
    margin: 0 auto;
  }

  .donation-actions {
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style> 
