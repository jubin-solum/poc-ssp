<template>
  <apexchart
    height="350"
    type="line"
    :options="chartOptions"
    :series="series"
  />
</template>

<script setup>
import { ref } from 'vue';

const series = ref([
  {
    name: 'Visitors',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
  },
  {
    name: 'Sales',
    type: 'line',
    data: [
      120, 145, 180, 220, 290, 150, 299, 100, 70, 200, 250, 200, 150, 80,
    ],
  },
]);

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
  },
  colors: ['#2483B3', '#04B2B3'],
  stroke: {
    width: [0, 1.5],
  },
  title: {
    text: 'Traffic Sources',
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    shape: 'circle',
    fillOpacity: 0,
    strokeColors: '#04B2B3',
    strokeWidth: 1,
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
    },
  },
  labels: [
    '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
  ],
  yaxis: [
    {
      title: {
        text: 'Visitors',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales',
      },
    },
  ],
  legend: {
  position: 'top',
  horizontalAlign: 'right',
  markers: {
    width: 12,
    height: 12,
    radius: 2,
  },
  itemMargin: {
    horizontal: 10,
    vertical: 5,
  },
  onItemClick: {
    toggleDataSeries: true, // enables checkbox-like toggling
  },
  onItemHover: {
    highlightDataSeries: true,
  },
},

});

// const chartOptions = ref({
//   chart: {
//     height: 350,
//     type: 'line',
//   },
//   colors: ['#2483B3', '#04B2B3'], // Red for bars, Green for line
//   stroke: {
//     width: [0, 1.5],
//   },
//   title: {
//     text: 'Traffic Sources',
//   },
//   dataLabels: {
//     enabled: false, // Disable data labels
//   },
//   markers: {
//     size: 4, // Marker size
//     shape: 'circle', // Marker shape
//     fillOpacity: 0, // Make markers hollow
//     strokeColors: '#04B2B3', // Border color of markers (green)
//     strokeWidth: 1, // Border width of markers
//   },
//   plotOptions: {
//     bar: {
//       columnWidth: '40%', // Adjust bar width
//     },
//   },
//   labels: [
//     '9:00',
//     '10:00',
//     '11:00',
//     '12:00',
//     '13:00',
//     '14:00',
//     '15:00',
//     '16:00',
//     '17:00',
//     '18:00',
//     '19:00',
//     '20:00',
//     '21:00',
//     '22:00',
//   ],
//   yaxis: [
//     {
//       title: {
//         text: 'Visitors',
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: 'Sales',
//       },
//     },
//   ],
// });
</script>
