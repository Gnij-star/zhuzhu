export default{
    path: '/cinema', 
     component:()=>import('@/views/Cinema'),
  
    children:[
            { path: 'cityList', 
            component: ()=>import('@/components/') },
            { path: 'cinemaList', 
            component: ()=>import('@/components/NowPlaying') },
    ]}