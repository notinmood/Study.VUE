/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024-12-19 09:00:29
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2025-01-10 19:48:16
 * @FilePath     : main.ts
 * @Description  :
 * Copyright (c) 2025 by Hiland & RainyTop, All Rights Reserved.
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//创建vue应用
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
