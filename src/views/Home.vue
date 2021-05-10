<script>
// @ is an alias to /src
// import Nav from '@/components/Nav.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: 'Home',
  components: {
    // Nav,
    Banner
  }
}
</script>
<template>
  <div class="home">
    <Banner />
  </div>
</template>
