<template>
  <div>hello world 1 ! {{item}}</div>
</template>

<script>
export default {
  asyncData: ({ store }) => {
    return store.dispatch("getDataAction");
  },
  computed: {
    item() {
      return this.$store.state.lists;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>