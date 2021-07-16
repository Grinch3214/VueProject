<template>
  <div class="card bg-white p-2 p-lg-5">
    <b-tabs pills>
      <b-tab
        active
      >
        <template #title>
          <feather-icon
            icon="UserIcon"
            class="mr-50 d-inline d-sm-none"
          />
          <span class="d-none d-sm-inline">Основная информация</span>
        </template>
        <b-card-text>
          <p class="h4 mt-2">
            Мария Иванова</p>
          <b-avatar
            rounded="sm"
            variant="light-primary"
            size="104px"
            :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
          />

          <info-job-seeker-user />

          <!-- submit and reset -->
          <div class=" mt-2 mt-lg-5 d-flex justify-content-between flex-wrap col-lg-9 pl-0">
            <div class="mb-1">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                type="submit"
                variant="primary"
                class="mr-1"
              >
                Сохранить
              </b-button>
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="reset"
                variant="outline-primary"
              >
                Отмена
              </b-button>
            </div>
            <div>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                v-b-modal.modal-danger
                type="submit"
                variant="danger"
                class="mr-1"
              >
                Удалить соискателя
              </b-button>
              <b-modal
                id="modal-danger"
                ok-variant="danger"
                modal-class="modal-danger"
                centered
                ok-title="Да, уверен"
                cancel-title="Отмена"
                cancel-variant="outline-primary"
              >
                <b-card-text class="h3 text-center">
                  <feather-icon
                    icon="AlertCircleIcon"
                    size="70"
                    class="text-warning d-block mx-auto"
                  />
                  Вы уверены, что хотите удалить соискателя?
                </b-card-text>
              </b-modal>
            </div>
          </div>
        </b-card-text>
      </b-tab>
      <b-tab>
        <template #title>
          <feather-icon
            icon="PhoneIcon"
            class="mr-50"
          />
          <span class="d-none d-sm-inline">Контакты</span>
        </template>
        <b-card-text>

          <contact-job-seeker-user />

          <!-- buttons -->
          <div class="mt-4">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              type="submit"
              variant="primary"
              class="mr-1"
            >
              Сохранить
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="reset"
              variant="outline-primary"
            >
              Отмена
            </b-button>
          </div>
        </b-card-text>
      </b-tab>
      <b-tab>
        <template #title>
          <feather-icon
            icon="ThumbsDownIcon"
            class="mr-50"
            badge="2"
            badge-classes="badge-danger badge-glow"
          />
          <span class="d-none d-sm-inline">Жалобы</span>
        </template>
        <b-card-text>
          <complaints-job-seeker />
        </b-card-text>
      </b-tab>
    </b-tabs>

  </div>
</template>

<script>
import {
  BButton, BModal, VBModal, BCardText, BTab, BTabs, BAvatar,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import InfoJobSeekerUser from '@/anworks/jobSeekers/InfoJobSeekerUser.vue'
import ContactJobSeekerUser from '@/anworks/components/ContactJobSeekerUser.vue'
import ComplaintsJobSeeker from '@/anworks/components/ComplaintsForTab.vue'

export default {
  components: {
    BButton,
    BModal,
    BCardText,
    BTab,
    BTabs,
    BAvatar,
    InfoJobSeekerUser,
    ContactJobSeekerUser,
    ComplaintsJobSeeker,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data: () => ({
    users: [],
    model: {},
  }),
  created() {
    this.$http.get('/assets/job-seekers-users.json')
      .then(res => { this.users = res.data })
      .then(() => { this.model = this.users.find(o => o.id === +this.$route.query.id) })
      // eslint-disable-next-line no-alert
      .then(() => (this.model.fullName))
  },
}
</script>

<style lang="scss" scoped>
[dir=ltr] .badge.badge-up {
    right: -90px;
}
.badge.badge-up {
    top: -21px;
}
@media screen and (max-width: 575px) {
  [dir=ltr] .badge.badge-up {
    right: -30px;
  }
}
</style>
