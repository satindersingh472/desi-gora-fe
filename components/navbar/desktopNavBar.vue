<template>
  <div>
    <v-app-bar app height="150px" class="white" flat>
      <v-row>
        <v-col>
          <v-img
            :src="require('/assets/images/logo/logo.png')"
            width="100px"
            height="100px"
          ></v-img>
        </v-col>
        <v-col align-self="center" >
            
          <v-row >
         <v-col v-for="(link,index) in links" :key="index" >{{ link['to'] }}</v-col>  
        </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: 'Home',
        },
        {
          to: 'Contact',
        },
        {
          to: 'About',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
