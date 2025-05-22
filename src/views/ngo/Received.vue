<template>
  <div class="received">
    <div class="received-container">
      <h1>التبرعات المستلمة</h1>

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
            <option value="in_transit">قيد النقل</option>
            <option value="received">تم الاستلام</option>
            <option value="in_use">قيد الاستخدام</option>
            <option value="maintenance">قيد الصيانة</option>
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
            <p class="donation-date">تاريخ الاستلام: {{ formatDate(donation.receivedDate) }}</p>
            <p class="donation-status" :class="donation.status">
              {{ getStatusText(donation.status) }}
            </p>
            <p class="donation-description">{{ donation.description }}</p>
            <div class="donation-meta">
              <p><strong>المتبرع:</strong> {{ donation.donorName }}</p>
              <p><strong>موقع الجهاز:</strong> {{ donation.location }}</p>
            </div>
          </div>
          <div class="donation-actions">
            <button 
              class="action-button view"
              @click="viewDonation(donation.id)"
            >
              عرض التفاصيل
            </button>
            <button 
              v-if="donation.status === 'received'"
              class="action-button update"
              @click="updateStatus(donation.id)"
            >
              تحديث الحالة
            </button>
            <button 
              v-if="donation.status === 'in_use'"
              class="action-button maintenance"
              @click="requestMaintenance(donation.id)"
            >
              طلب صيانة
            </button>
          </div>
        </div>
      </div>

      <div v-if="filteredDonations.length === 0" class="no-donations">
        <i class="fas fa-box-open"></i>
        <p>لا توجد تبرعات مستلمة</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReceivedPage',
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
          receivedDate: '2024-03-15',
          status: 'in_use',
          description: 'جهاز حديث لتشخيص أمراض القلب',
          image: '/assets/devices/ecg.jpg',
          donorName: 'أحمد محمد',
          location: 'قسم القلب - الطابق الثاني'
        },
        {
          id: 2,
          deviceName: 'جهاز قياس السكر',
          type: 'monitoring',
          receivedDate: '2024-03-14',
          status: 'received',
          description: 'جهاز لقياس مستوى السكر في الدم',
          image: '/assets/devices/glucometer.jpg',
          donorName: 'محمد علي',
          location: 'مستودع الأجهزة'
        },
        {
          id: 3,
          deviceName: 'جهاز التنفس الصناعي',
          type: 'treatment',
          receivedDate: '2024-03-13',
          status: 'maintenance',
          description: 'جهاز للتنفس الصناعي للمرضى',
          image: '/assets/devices/ventilator.jpg',
          donorName: 'سارة أحمد',
          location: 'ورشة الصيانة'
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
        in_transit: 'قيد النقل',
        received: 'تم الاستلام',
        in_use: 'قيد الاستخدام',
        maintenance: 'قيد الصيانة'
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
    updateStatus(id) {
      // Implement status update logic
      console.log('Updating status for donation:', id)
    },
    requestMaintenance(id) {
      // Implement maintenance request logic
      console.log('Requesting maintenance for donation:', id)
    }
  }
}
</script>

<style scoped>
.received {
  direction: rtl;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.received-container {
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

.donation-status.in_transit {
  background-color: #fff3e0;
  color: #ef6c00;
}

.donation-status.received {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.donation-status.in_use {
  background-color: #e3f2fd;
  color: #1565c0;
}

.donation-status.maintenance {
  background-color: #fce4ec;
  color: #c2185b;
}

.donation-description {
  color: #666;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.donation-meta {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
}

.donation-meta p {
  margin: 0.25rem 0;
  color: #666;
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

.action-button.update {
  background-color: #2196F3;
  color: white;
}

.action-button.maintenance {
  background-color: #9C27B0;
  color: white;
}

.action-button.view:hover {
  background-color: #45a049;
}

.action-button.update:hover {
  background-color: #1976D2;
}

.action-button.maintenance:hover {
  background-color: #7B1FA2;
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