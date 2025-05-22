<template>
  <div class="new-donation">
    <div class="donation-container">
      <h1>تبرع جديد</h1>
      
      <form @submit.prevent="handleSubmit" class="donation-form">
        <div class="form-section">
          <h2>معلومات الجهاز</h2>
          
          <div class="form-group">
            <label for="deviceType">نوع الجهاز</label>
            <select id="deviceType" v-model="donation.deviceType" required>
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
              v-model="donation.deviceName" 
              required
              placeholder="أدخل اسم الجهاز"
            >
          </div>

          <div class="form-group">
            <label for="deviceDescription">وصف الجهاز</label>
            <textarea 
              id="deviceDescription" 
              v-model="donation.deviceDescription" 
              required
              placeholder="أدخل وصفاً تفصيلياً للجهاز"
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="deviceCondition">حالة الجهاز</label>
            <select id="deviceCondition" v-model="donation.deviceCondition" required>
              <option value="">اختر حالة الجهاز</option>
              <option value="new">جديد</option>
              <option value="like_new">كالجديد</option>
              <option value="good">جيد</option>
              <option value="fair">مقبول</option>
            </select>
          </div>
        </div>

        <div class="form-section">
          <h2>معلومات التبرع</h2>
          
          <div class="form-group">
            <label for="donationType">نوع التبرع</label>
            <select id="donationType" v-model="donation.donationType" required>
              <option value="">اختر نوع التبرع</option>
              <option value="direct">تبرع مباشر</option>
              <option value="request">استجابة لطلب</option>
            </select>
          </div>

          <div v-if="donation.donationType === 'request'" class="form-group">
            <label for="requestId">رقم الطلب</label>
            <input 
              type="text" 
              id="requestId" 
              v-model="donation.requestId" 
              required
              placeholder="أدخل رقم الطلب"
            >
          </div>

          <div class="form-group">
            <label for="location">موقع الجهاز</label>
            <input 
              type="text" 
              id="location" 
              v-model="donation.location" 
              required
              placeholder="أدخل موقع الجهاز"
            >
          </div>

          <div class="form-group">
            <label for="notes">ملاحظات إضافية</label>
            <textarea 
              id="notes" 
              v-model="donation.notes" 
              placeholder="أدخل أي ملاحظات إضافية"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div class="form-section">
          <h2>صور الجهاز</h2>
          <div class="image-upload">
            <div class="upload-area" @click="triggerFileInput" @dragover.prevent @drop.prevent="handleDrop">
              <i class="fas fa-cloud-upload-alt"></i>
              <p>اسحب وأفلت الصور هنا أو انقر للاختيار</p>
              <input 
                type="file" 
                ref="fileInput" 
                @change="handleFileSelect" 
                multiple 
                accept="image/*"
                style="display: none"
              >
            </div>
            <div class="image-preview" v-if="donation.images.length > 0">
              <div v-for="(image, index) in donation.images" :key="index" class="preview-item">
                <img :src="image.preview" :alt="'صورة ' + (index + 1)">
                <button type="button" class="remove-image" @click="removeImage(index)">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="cancel-button" @click="cancelDonation">إلغاء</button>
          <button type="submit" class="submit-button">تقديم التبرع</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewDonationPage',
  data() {
    return {
      donation: {
        deviceType: '',
        deviceName: '',
        deviceDescription: '',
        deviceCondition: '',
        donationType: '',
        requestId: '',
        location: '',
        notes: '',
        images: []
      }
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileSelect(event) {
      const files = event.target.files
      this.processFiles(files)
    },
    handleDrop(event) {
      const files = event.dataTransfer.files
      this.processFiles(files)
    },
    processFiles(files) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.donation.images.push({
              file: file,
              preview: e.target.result
            })
          }
          reader.readAsDataURL(file)
        }
      })
    },
    removeImage(index) {
      this.donation.images.splice(index, 1)
    },
    handleSubmit() {
      // Implement donation submission logic here
      console.log('Submitting donation:', this.donation)
    },
    cancelDonation() {
      // Implement cancel logic here
      this.$router.push('/donor/dashboard')
    }
  }
}
</script>

<style scoped>
.new-donation {
  direction: rtl;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.donation-container {
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

.image-upload {
  margin-top: 1rem;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-area:hover {
  border-color: #4CAF50;
  background-color: #f8f9fa;
}

.upload-area i {
  font-size: 2rem;
  color: #4CAF50;
  margin-bottom: 1rem;
}

.image-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.preview-item {
  position: relative;
  aspect-ratio: 1;
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.remove-image {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #dc3545;
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