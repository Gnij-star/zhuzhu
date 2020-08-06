<template>
    <div id="main">
    <Header title="个人中心"/>
    <div id="main">
		<header id="header">
			<h1>登录喵喵</h1>
		</header>
    <TabBar/>
    
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
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