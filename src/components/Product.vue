<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="8" lg="8" md="8" sm="12">
                    <v-img
                        height="100%"
                        :src="require('../assets/img/home/slider4.jpg')"
                    ></v-img>
                </v-col>
                <v-col cols="4" lg="4" md="4" sm="12">
                    <v-card>
                        <v-card-title class="font-weight-black display-1">{{
                            course.name
                        }}</v-card-title>
                        <v-card-subtitle class="font-weight-bold">{{
                            course.intro
                        }}</v-card-subtitle>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text class="pb-2">
                            <v-chip color="blue" outlined small
                                >線上課程</v-chip
                            >
                        </v-card-text>

                        <v-card-text class="pb-2 pt-2">
                            <h3>{{ `課程時長: ${course.hours}小時` }}</h3>
                        </v-card-text>
                        <v-card-text class="pb-2 pt-2">
                            <h3>課程時間: 2020/10/20 18:00</h3>
                        </v-card-text>

                        <v-card-text class="pb-2 pt-0">
                            <v-row>
                                <v-col>
                                    <h3>剩餘名額 3 人</h3>
                                </v-col>
                                <v-col>
                                    <h1 class="text-right teal--text">
                                        {{ `$${course.price}` }}
                                    </h1>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn class="pa-5" color="blue" dark block>
                                立即購買
                            </v-btn>
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn class="pa-5" color="blue" outlined block>
                                <v-icon class="mr-2">mdi-cart</v-icon>
                                放入購物車
                            </v-btn>
                        </v-card-actions>

                        <v-list shaped>
                            <v-list-group prepend-icon="mdi-teach">
                                <template v-slot:activator>
                                    <v-list-item-title
                                        >本次講師</v-list-item-title
                                    >
                                </template>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item class="mb-0" two-line>
                                            <v-list-item-avatar>
                                                <v-img
                                                    :src="
                                                        require('../assets/img/home/slider4.jpg')
                                                    "
                                                ></v-img>
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-title
                                                    >Johnson.Dc</v-list-item-title
                                                >
                                                <!-- <v-list-item-subtitle
                                                    >本次講師</v-list-item-subtitle
                                                > -->
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-group>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>

            <div class="row">
                <div class="col-sm-12 col-xs-12 col-md-12">
                    <v-tabs>
                        <v-tab>介紹</v-tab>
                        <v-tab>課程概要</v-tab>
                        <v-tab>課程評價</v-tab>
                        <v-tab-item>
                            <p class="pt-10 subtitle-1 font-weight-thin">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ultricies mi eget mauris pharetra et. Vel
                                pretium lectus quam id leo in vitae turpis
                                massa. Orci dapibus ultrices in iaculis nunc. At
                                auctor urna nunc id cursus metus. Integer
                                feugiat scelerisque varius morbi enim nunc.
                                Aliquam sem et tortor consequat id porta nibh
                                venenatis cras. Pellentesque pulvinar
                                pellentesque habitant morbi tristique senectus
                                et netus. Malesuada nunc vel risus commodo
                                viverra maecenas. Neque volutpat ac tincidunt
                                vitae semper quis.
                            </p>
                        </v-tab-item>
                        <v-tab-item>
                            <p class="pt-10 subtitle-1 font-weight-thin">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ultricies mi eget mauris pharetra et. Vel
                                pretium lectus quam id leo in vitae turpis
                                massa. Orci dapibus ultrices in iaculis nunc. At
                                auctor urna nunc id cursus metus. Integer
                                feugiat scelerisque varius morbi enim nunc.
                                Aliquam sem et tortor consequat id porta nibh
                                venenatis cras. Pellentesque pulvinar
                                pellentesque habitant morbi tristique senectus
                                et netus. Malesuada nunc vel risus commodo
                                viverra maecenas. Neque volutpat ac tincidunt
                                vitae semper quis.
                            </p>
                        </v-tab-item>
                        <v-tab-item>
                            <v-list three-line="true" avatar="true">
                                <v-list-item-group
                                    v-model="item"
                                    color="primary"
                                >
                                    <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                        inactive="true"
                                    >
                                        <v-list-item-avatar>
                                            <v-img :src="item.avatar"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title
                                                v-html="item.title"
                                            ></v-list-item-title
                                            ><v-rating
                                                v-model="rating"
                                                class=""
                                                background-color="warning lighten-3"
                                                color="warning"
                                                dense
                                            ></v-rating>
                                            <v-list-item-subtitle
                                                v-html="item.subtitle"
                                            ></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-tab-item>
                    </v-tabs>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        rating: 4.5,
        breadcrums: [
            {
                text: "Home",
                disabled: false,
                href: "breadcrumbs_home",
            },
            {
                text: "Clothing",
                disabled: false,
                href: "breadcrumbs_clothing",
            },
            {
                text: "T-Shirts",
                disabled: true,
                href: "breadcrumbs_shirts",
            },
        ],
        item: 5,
        items: [
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "Lorem ipsum dolor?",
                subtitle:
                    "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
                    "\n",
            },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                title:
                    'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
                subtitle:
                    "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                title: "Lorem ipsum dolor",
                subtitle:
                    "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                title: "Lorem ipsum dolor",
                subtitle: "",
            },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "Lorem ipsum dolor",
                subtitle:
                    "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },
        ],
        course: {
            name: "你不知道的5件事",
            intro:
                "無所不架JA.anything是設計相關小型工作室，製作項目包含網頁設計、app製作、網路遊戲、影音特效剪輯等。",
            capacity: 20,
            mode: 0,
            price: 1800,
            start_time: new Date().toDateString(),
            hours: 2.1,
            mode: null,
            image: null,
            tags: [],
            teachers: [],
        },
    }),
    mounted(){
      console.log(this.$route.params.id)
      this.name= this.$route.params.name
      this.intro=this.$route.params.intro
      this.capacity= this.$route.params.capacity
      this.mode= this.$route.params.mode
      this.price= this.$route.params.price
      this.start_time=this.$route.params.start_time
      this.hours=this.$route.params.hours
      this.image=require(this.$route.params.hours)
      this.teachers = this.$route.params.teachers
    }
};
</script>
