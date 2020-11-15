<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-form ref="form">
                    <v-card>
                        <v-card-text>
                            <v-text-field
                                v-model="Mycourse.name"
                                :rules="rules.must"
                                label="課程名稱"
                                required
                            ></v-text-field>
                            <v-file-input
                                v-model="Mycourse.image"
                                :rules="rules.image"
                                accept="image/png, image/jpeg, image/bmp"
                                prepend-icon="mdi-image"
                                label="上傳課程的封面照片"
                            ></v-file-input>
                            <v-textarea
                                v-model="Mycourse.intro"
                                label="課程簡介敘述"
                                required
                            ></v-textarea>
                            <v-text-field
                                v-model="Mycourse.capacity"
                                :rules="rules.capacity"
                                label="課程人數限制"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="Mycourse.price"
                                :rules="rules.must"
                                label="課程價格"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="Mycourse.hours"
                                :rules="rules.must"
                                label="課程時數"
                                required
                            ></v-text-field>
                            <v-select
                                v-model="Mycourse.mode"
                                :rules="rules.must"
                                :items="course.mode"
                                label="上課方式"
                            ></v-select>
                            <v-select
                                v-model="Mycourse.category"
                                :items="course.category"
                                label="課程類別"
                                multiple
                            ></v-select>
                            <v-row align="center">
                                <v-col cols="4"
                                    ><v-menu
                                        v-model="course.date.menu"
                                        top
                                        :close-on-content-click="false"
                                        nudge-width="300"
                                        max-width="300"
                                        offset-y
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-btn
                                                outlined
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                <v-icon
                                                    >mdi-calendar-month-outline</v-icon
                                                >選擇開課日期
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title class="pa-2">
                                                <span>開課日期</span>
                                                <v-spacer></v-spacer>
                                                <v-btn @click="selectDate" icon>
                                                    <v-icon
                                                        color="grey lighten-1"
                                                        >mdi-check</v-icon
                                                    >
                                                </v-btn>
                                            </v-card-title>
                                            <v-list-item-content class="pa-2">
                                                <v-tabs
                                                    v-model="course.date.tab"
                                                >
                                                    <v-tab>日期</v-tab>
                                                    <v-tab>時間</v-tab>
                                                </v-tabs>
                                                <v-tabs-items
                                                    v-model="course.date.tab"
                                                >
                                                    <v-tab-item>
                                                        <v-date-picker
                                                            v-model="
                                                                course.date.date
                                                            "
                                                        ></v-date-picker
                                                    ></v-tab-item>
                                                    <v-tab-item>
                                                        <v-time-picker
                                                            v-model="
                                                                course.date.time
                                                            "
                                                        ></v-time-picker
                                                    ></v-tab-item>
                                                </v-tabs-items>
                                            </v-list-item-content>
                                        </v-card> </v-menu
                                ></v-col>
                                <v-col cols="8">
                                    <v-text-field
                                        v-model="Mycourse.start_time"
                                        readonly
                                        label="開課日期"
                                        required
                                    ></v-text-field
                                ></v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-text> 講師列表 </v-card-text>
                        <v-card-text>
                            <v-btn
                                @click="teachers.dialog = true"
                                outlined
                                block
                                >新增講師</v-btn
                            >
                        </v-card-text>

                        <v-list-item
                            v-for="(item, index) in Mycourse.teachers"
                            :key="index"
                        >
                            <v-list-item-avatar>
                                <v-img :src="item.image"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.name"
                                ></v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn
                                    @click="Mycourse.teachers.splice(index, 1)"
                                    icon
                                >
                                    <v-icon color="red lighten-1"
                                        >mdi-delete</v-icon
                                    >
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider class="mt-12"></v-divider>
                        <v-card-actions>
                            <v-btn text>取消</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn @click="submit" color="primary" text
                                >送出</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-col>
        </v-row>

        <v-dialog v-model="teachers.dialog">
            <v-card>
                <v-card-title
                    >講師列表
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="teachers.search"
                        label="搜尋"
                    ></v-text-field>
                    <v-btn @click="addTeachers" icon
                        ><v-icon> mdi-check</v-icon></v-btn
                    >
                </v-card-title>
                <v-list shaped>
                    <v-list-item-group v-model="teachers.selects" multiple>
                        <template v-for="(item, i) in getRemianTeachers">
                            <v-list-item
                                :key="`item-${i}`"
                                :value="item"
                                active-class="deep-purple--text text--accent-4"
                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox
                                            :input-value="active"
                                            color="deep-purple accent-4"
                                        ></v-checkbox>
                                    </v-list-item-action>
                                    <v-list-item-avatar class="mr-4">
                                        <v-img :src="item.image"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-text="item.name"
                                        ></v-list-item-title>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            Mycourse: {
                name: null,
                intro: null,
                capacity: null,
                price: null,
                start_time: null,
                hours: null,
                mode: null,
                image: null,
                category: [],
                teachers: [],
            },
            rules: {
                must: [(v) => !!v || "必填!"],

                capacity: [
                    (v) => !!v || "必填!",
                    (v) => Number.isInteger(v * 1) || "必須是數字",
                    (v) => v * 1 > 0 || "必須大於0",
                ],
                price: [
                    (v) => !!v || "必填!",
                    (v) => Number.isInteger(v * 1) || "必須是數字",
                ],
                hours: [
                    (v) => !!v || "必填!",
                    (v) => Number.isInteger(v * 1) || "必須是數字",
                ],
                image: [
                    (v) => (v != null && v.size > 0) || "需要有圖片檔",
                    (v) => !v || v.size < 2000000 || "檔案大小需小於2MB",
                ],
            },
            course: {
                mode: ["線上", "線下"],
                category: ["類別1", "類別2"],
                date: {
                    tab: 0,
                    menu: false,
                    date: null,
                    time: null,
                },
            },
            teachers: {
                dialog: false,
                value: [
                    {
                        image: "https://cdn.vuetifyjs.com/images/john.jpg",
                        name: "Photos",
                        subtitle: "Jan 9, 2014",
                    },
                    {
                        image: "https://cdn.vuetifyjs.com/images/john.jpg",
                        name: "Photos",
                        subtitle: "Jan 9, 2014",
                    },
                    {
                        image: "https://cdn.vuetifyjs.com/images/john.jpg",
                        name: "Photos",
                        subtitle: "Jan 9, 2014",
                    },
                ],
                selects: [],
                search: "",
            },
        };
    },
    computed: {
        getRemianTeachers() {
            let remains = [];
            remains = this.teachers.value.filter(
                (teacher) => this.Mycourse.teachers.indexOf(teacher) == -1
            );
            remains = remains.filter(
                (teacher) => teacher.name.indexOf(this.teachers.search) >= 0
            );
            return remains;
        },
    },
    methods: {
        submit() {
            if (!this.$refs.form.validate()) return;
            console.log(this.Mycourse);
            let formData = new FormData();
            let file = this.Mycourse.image;
            formData.append("file", file);
            let config = {
                onUploadProgress: (ProgressEvent) => {
                    let progress =
                        ((ProgressEvent.loaded / ProgressEvent.total) * 100) |
                        0;
                },
            };

            console.log(formData);
        },
        selectDate() {
            this.Mycourse.start_time = `${this.course.date.date} ${this.course.date.time}`;
            this.course.date.menu = false;
        },
        addTeachers() {
            this.Mycourse.teachers.push(...this.teachers.selects);
            this.teachers.selects = [];
            this.teachers.dialog = false;
        },
    },
};
</script>

<style>
</style>