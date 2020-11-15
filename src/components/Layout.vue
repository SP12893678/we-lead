<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-2"
      dark
    >
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title
        style="width: 350px"
      >
        <a href="/" class="white--text" style="text-decoration: none"><v-icon>mdi-truck</v-icon>&nbsp;LeadPact</a>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn v-on="on" icon>
        <v-badge
          content="0"
          value=""
          color="green"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" href="/cart" icon>
        <v-badge
          content="0"
          value=""
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation
        v-if="this.$router.history.current['path'] !== '/'"
        :value="activeBtn"
        color="primary"
        horizontal
      >
        <v-btn href="/" class="v-btn">
          <span>首頁</span>
        </v-btn>
          <v-btn href="/shopCourse">
            <span>找相關課程</span>
          </v-btn>
        <!-- <v-btn href="/teacherIntro">
          <span>師資介紹</span>
        </v-btn> -->
         <v-btn href="/AboutUs">
          <span>關於我們</span>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
      <router-view/>
    <v-footer
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="blue darken-2 white--text text-center"
      >   <v-row>
          <v-col>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-home</v-icon>
            台北市xx區xx大樓5號
          </v-btn>
          </v-col>
           <v-col>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-phone</v-icon>
            xxxx@gmail.com
          </v-btn> 
           </v-col>
           <v-col>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px" left>mdi-email</v-icon> xxxx@gmail.com
          </v-btn> 
           </v-col>
           </v-row>

                <v-card-text class="white--text pt-0">
                    成為更好的領導者
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>LeadPact</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            activeBtn: this.$router.history.current['path']=='/shopCourse'?1:2,
        };
    },
    methods: {},
};
</script>
