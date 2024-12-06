<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in parts.arms" :key="idx" class="container">
      <img :src="arm.src" :alt="arm.title" />
      <div class="text">
        <h4>{{arm.title}}</h4>
        <div>{{arm.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from '@/parts/get-parts-mixin';

export default {
  name: 'RobotArms',
  mixins: [getPartsMixin],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin: 1rem 0;
  justify-content: left;
  img {
    border-radius: 0.5rem;
    height: 6.25rem;
    width: 6.25rem;
  }
  .text {
    margin-left: 1rem;
  }
}
</style>
