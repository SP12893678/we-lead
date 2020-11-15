<template>
  <div>
    <v-container>
      <div class="row">
        <div
         class="col-md-2 col-sm-3 col-xs-12"
        >
          <v-card outlined>
            <v-card-title>分類 Catergory</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview :items="tag" :open="[0]" :active="[1]" :selected-color="'#fff'" activatable open-on-click dense></v-treeview>
            </template>
          </v-card>
        </div>
        <div
          class="col-md-10 col-sm-9 col-xs-12"
        >
          <v-row dense>
            <v-col align-self="end" class="mb-2">
              <small>顯示 1-12 筆 {{products.length}} 內容</small>
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
            <div class="col-md-4 col-sm-6 col-xs-12" :key="i" v-for="(pro,i) in products">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                >
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="1.5"
                    :src="pro.course_image"
                  >
                  <v-card-actions class="mb-0 pb-0">
                  <v-avatar class="mb-2" style="border: 2px solid white">
                    <img
                      :src="pro.lecture_avatar"
                      alt="John"
                    >
                  </v-avatar>
                <v-chip class="ma-0 mb-1" color="black" small label dark>{{pro.course_teacher_name}}</v-chip>
                    <v-spacer></v-spacer>
                    <v-chip class="ma-0 mb-1" color="rgba(80,185,255,0.6)" small label dark>{{pro.course_mode}}</v-chip>
                  </v-card-actions>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" class="" outlined @click="goToProduct(i)">詳細資訊</v-btn>
                      </div>

                    </v-expand-transition>
                  </v-img>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-black mt-2 mb-2">
                          <h3>{{pro.course_name}}</h3>
                        </v-list-item-title>
                        <div class="boxx">
                        <p class="ellipsiss">{{pro.course_intro}}</p>
                        </div>
                        <v-row>
                          <v-col>
                            <v-chip class="ma-0 mb-1" color="orange" outlined small>
                                {{pro.course_start_time}}
                            </v-chip>
                            <v-chip class="mt-2" color="green" outlined small>
                                {{pro.course_hours}}
                            </v-chip>
                            <!-- <v-chip class="mb-2">課程時間 2020.10.20</v-chip> -->
                            <!-- <v-list-item-subtitle class="mb-2">上課時長 1.5小時</v-list-item-subtitle> -->
                            <v-list-item-subtitle class="ma-2 font-weight-black">剩餘名額 {{pro.course_capacity_remain}}人</v-list-item-subtitle>
                          </v-col>
                          <v-col align="end">
                            <h3 class="mb-2">${{pro.course_price}}</h3>
                            <v-btn
                              depressed
                              color="primary" @click="$router.push({path:'/cart'})"
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
            select:'最新上架',
            options: [
                '最新上架',
                '熱賣程度',
                '價格:低到高',
                '價格:高到低',
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
            tag: [
              {
                    id: 1,
                    name: '領導',
                    // children: [
                    //     { tag_id: 2, tag_name: 'Casuals' },
                    //     { tag_id: 3, tag_name: 'Formals' },
                    //     { tag_id: 4, tage_name: 'Sneakers' },
                    // ],
                },
                {
                    id: 2,
                    name: '交流',
                },
            ],
            products:[
                {
                    course_id:123,
                    course_name:'履歷表重塑',
                    course_tags:[],
                    course_intro:`HR看到一份履歷表的前20秒決定你的輸贏！每位學員帶自己的履歷表來，談驊老師會透過解說與實作讓你了解履歷表的優缺勢。履歷的目的是要吸睛、引起好感，讓HR願意花時間再與你進一步面談，但要避免以自己的角度來撰寫履歷，而是要透過定位與技巧，讓履歷來自我行銷。`,  
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/13 (三) 19:30-21:30',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tanhua.jpg"),
                    course_teacher_name:'談驊'
                },
                {
                    course_id:123,
                    course_name:'履歷表重塑',
                    course_tags:[],
                    course_intro:'HR看到一份履歷表的前20秒決定你的輸贏！每位學員帶自己的履歷表來，談驊老師會透過解說與實作讓你了解履歷表的優缺勢。履歷的目的是要吸睛、引起好感，讓HR願意花時間再與你進一步面談，但要避免以自己的角度來撰寫履歷，而是要透過定位與技巧，讓履歷來自我行銷。',
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/15 (五) 10:00-12:00',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tanhua.jpg"),
                    course_teacher_name:'談驊',
                },
                {
                    course_id:123,
                    course_name:'履歷表重塑',
                    course_tags:[],
                    course_intro:'HR看到一份履歷表的前20秒決定你的輸贏！每位學員帶自己的履歷表來，談驊老師會透過解說與實作讓你了解履歷表的優缺勢。履歷的目的是要吸睛、引起好感，讓HR願意花時間再與你進一步面談，但要避免以自己的角度來撰寫履歷，而是要透過定位與技巧，讓履歷來自我行銷。',
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/16 (六) 14:30-16:30',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tanhua.jpg"),
                    course_teacher_name:'談驊'
                },
                {
                    course_id:123,
                    course_name:'面試溝通技巧',
                    course_tags:[],
                    course_intro:`"請你自我介紹" - 被面試官問到時，你都有充分凸顯自己的優勢嗎？面談內容不如預期時，該怎麼辦？談驊老師會指導大家如何充分自我表達、凸顯優勢，不要再讓你的答案與你這個人 "油水分離" 了！`,
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/20 (三) 19:30-21:30',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course2.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tanhua.jpg"),
                    course_teacher_name:'談驊'
                },
                {
                    course_id:123,
                    course_name:'面試溝通技巧',
                    course_tags:[],
                    course_intro:'"請你自我介紹" - 被面試官問到時，你都有充分凸顯自己的優勢嗎？面談內容不如預期時，該怎麼辦？談驊老師會指導大家如何充分自我表達、凸顯優勢，不要再讓你的答案與你這個人 "油水分離" 了！',
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/22 (五) 10:00-12:00',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course2.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tanhua.jpg"),
                    course_teacher_name:'談驊'
                },
                {
                    course_id:123,
                    course_name:'面試溝通技巧',
                    course_tags:[],
                    course_intro:'"請你自我介紹" - 被面試官問到時，你都有充分凸顯自己的優勢嗎？面談內容不如預期時，該怎麼辦？談驊老師會指導大家如何充分自我表達、凸顯優勢，不要再讓你的答案與你這個人 "油水分離" 了！',
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/23 (六) 14:30-16:30',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course2.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tanhua.jpg"),
                    course_teacher_name:'談驊'
                },
                {
                    course_id:123,
                    course_name:'薪資談判技巧',
                    course_tags:[],
                    course_intro:`人與人之間有各種關係、角色、立場的拉扯，因此，談判是人際互動的核心，無論職場工作或是家庭生活，每時每刻都涉及了談判。薪資談判要聚焦在雙方的權益而非情緒，知己知彼才能找到交換條件。`,
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/27 (三) 19:30-21:30',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course3.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tanhua.jpg"),
                    course_teacher_name:'談驊'
                },
                {
                    course_id:123,
                    course_name:'薪資談判技巧',
                    course_tags:[],
                    course_intro:`人與人之間有各種關係、角色、立場的拉扯，因此，談判是人際互動的核心，無論職場工作或是家庭生活，每時每刻都涉及了談判。薪資談判要聚焦在雙方的權益而非情緒，知己知彼才能找到交換條件。`,
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/29 (五) 10:00-12:00',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course3.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tanhua.jpg"),
                    course_teacher_name:'談驊'
                },
                {
                    course_id:123,
                    course_name:'自己的夢想自己追 (上：打造我的理想工作)',
                    course_tags:[],
                    course_intro:`人生無法按牌理出牌，因為按了牌理出牌，也不保證會有著預想的結果；然而夢想就跟膽量一樣，都是越練越大的，不開啟使用夢想模式，永遠不可能一蹴而就。

                                  讓我們跟著Sally老師的領航，勇敢地踏上一場追逐自我夢想的旅程，抵達終點或許能讓人有成就感，但探索的過程絶對會帶給你意想不到的精彩與快樂。`,
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/29 (五) 10:00-12:00',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course3.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/wang.jpg"),
                    course_teacher_name:'王芬瑛'
                },
                {
                    course_id:123,
                    course_name:'自己的夢想自己追 (中：定義團隊的夢想)',
                    course_tags:[],
                    course_intro:`人生無法按牌理出牌，因為按了牌理出牌，也不保證會有著預想的結果；然而夢想就跟膽量一樣，都是越練越大的，不開啟使用夢想模式，永遠不可能一蹴而就。

                                  讓我們跟著Sally老師的領航，勇敢地踏上一場追逐自我夢想的旅程，抵達終點或許能讓人有成就感，但探索的過程絶對會帶給你意想不到的精彩與快樂。`,
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/29 (五) 10:00-12:00',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/wang.jpg"),
                    course_teacher_name:'王芬瑛'
                },
                {
                    course_id:123,
                    course_name:'自己的夢想自己追 (下：夢想實踐行動企劃)',
                    course_tags:[],
                    course_intro:`人生無法按牌理出牌，因為按了牌理出牌，也不保證會有著預想的結果；然而夢想就跟膽量一樣，都是越練越大的，不開啟使用夢想模式，永遠不可能一蹴而就。

                                  讓我們跟著Sally老師的領航，勇敢地踏上一場追逐自我夢想的旅程，抵達終點或許能讓人有成就感，但探索的過程絶對會帶給你意想不到的精彩與快樂。`,
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/30 (六) 14:30-16:30',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/wang.jpg"),
                    course_teacher_name:'王芬瑛'
                },
                {
                    course_id:123,
                    course_name:'創造女性的共好團體',
                    course_tags:[],
                    course_intro:'',
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/12 (二) 19:30-21:30',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/shenghua.jpg"),
                    course_teacher_name:'王聖華'
                },
                { 
                    course_id:123,
                    course_name:'創造女性的共好團體',
                    course_tags:[],
                    course_intro:'',
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/26 (二) 19:30-21:31',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/yanxuan.png"),
                    course_teacher_name:'何妍萱'
                },
                { 
                    course_id:123,
                    course_name:'創造女性的共好團體',
                    course_tags:[],
                    course_intro:'',
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/26 (二) 19:30-21:31',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/haonong.jpg"),
                    course_teacher_name:'池皓農'
                },
                { 
                    course_id:123,
                    course_name:'高EQ情緒與壓力管理',
                    course_tags:[],
                    course_intro:`生活中難免發生情緒波動與焦慮的事件，健康的情緒反應與適度的壓力，是為了讓我們能適應環境、提升工作效率；然而，超負荷的情緒與過度的壓力卻會造成身心困擾或疾病。

                                  本課程由Mia老師引導，藉由了解情緒與自我覺察，進而擁有清晰的自我認知與管理情緒和壓力紓解的抗壓力與耐挫力。

                                  在能夠自我激勵的同時，也能辨識他人情緒，敏感感受他人需要，建立具有同理心的人際關係和有效地化解衝突。`,
                    course_capacity_remain:10,
                    couse_category:'Jackets',
                    course_price:800,
                    course_start_time: '2021/1/26 (二) 19:30-21:31',
                    course_hours: '120分鐘',
                    course_mode:'線上課程',
                    course_image:require('../assets/img/shop/course1.jpg'),
                    lecture_name:'Jessica Wu',
                    lecture_avatar:require("../assets/img/teacher/tingwei.jpg"),
                    course_teacher_name:'史庭瑋'
                },
            ]
        }),
        methods:{
          goToProduct(id){
            let products = this.products
            this.$router.push({
              name: 'Product',
              params: { 
                        id: products[id].course_id,
                        name: products[id].course_name,
                        intro:
                            products[id].course_intro,
                        capacity: products[id].course_capacity_remain,
                        mode: products[id].course_mode,
                        price: products[id].course_price,
                        start_time: products[id].course_start_time,
                        hours: products[id].course_hours,
                        image: products[id].course_image,
                        tags: [],
                        teachers: products[id].course_teacher_name,
              }
            });
            } 
          },
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