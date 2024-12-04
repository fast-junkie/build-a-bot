<template>
  <section class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.src"
             title="Head" alt="Head" />
        <button class="prev-selector" @click="selectPrevHead()">&#9668;</button>
        <button class="next-selector" @click="selectNextHead()">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.armLeft.src"
             title="Left Arm" alt="Left Arm" />
        <button class="prev-selector" @click="selectPrevArmLeft()">&#9650;</button>
        <button class="next-selector" @click="selectNextArmLeft()">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src"
             title="Torso" alt="Torso" />
        <button class="prev-selector" @click="selectPrevTorso()">&#9668;</button>
        <button class="next-selector" @click="selectNextTorso()">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.armRight.src"
             title="Right Arm" alt="Right Arm" />
        <button class="prev-selector" @click="selectPrevArmRight()">&#9650;</button>
        <button class="next-selector" @click="selectNextArmRight()">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src"
             title="Base" alt="Base" />
        <button class="prev-selector" @click="selectPrevBase()">&#9668;</button>
        <button class="next-selector" @click="selectNextBase()">&#9658;</button>
      </div>
    </div>
    <div>
      <table>
        <caption>Cart</caption>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import createdHookMixin from '@/build/created-hook-mixin';
import availableParts from '@/data/parts';

const getNextIndex = (currentIndex, length) => (currentIndex + 1) % length;
const getPrevIndex = (currentIndex, length) => (currentIndex - 1 + length) % length;

export default {
  name: 'RobotBuilder',
  mixins: [createdHookMixin],
  computed: {
    selectedRobot() {
      return {
        head: this.availableParts.heads[this.selectedHeadIndex],
        armLeft: this.availableParts.arms[this.selectedArmLeftIndex],
        torso: this.availableParts.torsos[this.selectedTorsoIndex],
        armRight: this.availableParts.arms[this.selectedArmRightIndex],
        base: this.availableParts.bases[this.selectedBaseIndex],
      };
    },
  },
  data() {
    return {
      availableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedArmLeftIndex: 0,
      selectedArmRightIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
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
      this.cart.push({ ...robot, cost });
    },
    selectNextHead() {
      this.selectedHeadIndex = getNextIndex(
        this.selectedHeadIndex,
        this.availableParts.heads.length,
      );
    },
    selectPrevHead() {
      this.selectedHeadIndex = getPrevIndex(
        this.selectedHeadIndex,
        this.availableParts.heads.length,
      );
    },
    selectNextArmLeft() {
      this.selectedArmLeftIndex = getNextIndex(
        this.selectedArmLeftIndex,
        this.availableParts.arms.length,
      );
    },
    selectPrevArmLeft() {
      this.selectedArmLeftIndex = getPrevIndex(
        this.selectedArmLeftIndex,
        this.availableParts.arms.length,
      );
    },
    selectNextArmRight() {
      this.selectedArmRightIndex = getNextIndex(
        this.selectedArmRightIndex,
        this.availableParts.arms.length,
      );
    },
    selectPrevArmRight() {
      this.selectedArmRightIndex = getPrevIndex(
        this.selectedArmRightIndex,
        this.availableParts.arms.length,
      );
    },
    selectNextTorso() {
      this.selectedTorsoIndex = getNextIndex(
        this.selectedTorsoIndex,
        this.availableParts.torsos.length,
      );
    },
    selectPrevTorso() {
      this.selectedTorsoIndex = getPrevIndex(
        this.selectedTorsoIndex,
        this.availableParts.torsos.length,
      );
    },
    selectNextBase() {
      this.selectedBaseIndex = getNextIndex(
        this.selectedBaseIndex,
        this.availableParts.bases.length,
      );
    },
    selectPrevBase() {
      this.selectedBaseIndex = getPrevIndex(
        this.selectedBaseIndex,
        this.availableParts.bases.length,
      );
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
.part {
  border: 3px solid var(--fj-bg-20);
  height: 10.3125rem;
  position: relative;
  width: 10.3125rem;
  img {
    width: 10.3125rem;
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
}
.left img {
  transform: rotate(-90deg);
}
.right {
  border-left: none;
  border-top-right-radius: var(--fj-b-radius);
  border-bottom-right-radius: var(--fj-b-radius);
}
.right img {
  transform: rotate(90deg);
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
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector, .right .prev-selector {
  border-top-right-radius: var(--fj-b-radius);
  border-bottom-left-radius: 0;
  top: -30px;
  left: 73px;
}
.left .next-selector, .right .next-selector {
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--fj-b-radius);
  top: 168px;
}
.left .next-selector {
  right: 63px;
}
.right .next-selector {
  right: 64px;
}

/* Module o3 additions to base... */
.robot-name {
  position: absolute;
  top: -1.5rem;
  text-align: center;
  width: 100%;
}
.sale {
  color: var(--fj-red);
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 1.875rem;
  width: 13.75rem;
}
caption {
  font-size: 1rem;
  font-weight: bold;
}
caption, th, td {
  padding: 0.3125rem;
  text-align: left;
}
th.cost, td.cost {
  text-align: right;
}
</style>
