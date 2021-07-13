<template>
  <div class="col-xl-4">

    <div class="admins">
      <p class="text-uppercase">Фильтры
      </p>
    </div>

    <div class="card pl-1 pr-1">

      <filters-activity />

      <filters-employers-name />

      <div class="text-center mb-3 mt-2">
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
import FiltersActivity from './filtersComponents/FiltersActivity.vue'
import FiltersEmployersName from './filtersComponents/FiltersEmployersName.vue'

export default {
  components: {
    BButton,
    FiltersActivity,
    FiltersEmployersName,
  },
  directives: {
    Ripple,
  },
}
</script>

<style lang="scss">

</style>
