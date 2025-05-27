<template>
  <div class="settings">
    <div class="settings-container">
      <h1>الإعدادات</h1>

      <div class="settings-grid">
        <div class="settings-section">
          <h2>الملف الشخصي</h2>
          <div class="profile-section">
            <div class="profile-image">
              <img :src="userProfile.avatar" :alt="userProfile.name">
              <button class="change-image" @click="changeProfileImage">
                <i class="fas fa-camera"></i>
              </button>
            </div>
            <div class="profile-form">
              <div class="form-group">
                <label>الاسم الكامل</label>
                <input 
                  type="text" 
                  v-model="userProfile.name"
                  placeholder="أدخل اسمك الكامل"
                >
              </div>
              <div class="form-group">
                <label>البريد الإلكتروني</label>
                <input 
                  type="email" 
                  v-model="userProfile.email"
                  placeholder="أدخل بريدك الإلكتروني"
                >
              </div>
              <div class="form-group">
                <label>رقم الهاتف</label>
                <input 
                  type="tel" 
                  v-model="userProfile.phone"
                  placeholder="أدخل رقم هاتفك"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <h2>تغيير كلمة المرور</h2>
          <div class="password-form">
            <div class="form-group">
              <label>كلمة المرور الحالية</label>
              <input 
                type="password" 
                v-model="password.current"
                placeholder="أدخل كلمة المرور الحالية"
              >
            </div>
            <div class="form-group">
              <label>كلمة المرور الجديدة</label>
              <input 
                type="password" 
                v-model="password.new"
                placeholder="أدخل كلمة المرور الجديدة"
              >
            </div>
            <div class="form-group">
              <label>تأكيد كلمة المرور الجديدة</label>
              <input 
                type="password" 
                v-model="password.confirm"
                placeholder="أعد إدخال كلمة المرور الجديدة"
              >
            </div>
          </div>
        </div>

        <div class="settings-section">
          <h2>الإشعارات</h2>
          <div class="notifications-settings">
            <div class="notification-item">
              <div class="notification-info">
                <h3>إشعارات البريد الإلكتروني</h3>
                <p>استلام إشعارات على البريد الإلكتروني</p>
              </div>
              <label class="switch">
                <input 
                  type="checkbox" 
                  v-model="notifications.email"
                >
                <span class="slider"></span>
              </label>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <h3>إشعارات الرسائل</h3>
                <p>إشعارات عند استلام رسائل جديدة</p>
              </div>
              <label class="switch">
                <input 
                  type="checkbox" 
                  v-model="notifications.messages"
                >
                <span class="slider"></span>
              </label>
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <h3>إشعارات التبرعات</h3>
                <p>إشعارات عند تحديث حالة التبرعات</p>
              </div>
              <label class="switch">
                <input 
                  type="checkbox" 
                  v-model="notifications.donations"
                >
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <h2>الخصوصية</h2>
          <div class="privacy-settings">
            <div class="privacy-item">
              <div class="privacy-info">
                <h3>إظهار معلومات الاتصال</h3>
                <p>السماح للمؤسسات الخيرية برؤية معلومات الاتصال الخاصة بك</p>
              </div>
              <label class="switch">
                <input 
                  type="checkbox" 
                  v-model="privacy.showContact"
                >
                <span class="slider"></span>
              </label>
            </div>
            <div class="privacy-item">
              <div class="privacy-info">
                <h3>إظهار سجل التبرعات</h3>
                <p>السماح للمؤسسات الخيرية برؤية سجل تبرعاتك السابق</p>
              </div>
              <label class="switch">
                <input 
                  type="checkbox" 
                  v-model="privacy.showDonationHistory"
                >
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="settings-actions">
        <button class="save-button" @click="saveSettings">
          حفظ التغييرات
        </button>
        <button class="cancel-button" @click="resetSettings">
          إلغاء
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      userProfile: {
        name: 'أحمد محمد',
        email: 'ahmed@example.com',
        phone: '0123456789',
        avatar: '@/assets/avatars/user.jpg'
      },
      password: {
        current: '',
        new: '',
        confirm: ''
      },
      notifications: {
        email: true,
        messages: true,
        donations: true
      },
      privacy: {
        showContact: true,
        showDonationHistory: false
      }
    }
  },
  methods: {
    changeProfileImage() {
      // Implement profile image change logic
      console.log('Changing profile image')
    },
    saveSettings() {
      // Implement settings save logic
      console.log('Saving settings:', {
        userProfile: this.userProfile,
        notifications: this.notifications,
        privacy: this.privacy
      })
    },
    resetSettings() {
      // Implement settings reset logic
      console.log('Resetting settings')
    }
  }
}
</script>

<style scoped>
.settings {
  direction: rtl;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.settings-container {
  max-width: 1200px;
  margin: 0 auto;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.settings-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.settings-section h2 {
  margin: 0 0 1.5rem 0;
  color: #333;
  font-size: 1.2rem;
}

.profile-section {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.profile-image {
  position: relative;
  width: 120px;
  height: 120px;
}

.profile-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.change-image {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #4CAF50;
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-form {
  flex: 1;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.notification-item,
.privacy-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.notification-item:last-child,
.privacy-item:last-child {
  border-bottom: none;
}

.notification-info h3,
.privacy-info h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: #333;
}

.notification-info p,
.privacy-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4CAF50;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.settings-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.save-button,
.cancel-button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
}

.save-button {
  background-color: #4CAF50;
  color: white;
}

.save-button:hover {
  background-color: #45a049;
}

.cancel-button {
  background-color: #f8f9fa;
  color: #666;
  border: 1px solid #ddd;
}

.cancel-button:hover {
  background-color: #e9ecef;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-form {
    width: 100%;
  }

  .settings-actions {
    flex-direction: column;
  }

  .save-button,
  .cancel-button {
    width: 100%;
  }
}
</style> 