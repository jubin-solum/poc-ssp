<template>
  <div class="ma-4">
    <v-container fluid class="border border-error ma-0 text-left">
      <v-row class="ga-4">
        <!-- Head section -->
        <v-col cols="12" class="pa-2 border text-center">Date section</v-col>

        <!-- Main section title -->
        <v-col cols="12" class="border pa-2">
          <DeviceInstallOverview />
        </v-col>

        <!-- Grid Items -->
        <v-col cols="12">
          <v-row class="ga-4 mb-4">
            <v-col class="border pa-0">
              <DailyVisitors />
            </v-col>
            <v-col class="border pa-0">
              <DailySales />
            </v-col>
          </v-row>
          <v-row  class=" mb-4">
             
              <v-col col="6" class="border pa-2"> <VisitorTrends /> </v-col
            > 
              <v-col cols="6" class="border pa-2"> <VisitorsSales /></v-col
            > 
          </v-row>

          <v-row class="ga-4 mb-4">
            <v-col class="border py-2 px-3">
              Top 5 daily visitors by department
            </v-col>
            <v-col class="border py-2 px-3">Label Usage Status</v-col>
          </v-row>
          <v-row class="ga-4 mb-4">
            <v-col class="border py-2 px-3">Label Update</v-col>
            <v-col class="border py-2 px-3">In Use Label Health Check</v-col>
          </v-row>
          <v-row class="ga-4 mb-4">
            <v-col class="border py-2 px-3">Device Connection Status</v-col>
            <v-col class="py-2 px-3"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
