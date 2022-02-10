<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="selectedComponent === 'active-goals'"/>
    <ManageGoals v-if="selectedComponent === 'manage-goals'"/> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <course-goals #default="slotProps"> -->
      <!-- <template #default="slotProps"> -->
        <!-- <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['anotherProp'] }}</p> -->
      <!-- </template> -->
    <!-- </course-goals> -->
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    // 'the-header': TheHeader
    // TheHeader: TheHeader
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>