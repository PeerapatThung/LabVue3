<template>
  <div class="event-card">
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
      event: {
          type: Object,
          required: true,
      }
  }
  
}
</script>

<style scoped>
.events {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.event-card {
  padding: 20px;
  width: 500px fixed;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>