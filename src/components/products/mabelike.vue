<template>
  <div>
    <div>
      <p style="font-size:16px;color:#333;line-height:22px;font-weight:500px;margin-left:20px;">猜你喜欢</p>
        <div v-for="item in likeList" :key="item.itemId" style="margin-left:20px;margin-top:10px">
            <img :src="item.imgUrl" alt="推荐图片" style="border-radius:5px">
            <p>{{item.title}}</p>
            <p>
                <el-rate v-model="item.score" disabled  text-color="#ff9900" ></el-rate>
                <span style="font-size:12px;color:#999;height:24px;line-height:24px">{{item.commentNum}}评价</span>
            </p>
             <p>
                 <span style="font-size:12px;color:#ccc">{{item.areaName}}</span>
             </p>
             <p style="font-size:22px;color:red;font-weight:700">￥{{item.lowPrice}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likeList: [
        {
          itemId: "2412338",
          title: "金真子纸上烤肉（双桥店）",
          imgUrl: "//p1.meituan.net/poi/b0588c60f5885dc1aec50fa82f579bc5178176.jpg@190w_106h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        }
      ]
    };
  }
};
</script>

<style lang="scss">
    .el-rate{
        display: inline-block;
    }
</style>