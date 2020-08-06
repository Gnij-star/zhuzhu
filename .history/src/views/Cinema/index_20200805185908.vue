<template>
    <div id="main">
    <Header title="电影院"/>
    <div id="content">
        <div class="cinema_menu">
            <router-link tag="div"  to="/cinema/cityList" class="city_switch">
                全城 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link tag="div" to="/cinema/cinemaList" class="brand_swtich">
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
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; display: flex; flex-direction:column;}
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>