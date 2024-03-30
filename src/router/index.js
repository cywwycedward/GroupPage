import {createRouter,createWebHistory} from 'vue-router'

import MemberPage from '@/components/MemberPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/members/:id',
            component:MemberPage
        }
    ]
})

export default router