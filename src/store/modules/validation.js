import Vue from 'vue'

import axios from 'axios'
import VueLodash from 'vue-lodash';
Vue.use(VueLodash);

const $http = axios;
const lang = {
  "zh-TW": {
    "required": "此欄位必填",
    "email": "電子郵件格式不正確",
    "phone": "電話格式不正確",
    "number": "必須為數字",
    "password": "密碼必須包含大、小寫、數字，且長度為8-12",
    "passwordCheck": "確認密碼不符",
    "num_en": "只能輸入英文和數字"
  },
  "en_US": {
    "required": "This field is required",
    "email": "E-mail must be valid",
    "phone": "Phone number must be valid",
    "number": "must be a number",
    "password": "Password must include uppercase, lowercase and number and must be between 8-12 characters",
    "passwordCheck": "Confirm Password is not correct",
    "num_en": "Number and English character only"
  }
};
const msg = lang['zh-TW'];
const numberParser = function (v) {
  return Vue._.round(parseFloat(v), 2);
}
const initState = function () {
  return {
    required: v => (!!v) || v === 0 || msg["required"],
    email: v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || !v || msg["email"],
    phone: v => /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(v) && v.length >= 7 || !v || msg["phone"],
    number: v => /^[+-]?([0-9]*[.])?[0-9]+$/.test(v) || msg["number"],
    num_en: v => /^[A-Za-z][A-Za-z0-9]*$/.test(v) || msg["num_en"],
    password: v => /\d/.test(v) && /[a-z]/.test(v) && /[A-Z]/.test(v) && v.length >= 8 && v.length <= 12 || msg["password"],

  }
};
const state = initState();
const getters = {
  numBetween: (state, getters) => (val) => {
    return v => (numberParser(v) <= numberParser(val[1]) && parseFloat(v) >= parseFloat(val[0])) || 'This field must be between ' + val[0] + ' and ' + val[1];
  },
  numMax: (state, getters) => (val) => {
    return v => (numberParser(v) < numberParser(val)) || 'This field must be less than ' + val;
  },
  numMin: (state, getters) => (val) => {

    return v => (numberParser(v) > numberParser(val)) || 'This field must be greater than ' + val;
  },
  numMaxEq: (state, getters) => (val) => {
    return v => (numberParser(v) <= numberParser(val)) || 'This field must be less than ' + val + ' (or equal)';
  },
  numMinEq: (state, getters) => (val) => {

    return v => (numberParser(v) >= numberParser(val)) || 'This field must be greater than ' + val + ' (or equal)';
  },
  strMax: (state, getters) => (val) => {
    return v => (v && v.length <= val) || 'This field must be less than ' + val + ' characters';
  },
  strMin: (state, getters) => (val) => {
    return v => (v && v.length >= val) || 'This field must be at least ' + val + ' characters';
  },
  passwordCheck: (state, getters) => (val) => {
    return v => (v == val) || msg["passwordCheck"];
  },
  inputRules: (state, getters) => (rules, val) => {
    let result = [];
    for (let i = 0; i < rules.length; i++) {
      if (state[rules[i]] != undefined) {
        result.push(state[rules[i]]);
      } else if (getters[rules[i]] != undefined) {
        result.push(getters[rules[i]](val));
      }
    }

    return result;
  }
};

// actions
const actions = {

}

// mutations
const mutations = {
  reset(state) {
    // state = Object.assign(state, initState());
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}