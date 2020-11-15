<template>
  <div>
    <v-container>

      <p class="display-3 font-weight-light	text-center pa-4">購買課程</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">課程</th>
                <th class="text-center">價格</th>
                <th class="text-center">開課時間</th>
                <th class="text-center"></th>
              </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in $store.state.shoppingcart.cart_items">
                  <tr>
                    <td>

                      <v-list-item
                      key="1"
                      @click=""
                    >
                      <v-list-item-avatar>
                        <v-img :src="require('../assets/img/shop/1.jpg')"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title >{{item.course_name}}</v-list-item-title>
                        <v-list-item-subtitle>{{item.teacher_name}}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item></td>
                    <td>NTD ${{item.course_price}}</td>
                    <td>{{item.course_start_time}}</td>
                    
                    <td><a>X</a></td>
                  </tr>
                </template>
             
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">訂單總計</p>
          <p class="overline">很開心你喜歡這些課程！請確認項目及金額後按下確認結帳，系統會進入線上金流付款流程。
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>課程總金額</td>
                <td class="text-right" style="width: 50px;">${{total_amount}}</td>
              </tr>
              <tr>
                <td>折扣</td>
                <td class="text-right" style="width: 50px;">${{discount_amount}}</td>
              </tr>
              
              <tr>
                <td>付款金額</td>
                <td class="text-right" style="width: 50px;"><b>${{payment_amount}}</b></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined @click="chekcout">確認結帳</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-card  class="accent" >
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4 hidden-sm-only" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">優質講師</h3>
                <p class="font-weight-thin">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">課程品質保證</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">安全環境</h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
    export default {
        data: () => ({
            discount_amount:0
        }),
        computed:{
          total_amount:function() {
            let result = 0;
            for (let item of this.$store.state.shoppingcart.cart_items){
                result += item.course_price;
            }
            return result;
          },
          payment_amount:function() {
            return this.total_amount - this.discount_amount;
          },
        },
        methods:{
          chekcout(){
              this.$store.commit('loadingBox',{show:false});

              this.$store.dispatch("http/post",{
                api:"purchase", 
                amount:this.payment_amount,
                course_id:this.$store.state.shoppingcart.cart_items[0].course_id,
              }).then((data)=>{

                  if(data.status||true){
                    let new_window = window.open("https://www.w3schools.com","_blank");
                    console.log(new_window);
                      // data.purchase_id;
                  }
                  else{
                      this.$store.commit('dialogBox',{dialog:true,option:{title:"發生錯誤",message:"請稍後再試！"}});

                  }
                  
              });
          
          }
        }
    }
</script>

