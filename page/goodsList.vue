<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <cate-groy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
               <img src="@/assets/map.png" alt style="margin-left:13px;" />
               <mabe-like />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Crumbs from '@/components/products/crumbs'
import CateGroy from '@/components/products/categroy'
import List from '@/components/products/list'
import MabeLike from '@/components/products/mabelike'
export default {
    components:{
        Crumbs,
        CateGroy,
        List,
        MabeLike
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>