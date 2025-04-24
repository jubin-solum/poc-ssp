<template>
  <v-container fluid class="ma-4 pa-2">
    <v-row>
      <v-col class="pa-0 pb-2">
        <div>
          <span class="text-caption font-weight-black">Daily Sales</span>
        </div>
      </v-col>
    </v-row>

    <v-row class="ga-4">
      <v-col class="pa-0">
        <div>
          <span class="text-caption">March 25(Tue)</span>
        </div>
        <div>
          <span class="text-h4">27899</span>
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="border-left-custom pa-0">
        <div>
          <span class="text-caption">This Week</span>
        </div>
        <div>
          <span class="text-h4">22899</span>
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="border-left-custom pa-0">
        <div>
          <span class="text-caption">Last Week(Tue)</span>
        </div>
        <div>
          <span class="text-h4">23899</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.border-left-custom {
  border-left: 1px solid var(--v-theme-secondary) !important;
}
</style>
