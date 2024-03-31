import {createRouter,createWebHistory} from 'vue-router'

import MemberPage from '@/components/MemberPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/members/:id',
            name:'member',
            component:MemberPage
        }
    ]
})

export default router