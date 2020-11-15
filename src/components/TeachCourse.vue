<template>
    <v-container fluid>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="display-1 pa-2"
                    >我的開課課程</v-list-item-title
                >
            </v-list-item-content>

            <v-text-field label="搜尋"></v-text-field>

            <v-list-item-action class="ml-4 mb-4">
                <v-btn to="/newcourse" outlined> 新增課程 </v-btn>
            </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <!-- <v-list-item two-line class="mt-4">
            <v-list-item-content>
                <v-pagination
                    :length="1"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                ></v-pagination>

                <v-card
                    v-show="loading"
                    v-for="(item, index) in 3"
                    :key="index"
                    class="ma-4"
                    height="300"
                    width="300"
                    max-width="300"
                >
                    <v-skeleton-loader
                        class="mx-auto"
                        type="card"
                    ></v-skeleton-loader>
                </v-card>

                <v-card max-width="300">
                    <v-img
                        :src="require('../assets/img/home/slider4.jpg')"
                    ></v-img>
                    <v-divider></v-divider>
                    <v-card-title>課程標題</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn to="/editcourse" color="blue" outlined
                            >編輯</v-btn
                        >
                        <v-btn color="red" outlined>刪除</v-btn>
                    </v-card-actions>
                </v-card>
            </v-list-item-content>
        </v-list-item> -->
        <v-row>
            <div
                class="col-md-3 col-sm-6 col-xs-12"
                :key="pro.id"
                v-for="pro in products"
            >
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4">
                        <v-img
                            class="white--text align-end"
                            :aspect-ratio="1.5"
                            :src="pro.src"
                        >
                            <v-card-actions class="mb-0 pb-0">
                                <v-spacer></v-spacer>
                                <v-chip
                                    class="ma-0 mb-1"
                                    color="rgba(80,185,255,0.6)"
                                    small
                                    label
                                    dark
                                    >線上課程</v-chip
                                >
                            </v-card-actions>
                        </v-img>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title
                                    class="headline font-weight-black mt-2 mb-2"
                                >
                                    你不知道的5件事
                                </v-list-item-title>
                                <div class="boxx">
                                    <p class="ellipsiss">
                                        無所不架JA.anything是設計相關小型工作室，製作項目包含網頁設計、app製作、網路遊戲、影音特效剪輯等。
                                    </p>
                                </div>
                                <v-row>
                                    <v-col>
                                        <v-chip
                                            class="ma-0 mb-1"
                                            color="orange"
                                            outlined
                                            small
                                        >
                                            課程時間 2020.10.20
                                        </v-chip>
                                        <v-chip
                                            class="mt-2"
                                            color="green"
                                            outlined
                                            small
                                        >
                                            上課時長 1小時30分鐘
                                        </v-chip>
                                        <!-- <v-chip class="mb-2">課程時間 2020.10.20</v-chip> -->
                                        <!-- <v-list-item-subtitle class="mb-2">上課時長 1.5小時</v-list-item-subtitle> -->
                                        <v-list-item-subtitle
                                            class="ma-2 font-weight-black"
                                            >課程人數限制20人</v-list-item-subtitle
                                        >
                                    </v-col>
                                    <v-col class="d-flex align-end justify-end">
                                        <h1 class="teal--text">$1800</h1>
                                    </v-col>
                                </v-row>
                                <v-card-actions
                                    >講師
                                    <v-avatar
                                        class=""
                                        style="border: 1px solid white"
                                        size="24"
                                    >
                                        <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                        />
                                    </v-avatar>
                                    <v-avatar
                                        class=""
                                        style="border: 1px solid white"
                                        size="24"
                                    >
                                        <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                        />
                                    </v-avatar>
                                    <v-avatar
                                        class=""
                                        style="border: 1px solid white"
                                        size="24"
                                    >
                                        <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                        />
                                    </v-avatar>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        @click="goToEditPage(pro.id)"
                                        color="blue"
                                        outlined
                                        >編輯</v-btn
                                    >
                                    <v-btn color="red" outlined>刪除</v-btn>
                                </v-card-actions>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </div>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            products: [
                {
                    id: 1,
                    name: "BLACK TEE",
                    type: "Jackets",
                    price: "18.00",
                    src: require("../assets/img/home/slider2.jpg"),
                },
                {
                    id: 2,
                    name: "WHITE TEE",
                    type: "Polo",
                    price: "40.00",
                    src: require("../assets/img/shop/2.jpg"),
                },
                {
                    id: 3,
                    name: "Zara limited...",
                    type: "Denim",
                    price: "25.00",
                    src: require("../assets/img/shop/3.jpg"),
                },
                {
                    id: 4,
                    name: "SKULL TEE",
                    type: "Jackets",
                    price: "30.00",
                    src: require("../assets/img/shop/4.jpg"),
                },
                {
                    id: 5,
                    name: "MANGO WINTER",
                    type: "Sweaters",
                    price: "50.00",
                    src: require("../assets/img/shop/5.jpg"),
                },
                {
                    id: 6,
                    name: "SHIRT",
                    type: "Denim",
                    price: "34.00",
                    src: require("../assets/img/shop/6.jpg"),
                },
                {
                    id: 7,
                    name: "TRUCKER JACKET",
                    type: "Jackets",
                    price: "38.00",
                    src: require("../assets/img/shop/7.jpg"),
                },
                {
                    id: 8,
                    name: "COATS",
                    type: "Jackets",
                    price: "25.00",
                    src: require("../assets/img/shop/8.jpg"),
                },
                {
                    id: 9,
                    name: "MANGO WINTER",
                    type: "Sweaters",
                    price: "50.00",
                    src: require("../assets/img/shop/9.jpg"),
                },
                {
                    id: 10,
                    name: "SHIRT",
                    type: "Denim",
                    price: "34.00",
                    src: require("../assets/img/shop/10.jpg"),
                },
                {
                    id: 11,
                    name: "TRUCKER JACKET",
                    type: "Jackets",
                    price: "38.00",
                    src: require("../assets/img/shop/11.jpg"),
                },
                {
                    id: 12,
                    name: "COATS",
                    type: "Jackets",
                    price: "25.00",
                    src: require("../assets/img/shop/12.jpg"),
                },
            ],
        };
    },
    methods: {
        goToEditPage(id) {
            console.log(this.$route);
            this.$router.push({ path: "/editcourse", query: { id: id } });
        },
    },
};
</script>

<style>
</style>