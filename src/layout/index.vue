<template>
  <div id="layout">
    <header>Header</header>
    <section>
      <router-view></router-view>
    </section>
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
