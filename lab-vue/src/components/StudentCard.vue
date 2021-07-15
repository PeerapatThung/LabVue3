<template>
  <div class="student-card">
    <h3><span>{{ event.name }} {{ event.surname }}</span></h3>
    <h4>{{ event.gpa }}</h4>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
      event: {
          type: Object,
          required: true,
      }
  }
  
}
</script>

<style scoped>
.student-card {
  padding: 20px;
  width: 500px fixed;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(151, 14, 14, 0.2);
}
</style>