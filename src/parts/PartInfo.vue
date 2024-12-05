<template>
  <div class="part-info">
    <div class="part-image">
      <img
        :src="part.src"
        :title="part.title"
        :alt="part.title"
      />
    </div>
    <div class="part-details">
      <h2>{{ part.title }} ({{ part.type }})</h2>
      <p>{{ part.description }}</p>
      <p>
        {{ part.onSale ? '🔥' : '' }}
        ${{ part.cost.toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<script>
import parts from '@/data/parts';

export default {
  name: 'PartInfo',
  props: {
    partType: {
      type: String,
      required: true,
    },
    id: {
      type: [Number, String],
      required: true,
      validator: (v) => !Number.isNaN(+v),
    },
  },
  computed: {
    part() {
      const { id, partType } = this;
      return parts[partType].find((p) => p.id === +id);
    },
  },
};
</script>

<style lang="scss" scoped>
.part-info {
  display: flex;
  justify-content: space-around;
  margin: 0 1.25rem;
  img {
    border-radius: 0.5rem;
    height: 12.5rem;
    width: 12.5rem;
  }
}
</style>
