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
                    src: 'https://www.youtube.com/embed/GhfILKrZkr0',
                    thumb: 'https://event.hhh.com.tw/2021trends/images/intro01/video_bg.jpg',
                },
            ],
            index: null,
            slide: 0,
            sliding: null,
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    },
    mounted() {
        this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            console.log(bvEvent, modalId)
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
                            <h2>廖 韋強</h2>
                            <p class="ml-5 mb-2">Interior Design Masters</p>
                            <div>John</div>
                            <div class="ml-5">Liao</div>
                        </div>
                        <div class="intro01__other my-3">
                            <div class="arrow arrow-right"></div>
                            <div class="line"></div>
                        </div>
                        <div class="intro01__contextSmall">
                            <p>唐林建築室內設計 <br><span>INTERIOR QUARRY DESIGN</span></p>
                        </div>
                        <picture>
                            <img id="person02" src="~@/assets/images/dsr/02/person_2.png" height="520px" alt="唐林建築室內設計">
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

        <!--<<<<<<<<<< Logo 與故事簡介-intro_02 >>>>>>>>>>-->

        <section class="intro02 bg-black py-md-6">
            <div class="container">
                <div class="intro02__logo pt-md-6">
                    <img class="d-none d-md-block" src="~@/assets/images/dsr/02/logo.png" alt="唐林建築室內設計">
                    <img class="d-block d-md-none" src="~@/assets/images/dsr/02/logo.png" style="max-width:230px; height: 190px;" alt="唐林建築室內設計">
                </div>
                <div class="intro02__story">
                    <p class="intro02__story--para">
                        「瘋狂活著再死去，就是做設計的硬道理！」 － 廖韋強
                    </p>
                    <p>
                        從事室內設計已30餘年的唐林建築室內設計總監廖韋強，身兼生活實踐家、極限運動家、大學講師等多種身分，熱愛廚藝、藝術繪畫與帆船運動，他從不為自己設限也不盲目追尋所謂的「主流」風尚，他以「狂」字定義自己，用自身觀點、信念，創造自己的語言，傳遞獨一無二的態度與精神。
                    </p>
                    <p>
                        他認為「瘋狂活著再死去，就是做設計的硬道理！」，笑著說：「我每次過了一個年度感覺就好像重生了。我把每年的作品都當作是最後的作品，做完了明年就不會出現第二次。」直率的話語如實反應他的個性與設計關鍵字──「變」，也就是不重複。無論是日常對話或是設計作品，他都希望有多樣化的呈現。規劃空間時亦設身處地換位思考，將自我意識提升到與委託人同樣的高度，模擬生活其中的情景、畫面、感受，反覆驗證、檢討，建構極具震撼力的居住體驗。希望能幫委託人把心裡面最原始的狀態、熱情及瘋狂的想法轉化為現實，讓他們推開門片彷彿走入哆啦A夢的任意門，進入到另一個世界，內心盈滿感動、快樂，開啟精采冒險。
                    </p>
                    <p>
                        未來，他希望能挑戰各種風格，也許是純淨無垢的「神之國度」，或是未來可能會蔚為風潮的亞洲風，冀望於各個作品中揉入深厚經驗值、對設計的熱情及創新思維，帶給委託人與自己刺激與愉悅，走出一條不平凡的道路。
                    </p>
                </div>
                <div class="d-block d-md-none">
                    <img src="~@/assets/images/dsr/02/person_2.png" width="100%" alt="唐林建築室內設計">
                </div>
            </div>
        </section>

        <!--<<<<<<<<<< Portfolio-intro_03 >>>>>>>>>>-->

        <section class="intro03 pb-8 bg-black">
            <div class="container px-0">
                <!-- go right -->
                <div class="d-none d-md-block">
                    <div class="goright-btn-wrapper">
                        <a href="https://hhh.com.tw/designer-index.php?designer_id=681" target="_blank">
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

                        <!-- <div
                            class="intro03__bgWrapper mr"
                            :class="`intro03__bgWrapper--0${`${imageIndex +1}`}`"
                            v-for="(image, imageIndex) in items"
                            :key="imageIndex"
                            >
                            <div class="intro03__bg"
                                :class="`intro03__bg--0${`${imageIndex +1}`}`"
                                :style="{ backgroundImage: 'url(' + image.case + ')' }"
                                @click="index = imageIndex">
                            </div>
                        </div> -->

                        <div class="intro03__bgWrapper intro03__bgWrapper--01 mr" v-b-modal="'johnCase-01'">
                            <div class="intro03__bg intro03__bg--01"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--02 mr" v-b-modal="'johnCase-02'">
                            <div class="intro03__bg intro03__bg--02"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--03 mr" v-b-modal="'johnCase-03'">
                            <div class="intro03__bg intro03__bg--03"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--04" v-b-modal="'johnCase-04'">
                            <div class="intro03__bg intro03__bg--04"></div>
                        </div>
                    </aside>
                </div>

                <!-- <div class="d-block d-md-none">
                    <aside class="py-md-4 d-block">
                        <img data-toggle="modal" data-target="#case01" class="intro03__img mb-4" src="~@/assets/images/dsr/01/case/idx_01/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img data-toggle="modal" data-target="#case02" class="intro03__img mb-4" src="~@/assets/images/dsr/01/case/idx_02/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img data-toggle="modal" data-target="#case03" class="intro03__img mb-4" src="~@/assets/images/dsr/01/case/idx_03/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img data-toggle="modal" data-target="#case04" class="intro03__img mb-8" src="~@/assets/images/dsr/01/case/idx_04/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                    </aside>
                </div> -->
            </div>

            <div class="d-block d-md-none">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <p class="intro03__portfolio--rt">
                        <a href="https://hhh.com.tw/designer-index.php?designer_id=681" target="_blank">SEE MORE</a>
                    </p>

                    <!-- gotop -->
                    <div class="top-btn-wrapper pt-6 pb-4 d-block d-md-none">
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


        <b-modal id="johnCase-01" hide-footer hide-header centered scrollable>
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_01/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_01/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_01/content/c03.jpg"></b-carousel-slide>
            </b-carousel>
        </b-modal>

        <b-modal id="johnCase-02" hide-footer hide-header centered scrollable>
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_02/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_02/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_02/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="johnCase-03" hide-footer hide-header centered scrollable>
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_03/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_03/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_03/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="johnCase-04" hide-footer hide-header centered scrollable>
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_04/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_04/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/02/case/idx_04/content/c03.jpg"></b-carousel-slide>
                
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
        background-image: url('~@/assets/images/dsr/02/case/idx_01/cover.jpg');
    }
    .intro03__bg--02 {
        background-image: url('~@/assets/images/dsr/02/case/idx_02/cover.jpg');
    }
    .intro03__bg--03 {
        background-image: url('~@/assets/images/dsr/02/case/idx_03/cover.jpg');
    }
    .intro03__bg--04 {
        background-image: url('~@/assets/images/dsr/02/case/idx_04/cover.jpg');
    }

</style>