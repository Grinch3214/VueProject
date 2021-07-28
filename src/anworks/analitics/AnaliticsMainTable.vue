<template>
  <div>
    <b-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"

      responsive
      :items="items"
      :fields="fields"
    >

      <template #head(id)>
        <div class="text-nowrap">
          Row ID
        </div>
      </template>

      <template #head()="scope">
        <div class="text-nowrap">
          {{ scope.label }}
        </div>
      </template>

      <template #cell(avatar)="data">
        <b-avatar
          class="mr-1"
          :src="data.value"
        />
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>

      <template #cell()="data">
        <span class="text-nowrap">{{ data.value }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import {
  BTable, BAvatar, BBadge,
} from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BAvatar,
    BBadge,
  },
  data() {
    return {
      stickyHeader: false,
      noCollapse: true,
      fields: [
        {
          key: 'id', stickyColumn: true, isRowHeader: true, variant: 'primary',
        },
        {
          key: 'avatar', label: 'Avatar',
        },
        'full_name',
        { key: 'post', stickyColumn: true, variant: 'info' },
        'email',
        'city',
        'start_date',
        'salary',
        'age',
        'experience',
        { key: 'status', label: 'Status' },
      ],
      items: [
        {
          id: 1,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/10-small.png'),
          full_name: "Korrie O'Crevy",
          post: 'Титушка',
          email: '',
          city: 'Krasnosilka',
          start_date: '09/23/2016',
          salary: '$23896.35',
          age: '61',
          experience: '1 Year',
          status: 2,
          _cellVariants: { post: 'warning', email: 'color' },
        },
        {
          id: 2,
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/1-small.png'),
          full_name: 'Bailie Coulman',
          post: 'VP Quality Control',
          email: 'bcoulman1@yolasite.com',
          city: 'Hinigaran',
          start_date: '05/20/2018',
          salary: '$13633.69',
          age: '63',
          experience: '3 Years',
          status: 2,
        },
      ],
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
    }
  },
}
</script>

<style lang="scss">
  ::-webkit-scrollbar {
    width: 16px; /* ширина для вертикального скролла */
    height: 4px; /* высота для горизонтального скролла */
    background-color: #143861;
    border-radius: 9em;
}
::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
}
.table-color {
  background: gray;
}
</style>
