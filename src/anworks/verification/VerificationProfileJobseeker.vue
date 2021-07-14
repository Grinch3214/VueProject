<template>
  <div>
    <b-card>
      <p class="h4 mb-2">
        Профиль соискателя</p>
      <p class="h5">{{ profileInfo.fullName }}</p>
      <avatar-selector />
      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Дата регистрации:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="dateRegister"
            class="mb-0"
          >
            <b-form-input
              id="dateRegister"
              v-model="profileInfo.dateRegister"
              placeholder="Дата"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Почта:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="postInput"
            class="mb-0"
          >
            <b-form-input
              id="postInput"
              v-model="profileInfo.postInput"
              placeholder="Почта"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Имя и фамилия:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="fullName"
            class="mb-0"
          >
            <b-form-input
              id="fullName"
              v-model="profileInfo.fullName"
              placeholder="Имя"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Пол:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group>
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
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Дата рождения:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group>
            <flat-pickr
              v-model="dateDefault"
              class="form-control"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Основной телефон:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="mainPhone"
            class="mb-0"
          >
            <b-form-input
              id="mainPhone"
              v-model="profileInfo.mainPhone"
              placeholder="Телефон"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Доп. телефон:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="secondPhone"
            class="mb-0"
          >
            <b-form-input
              id="secondPhone"
              v-model="profileInfo.secondPhone"
              placeholder="Доп. телефон"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Telegram:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="telegram"
            class="mb-0"
          >
            <b-form-input
              id="telegram"
              v-model="profileInfo.telegram"
              placeholder="@nickname"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Viber:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="viber"
            class="mb-0"
          >
            <b-form-input
              id="viber"
              v-model="profileInfo.viber"
              placeholder="Номер телефона"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Skype:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="skype"
            class="mb-0"
          >
            <b-form-input
              id="skype"
              v-model="profileInfo.skype"
              placeholder="nickname"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Должность:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="position"
            class="mb-0"
          >
            <b-form-input
              id="position"
              v-model="profileInfo.position"
              placeholder="Должность"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Страна:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-select
            v-model="country"
            :options="countryOptions"
            size="md"
            class="mt-1"
          />
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Главный офис:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group>
            <v-select
              v-model="city"
              multiple
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="title"
              :options="cityOption"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Год основания:
        </div>
        <div class="col-sm-12 col-md-4">
          <b-form-group
            label-for="yearInput"
            class="mb-0"
          >
            <b-form-input
              id="yearInput"
              v-model="profileInfo.yearInput"
              placeholder="Почта"
              class="w-100"
            />
          </b-form-group>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2">
        <div class="col-sm-12 col-md-3 h5">
          Количество персонала:
        </div>
        <div class="col-sm-12 col-md-4">
          <vue-slider
            v-model="staff"
            :direction="direction"
            :min="min"
            :max="max"
          />
          <span>От {{ staff[0] }} до {{ staff[1] }}
          </span>
        </div>
      </div>

      <div class="row align-items-center mt-2 mb-2 border-bottom pb-4">
        <div class="col-sm-12 col-md-3 h5">
          О работодателе:
        </div>
        <div class="col-sm-12 col-md-7">
          <b-form-textarea
            id="textarea-plaintext"
            :value="newText"
            rows="3"
          />
        </div>
      </div>

      <div class="mt-5 mb-2">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="mr-3"
        >
          Подтвердить работодателя
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="mr-3"
        >
          Заблокировать работодателя
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BFormInput, BFormGroup, BFormSelect, BFormTextarea, BButton, BFormRadio,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'
import Ripple from 'vue-ripple-directive'
import AvatarSelector from '../components/AvatarSelector.vue'

export default {
  components: {
    BCard,
    AvatarSelector,
    BFormGroup,
    BFormInput,
    BFormSelect,
    vSelect,
    VueSlider,
    BFormTextarea,
    BButton,
    BFormRadio,
    flatPickr,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      dateDefault: '1990.10.23',

      Selected: 'A',

      staff: [100, 500],
      min: 1,
      max: 1000,
      dir: 'ltr',

      country: null,
      countryOptions: [
        { text: 'Украина' },
        { text: 'Россия' },
      ],

      city: { title: 'Харьков' },
      cityOption: [{ title: 'Харьков' }, { title: 'Киев' }, { title: 'Львов' }, { title: 'Одесса' }, { title: 'Днепр' }, { title: 'Запорожье' }, { title: 'Кривой Рог' }, { title: 'Николаев' }, { title: 'Мариуполь' }, { title: 'Винница' }, { title: 'Херсон' }, { title: 'Чернигов' }, { title: 'Полтава' }, { title: 'Чекассы' }, { title: 'Хмельницкий' }, { title: 'Черновцы' }, { title: 'Житомир' }, { title: 'Сумы' }, { title: 'Ровно' }, { title: 'Ивано-Франковск' }, { title: 'Тернополь' }, { title: 'Луцк' }, { title: 'Ужгород' }],

      newText: 'EPAM Systems — американская ИТ-компания, основанная в 1993 году. Крупнейший мировой производитель заказного программного обеспечения, специалист по консалтингу, резидент Белорусского парка высоких технологий. Штаб-квартира компании расположена в Ньютауне, штат Пенсильвания, а её отделения представлены более чем в 30 странах мира.',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
  setup() {
    const profileInfo = ref({
      dateRegister: '17.06.2021',
      postInput: 'castomermail@mail.com',
      fullName: 'Иван Иванов',
      mainPhone: '+38 063 562 8743',
      secondPhone: '+38 063 562 8743',
      telegram: '@angryCat',
      viber: '+38 063 562 8743',
      skype: 'angryCat',
      position: 'Developer',
    })
    return {
      profileInfo,
    }
  },
}
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
    @import '@core/scss/vue/libs/vue-slider.scss';
    @import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>

<style lang="scss" scoped>
    [dir] .mt-1, [dir] .my-1 {
    margin-top: 0rem !important;
}
[dir] .form-group {
    margin-bottom: 0rem;
}
</style>
