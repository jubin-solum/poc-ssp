<template>
    <GridLayout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <GridItem
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <div class="widget">
          {{ item.i }}
        </div>
      </GridItem>
    </GridLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { GridLayout, GridItem } from 'vue-grid-layout-v3';
  
  const layout = ref([
    { x: 0, y: 0, w: 4, h: 2, i: '0' },
    { x: 4, y: 0, w: 4, h: 2, i: '1' },
    { x: 8, y: 0, w: 4, h: 2, i: '2' },
  ]);
  </script>
  
  <style>
  .widget {
    background: #2483B3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  </style>
  