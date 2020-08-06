export default{
    path: '/cinema', 
     component:()=>import('@/views/Cinema'),
  
    children:[
            { path: 'cityList', 
            component: ()=>import('@/components/City') },
            { path: 'cinemaList', 
            component: ()=>import('@/components/NowPlaying') },
            { path: 'comingSoon', 
            component: ()=>import('@/components/ComingSoon') },
            { path: 'search', 
            component: ()=>import('@/components/Search') },
            { path:'/movie',
            redirect: '/movie/nowPlaying'}
    ]}