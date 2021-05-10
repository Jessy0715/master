<script>
export default {

}
</script>
<template>
    <div>
        <!--<<<<<<<<<< 大 banner-sec_01 >>>>>>>>>>-->
        <!-- PC -->
        <section class="sec01 frame reveal d-none d-md-block">
            <div class="banner">
                <picture>
                    <img class="sec01__img01" src="~@/assets/images/sec01/geo_before.png" alt="幸福空間 X 與大師有約">
                </picture>
            </div>
        </section>

        <!-- mb -->
        <div class="sec01 d-block d-md-none">
            <img src="~@/assets/images/sec01/city_mb.jpg" width="100%" alt="幸福空間 X 與大師有約">
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .banner {
        height: 100vh;
        background-image: url('~@/assets/images/sec01/city.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>