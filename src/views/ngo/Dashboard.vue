<template>
  
      <h1>لوحة تحكم الجمعية</h1>
     
</template>

<script>
export default {
  name: 'NGODashboard',
  data() {
    return {
      totalDonations: 25,
      pendingRequests: 8,
      completedRequests: 17,
      recentRequests: [
        {
          id: 1,
          deviceName: 'جهاز تخطيط القلب',
          date: '2024-03-15',
          status: 'pending'
        },
        {
          id: 2,
          deviceName: 'جهاز قياس السكر',
          date: '2024-03-14',
          status: 'in_progress'
        },
        {
          id: 3,
          deviceName: 'جهاز التنفس الصناعي',
          date: '2024-03-13',
          status: 'completed'
        }
      ],
      recentDonations: [
        {
          id: 1,
          deviceName: 'جهاز تخطيط القلب',
          date: '2024-03-15',
          status: 'received'
        },
        {
          id: 2,
          deviceName: 'جهاز قياس السكر',
          date: '2024-03-14',
          status: 'in_transit'
        },
        {
          id: 3,
          deviceName: 'جهاز التنفس الصناعي',
          date: '2024-03-13',
          status: 'received'
        }
      ]
    }
  },
  methods: {
    getStatusText(status) {
      const statuses = {
        pending: 'قيد الانتظار',
        in_progress: 'قيد التنفيذ',
        completed: 'مكتمل',
        received: 'تم الاستلام',
        in_transit: 'قيد النقل'
      }
      return statuses[status] || status
    },
    viewRequest(id) {
      // Implement view request details logic
      console.log('Viewing request:', id)
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

.recent-requests,
.recent-donations {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.requests-list,
.donations-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.request-card,
.donation-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.request-info h3,
.donation-info h3 {
  margin: 0;
  color: #333;
}

.request-date,
.donation-date {
  color: #666;
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

.request-status,
.donation-status {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.request-status.pending,
.donation-status.in_transit {
  background-color: #fff3e0;
  color: #ef6c00;
}

.request-status.in_progress {
  background-color: #e3f2fd;
  color: #1565c0;
}

.request-status.completed,
.donation-status.received {
  background-color: #e8f5e9;
  color: #2e7d32;
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