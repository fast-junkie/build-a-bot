<template>
  <section>
    <h2>Browse Parts</h2>
    <ul class="menu">
      <li>
        <router-link :to="{ name: 'BrowseHeads' }">
          Heads
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'BrowseArms' }">
          Arms
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'BrowseTorsos' }">
          Torsos
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'BrowseBases' }">
          Bases
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style lang="scss" scoped>
section {
  margin: 0 1.25rem;
}
h2 {
  text-align: center;
}
.menu {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
  font-size: 20px;
}
ul {
  list-style-type: none;
}
a {
  color: var(--fj-link);
  text-decoration: none;
  &:hover {
    font: {
      weight: bold;
    }
  }
}
</style>
