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
        <v-pagination
            class="pa-2"
            v-model="pagination.page"
            :length="paginationLength"
        ></v-pagination>
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
                v-for="course in courses"
                :key="course.id"
                class="col-md-3 col-sm-6 col-xs-12"
            >
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4">
                        <v-img
                            class="white--text align-end"
                            :aspect-ratio="1.5"
                            :src="course.course_image"
                        >
                            <v-card-actions class="mb-0 pb-0">
                                <v-spacer></v-spacer>
                                <v-chip
                                    class="ma-0 mb-1"
                                    color="rgba(80,185,255,0.6)"
                                    small
                                    label
                                    dark
                                    >{{ course.course_mode }}</v-chip
                                >
                            </v-card-actions>
                        </v-img>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title
                                    class="headline font-weight-black mt-2 mb-2"
                                >
                                    {{ course.course_name }}
                                </v-list-item-title>
                                <div class="boxx">
                                    <p class="ellipsiss">
                                        {{ course.course_intro }}
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
                                            課程時間
                                            {{ course.course_start_time }}
                                        </v-chip>
                                        <v-chip
                                            class="mt-2"
                                            color="green"
                                            outlined
                                            small
                                        >
                                            上課時長
                                            {{ course.course_hours }}
                                        </v-chip>
                                        <v-list-item-subtitle
                                            class="ma-2 font-weight-black"
                                            >課程人數限制{{
                                                course.course_capacity
                                            }}人</v-list-item-subtitle
                                        >
                                    </v-col>
                                    <v-col class="d-flex align-end justify-end">
                                        <h1 class="teal--text">
                                            ${{ course.course_price }}
                                        </h1>
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
                                        @click="goToEditPage(course.id)"
                                        color="blue"
                                        outlined
                                        >編輯</v-btn
                                    >
                                    <v-btn
                                        @click="deleteCourse(course.id)"
                                        color="red"
                                        outlined
                                        >刪除</v-btn
                                    >
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
import teachCourse from '@/store/modules/teachCourse'

export default {
    data() {
        return {
            loading: false,
            pagination: {
                page: 1,
                capacity: 12,
            },
        }
    },
    mounted() {
        this.$store.registerModule('teachcourse', teachCourse)
        this.$store.dispatch('teachcourse/getCourseData')
    },
    computed: {
        courses() {
            if (!this.$store.state.teachcourse) return []
            let the_courses = this.$store.state.teachcourse.courses.filter(
                (item, index) => {
                    return (
                        index <
                            this.pagination.capacity * this.pagination.page &&
                        index >=
                            this.pagination.capacity *
                                (this.pagination.page - 1)
                    )
                }
            )
            return the_courses
        },
        paginationLength() {
            if (!this.$store.state.teachcourse) return 1
            let length = Math.ceil(
                this.$store.state.teachcourse.courses.length /
                    this.pagination.capacity
            )
            return length
        },
    },
    methods: {
        goToEditPage(id) {
            console.log(this.$route)
            this.$router.push({ path: '/editcourse', query: { id: id } })
        },
        deleteCourse(id) {
            this.$store.commit(
                'dialogBox',
                {
                    dialog: true,
                    option: {
                        title: '你確定要刪除嗎?',
                        message: '刪除後將無法再復原',
                        btnConfirmText: '確定',
                        btnCancelShow: true,
                        btnConfirmEvent: () => {
                            this.$store.dispatch('teachcourse/deleteCourse', id)
                            this.$store.commit('snackBar', {
                                show: true,
                                message: '刪除成功',
                            })
                        },
                    },
                },
                { root: true }
            )
        },
    },
    beforeDestroy() {
        this.$store.unregisterModule('teachcourse')
    },
}

const products = [
    {
        id: 1,
        name: 'BLACK TEE',
        type: 'Jackets',
        price: '18.00',
        src: require('../assets/img/home/slider2.jpg'),
    },
    {
        id: 2,
        name: 'WHITE TEE',
        type: 'Polo',
        price: '40.00',
        src: require('../assets/img/shop/2.jpg'),
    },
    {
        id: 3,
        name: 'Zara limited...',
        type: 'Denim',
        price: '25.00',
        src: require('../assets/img/shop/3.jpg'),
    },
    {
        id: 4,
        name: 'SKULL TEE',
        type: 'Jackets',
        price: '30.00',
        src: require('../assets/img/shop/4.jpg'),
    },
    {
        id: 5,
        name: 'MANGO WINTER',
        type: 'Sweaters',
        price: '50.00',
        src: require('../assets/img/shop/5.jpg'),
    },
    {
        id: 6,
        name: 'SHIRT',
        type: 'Denim',
        price: '34.00',
        src: require('../assets/img/shop/6.jpg'),
    },
    {
        id: 7,
        name: 'TRUCKER JACKET',
        type: 'Jackets',
        price: '38.00',
        src: require('../assets/img/shop/7.jpg'),
    },
    {
        id: 8,
        name: 'COATS',
        type: 'Jackets',
        price: '25.00',
        src: require('../assets/img/shop/8.jpg'),
    },
    {
        id: 9,
        name: 'MANGO WINTER',
        type: 'Sweaters',
        price: '50.00',
        src: require('../assets/img/shop/9.jpg'),
    },
    {
        id: 10,
        name: 'SHIRT',
        type: 'Denim',
        price: '34.00',
        src: require('../assets/img/shop/10.jpg'),
    },
    {
        id: 11,
        name: 'TRUCKER JACKET',
        type: 'Jackets',
        price: '38.00',
        src: require('../assets/img/shop/11.jpg'),
    },
    {
        id: 12,
        name: 'COATS',
        type: 'Jackets',
        price: '25.00',
        src: require('../assets/img/shop/12.jpg'),
    },
]
</script>

<style>
</style>