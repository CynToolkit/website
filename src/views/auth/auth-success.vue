<template>
    <div>
        <p>You can now close this window</p>
    </div>
</template>

<script lang="ts" setup>
import { supabase } from '@/utils/supabase';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route  = useRoute()
const isLoading = ref(true)

console.log('route', route)

// // Example webhook call - adjust payload as needed for signUp response
// await supabase.functions.invoke('webhook-post-account-creation', {
//   body: {
//     id: data.user.id // Use data.user.id from signUp response
//   }
// })
// user.value = data.user
// setAuthState('SIGNED_IN')
// fetchSubscription()
</script>

<style lang="scss" scoped>

</style>