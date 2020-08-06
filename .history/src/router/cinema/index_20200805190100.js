export default{
    path: '/cinema', 
     component:()=>import('@/views/Cinema'),
  
    children:[
            { path: 'cityList', 
            component: ()=>import('@/components/City') },
            { path: 'cinemaList', 
            component: ()=>import('@/components/NowPlaying') },
    ]}