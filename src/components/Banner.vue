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

        <!--<<<<<<<<<< 新時代趨勢解讀-sec_02 >>>>>>>>>>-->
        <section class="sec02 bg-black py-8 d-none d-md-block" id="sec02">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <h2 class="sec02__title py-5 py-md-7 mb-0">新時代趨勢解讀</h2>
                <div class="sec02__context d-none d-md-block">
                    <p>
                        2020年受疫情的影響，人類生活受到了重大影響，室內設計不再僅只於滿足基本的生活需求，也帶入更多撫平情緒、治癒人心的作用，這段期間帶來的影響，也已經逐漸改變了人們原有的生活習慣。
                    </p>
                    <p>
                        人們追求居住空間如何讓人放鬆沈澱、相互交流，描繪慢活優雅新生活的同時。我們也正即將邁入2021嶄新的一年，讓我們來聽聽室內設計大師對室內設計的未來有什麼樣的獨特見解。
                    </p>
                </div>
            </div>
        </section>

        <section class="sec02 bg-black pt-5 pb-8 d-block d-md-none" id="sec02-mb">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <h2 class="sec02__title py-5 mb-0">新時代趨勢解讀</h2>
                <div class="sec02__context">
                    <p>
                        2020年受疫情的影響，人類生活受到了重大影響，室內設計不再僅只於滿足基本的生活需求，也帶入更多撫平情緒、治癒人心的作用，這段期間帶來的影響，也已經逐漸改變了人們原有的生活習慣。
                    </p>
                    <p>
                        人們追求居住空間如何讓人放鬆沈澱、相互交流，描繪慢活優雅新生活的同時。我們也正即將邁入2021嶄新的一年，讓我們來聽聽室內設計大師對室內設計的未來有什麼樣的獨特見解。
                    </p>
                </div>
            </div>
        </section>
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