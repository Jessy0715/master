<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    components: {
        CoolLightBox,
    },
    data() {
        return {
            items: [
                {
                    src: 'https://www.youtube.com/embed/C2cHgOCFnwM',
                    thumb: 'https://event.hhh.com.tw/2021trends/images/intro01/video_bg.jpg',
                },
            ],
            index: null,
            slide: 0,
            sliding: null,
            bodyBgVariant: 'light'
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    mounted() {
        this.$root.$on('bv::modal::show', (modalId) => {
            console.log(modalId);
        })
    }
}
</script>
<template>
    <div>
        <!--<<<<<<<<<< 人物介紹與影音-intro_01 >>>>>>>>>>-->

        <div class="d-none d-md-block">
            <section class="intro01 bg-black">
                <div class="intro01__concept">
                    <div class="intro01__bg">
                        <div class="intro01__context">
                            <h2>陳 琬婷</h2>
                            <p class="ml-5 mb-2">Interior Design Masters</p>
                            <div>Debby</div>
                        </div>
                        <div class="intro01__other my-3">
                            <div class="arrow arrow-right"></div>
                            <div class="line"></div>
                        </div>
                        <div class="intro01__contextSmall">
                            <p>舒杰室內裝修設計 <br><span>Debby INTERIOR DESIGN</span></p>
                        </div>
                        <picture>
                            <img id="person02" src="~@/assets/images/dsr/03/person.png" height="520px" alt="舒杰室內裝修設計">
                        </picture>
                    </div>
                </div>
                <div class="intro01__video">
                    <div class="wrapper">
                        <div
                            class="intro01__video__bg"
                            v-for="(image, imageIndex) in items"
                            :key="imageIndex"
                            @click="index = imageIndex"
                            :style="{ backgroundImage: 'url(' + image.thumb + ')' }">
                            <img class="play" src="~@/assets/images/intro01/YT_icon_black.png" alt="YT-icon">
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="d-block d-md-none">
            <section class="intro01 bg-black">
                <div class="intro01__context">
                    <h2>陳 琬婷</h2>
                    <p class="ml-5 mb-2">Interior Design Masters</p>
                    <div>Debby</div>
                </div>
                <div class="intro01__bg">
                    <picture>
                        <img src="~@/assets/images/dsr/03/person.png" width="92%" alt="舒杰室內裝修設計">
                    </picture>
                </div>
                <div class="intro01__video py-5">
                    <div 
                        class="intro01__video__bg"
                        v-for="(image, imageIndex) in items"
                        :key="imageIndex"
                        @click="index = imageIndex"
                        :style="{ backgroundImage: 'url(' + image.thumb + ')' }">
                        <img class="play" src="~@/assets/images/intro01/YT_icon_black.png" width="45px" alt="YT-icon">
                    </div>
                </div>
            </section>
        </div>


        <!--<<<<<<<<<< Logo 與故事簡介-intro_02 >>>>>>>>>>-->

        <section class="intro02 bg-black py-md-6">
            <div class="container">
                <div class="intro02__logo pt-md-6">
                    <img class="d-none d-md-block" src="~@/assets/images/dsr/03/logo.png" alt="舒杰室內裝修設計">
                    <img class="d-block d-md-none" src="~@/assets/images/dsr/03/logo.png" style="max-width:230px; height: 190px;" alt="舒杰室內裝修設計">
                </div>
                <div class="intro02__story">
                    <p class="intro02__story--para">
                        「突破框架與永續設計，整合機能與美學設計的空間工藝。」－陳琬婷
                    </p>
                    <p>
                        擁有十餘年的建築與室內設計經歷，向來以專業且多元化的商業及住宅設計，提供業主專業空間美學諮詢及建築室內設計與工程服務。舒杰室內設計創辦人及設計總監陳琬婷，在不斷前進與突破框架中，總細膩地為台灣創建更好的設計空間。
                    </p>
                    <p>
                        從小旅居加拿大，畢業於加拿大曼尼托巴大學建築系的陳琬婷總監，與藝術淵源極深，求學路上在師長的啟發下，讓她對設計產生憧憬，就此啟蒙了設計創作生涯，走上建築與室內設計這條路！「在國外的求學環境，接觸到許多不同的人事物，遊歷各國的所見所聞，都是我做設計的養分」，談到設計，雙眼總透著濃烈的熱情，而這正是她之所以被稱為「設計狂小姐」的原因。堅持「莫忘初衷」，推著她專注地投入眼前每一件事情，不僅讓她獲得客戶的認同與喜愛，近年來，設計作品也一直在國際舞台上發光發熱。
                    </p>
                    <p>
                        擅於整合機能與美學設計，讓設計及工藝層次與先進跳脫框架，並關注環境綠建材議題與應用，她時常透過服務項目與業主倡議環保建材及環境保護的重要。2020疫情隔離為人們的生活帶來不小的影響，她認為，極簡素淨且安靜高雅的居宅，屏除繁複線條，進駐綠意的舒心安全居所，將成為設計的重心。身為設計前端者的角色，她堅持為台灣及環境美學設計盡一份力量，放眼國際，回饋客戶與社會，賦予室內建築的使用空間更多的美意。
                    </p>
                </div>
                <div class="d-block d-md-none">
                    <img src="~@/assets/images/dsr/03/person_2.png" width="100%" alt="舒杰室內裝修設計">
                </div>
            </div>
        </section>

        <!--<<<<<<<<<< Portfolio-intro_03 >>>>>>>>>>-->

        <section class="intro03 pb-8 bg-black">
            <div class="container px-0">
                <!-- go right -->
                <div class="d-none d-md-block">
                    <div class="goright-btn-wrapper">
                        <a href="https://hhh.com.tw/designer-index.php?designer_id=507" target="_blank">
                            <img class="goright-btn" src="~@/assets/images/icon/goright.svg">
                        </a>
                    </div>
                </div>
                <div class="d-none d-md-block">
                    <div class="intro03__portfolio">
                        <div class="intro03__portfolio--lf">Portfolio</div>
                        <div class="line2"></div>
                        <div class="intro03__portfolio--rt">MORE</div>
                    </div>
                </div>

                <div class="intro03__portfolio--lf py-6 d-block d-md-none">Portfolio</div>

                <div class="d-none d-md-block">
                    <aside class="py-md-4">
                        <div class="intro03__bgWrapper intro03__bgWrapper--01 mr" v-b-modal="'debbyCase-01'">
                            <div class="intro03__bg intro03__bg--01"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--02 mr" v-b-modal="'debbyCase-02'">
                            <div class="intro03__bg intro03__bg--02"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--03 mr" v-b-modal="'debbyCase-03'">
                            <div class="intro03__bg intro03__bg--03"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--04" v-b-modal="'debbyCase-04'">
                            <div class="intro03__bg intro03__bg--04"></div>
                        </div>
                    </aside>
                </div>

                <div class="d-block d-md-none">
                    <aside class="py-md-4 d-block">
                        <img v-b-modal="'debbyCase-01'" class="intro03__img mb-4" src="~@/assets/images/dsr/03/case/idx_01/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'debbyCase-02'" class="intro03__img mb-4" src="~@/assets/images/dsr/03/case/idx_02/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'debbyCase-03'" class="intro03__img mb-4" src="~@/assets/images/dsr/03/case/idx_03/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'debbyCase-04'" class="intro03__img mb-8" src="~@/assets/images/dsr/03/case/idx_04/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                    </aside>
                </div>
            </div>

            <div class="d-block d-md-none">
                <div class="d-flex flex-column justify-content-center align-items-center pt-5">
                    <p class="intro03__portfolio--rt">
                        <a href="https://hhh.com.tw/designer-index.php?designer_id=507" target="_blank">SEE MORE</a>
                    </p>

                    <!-- gotop -->
                    <div class="top-btn-wrapper pt-5 pb-4 d-block d-md-none" @click="scrollToTop">
                        <img class="gotop-btn" src="~@/assets/images/icon/gotop.svg">
                    </div>
                </div>
            </div>
        </section>

        <!-- Lightbox 影片 -->

        <CoolLightBox 
            :items="items" 
            :index="index"
            @close="index = null">
        </CoolLightBox>


        <b-modal id="debbyCase-01" hide-footer hide-header centered scrollable
                    :body-bg-variant="bodyBgVariant">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                fade
                indicators
                img-width="100"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_01/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_01/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_01/content/c03.jpg"></b-carousel-slide>
            </b-carousel>
        </b-modal>

        <b-modal id="debbyCase-02" hide-footer hide-header centered scrollable
                    :body-bg-variant="bodyBgVariant">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                fade
                indicators
                img-width="100"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_02/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_02/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_02/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="debbyCase-03" hide-footer hide-header centered scrollable
                    :body-bg-variant="bodyBgVariant">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                fade
                indicators
                img-width="100"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_03/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_03/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_03/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="debbyCase-04" hide-footer hide-header centered scrollable
                    :body-bg-variant="bodyBgVariant">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                fade
                indicators
                img-width="100"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_04/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_04/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/03/case/idx_04/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>


    </div>
</template>

<style lang="scss" scoped>
    .intro03 {
        padding: 0 0 6rem 0;
    }
    .intro01__bg {
        background-image: url('~@/assets/images/intro01/city_bg.png');
        cursor: pointer;
    }
    .intro01__video__bg {
        background-image: url('~@/assets/images/intro01/video_bg.jpg');
    }
    .intro03__bg--01 {
        background-image: url('~@/assets/images/dsr/03/case/idx_01/cover.jpg');
    }
    .intro03__bg--02 {
        background-image: url('~@/assets/images/dsr/03/case/idx_02/cover.jpg');
    }
    .intro03__bg--03 {
        background-image: url('~@/assets/images/dsr/03/case/idx_03/cover.jpg');
    }
    .intro03__bg--04 {
        background-image: url('~@/assets/images/dsr/03/case/idx_04/cover.jpg');
    }

</style>