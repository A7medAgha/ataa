<template>
  <div class="messages">
    <div class="messages-container">
      <h1>الرسائل</h1>

      <div class="messages-layout">
        <div class="conversations-list">
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="ابحث في المحادثات..."
              @input="filterConversations"
            >
          </div>

          <div class="conversations">
            <div 
              v-for="conversation in filteredConversations" 
              :key="conversation.id"
              class="conversation-item"
              :class="{ active: selectedConversation?.id === conversation.id }"
              @click="selectConversation(conversation)"
            >
              <div class="conversation-avatar">
                <img :src="conversation.avatar" :alt="conversation.name">
                <span 
                  v-if="conversation.unreadCount" 
                  class="unread-badge"
                >
                  {{ conversation.unreadCount }}
                </span>
              </div>
              <div class="conversation-info">
                <div class="conversation-header">
                  <h3>{{ conversation.name }}</h3>
                  <span class="conversation-time">{{ formatTime(conversation.lastMessageTime) }}</span>
                </div>
                <p class="conversation-preview">{{ conversation.lastMessage }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="chat-area" v-if="selectedConversation">
          <div class="chat-header">
            <h2>{{ selectedConversation.name }}</h2>
            <button class="info-button" @click="showConversationInfo">
              <i class="fas fa-info-circle"></i>
            </button>
          </div>

          <div class="messages-list" ref="messagesList">
            <div 
              v-for="message in selectedConversation.messages" 
              :key="message.id"
              class="message"
              :class="{ 'message-sent': message.isSent }"
            >
              <div class="message-content">
                <p>{{ message.text }}</p>
                <span class="message-time">{{ formatTime(message.time) }}</span>
              </div>
            </div>
          </div>

          <div class="message-input">
            <textarea 
              v-model="newMessage" 
              placeholder="اكتب رسالتك هنا..."
              @keydown.enter.prevent="sendMessage"
            ></textarea>
            <button class="send-button" @click="sendMessage">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>

        <div class="no-conversation" v-else>
          <i class="fas fa-comments"></i>
          <p>اختر محادثة للبدء</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagesPage',
  data() {
    return {
      searchQuery: '',
      newMessage: '',
      selectedConversation: null,
      conversations: [
        {
          id: 1,
          name: 'مستشفى الشفاء',
          avatar: '@/assets/avatars/hospital1.jpg',
          lastMessage: 'شكراً جزيلاً على تبرعكم',
          lastMessageTime: '2024-03-15T10:30:00',
          unreadCount: 2,
          messages: [
            {
              id: 1,
              text: 'مرحباً، نحن مستشفى الشفاء',
              time: '2024-03-15T10:00:00',
              isSent: false
            },
            {
              id: 2,
              text: 'نود أن نشكركم على تبرعكم بجهاز تخطيط القلب',
              time: '2024-03-15T10:15:00',
              isSent: false
            },
            {
              id: 3,
              text: 'شكراً جزيلاً على تبرعكم',
              time: '2024-03-15T10:30:00',
              isSent: false
            }
          ]
        },
        {
          id: 2,
          name: 'جمعية الإحسان',
          avatar: '@/assets/avatars/charity1.jpg',
          lastMessage: 'هل يمكننا ترتيب موعد لتسليم الجهاز؟',
          lastMessageTime: '2024-03-14T15:45:00',
          unreadCount: 0,
          messages: [
            {
              id: 1,
              text: 'مرحباً، نحن من جمعية الإحسان',
              time: '2024-03-14T15:00:00',
              isSent: false
            },
            {
              id: 2,
              text: 'نود أن نسأل عن موعد تسليم الجهاز',
              time: '2024-03-14T15:30:00',
              isSent: false
            },
            {
              id: 3,
              text: 'هل يمكننا ترتيب موعد لتسليم الجهاز؟',
              time: '2024-03-14T15:45:00',
              isSent: false
            }
          ]
        }
      ]
    }
  },
  computed: {
    filteredConversations() {
      return this.conversations.filter(conversation => 
        conversation.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    filterConversations() {
      // Additional filtering logic if needed
    },
    selectConversation(conversation) {
      this.selectedConversation = conversation
      conversation.unreadCount = 0
      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },
    sendMessage() {
      if (!this.newMessage.trim()) return

      const message = {
        id: Date.now(),
        text: this.newMessage,
        time: new Date().toISOString(),
        isSent: true
      }

      this.selectedConversation.messages.push(message)
      this.selectedConversation.lastMessage = this.newMessage
      this.selectedConversation.lastMessageTime = message.time
      this.newMessage = ''

      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },
    scrollToBottom() {
      const messagesList = this.$refs.messagesList
      if (messagesList) {
        messagesList.scrollTop = messagesList.scrollHeight
      }
    },
    formatTime(time) {
      const date = new Date(time)
      const now = new Date()
      const diff = now - date

      if (diff < 24 * 60 * 60 * 1000) {
        return date.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
      } else if (diff < 7 * 24 * 60 * 60 * 1000) {
        return date.toLocaleDateString('ar-SA', { weekday: 'long' })
      } else {
        return date.toLocaleDateString('ar-SA')
      }
    },
    showConversationInfo() {
      // Implement conversation info modal
      console.log('Showing conversation info')
    }
  }
}
</script>

<style scoped>
.messages {
  direction: rtl;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
}

.messages-container {
  max-width: 1200px;
  margin: 0 auto;
}

.messages-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: calc(100vh - 8rem);
}

.conversations-list {
  border-left: 1px solid #eee;
  display: flex;
  flex-direction: column;
}

.search-box {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.search-box input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.conversations {
  flex: 1;
  overflow-y: auto;
}

.conversation-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;
}

.conversation-item:hover {
  background-color: #f8f9fa;
}

.conversation-item.active {
  background-color: #e3f2fd;
}

.conversation-avatar {
  position: relative;
  width: 50px;
  height: 50px;
}

.conversation-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.unread-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #4CAF50;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
}

.conversation-info {
  flex: 1;
  min-width: 0;
}

.conversation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.conversation-header h3 {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.conversation-time {
  font-size: 0.8rem;
  color: #666;
}

.conversation-preview {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-area {
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.chat-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.info-button {
  background: none;
  border: none;
  color: #666;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
}

.messages-list {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  display: flex;
  flex-direction: column;
  max-width: 70%;
}

.message-sent {
  align-self: flex-end;
}

.message-content {
  background-color: #f1f0f0;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  position: relative;
}

.message-sent .message-content {
  background-color: #e3f2fd;
}

.message-content p {
  margin: 0;
  color: #333;
}

.message-time {
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.25rem;
  display: block;
}

.message-input {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #eee;
}

.message-input textarea {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  height: 40px;
  font-family: inherit;
}

.send-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  width: 40px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.send-button:hover {
  background-color: #45a049;
}

.no-conversation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
}

.no-conversation i {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.no-conversation p {
  margin: 0;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

@media (max-width: 768px) {
  .messages-layout {
    grid-template-columns: 1fr;
  }

  .conversations-list {
    display: none;
  }

  .conversations-list.active {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 1;
  }
}
</style> 