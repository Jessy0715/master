<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import Intro from '@/components/Intro.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Intro,
  }
}
</script>
<template>
  <div class="home">
    <Banner />
    <Intro />
  </div>
</template>
