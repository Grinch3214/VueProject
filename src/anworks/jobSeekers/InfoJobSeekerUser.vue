<template>
  <div>
    <b-form
      class="mt-3"
      @submit.prevent
    >
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Имя"
            label-for="mcFirstName"
          >
            <b-form-input
              id="mcFirstName"
              v-model="userInfo.mcFirstName"
              placeholder="mcFirstName"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group
            label="Дата рождения"
            label-for="mc-date"
          >
            <b-form-input
              id="mc-date"
              v-model="userInfo.dop"
              placeholder="dop"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
        >
          <b-form-group
            label="ID пользователя"
            label-for="idUser"
          >
            <b-form-input
              id="idUser"
              v-model="userInfo.idUser"
              placeholder="idUser"
              disabled
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group
            label="Дата регистрации"
            label-for="startDate"
          >
            <b-form-input
              id="startDate"
              v-model="userInfo.startDate"
              placeholder="startDate"
            />
          </b-form-group>
        </b-col>

        <b-col cols="4">
          <b-form-group>
            <p>Пол</p>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="A"
              class="d-inline-block mr-2"
            >
              Мужской
            </b-form-radio>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="B"
              class="d-inline-block mr-2"
            >
              Женский
            </b-form-radio>
            <b-form-radio
              v-model="Selected"
              name="gender-user"
              value="С"
              class="d-inline-block mr-2"
            >
              Другой
            </b-form-radio>
          </b-form-group>
        </b-col>

        <b-col
          cols="4"
          offset-md="1"
        >
          <b-form-group>
            <p>Активность</p>
            <b-form-radio
              v-model="Selected1"
              name="activity-user"
              value="true-user-activity"
              class="d-inline-block mr-2"
            >
              Активен
            </b-form-radio>
            <b-form-radio
              v-model="Selected1"
              name="activity-user"
              value="false-user-activity"
              class="d-inline-block"
            >
              Неактивен
            </b-form-radio>
          </b-form-group>
        </b-col>

      </b-row>

      <b-row>
        <b-col md="4">
          <span class="input__text">Навыки
          </span>
          <b-form-group>
            <v-select
              v-model="mainSkill"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="skillOption"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="4"
          offset-md="1"
        >
          <b-form-group>
            <span class="input__text">Статус</span>
            <v-select
              v-model="selectedStatus"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="optionStatus"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
        >
          <span class="input__text">Дополнительные навыки
          </span>
          <b-form-group>
            <v-select
              v-model="secondSkill"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="secondSkillOption"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
          offset-md="1"
        >
          <span class="input__text">Канал Привлечения
          </span>
          <b-form-group>
            <v-select
              v-model="attraction"
              placeholder="Способ привлечения"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="attractionOption"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="4"
        >
          <b-form-group>
            <span class="input__text">Уровень</span>
            <v-select
              v-model="selectedLevel"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="optionLevel"
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormRadio, BForm,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BForm,
    vSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      Selected: 'B',

      Selected1: 'true-user-activity',

      selectedStatus: { title: 'В рейтинге' },
      optionStatus: [{ title: 'Нейтрален' }, { title: 'Ожидает' }, { title: 'В рейтинге' }, { title: 'Создан' }, { title: 'Верифицирован' }],

      attraction: { title: 'Instagram' },
      attractionOption: [{ title: 'Instagram' }, { title: 'Google' }, { title: 'Linkedin' }, { title: 'An.Works' }, { title: 'Telegram' }],

      mainSkill: [{ title: 'JavaScript' }, { title: 'HTML' }, { title: 'CSS' }],
      skillOption: [{ title: 'JavaScript' }, { title: 'HTML' }, { title: 'CSS' }, { title: 'Java' }, { title: 'C++' }, { title: 'Pyton' }, { title: 'PHP' }],

      secondSkill: [{ title: 'Vue.js' }, { title: 'jQuery' }],
      secondSkillOption: [{ title: 'Angular' }, { title: 'Vue.js' }, { title: 'React' }, { title: 'jQuery' }, { title: 'Backbone.js' }, { title: 'Node.js' }, { title: 'Ember.js' }, { title: 'Meteor' }, { title: 'Polymer' }],

      selectedLevel: { title: 'Junior' },
      optionLevel: [{ title: 'Trainee' }, { title: 'Junior' }, { title: 'Middle' }, { title: 'Senior' }],
    }
  },
  setup() {
    const userInfo = ref({
      mcFirstName: 'Мария Иванова',
      dop: '1997.08.06',
      idUser: '1654997654567',
      startDate: '2021.05.12',
    })
    return {
      userInfo,
    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
</style>

<style lang="scss" scoped>
    .input__text{
        color: #5e5873;
        font-size: 0.857rem;
        margin-bottom: 0.2857rem;
        display: block;
    }
</style>
