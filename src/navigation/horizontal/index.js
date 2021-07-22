export default [
  {
    header: '',
    icon: 'AlignLeftIcon',
    children: [
      {
        title: 'Пользователи',
        icon: 'UsersIcon',
        children: [
          {
            title: 'Соискатели',
            route: 'job-seekers',
            icon: 'UserIcon',
          },
          {
            title: 'Работодатели',
            route: 'employer',
            icon: 'HexagonIcon',
          },
          {
            title: 'Рекрутеры',
            route: 'recruiter',
            icon: 'MehIcon',
          },
        ],
      },

      {
        title: 'Верификация',
        icon: 'CheckIcon',
        children: [
          {
            title: 'Работодатели',
            route: 'verification',
            icon: 'CheckIcon',
          },
          {
            title: 'Контакты',
            route: 'verification-employer-contact',
            icon: 'PhoneIcon',
          },
          {
            title: 'Соискатели',
            route: 'verification-jobseekers',
            icon: 'UsersIcon',
          },
        ],
      },

      {
        title: 'Финансы',
        icon: 'DollarSignIcon',
        children: [
          {
            title: 'Finance',
            route: 'finance',
            icon: 'DollarSignIcon',
          },
          {
            title: 'Second Finance',
            route: 'second-finance',
            icon: 'DollarSignIcon',
          },
        ],
      },

      {
        title: 'Метрики',
        icon: 'TrendingUpIcon',
        children: [
          {
            title: 'Metrics',
            route: 'metrics',
            icon: 'TrendingUpIcon',
          },
        ],
      },

      {
        header: 'Жалобы',
        icon: 'ThumbsDownIcon',
        route: 'complaint-page',
        title: 'Жалобы',
      },
    ],
  },

  {
    header: 'Админпанель',
    icon: 'HomeIcon',
    children: [
      {
        title: 'Администраторы',
        route: 'home',
        icon: 'HomeIcon',
      },
    ],
  },
]
