<template>
  <div class="col-xl-4">

    <div
      class="admins pointer"
      @click="isActive = !isActive"
    >
      <p class="text-uppercase pointer">Фильтры
      </p>
    </div>

    <div
      class="card pl-1 pr-1 toggle__filters"
      :class="{active: isActive}"
    >

      <filters-save-main />

      <filters-skills />

      <filters-language />

      <filters-payment />

      <filters-busyness />

      <filters-country />

      <filters-experience />

      <filters-education />

      <filters-second-education />

      <filters-age />

      <filters-activity />

      <filters-status />

      <filters-channel-attraction />

      <div class="text-center pb-3">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
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
import FiltersSkills from './filtersComponents/FiltersSkills.vue'
import FiltersLanguage from './filtersComponents/FiltersLanguage.vue'
import FiltersPayment from './filtersComponents/FiltersPayment.vue'
import FiltersBusyness from './filtersComponents/FiltersBusyness.vue'
import FiltersCountry from './filtersComponents/FiltersCountry.vue'
import FiltersExperience from './filtersComponents/FiltersExperience.vue'
import FiltersEducation from './filtersComponents/FiltersEducation.vue'
import FiltersSecondEducation from './filtersComponents/FiltersSecondEducation.vue'
import FiltersAge from './filtersComponents/FiltersAge.vue'
import FiltersActivity from './filtersComponents/FiltersActivity.vue'
import FiltersStatus from './filtersComponents/FiltersStatus.vue'
import FiltersChannelAttraction from './filtersComponents/FiltersChannelAttraction.vue'

export default {
  components: {
    FiltersSaveMain,
    FiltersSkills,
    FiltersLanguage,
    FiltersPayment,
    FiltersBusyness,
    FiltersCountry,
    FiltersExperience,
    FiltersEducation,
    FiltersSecondEducation,
    FiltersAge,
    FiltersActivity,
    FiltersStatus,
    FiltersChannelAttraction,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

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
  .toggle__filters {
    display: block;
  }
  .toggle__filters.active {
    display: none;
  }
  .pointer{
    cursor: pointer;
  }
</style>
