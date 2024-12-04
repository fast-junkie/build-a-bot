<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img src="/assets/img/build-a-bot-logo.png" class="logo" alt="Logo" />
          Build-a-Bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <!--<HomePage />-->
    <RobotBuilder />
  </main>
</template>

<script>
// import HomePage from '@/home/HomePage.vue';
import RobotBuilder from '@/build/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
  },
};
</script>

<style>
:root {
  --fj-b-radius: 0.85rem;
  --fj-bg-0: rgba(236, 240, 241, 1);
  --fj-bg-20: rgba(208, 219, 217, 1);
  --fj-bg-40: rgba(167, 179, 179, 1);
  --fj-bg-60: rgba(126, 140, 142, 1);
  --fj-bg-80: rgba(85, 101, 115, 1);
  --fj-bg-100: rgba(44, 62, 88, 1);
  --fj-red: rgba(231, 76, 60, 1);
  --fj-font: 'Source Code Pro';
  --fj-font-base: monospace;
  --fj-font-size: 0.775rem;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: var(--fj-bg-0);
}
::-webkit-scrollbar-thumb {
  background: var(--fj-bg-80);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--fj-bg-100);
}
html {
  scrollbar-width: thin;
  scrollbar-color: var(--fj-bg-80) var(--fj-bg-0);
}
body {
  background: linear-gradient(to bottom, var(--fj-bg-20), var(--fj-bg-100)) fixed;
  font: var(--fj-font-size) var(--fj-font), var(--fj-font-base) !important;
}
main {
  background-color: var(--fj-bg-0);
  border-radius: var(--fj-b-radius);
  margin: 0 auto;
  padding: 1.875rem 0;
  min-height: 18rem;
  width: 64rem;
}

</style>

<style scoped>
header {
  background-color: var(--fj-bg-80);
  border-radius: var(--fj-b-radius);
  color: var(--fj-bg-0);
  width: 64rem;
  margin: 0 auto;
}
ul {
  display: flex;
  padding: 0.1875rem;
}
.nav-item {
  border-right: 0.0625rem solid var(--fj-bg-60);
  display: inline-block;
  padding: 0.3125rem 0.625rem;
}
.logo {
  background-color: var(--fj-bg-0);
  border: 0.1250rem solid var(--fj-bg-60);
  border-radius: 50%;
  padding: 0.1875rem;
  height: 2rem;
  vertical-align: middle;
}
</style>
