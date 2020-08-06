export default{
    path: '/cinema', 
     component:()=>import('@/views/Cinema'),
  
    children:[
            { path: 'cityList', 
            component: ()=>import('@/components/cityList') },
            { path: 'cinemaList', 
            component: ()=>import('@/components/cinemaList') },
    ]}