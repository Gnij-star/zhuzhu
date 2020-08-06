<template>
    <div id="main">
    <Header title="电影院"/>
    <div id="content">
        <div class="cinema_menu">
            <router-link tag="div"  to="/cityList" class="city_switch">
                全城 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link tag="div" to="/cityList" class="brand_swtich">
                品牌 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link tag="div" class="feature_switch">
                特色 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
        </div>
    </div>
    <TabBar/>
    </div>
  
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
   name:'Cinema',
    components: {
       Header,
       TabBar
   }
}
</script>

<style>

</style>