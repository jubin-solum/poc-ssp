<template>
  <div>
    <v-container fluid class="ma-4 pa-2">
    <v-row>
      <v-col class="pa-0 pb-2">
        <div>
          <span class="text-caption font-weight-black">Visitor Trends</span>
        </div>
      </v-col>
    </v-row>

    <v-row class="ga-4">
      <v-col class="pa-0">
        <div class="chart-wrapper">
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

// Realistic Data for the mixed chart (bar + line)
const chartData = {
  labels: [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ],
  datasets: [
    {
      type: "bar",
      label: "Visitors",
      backgroundColor: "#2483B3",
      data: [
        120, 145, 180, 220, 290, 150, 299, 100, 70, 200, 250, 200, 150, 80,
      ], // Visitors increasing through the day
      borderRadius: 0,
      barThickness: 10,
    },
    {
      type: "line",
      label: "Sales",
      borderColor: "#04B2B3",
      borderWidth: 2,
      fill: false,
      borderWidth: 1.3,
      data: [30, 70, 110, 160, 230, 300, 150, 100, 50, 150, 100, 140, 230, 190], // Sales tend to increase with visitors
    },
  ],
};

const chartOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // Removes vertical grid lines
      },
    },
    y: {
      grid: {
        display: true, // Horizontal grid lines remain visible
      },
      ticks: {
        // Optional: Adjusting ticks to make the chart look better
        stepSize: 200,
        max: 1200,
      },
    },
  },
  plugins: {
    // legend: {
    //   position: 'top',
    // },
    legend: {
      position: "top",
      align: "end", // ← aligns legend to the right side
      labels: {
        boxWidth: 14, // Optional: size of the colored box
        padding: 10, // Optional: spacing between items
      },
    },
    title: {
      display: false,
      text: "Visitors vs Sales",
      align: "end",
    },
  },
};
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  max-width: 100%;
  height: auto;
  position: relative;
}
.border-left-custom {
  border-left: 1px solid var(--v-theme-secondary) !important;
}
</style>
