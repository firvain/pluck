<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      dense
      dark
      fixed
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon v-if="drawer" @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'"></v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <div class="scroll-container">
        <router-view/>
      </div>
    </v-content>
    <v-footer :fixed="fixed" app dark>
      <span>&copy; Firvain 2018</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [{
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
      }],
      miniVariant: false,
      title: 'Pluck',
    };
  },
};
</script>
<style lang="scss">
html {
  overflow-y: hidden;
}
.content {
  max-height: 100vh;
}
.scroll-container {
  height: 100%;
  overflow-y: hidden;
  backface-visibility: hidden;
}
</style>
