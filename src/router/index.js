import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Администраторы',
            active: true,
          },
        ],
      },
    },
    {
      path: '/job-seekers',
      name: 'job-seekers',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Соискатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/employer',
      name: 'employer',
      component: () => import('@/views/Employer.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Работодатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/recruiters',
      name: 'recruiter',
      component: () => import('@/views/Recruiters.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Рекрутеры',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users-page',
      name: 'users',
      component: () => import('@/views/Users.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Юзеры',
            active: true,
          },
        ],
      },
    },
    {
      path: '/verification-page',
      name: 'verification',
      component: () => import('@/views/Verification.vue'),
      meta: {
        pageTitle: 'Верификация',
        breadcrumb: [
          {
            text: 'Работодатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/verification-profile',
      name: 'verification-profile',
      component: () => import('@/anworks/verification/VerificationProfileEmployer.vue'),
      meta: {
        pageTitle: 'Верификация',
        breadcrumb: [
          {
            text: 'Работодатели',
            active: true,
          },
        ],
      },
    },
    {
      path: '/finance-page',
      name: 'finance',
      component: () => import('@/views/Finance.vue'),
      meta: {
        pageTitle: 'Finance',
        breadcrumb: [
          {
            text: 'SubFinance',
            active: true,
          },
        ],
      },
    },
    {
      path: '/finance-new-page',
      name: 'second-finance',
      component: () => import('@/views/SecondFinance.vue'),
      meta: {
        pageTitle: 'SecondFinance',
        breadcrumb: [
          {
            text: 'SecondFinance',
            active: true,
          },
        ],
      },
    },
    {
      path: '/metrics-page',
      name: 'metrics',
      component: () => import('@/views/Metrics.vue'),
      meta: {
        pageTitle: 'Metrics',
        breadcrumb: [
          {
            text: 'Metrics',
            active: true,
          },
        ],
      },
    },
    {
      path: '/complaint-page',
      name: 'complaint-page',
      component: () => import('@/views/ComplaintPage.vue'),
      meta: {
        pageTitle: '',
        breadcrumb: [
          {
            text: 'Жалобы',
            active: true,
          },
        ],
      },
    },
    {
      path: '/notification-more',
      name: 'notificationMore',
      component: () => import('@/views/NotificationMore.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Уведомления',
            active: true,
          },
        ],
      },
    },
    {
      path: '/admin-card',
      name: 'adminCard',
      component: () => import('@/views/AdminCard.vue'),
      meta: {
        pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Карточка администратора',
            active: true,
          },
        ],
      },
    },
    {
      path: '/job-seekers-card',
      name: 'jobSeekersCard',
      component: () => import('@/views/JobSeekersCard.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Карточка соискателя',
            active: true,
          },
        ],
      },
    },
    {
      path: '/employer-card',
      name: 'emloyercard',
      component: () => import('@/views/EmployerCard.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Карточка работодателя',
            active: true,
          },
        ],
      },
    },
    {
      path: '/recruiter-card',
      name: 'recruitercard',
      component: () => import('@/views/RecruiterCard.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Карточка рекрутёра',
            active: true,
          },
        ],
      },
    },
    {
      path: '/complaint-card',
      name: 'complaintcard',
      component: () => import('@/views/ComplaintCard.vue'),
      meta: {
        // pageTitle: 'Пользователи',
        breadcrumb: [
          {
            text: 'Детальнее',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
