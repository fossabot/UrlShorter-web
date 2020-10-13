<template>
  <v-app>
    <nav>
      <v-app-bar app color="#707C74" dark>
        <v-app-bar-nav-icon
          class="white--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <div>
          <span class="mr-2">URL Shorter</span>
        </div>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-navigation-drawer color="#707C74" v-model="drawer" app dark>
        <v-list dense nav class="py-0">
          <v-list-item v-for="item in items" :key="item.title" link :href="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    drawer: false,
    items: [
      { title: "Shorter", icon: "mdi-content-cut",link:'/' },
      { title: "Delete", icon: "mdi-delete",link:'/delete' },
      { title: "About", icon: "mdi-help-box",link:'/about' },
    ],
  }),
};
</script>
