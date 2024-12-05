<template>
  <div>
    <h2>Heads</h2>
    The head is where the brain of your robot will reside. Heads have
    different capabilities so be sure to choose the one that fits your needs.
    <div v-for="(head, idx) in heads" :key="idx" class="container">
      <img :src="head.src" :alt="head.title" />
      <div class="text">
        <h4>{{head.title}}</h4>
        <div>{{head.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import parts from '@/data/parts';

export default {
  name: 'RobotHeads',
  data() {
    return { heads: parts.heads };
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
