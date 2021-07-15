<template>
  
  <div class="events">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <table>
      <tr>
        <td><StudentCard v-for="event in events" :key="event.id" :event="event" /></td>
        </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import StudentCard from '@/components/StudentCard.vue'
import InfoService from '@/services/InfoService.js'

export default {
  name: 'StudentInfo',
  components: {
    StudentCard
  },
  data() {
    return {
     events: null
    }
  },
  created() {
    InfoService.getEvents()
    .then((response) => {
      this.events = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>
