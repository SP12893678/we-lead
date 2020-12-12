<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="150"
    offset-x
    bottom
    nudge-bottom="50"
    transition="slide-y-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        icon
        v-on="on"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            >
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>content</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />
      <v-list>
        <v-list-item to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-card-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>個人檔案</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/order">
          <v-list-item-icon>
            <v-icon>mdi-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>我的訂單</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/coupon">
          <v-list-item-icon>
            <v-icon>mdi-ticket-percent</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>我的折扣</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
        <v-list-item @click="$store.commit('user/setUserLogout')">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>登出</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style>

</style>
