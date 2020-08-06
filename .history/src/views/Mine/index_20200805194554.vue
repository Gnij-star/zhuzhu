<template>
    <div id="main">
    <Header title="个人中心"/>
    <login/>
    <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import L from '@/components/TabBar'
export default {
   name:'Mine', 
   components: {
       Header,
       TabBar
   }
}
</script>

<style>

</style>