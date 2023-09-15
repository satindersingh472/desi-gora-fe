<template>
  <div>
    <v-app-bar class="white" height="100px" app flat>
      <v-row>
        <v-col>
          <v-img
            :src="require('/assets/images/logo/logo.png')"
            width="75px"
            height="75px"
          ></v-img>
        </v-col>
        
        <v-col align-self="center" class="grid justify-end">
            <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            x-large
          ></v-app-bar-nav-icon>
        </v-col>
      </v-row>

      <!-- <div :class="{navigation:disabled,navigation_page:true}" >
        <p v-for="(link,index) in links" :key="index">{{ link['to'] }}</p>
      </div> -->

      <v-navigation-drawer
        absolute
        v-model="drawer"
        temporary
        height="100vh"
        right
        width="100%"
        class="blue lighten-3"
        
      >
        <v-list-item-group v-model="selectedItem">
          <v-list-item class="grid justify-end align-center">
            <v-list-item-icon>
              <v-icon @click.stop="drawer = false" x-large >mdi-close</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item v-for="(link, index) in links" :key="index" class="grid justify-center">
            <v-list-item-title>{{ link['to'] }} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>
    </v-app-bar>
</div>
</template>

<script>
export default {


  data() {
    return {
      drawer: false,
      selectedItem: undefined,
      disabled:false,
      links: [
        {
          to: 'Home',
        },
        {
          to: 'About',
        },
        {
          to: 'Contact',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

@keyframes opening {
    30%{
        width:30%;
        background-color: lightgrey;
    }
    60%{
        width:60%;
        background-color: lightblue;
    }
    100%{
        width:100;
        background-color:blue;
    }
}

.navigation_page{
    display:none;
}

.open{
    animation: opening 5s ease-in-out;
}


</style>
