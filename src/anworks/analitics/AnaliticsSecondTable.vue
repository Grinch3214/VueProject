<template>
  <div class="card p-2">
    <b-table-simple
      hover
      caption-top
      responsive
      outlined
    >
      <caption>Test table:</caption>
      <colgroup><col><col></colgroup>
      <colgroup><col><col><col></colgroup>
      <colgroup><col><col></colgroup>
      <b-thead class="text-white">
        <b-tr>
          <b-th colspan="3" class="an-purple align-middle text-nowrap">Direct Marketing</b-th>
          <b-th class="an-purple align-middle">Источник перехода, чел/мес</b-th>
          <b-th colspan="2" class="an-purple align-middle text-nowrap">Первая конверсия</b-th>
          <b-th class="an-purple align-middle">Резюме</b-th>
          <b-th class="an-purple align-middle">Тесты по технологиям, чел</b-th>
          <b-th class="an-purple align-middle">Тесты по иностранному языку, чел</b-th>
          <b-th class="an-purple align-middle">Рейтинг</b-th>
          <b-th class="an-purple align-middle text-nowrap">Продление участия</b-th>
          <b-th class="an-purple align-middle">Колличество собеседований с рекрутерами</b-th>
          <b-th class="an-purple align-middle">Колличество собеседований с тех. лидами</b-th>
          <b-th class="an-purple align-middle">Нанято</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr class="text-center">
          <b-td class="text-nowrap">
            Прямые переходы
          </b-td>
          <b-td>Прямые переходы на https://an.works/</b-td>
          <b-td>120</b-td>
          <b-td></b-td>
          <b-td variant="success">
            Регистрации
          </b-td>
          <b-td variant="success">400</b-td>
          <b-td>23</b-td>
          <b-td>23</b-td>
          <b-td>23</b-td>
          <b-td>23</b-td>
          <b-td>23</b-td>
          <b-td>23</b-td>
          <b-td>23</b-td>
          <b-td>23</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-center">
            Gent
          </b-th>
          <b-td>46</b-td>
          <b-td variant="warning">
            18
          </b-td>
          <b-td>50</b-td>
          <b-td>61</b-td>
          <b-td variant="danger">
            15
          </b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-center">
            Brussels
          </b-th>
          <b-td>51</b-td>
          <b-td>27</b-td>
          <b-td>38</b-td>
          <b-td>69</b-td>
          <b-td>28</b-td>
        </b-tr>
        <b-tr>
          <b-th rowspan="2">
            The Netherlands
          </b-th>
          <b-th class="text-right">
            Amsterdam
          </b-th>
          <b-td variant="success">
            89
          </b-td>
          <b-td>34</b-td>
          <b-td>69</b-td>
          <b-td>85</b-td>
          <b-td>38</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-right">
            Utrecht
          </b-th>
          <b-td>80</b-td>
          <b-td variant="danger">
            12
          </b-td>
          <b-td>43</b-td>
          <b-td>36</b-td>
          <b-td variant="warning">
            19
          </b-td>
        </b-tr>
      </b-tbody>
      <!-- <b-tfoot>
        <b-tr>
          <b-td
            colspan="7"
            variant="secondary"
            class="text-right"
          >
            Total Rows: <b>5</b>
          </b-td>
        </b-tr>
      </b-tfoot> -->
    </b-table-simple>
  </div>
</template>

<script>
import {
  BTableSimple, BThead, BTr, BTh, BTd, BTbody,
} from 'bootstrap-vue'

export default {
  components: {
    BTableSimple,
    BThead,
    BTr,
    BTh,
    BTd,
    BTbody,
    // BTfoot,
  },
}
</script>

<style lang="scss">
  .table:not(.table-dark):not(.table-light) thead:not(.thead-dark) .an-purple,
  .table:not(.table-dark):not(.table-light) tfoot:not(.thead-dark) .an-purple {
    background-color: #5E5873;
  }
</style>
