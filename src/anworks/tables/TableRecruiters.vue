<template>
  <div class="col-xl-8">
    <div class="admins">
      <p class="text-uppercase">Рекрутеры
      </p>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        class="admins__btn"
        variant="flat-primary"
      >
        Добавить
      </b-button>
    </div>

    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :rtl="direction"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true,
        selectionInfoClass: 'custom-control-primary',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true,
        selectAllByGroup: true,
      }"
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
      class="card bg-white p-2"
      @on-selected-rows-change="selectionChanged"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >

        <!-- Column: Name -->
        <div
          v-if="props.column.field === 'fullName'"
          class="text-nowrap pointer"
          @click="$router.push('/recruiter-card?id='+props.row.id)"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </div>

        <!-- Column: Activity -->
        <span v-else-if="props.column.field === 'activity'">
          <b-badge :variant="activityVariant(props.row.activity)">
            {{ activityText(props.row.activity) }}
          </b-badge>
        </span>

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">
          <span>
            <b-button
              v-ripple.400="'rgba(40, 199, 111, 0.15)'"
              variant="flat"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                icon="ThumbsDownIcon"
                size="18"
              />
            </b-button>
          </span>
        </span>

        <!-- Column: Common -->
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!-- pagination -->
      <template
        slot="pagination-bottom"
        slot-scope="props"
      >
        <div class="choice">
          <div class="choice__delete">
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="flat-secondary"
              class="btn-icon rounded-circle"
            >
              <feather-icon
                icon="XIcon"
                size="30"
              />
            </b-button>
            <p class="choice__numbers">
              Выбрано: <span> {{ selectedRows.length }} </span></p>
          </div>
          <!-- buttons -->
          <div class="admin-btn">
            <b-dropdown
              id="dropdown-admins"
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              text="Удалить"
              variant="outline-secondary"
            >
              <b-dropdown-item>Действие</b-dropdown-item>
              <b-dropdown-item>Просмотреть</b-dropdown-item>
            </b-dropdown>
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-secondary"
              class="admin-btn__button ml-1"
            >
              Применить
            </b-button>
          </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              Showing 1 to
            </span>
            <b-form-select
              v-model="pageLength"
              :options="['3','5','7','10']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap "> of {{ props.total }} entries </span>
          </div>
          <div>
            <b-pagination
              :value="1"
              :total-rows="props.total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              prev-class="prev-item"
              next-class="next-item"
              class="mt-1 mb-0"
              @input="(value)=>props.pageChanged({currentPage:value})"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import {
  BAvatar, BBadge, BPagination, BFormSelect, BDropdown, BDropdownItem, BButton,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selectedRows: [],
      pageLength: 3,
      dir: false,
      columns: [
        {
          label: 'Рекрутер, ID',
          field: 'fullName',
          filterOptions: {
            styleClass: 'form-control',
            enabled: true,
            placeholder: 'Имя рекрутера',
          },
        },
        {
          label: 'Дата регистрации',
          field: 'date',
          filterOptions: {
            enabled: true,
            placeholder: 'Дата',
          },
        },
        {
          label: 'Компания',
          field: 'company',
          filterOptions: {
            enabled: true,
            placeholder: 'Компания',
          },
        },
        {
          label: 'Лимит трат',
          field: 'spend',
          filterOptions: {
            enabled: true,
            placeholder: 'Лимит',
            filterDropdownItems: ['100', '200', '300', '400', '500'],
          },
        },
        {
          label: 'Активность',
          field: 'activity',
          filterOptions: {
            enabled: true,
            placeholder: 'Активность',
            filterDropdownItems: [
              { value: 1, text: 'Активен' },
              { value: 2, text: 'Заблокирован' },
            ],
          },
        },
        {
          label: 'Жалобы',
          field: 'action',
        },
      ],
      rows: [],
      searchTerm: '',
    }
  },
  computed: {
    activityVariant() {
      const activityColor = {
        /* eslint-disable key-spacing */
        1: 'light-success',
        2: 'light-danger',
        /* eslint-enable key-spacing */
      }

      return activity => activityColor[activity]
    },
    activityText() {
      const activityText = {
        /* eslint-disable key-spacing */
        1: 'Активный',
        2: 'Заблокирован',
        /* eslint-enable key-spacing */
      }

      return activity => activityText[activity]
    },

    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    this.$http.get('/assets/recruiter-users.json')
      .then(res => { this.rows = res.data })
  },
  methods: {
    selectionChanged(event) {
      this.selectedRows = event.selectedRows
    },
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-good-table.scss';
</style>

<style lang="scss">
  .admins{
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 0 20px;
    align-items: center;
    color: #fff;
    background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7));
    box-shadow: 0px 0px 6px 1px rgb(115 103 240 / 60%);
    p{
      margin: 12px 0;
    }
}
  .admins__btn{
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    color: #fff;
    &::before{
      content: '';
      position: absolute;
      top: 6px;
      left: 0;
      width: 12px;
      height: 12px;
      background: transparent;
      border-bottom: 2px solid #fff;
    }
    &::after{
      content: '';
      position: absolute;
      top: 11px;
      left: -5px;
      width: 12px;
      height: 12px;
      background: transparent;
      border-right: 2px solid #fff;
    }
    &:hover, &:focus{
      color: #fff;
    }
  }
  .pointer{
    cursor: pointer;
  }
</style>

<style scoped lang="scss">
  .choice{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__numbers{
      display: inline-block;
      padding: 0 0 0 10px;
    }
  }
  .admin-btn{
    margin-top: 20px;
    text-align: right;
  }
  .admin-btn__button{
    margin-right: 15px;
  }
  .btn-flat-secondary:hover:not(.disabled):not(:disabled) {
    background-color: unset;
  }
  .btn-flat-secondary:active,
  .btn-flat-secondary.active,
  .btn-flat-secondary:focus {
    background-color: unset;
  }
    @media screen and (max-width: 425px) {
    .choice {
      display: block;
    }
    .admin-btn {
      text-align: center;
      margin-bottom: 15px;
    }
  }
</style>
