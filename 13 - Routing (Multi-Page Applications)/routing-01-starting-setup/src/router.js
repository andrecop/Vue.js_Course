import { createRouter, createWebHistory } from 'vue-router';


import NotFound from './pages/NotFound.vue'

import TeamsFooter from './pages/TeamsFooter.vue'
import TeamsList from './pages/TeamsList.vue'

import UsersFooter from './pages/UsersFooter.vue'
import UsersList from './pages/UsersList.vue'

import TeamMembers from './components/teams/TeamMembers.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [

    // { path: '/', component: TeamsList },

    { path: '/', redirect: '/teams' },

    // { path: '/teams', component: TeamsList, alias: '/' },

    // { name: 'teams', path: '/teams', component: TeamsList, children: [
    //   { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
    // ] },
    
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        },
      ]
    },

    // { path: '/users', component: UsersList },
    
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('Users beforeEnter');
        console.log(to, from);
        next();
      }
    },

    // { path: '/teams/new' },

    // { path: '/teams/:teamId', component: TeamMembers, props: true },

    { path: '/:notFound(.*)', component: NotFound },

  ],
  // linkActiveClass: 'router-link-active'
  // linkActiveClass: 'active'
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if(savedPosition){
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if(to.meta.needsAuth){
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
  // next(false);
  // next('/teams');
  // if(to.name === 'team-members'){
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  
});

router.afterEach(function(to, from) {
  // useful sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;