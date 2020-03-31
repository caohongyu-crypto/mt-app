<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl
      v-for="(item, index) in cityGroup"
      :key="index"
      class="m-categroy-section"
      :id="'city-' + index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="cityGroup in item" :key="cityGroup.id" @click="changeCity(cityGroup)">{{cityGroup.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: null
    };
  },
  created() {
    api.getCityList().then(res => {
      let obj = {};
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = obj;
    });
  },
  methods:{
      changeCity(item){
          this.$store.dispatch('setPosition', item);
          this.$router.push({name: 'index'})
      }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>