<template>
  <div>
    <h2>Bases</h2>
    The Base is critical to the mobility of your robot. Be
    sure to choose a base that will work well with the terrain
    where your robot needs to operate.
    <div v-for="(base, idx) in parts.bases" :key="idx" class="container">
      <img :src="base.src" :alt="base.title" />
      <div class="text">
        <h4>{{base.title}}</h4>
        <div>{{base.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from '@/parts/get-parts-mixin';

export default {
  name: 'RobotBases',
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
