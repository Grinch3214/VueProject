<template>
  <div class="col-xl-4">

    <div class="admins">
      <p class="text-uppercase">Фильтры
      </p>
    </div>

    <div class="card pl-1 pr-1">

      <filters-save-main />

      <p class=" h6 mt-1">От кого
      </p>
      <filters-company />

      <p class=" h6 mt-1">Кому
      </p>
      <filters-company />

      <filters-status-complaint />

      <filters-date />

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
import FiltersSaveMain from './filtersComponents/FiltersSaveMain.vue'
import FiltersCompany from './filtersComponents/FiltersCompany.vue'
import FiltersStatusComplaint from './filtersComponents/FiltersStatusComplaint.vue'
import FiltersDate from './filtersComponents/FiltersDate.vue'

export default {
  components: {
    BButton,
    FiltersSaveMain,
    FiltersCompany,
    FiltersStatusComplaint,
    FiltersDate,
  },
  directives: {
    Ripple,
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
