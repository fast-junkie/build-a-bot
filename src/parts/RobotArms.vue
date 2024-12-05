<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in arms" :key="idx" class="container">
      <img :src="arm.src" :alt="arm.title" />
      <div class="text">
        <h4>{{arm.title}}</h4>
        <div>{{arm.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import parts from '@/data/parts';

export default {
  name: 'RobotArms',
  data() {
    return { arms: parts.arms };
  },
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
