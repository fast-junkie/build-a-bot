<template>
  <div :class="position" class="part">
    <img :src="selectedPart.src"
         :title="selectedPart.title"
         :alt="selectedPart.title"
         @click="showPartInfo()"
         @keydown.enter="showPartInfo()" />
    <button @click="selectPrevPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>
const getNextIndex = (currentIndex, length) => (currentIndex + 1) % length;
const getPrevIndex = (currentIndex, length) => (currentIndex - 1 + length) % length;

export default {
  props: {
    parts: {
      type: Array,
      required: true,
    },
    position: {
      type: String,
      required: true,
      validator: (v) => ['top', 'bottom', 'left', 'right', 'center'].includes(v),
    },
  },
  data() {
    return {
      selectedPartIndex: 0,
    };
  },
  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
  },
  created() {
    this.emitSelectedPart();
  },
  updated() {
    this.emitSelectedPart();
  },
  methods: {
    emitSelectedPart() {
      this.$emit('partSelected', this.selectedPart);
    },
    selectNextPart() {
      this.selectedPartIndex = getNextIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
    },
    selectPrevPart() {
      this.selectedPartIndex = getPrevIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
    },
    showPartInfo() {
      this.$router
        .push({
          name: 'Parts',
          params: {
            partType: this.selectedPart.type,
            id: this.selectedPart.id,
          },
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.part {
  border: 3px solid var(--fj-bg-20);
  height: 10.3125rem;
  position: relative;
  width: 10.3125rem;
  img {
    cursor: pointer;
    width: 10.3125rem;
  }
  .sale {
    background-color: var(--fj-red);
    border-radius: 0.1875rem;
    color: var(--fj-bg-0);
    padding: 0.1875rem;
    position: absolute;
    bottom: 0.3125rem;
    right: 0.3125rem;
  }
}
.prev-selector, .next-selector {
  border: none;
  background-color: var(--fj-bg-20);
  cursor: pointer;
  padding: 0.38rem;
  position: absolute;
  top: 73px;
  z-index: 1;
}
.prev-selector:hover, .next-selector:hover {
  background-color: var(--fj-bg-40);
}
.prev-selector {
  border-top-left-radius: var(--fj-b-radius);
  border-bottom-left-radius: var(--fj-b-radius);
  left: -28px;
}
.next-selector {
  border-top-right-radius: var(--fj-b-radius);
  border-bottom-right-radius: var(--fj-b-radius);
  right: -28px;
}
.top .prev-selector, .bottom .prev-selector, .center .prev-selector {
  &:after {
    content: '\25C4'
  }
}
.top .next-selector, .bottom .next-selector, .center .next-selector {
  &:after {
    content: '\25BA'
  }
}
.top {
  border-bottom: none;
  border-top-left-radius: var(--fj-b-radius);
  border-top-right-radius: var(--fj-b-radius);
}
.bottom {
  border-top: none;
  border-bottom-left-radius: var(--fj-b-radius);
  border-bottom-right-radius: var(--fj-b-radius);
}
.left {
  border-right: none;
  border-top-left-radius: var(--fj-b-radius);
  border-bottom-left-radius: var(--fj-b-radius);
  img {
    transform: rotate(-90deg);
  }
}
.right {
  border-left: none;
  border-top-right-radius: var(--fj-b-radius);
  border-bottom-right-radius: var(--fj-b-radius);
  img {
    transform: rotate(90deg);
  }
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector, .right .prev-selector {
  border-top-right-radius: var(--fj-b-radius);
  border-bottom-left-radius: 0;
  top: -30px;
  left: 73px;
}
.left .prev-selector, .right .prev-selector {
  &:after {
    content: '\25B2';
  }
}
.left .next-selector, .right .next-selector {
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--fj-b-radius);
  top: 168px;
}
.left .next-selector, .right .next-selector {
  &:after {
    content: '\25BC';
  }
}
.left .next-selector {
  right: 63px;
}
.right .next-selector {
  right: 64px;
}
</style>
