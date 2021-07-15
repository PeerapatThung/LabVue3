<template>
  <div class="dupe-card">
    <h2><span>{{ event.category }} organized by {{ event.organizer }}</span></h2>
    <h4></h4>
  </div>
</template>

<script>
export default {
  name: 'DupeCard',
  props: {
      event: {
          type: Object,
          required: true,
      }
  }
  
}
</script>

<style scoped>
.dupe-card {
  padding: 20px;
  width: 1000px fixed;
  cursor: pointer;
  margin: 75px;
  margin-top: 10px;
}
.dupe-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(151, 14, 14, 0.2);
}
</style>