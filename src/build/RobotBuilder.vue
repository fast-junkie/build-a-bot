<template>
  <section v-if="availableParts" class="content">
    <div id="partInfo" class="part-info"></div>
    <div class="preview">
      <CollapseControl>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src" alt=""/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.armLeft.src" class="rotate-left" alt=""/>
            <img :src="selectedRobot.torso.src" alt=""/>
            <img :src="selectedRobot.armRight.src" class="rotate-right" alt=""/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src" alt=""/>
          </div>
        </div>
      </CollapseControl>
      <button class="add-to-cart" @click="addToCart()" title="Click to add to cart.">
        <span role="img" aria-label="cart">🛒</span> Add
      </button>
    </div>
    <div class="top-row">
      <!--<div class="robot-name">
        {{ selectedRobot.head.title }}
        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
      </div>-->
      <PartSelector
        position="top"
        :parts="availableParts.heads"
        @partSelected="(p) => selectedRobot.head = p" />
    </div>
    <div class="middle-row">
      <PartSelector
        position="left"
        :parts="availableParts.arms"
        @partSelected="(p) => selectedRobot.armLeft = p" />
      <PartSelector
        position="center"
        :parts="availableParts.torsos"
        @partSelected="(p) => selectedRobot.torso = p" />
      <PartSelector
        position="right"
        :parts="availableParts.arms"
        @partSelected="(p) => selectedRobot.armRight = p" />
    </div>
    <div class="bottom-row">
      <PartSelector
        position="bottom"
        :parts="availableParts.bases"
        @partSelected="(p) => selectedRobot.base = p" />
    </div>
  </section>
</template>

<script>
import PartSelector from '@/build/PartSelector.vue';
import CollapseControl from '@/shared/CollapseControl.vue';

export default {
  name: 'RobotBuilder',
  created() {
    this.$store.dispatch('robots/getParts');
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      // eslint-disable-next-line no-alert
      const response = window.confirm('Are you sure you want to leave?');
      next(response);
    }
  },
  components: {
    PartSelector,
    CollapseControl,
  },
  computed: {
    availableParts() {
      return this.$store.state.robots.parts;
    },
  },
  data() {
    return {
      addedToCart: false,
      cart: [],
      selectedRobot: {
        head: {},
        armLeft: {},
        torso: {},
        armRight: {},
        base: {},
      },
    };
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
        + robot.armLeft.cost
        + robot.torso.cost
        + robot.armRight.cost
        + robot.base.cost;
      this.$store.dispatch('robots/addRobotToCart', { ...robot, cost })
        .then(() => {
          this.addedToCart = true;
          this.$router.push('/cart');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-row, .middle-row, .bottom-row {
  display: flex;
}
.top-row, .bottom-row {
  justify-content: space-around;
}
.middle-row {
  justify-content: center;
}
.bottom-row {
  border-top: none;
}

/* Module o3 additions to base... */
.robot-name {
  position: absolute;
  top: -1.5rem;
  text-align: center;
  width: 100%;
}
.content {
  position: relative;
}

/* Module o4 additions to base... */
.preview {
  position: absolute;
  top: -0.124756335rem;
  right: 1.1875rem;
  width: 9.375rem;
  height: 9.375rem;
  padding: 0.3125rem;
  .add-to-cart {
    width: 100%;
  }
  .preview-content {
    margin: {
      top: 0.3125rem;
      bottom: 0.3125rem;
    }
    img {
      width: 3.125rem;
      height: 3.125rem;
    }
    .rotate-right {
      transform: rotate(90deg);
    }
    .rotate-left {
      transform: rotate(-90deg);
    }
  }
}
</style>
