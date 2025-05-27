<template>
  <div class="min-h-screen bg-gray-50">
    <CommonHeader title="الرسائل" />

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-lg shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-12rem)]">
          <!-- Conversations List -->
          <div class="border-l border-gray-200">
            <div class="p-4 border-b border-gray-200">
              <div class="relative">
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="بحث في المحادثات..."
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="overflow-y-auto h-[calc(100%-4rem)]">
              <div
                v-for="conversation in filteredConversations"
                :key="conversation.id"
                @click="selectConversation(conversation)"
                :class="[
                  'p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50',
                  { 'bg-primary-50': selectedConversation?.id === conversation.id }
                ]"
              >
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <div class="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span class="text-primary-600 font-medium">{{ conversation.name.charAt(0) }}</span>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-900">{{ conversation.name }}</p>
                      <p class="text-xs text-gray-500">{{ formatTime(conversation.lastMessageTime) }}</p>
                    </div>
                    <p class="text-sm text-gray-500 truncate">{{ conversation.lastMessage }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Area -->
          <div class="md:col-span-2 flex flex-col">
            <div v-if="selectedConversation" class="flex-1 flex flex-col">
              <!-- Chat Header -->
              <div class="p-4 border-b border-gray-200">
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <div class="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span class="text-primary-600 font-medium">{{ selectedConversation.name.charAt(0) }}</span>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">{{ selectedConversation.name }}</h3>
                    <p class="text-xs text-gray-500">متصل الآن</p>
                  </div>
                </div>
              </div>

              <!-- Messages -->
              <div class="flex-1 overflow-y-auto p-4 space-y-4">
                <div
                  v-for="message in selectedConversation.messages"
                  :key="message.id"
                  :class="[
                    'flex',
                    message.isFromMe ? 'justify-end' : 'justify-start'
                  ]"
                >
                  <div
                    :class="[
                      'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
                      message.isFromMe
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    ]"
                  >
                    <p class="text-sm">{{ message.text }}</p>
                    <p class="text-xs mt-1" :class="message.isFromMe ? 'text-primary-200' : 'text-gray-500'">
                      {{ formatTime(message.time) }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Message Input -->
              <div class="p-4 border-t border-gray-200">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <input
                    type="text"
                    v-model="newMessage"
                    @keyup.enter="sendMessage"
                    placeholder="اكتب رسالتك هنا..."
                    class="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                  <button
                    @click="sendMessage"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- No Conversation Selected -->
            <div v-else class="flex-1 flex items-center justify-center">
              <div class="text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900">لا توجد محادثة محددة</h3>
                <p class="mt-1 text-sm text-gray-500">اختر محادثة من القائمة للبدء</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header.vue'

export default {
  name: 'Messages',
  components: {
    CommonHeader
  },
  data() {
    return {
      searchQuery: '',
      selectedConversation: null,
      newMessage: '',
      conversations: [
        {
          id: 1,
          name: 'أحمد محمد',
          lastMessage: 'شكراً لكم على المساعدة',
          lastMessageTime: '2024-02-20T10:30:00',
          messages: [
            {
              id: 1,
              text: 'مرحباً، أنا أحمد محمد من جمعية الرحمة',
              time: '2024-02-20T10:00:00',
              isFromMe: false
            },
            {
              id: 2,
              text: 'مرحباً أحمد، كيف يمكنني مساعدتك؟',
              time: '2024-02-20T10:15:00',
              isFromMe: true
            },
            {
              id: 3,
              text: 'شكراً لكم على المساعدة',
              time: '2024-02-20T10:30:00',
              isFromMe: false
            }
          ]
        },
        {
          id: 2,
          name: 'سارة أحمد',
          lastMessage: 'هل يمكنني التبرع بملابس؟',
          lastMessageTime: '2024-02-19T15:45:00',
          messages: [
            {
              id: 1,
              text: 'مرحباً، أنا سارة أحمد',
              time: '2024-02-19T15:30:00',
              isFromMe: false
            },
            {
              id: 2,
              text: 'مرحباً سارة، كيف يمكنني مساعدتك؟',
              time: '2024-02-19T15:35:00',
              isFromMe: true
            },
            {
              id: 3,
              text: 'هل يمكنني التبرع بملابس؟',
              time: '2024-02-19T15:45:00',
              isFromMe: false
            }
          ]
        }
      ]
    }
  },
  computed: {
    filteredConversations() {
      if (!this.searchQuery) return this.conversations
      
      const query = this.searchQuery.toLowerCase()
      return this.conversations.filter(conversation =>
        conversation.name.toLowerCase().includes(query) ||
        conversation.lastMessage.toLowerCase().includes(query)
      )
    }
  },
  methods: {
    selectConversation(conversation) {
      this.selectedConversation = conversation
    },
    sendMessage() {
      if (!this.newMessage.trim() || !this.selectedConversation) return

      const message = {
        id: Date.now(),
        text: this.newMessage,
        time: new Date().toISOString(),
        isFromMe: true
      }

      this.selectedConversation.messages.push(message)
      this.selectedConversation.lastMessage = this.newMessage
      this.selectedConversation.lastMessageTime = message.time
      this.newMessage = ''
    },
    formatTime(time) {
      const date = new Date(time)
      const now = new Date()
      const diff = now - date

      // If less than 24 hours, show time
      if (diff < 24 * 60 * 60 * 1000) {
        return date.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
      }

      // If less than 7 days, show day name
      if (diff < 7 * 24 * 60 * 60 * 1000) {
        return date.toLocaleDateString('ar-SA', { weekday: 'long' })
      }

      // Otherwise show full date
      return date.toLocaleDateString('ar-SA')
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
