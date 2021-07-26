<template>
  <div>

    <b-form-group class="col-sm-12 col-md-6 col-lg-3 mb-3">
      <h5>Диапазон дат</h5>
      <flat-pickr
        v-model="rangeDate"
        class="form-control"
        :config="{ mode: 'range', dateFormat: 'd.m.Y' }"
      />
    </b-form-group>

    <analitics-main-table />

  </div>
</template>

<script>
import { BFormGroup } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import AnaliticsMainTable from '@/anworks/analitics/AnaliticsMainTable.vue'

export default {
  components: {
    flatPickr,
    BFormGroup,
    AnaliticsMainTable,
  },
  data() {
    return {
      rangeDate: null,
      allowInput: true,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
</style>
