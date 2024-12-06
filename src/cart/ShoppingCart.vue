<template>
  <section>
    <table>
      <caption>Cart</caption>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">{{ robot.head.title }}</td>
          <td class="cost">{{ $filters.currency(robot.cost, '$') }}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <caption>Cart Sale Items</caption>
      <thead>
      <tr>
        <th class="robot-title">Robot</th>
        <th class="cost">Cost</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(robot, index) in cartSaleItems" :key="index">
        <td class="robot-title">{{ robot.head.title }}</td>
        <td class="cost">{{ $filters.currency(robot.cost, '$') }}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'CartPage',
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters['robots/cartSaleItems'];
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border: {
    top: thin solid var(--fj-bg-60);
  }
  margin: {
    bottom: 1.235rem;
    left: 1.235rem;
  }
  min-width: 20rem;
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
}

</style>
