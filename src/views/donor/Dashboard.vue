<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <div class="quick-actions-section bg-white shadow-md rounded-lg p-4 mb-6">
        <div class="flex justify-between items-center space-x-4 rtl:space-x-reverse">
          <router-link to="/donor/new-donation" class="quick-action-btn bg-primary hover:bg-primary-dark">
            <i class="fas fa-plus-circle text-xl mb-2"></i>
            <span>تبرع جديد</span>
          </router-link>
          
          <router-link to="/donor/messages" class="quick-action-btn bg-secondary hover:bg-secondary-dark">
            <i class="fas fa-envelope text-xl mb-2"></i>
            <span>الرسائل</span>
            <span class="notification-badge">2</span>
          </router-link>
          
          <router-link to="/donor/settings" class="quick-action-btn bg-accent hover:bg-accent-dark">
            <i class="fas fa-cog text-xl mb-2"></i>
            <span>الإعدادات</span>
          </router-link>
        </div>
      </div>

      <h1 class="text-3xl font-bold text-gray-800 mb-8">لوحة التحكم</h1>
      
      <div class="stats-grid">
        <div class="stat-card hover:transform hover:scale-105 transition-all">
          <div class="stat-icon bg-blue-100 text-primary">
            <i class="fas fa-hand-holding-heart"></i>
          </div>
          <div class="stat-info">
            <h3>إجمالي التبرعات</h3>
            <p class="stat-number">{{ totalDonations }}</p>
          </div>
        </div>
        <div class="stat-card hover:transform hover:scale-105 transition-all">
          <div class="stat-icon bg-green-100 text-secondary">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="stat-info">
            <h3>التبرعات المكتملة</h3>
            <p class="stat-number">{{ completedDonations }}</p>
          </div>
        </div>
        <div class="stat-card hover:transform hover:scale-105 transition-all">
          <div class="stat-icon bg-purple-100 text-accent">
            <i class="fas fa-clock"></i>
          </div>
          <div class="stat-info">
            <h3>التبرعات قيد التنفيذ</h3>
            <p class="stat-number">{{ pendingDonations }}</p>
          </div>
        </div>
      </div>

      <div class="recent-donations">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">آخر التبرعات</h2>
        <div class="donations-list">
          <div v-for="donation in recentDonations" :key="donation.id" 
               class="donation-card hover:shadow-lg transition-shadow">
            <div class="donation-info">
              <h3 class="text-lg font-semibold">{{ donation.deviceName }}</h3>
              <p class="donation-date">{{ donation.date }}</p>
              <p class="donation-status" :class="getStatusClass(donation.status)">
                {{ getStatusText(donation.status) }}
              </p>
            </div>
            <div class="donation-actions">
              <button class="view-button" @click="viewDonation(donation.id)">
                <i class="fas fa-eye mr-2"></i>
                عرض التفاصيل
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quick-actions-section {
  background: linear-gradient(to right, #ffffff, #f8fafc);
  border: 1px solid #e2e8f0;
}

.quick-action-btn {
  @apply flex flex-col items-center justify-center px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 w-full max-w-xs;
  position: relative;
}

.quick-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.quick-action-btn i {
  transition: transform 0.3s ease;
}

.quick-action-btn:hover i {
  transform: scale(1.1);
}

.notification-badge {
  @apply absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold;
  border: 2px solid white;
}

.bg-primary { @apply bg-blue-600; }
.bg-primary-dark { @apply bg-blue-700; }
.bg-secondary { @apply bg-green-600; }
.bg-secondary-dark { @apply bg-green-700; }
.bg-accent { @apply bg-purple-600; }
.bg-accent-dark { @apply bg-purple-700; }
</style>

<script>
export default {
  name: 'DonorDashboard',
  data() {
    return {
      totalDonations: 12,
      completedDonations: 8,
      pendingDonations: 4,
      recentDonations: [
        {
          id: 1,
          deviceName: 'ملابس اطفال',
          date: '2024-03-15',
          status: 'completed'
        },
        {
          id: 2,
          deviceName: 'ملابس رجالى',
          date: '2024-03-10',
          status: 'pending'
        },
        {
          id: 3,
          deviceName: 'ملابس نساء',
          date: '2024-03-05',
          status: 'in_progress'
        }
      ]
    }
  },
  methods: {
    getStatusText(status) {
      const statuses = {
        completed: 'مكتمل',
        pending: 'قيد الانتظار',
        in_progress: 'قيد التنفيذ'
      }
      return statuses[status] || status
    },
    getStatusClass(status) {
      return {
        'bg-green-100 text-green-800': status === 'completed',
        'bg-yellow-100 text-yellow-800': status === 'pending',
        'bg-blue-100 text-blue-800': status === 'in_progress'
      }
    },
    viewDonation(id) {
      console.log('Viewing donation:', id)
    }
  }
}
</script>

<style scoped>
.dashboard {
  direction: rtl;
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 2rem;
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.stat-icon {
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon i {
  font-size: 2rem;
}

.text-primary { color: var(--primary); }
.text-secondary { color: var(--secondary); }
.text-accent { color: var(--accent); }

.stat-info h3 {
  margin: 0;
  font-size: 1rem;
  color: #64748b;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #1e293b;
  margin: 0.5rem 0 0 0;
}

.recent-donations {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.donations-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.donation-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.75rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
}

.donation-status {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
}

.view-button {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-button:hover {
  background-color: var(--primary-dark);
  transform: translateY(-1px);
}

.donation-date {
  color: #64748b;
  font-size: 0.875rem;
  margin: 0.5rem 0;
}
</style>
