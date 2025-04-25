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
    zoom: {
      enabled: false, // Disable zooming
    },
    toolbar: {
      show: false, // Hide the toolbar to prevent zoom/pan controls
    },
  },
  colors: ['#2483B3', '#04B2B3'],
  stroke: {
    width: [0, 1.5],
  },
  title: { 
    text: 'Visitors & Sales per hour',
    style: {
      fontSize: '12px', // Title font size
      fontWeight: 'bold', // Title font weight
      // fontFamily: 'Verdana, sans-serif', // Title font family
      color: '#333', // Title font color
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 3.5,
    shape: 'circle',
    fillOpacity: 1,
    colors: 'white',
    strokeColors: '#04B2B3',
    strokeWidth: 1.5,
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
  xaxis: {
    labels: {
      show: true, // Set to false if you also want to hide labels
    },
    axisTicks: {
      show: false, // Hides the tick marks on the x-axis
    },
    axisBorder: {
      show: true, // Set to false if you want to hide the axis line
    },
  },
  yaxis: [
    {
      title: {
        // text: 'Visitors',
      },
    },
    {
      opposite: true,
      title: {
        // text: 'Sales',
      },
      labels: {
        formatter: function (value) {
          // Custom static values for the right-side y-axis
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
