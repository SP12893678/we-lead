<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">關於我們</p>
      <p class="overline text-center">By <b>Hannaah</b> | November 15,2020</p>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <v-img
            class="white--text align-end"
            height="400px"
            :src="intro.bannerImg"
          ></v-img>
          <p class="display-1 mb-0 pt-5">{{intro.title}}</p>
          <p class="subtitle-1 font-weight-light">{{intro.subtitle}}
          <p class="pt-2 subtitle-1 font-weight-light">{{intro.content}}
          </p>
          <!-- <ul class="subtitle-1 font-weight-light">
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>
          <p class="subtitle-1 font-weight-light pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p> -->
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
    export default {
        data: () => ({
            rating:4.5,
            intro:{
                bannerImg:require('../assets/img/home/slider2.jpg'),
                title:'Leadpact',
                subtitle:'最具影響力的領導課程',
                content:'成立於'
            }
        }),
    }
</script>
