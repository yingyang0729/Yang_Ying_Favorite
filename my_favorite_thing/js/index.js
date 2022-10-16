const Home = { template: '<div class="teamText"><h2 class="teamTitle">Design</h2><h3 class="teamTitle">My future full-time job<h3><p class="teamTitle">I like design and I also have many years experiences for real design, such as, wedding design and stage design. My future full-time job will be a designer.</P><img class="ourTeamM" src="images/design.jpg"></div>' }
const marketing = { template: '<div class="teamText"><h2 class="teamTitle">Marketing</h2><h3 class="teamTitle">My future main job<h3><p class="teamTitle">I also have a lot of marketing working experience and I have been working as a social marketing sells for a long time. It will be my main job in the future.</P><img class="ourTeamM" src="images/marketing.jpg"></div>' }
const writing = { template: '<div class="teamText"><h2 class="teamTitle">Writing</h2><h3 class="teamTitle">My future part-time job<h3><p class="teamTitle">In the past, I want to be a writer but I do not insist on it because it will spend a lot of time on thinking of scinarios. However, I will be a writer again after I become a senior person.</P><img class="ourTeamM" src="images/writing.jpg"></div>' }


const routes = [
  { path: '/', 
    name: "home", 
    component: Home },

  { path: '/marketing', 
    name: "marketing",
    component: marketing, },

  { path: '/writing', 
    name: "writing",
    component: writing, },

]


const router = VueRouter.createRouter({
  
  history: VueRouter.createWebHashHistory(),
  routes, 
})


const app = Vue.createApp({})

app.use(router)

app.mount('#app')
