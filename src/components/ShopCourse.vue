<template>
  <div>
    <v-container>
      <div class="row">
        <div
         class="col-md-3 col-sm-3 col-xs-12"
        >
          <v-card outlined>
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview :items="items" :open="[1]" :active="[5]" :selected-color="'#fff'" activatable open-on-click dense></v-treeview>
            </template>
            <v-divider></v-divider>
            <v-card-title>Price</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Customer Rating</v-card-title>
            <v-container class="pt-0"  fluid>
              <v-checkbox append-icon="mdi-star" label="4 & above" hide-details dense></v-checkbox>
              <v-checkbox append-icon="mdi-star" label="3 & above" hide-details dense></v-checkbox>
              <v-checkbox append-icon="mdi-star" label="2 & above" hide-details dense></v-checkbox>
              <v-checkbox append-icon="mdi-star" label="1 & above" hide-details dense></v-checkbox>
            </v-container>
            <v-divider></v-divider>

          </v-card>
        </div>
        <div
          class="col-md-9 col-sm-9 col-xs-12"
        >
          <v-row dense>
            <v-col align-self="end" class="mb-2">
              <small>Showing 1-12 of 200 products</small>
            </v-col>
            <v-col>
              <v-text-field
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
              class="hidden-sm-and-down pl-4 ml-4"
              dense
              />
            </v-col>
            <v-col>
              <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" outlined dense></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row>
            <div class="col-md-4 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in products">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                >
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="1.5"
                    :src="pro.src"
                  >
                  <v-card-actions class="mb-0 pb-0">
                  <v-avatar class="mb-2" style="border: 2px solid white">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    >
                  </v-avatar>
                 <i><h4 class="ml-2">Jessica Wu</h4></i>
                    <v-spacer></v-spacer>
                    <v-chip class="ma-0 mb-1" color="rgba(80,185,255,0.6)" small label dark>線上課程</v-chip>
                  </v-card-actions>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" href="/product" class="" outlined>詳細資訊</v-btn>
                      </div>

                    </v-expand-transition>
                  </v-img>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="headline font-weight-black mt-2 mb-2">
                          你不知道的5件事
                        </v-list-item-title>
                        <div class="boxx">
                        <p class="ellipsiss">無所不架JA.anything是設計相關小型工作室，製作項目包含網頁設計、app製作、網路遊戲、影音特效剪輯等。</p>
                        </div>
                        <v-row>
                          <v-col>
                            <v-chip class="ma-0 mb-1" color="orange" outlined small>
                                課程時間 2020.10.20
                            </v-chip>
                            <v-chip class="mt-2" color="green" outlined small>
                                上課時長 1小時30分鐘
                            </v-chip>
                            <!-- <v-chip class="mb-2">課程時間 2020.10.20</v-chip> -->
                            <!-- <v-list-item-subtitle class="mb-2">上課時長 1.5小時</v-list-item-subtitle> -->
                            <v-list-item-subtitle class="ma-2 font-weight-black">剩餘名額 3人</v-list-item-subtitle>
                          </v-col>
                          <v-col align="end">
                            <h2 class="mb-2">$18</h2>
                            <v-btn
                              depressed
                              color="primary"
                            >
                              購買
                            </v-btn>
                          </v-col> 
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                </v-card>
              </v-hover>
            </div>
          </v-row>
          <div class="text-center mt-12">
            <v-pagination
              v-model="page"
              :length="6"
            ></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>
<script>
    export default {
        data: () => ({
            range: [0, 10000],
            select:'Popularity',
            options: [
                'Default',
                'Popularity',
                'Relevance',
                'Price: Low to High',
                'Price: High to Low',
            ],
            page:1,
            breadcrums: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_home',
                },
                {
                    text: 'Clothing',
                    disabled: false,
                    href: 'breadcrumbs_clothing',
                },
                {
                    text: 'T-Shirts',
                    disabled: true,
                    href: 'breadcrumbs_shirts',
                },
            ],
            min:0,
            max:10000,
            items: [
                {
                    id: 2,
                    name: 'Shoes',
                    children: [
                        { id: 2, name: 'Casuals' },
                        { id: 3, name: 'Formals' },
                        { id: 4, name: 'Sneakers' },
                    ],
                },
                {
                    id: 1,
                    name: 'Clothing',
                    children: [
                        { id: 5, name: 'Shirts' },
                        { id: 6, name: 'Tops' },
                        { id: 7, name: 'Tunics' },
                        { id: 8, name: 'Bodysuit' },
                    ],
                }
            ],
            products:[
                {
                    id:1,
                    name:'BLACK TEE',
                    type:'Jackets',
                    price:'18.00',
                    src:require('../assets/img/home/slider2.jpg')
                },
                {
                    id:2,
                    name:'WHITE TEE',
                    type:'Polo',
                    price:'40.00',
                    src:require('../assets/img/shop/2.jpg')
                },
                {
                    id:3,
                    name:'Zara limited...',
                    type:'Denim',
                    price:'25.00',
                    src:require('../assets/img/shop/3.jpg')
                },
                {
                    id:4,
                    name:'SKULL TEE',
                    type:'Jackets',
                    price:'30.00',
                    src:require('../assets/img/shop/4.jpg')
                },
                {
                    id:5,
                    name:'MANGO WINTER',
                    type:'Sweaters',
                    price:'50.00',
                    src:require('../assets/img/shop/5.jpg')
                },
                {
                    id:6,
                    name:'SHIRT',
                    type:'Denim',
                    price:'34.00',
                    src:require('../assets/img/shop/6.jpg')
                },
            ]
        }),
    }
</script>

<style scoped>
  .boxx {
  width: 300px;
  }
  .ellipsiss {
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  }
</style>