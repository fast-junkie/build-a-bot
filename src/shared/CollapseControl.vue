<template>
  <div class="collapse-control">
    <button @click="toggleCollapse"
            :title="collapsed ? 'Preview is locked.' : 'Preview is unlocked'">
      <span v-if="collapsed">🔒 Locked</span>
      <span v-else>🔓 Unlocked</span>
    </button>
    <slot v-if="!collapsed" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
.collapse-control {
  button {
    width: 100%;
  }
}
</style>
