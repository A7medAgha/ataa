<template>
  <div class="new-request">
    <div class="request-container">
      <h1>طلب تبرع جديد</h1>
      
      <form @submit.prevent="handleSubmit" class="request-form">
        <div class="form-section">
          <h2>معلومات الجهاز المطلوب</h2>
          
          <div class="form-group">
            <label for="deviceType">نوع الجهاز</label>
            <select id="deviceType" v-model="request.deviceType" required>
              <option value="">اختر نوع الجهاز</option>
              <option value="diagnostic">أجهزة تشخيصية</option>
              <option value="monitoring">أجهزة مراقبة</option>
              <option value="treatment">أجهزة علاجية</option>
            </select>
          </div>

          <div class="form-group">
            <label for="deviceName">اسم الجهاز</label>
            <input 
              type="text" 
              id="deviceName" 
              v-model="request.deviceName" 
              required
              placeholder="أدخل اسم الجهاز"
            >
          </div>

          <div class="form-group">
            <label for="deviceDescription">وصف الجهاز</label>
            <textarea 
              id="deviceDescription" 
              v-model="request.deviceDescription" 
              required
              placeholder="أدخل وصفاً تفصيلياً للجهاز المطلوب"
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="quantity">الكمية المطلوبة</label>
            <input 
              type="number" 
              id="quantity" 
              v-model="request.quantity" 
              required
              min="1"
              placeholder="أدخل الكمية المطلوبة"
            >
          </div>
        </div>

        <div class="form-section">
          <h2>معلومات الطلب</h2>
          
          <div class="form-group">
            <label for="urgency">درجة الاستعجال</label>
            <select id="urgency" v-model="request.urgency" required>
              <option value="">اختر درجة الاستعجال</option>
              <option value="high">عالية</option>
              <option value="medium">متوسطة</option>
              <option value="low">منخفضة</option>
            </select>
          </div>

          <div class="form-group">
            <label for="purpose">الغرض من الطلب</label>
            <textarea 
              id="purpose" 
              v-model="request.purpose" 
              required
              placeholder="اشرح الغرض من طلب هذا الجهاز"
              rows="3"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="location">موقع الاستلام</label>
            <input 
              type="text" 
              id="location" 
              v-model="request.location" 
              required
              placeholder="أدخل موقع استلام الجهاز"
            >
          </div>

          <div class="form-group">
            <label for="notes">ملاحظات إضافية</label>
            <textarea 
              id="notes" 
              v-model="request.notes" 
              placeholder="أدخل أي ملاحظات إضافية"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="cancel-button" @click="cancelRequest">إلغاء</button>
          <button type="submit" class="submit-button">تقديم الطلب</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewRequestPage',
  data() {
    return {
      request: {
        deviceType: '',
        deviceName: '',
        deviceDescription: '',
        quantity: 1,
        urgency: '',
        purpose: '',
        location: '',
        notes: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Implement request submission logic here
      console.log('Submitting request:', this.request)
    },
    cancelRequest() {
      // Implement cancel logic here
      this.$router.push('/ngo/dashboard')
    }
  }
}
</script>

<style scoped>
.new-request {
  direction: rtl;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.request-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.form-section:last-child {
  border-bottom: none;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

input, select, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
}

.cancel-button, .submit-button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.cancel-button {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  color: #666;
}

.submit-button {
  background-color: #4CAF50;
  border: none;
  color: white;
}

.cancel-button:hover {
  background-color: #e9ecef;
}

.submit-button:hover {
  background-color: #45a049;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

h2 {
  margin-bottom: 1rem;
  color: #444;
  font-size: 1.25rem;
}
</style> 