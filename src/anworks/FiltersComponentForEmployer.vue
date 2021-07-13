<template>
  <div class="col-xl-4">

    <div class="admins">
      <p class="text-uppercase">Фильтры
      </p>
    </div>

    <div class="card pl-1 pr-1">

      <filters-save-main />

      <filters-number-of-staff />

      <filters-country-for-employer />

      <filters-status />

      <filters-activity />

      <filters-year-of-foundation />

      <filters-channel-attraction />

      <div class="text-center mb-3">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          type="reset"
        >
          <feather-icon
            icon="PieChartIcon"
            class="mr-50"
          />
          <span class="align-middle">Очистить всё</span>
        </b-button>
      </div>

    </div>

  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import FiltersSaveMain from './filtersComponents/FiltersSaveMain.vue'
import FiltersNumberOfStaff from './filtersComponents/FiltersNumberOfStaff.vue'
import FiltersCountryForEmployer from './filtersComponents/FiltersCountryForEmployer.vue'
import FiltersStatus from './filtersComponents/FiltersStatus.vue'
import FiltersActivity from './filtersComponents/FiltersActivity.vue'
import FiltersYearOfFoundation from './filtersComponents/FiltersYearOfFoundation.vue'
import FiltersChannelAttraction from './filtersComponents/FiltersChannelAttraction.vue'

export default {
  components: {
    FiltersSaveMain,
    BButton,
    FiltersNumberOfStaff,
    FiltersCountryForEmployer,
    FiltersStatus,
    FiltersActivity,
    FiltersYearOfFoundation,
    FiltersChannelAttraction,
  },
  directives: {
    Ripple,
  },
}
</script>

<style lang="scss">

</style>
