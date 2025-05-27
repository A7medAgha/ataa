<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <h1>لوحة التحكم</h1>
      
      <div class="stats-grid">
        <div class="stat-card">
          <i class="fas fa-hand-holding-heart"></i>
          <div class="stat-info">
            <h3>إجمالي التبرعات</h3>
            <p class="stat-number">{{ totalDonations }}</p>
          </div>
        </div>
        <div class="stat-card">
          <i class="fas fa-check-circle"></i>
          <div class="stat-info">
            <h3>التبرعات المكتملة</h3>
            <p class="stat-number">{{ completedDonations }}</p>
          </div>
        </div>
        <div class="stat-card">
          <i class="fas fa-clock"></i>
          <div class="stat-info">
            <h3>التبرعات قيد التنفيذ</h3>
            <p class="stat-number">{{ pendingDonations }}</p>
          </div>
        </div>
      </div>

      <div class="recent-donations">
        <h2>آخر التبرعات</h2>
        <div class="donations-list">
          <div v-for="donation in recentDonations" :key="donation.id" class="donation-card">
            <div class="donation-info">
              <h3>{{ donation.deviceName }}</h3>
              <p class="donation-date">{{ donation.date }}</p>
              <p class="donation-status" :class="donation.status">
                {{ getStatusText(donation.status) }}
              </p>
            </div>
            <div class="donation-actions">
              <button class="view-button" @click="viewDonation(donation.id)">عرض التفاصيل</button>
            </div>
          </div>
        </div>
      </div>

      <div class="quick-actions">
        <h2>إجراءات سريعة</h2>
        <div class="actions-grid">
          <router-link to="/donor/new-donation" class="action-card">
            <i class="fas fa-plus-circle"></i>
            <span>تبرع جديد</span>
          </router-link>
          <router-link to="/donor/messages" class="action-card">
            <i class="fas fa-envelope"></i>
            <span>الرسائل</span>
          </router-link>
          <router-link to="/donor/settings" class="action-card">
            <i class="fas fa-cog"></i>
            <span>الإعدادات</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

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
          deviceName: 'جهاز تخطيط القلب',
          date: '2024-03-15',
          status: 'completed'
        },
        {
          id: 2,
          deviceName: 'جهاز قياس السكر',
          date: '2024-03-10',
          status: 'pending'
        },
        {
          id: 3,
          deviceName: 'جهاز التنفس الصناعي',
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
    viewDonation(id) {
      // Implement view donation details logic
      console.log('Viewing donation:', id)
    }
  }
}
</script>

<style scoped>
.dashboard {
  direction: rtl;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-card i {
  font-size: 2rem;
  color: #4CAF50;
}

.stat-info h3 {
  margin: 0;
  font-size: 1rem;
  color: #666;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0.5rem 0 0 0;
}

.recent-donations {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
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
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.donation-info h3 {
  margin: 0;
  color: #333;
}

.donation-date {
  color: #666;
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

.donation-status {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.donation-status.completed {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.donation-status.pending {
  background-color: #fff3e0;
  color: #ef6c00;
}

.donation-status.in_progress {
  background-color: #e3f2fd;
  color: #1565c0;
}

.view-button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.view-button:hover {
  background-color: #45a049;
}

.quick-actions {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}

.action-card:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
}

.action-card i {
  font-size: 2rem;
  color: #4CAF50;
  margin-bottom: 0.5rem;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

h2 {
  margin-bottom: 1rem;
  color: #444;
}
</style> 