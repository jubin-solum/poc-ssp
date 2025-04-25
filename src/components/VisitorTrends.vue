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
    type: 'line',
    data: [ 200, 250, 160, 240, 200, ],
  },
  {
    name: 'Sales',
    type: 'line',
    data: [220, 190, 270, 220, 219, ],
  },
]);

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ['#2483B3', '#04B2B3'],
  stroke: {
    width: 2,
    curve: 'smooth',
  },
  title: {
    text: 'Visitors Trend',
    style: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#333',
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 3.5,
    shape: 'circle',
    fillOpacity: 1,
    colors: ['white'],
    strokeColors: '#04B2B3',
    strokeWidth: 1.5,
  },
  labels: [
    'Mar 24(M)', 'Mar 25(T)', 'Jun 2(M)', 'Jun 4(W)', 'Aug 2(M)',
  ],
  xaxis: {
    labels: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: true,
    },
  },
  yaxis: [
    {
      title: {
        text: 'Visitors',
      },
      opposite: true, // Move 'Visitors' axis to the right
    },
    {
      title: {
        text: 'Sales',
      },
      opposite: false, // Move 'Sales' axis to the left
      labels: {
        formatter: function (value) {
          const customValues = {
            0: '0',
            50: '2k',
            100: '3k',
            150: '5k',
            200: '6k',
            250: '7k',
            300: '8k',
            350: '9k',
            400: '10k',
            450: '11k',
            500: '12k',
          };
          return customValues[value] || value;
        },
      },
    },
  ],
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    markers: {
      width: 12,
      height: 12,
      radius: 0,
    },
    itemMargin: {
      horizontal: 10,
      vertical: 5,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
});

</script>
