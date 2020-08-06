<template>
    <div id="main">
    <Header title="电影院"/>
    <div id="content">
        <div class="cinema_menu">
            <div class="city_switch">
                全城 <i class="iconfont icon-lower-triangle"></i>
            </div>
            <div class="brand_swtich">
                品牌 <i class="iconfont icon-lower-triangle"></i>
            </div>
            <div class="feature_switch">
                特色 <i class="iconfont icon-lower-triangle"></i>
            </div>
            <cinemaList/>
        </div>
    </div>
    <TabBar/>
    </div>
  
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import cinemaList from '@/components/cinemaList'
export default {
   name:'Cinema',
    components: {
       Header,
       TabBar,
       cinemaList
   }
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 40px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:lwhite; flex:1; overflow:auto;}
</style>