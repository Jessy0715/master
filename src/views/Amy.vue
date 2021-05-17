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
                    src: 'https://www.youtube.com/embed/qc-rFcLOI5U',
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
                            <h2>潘 仕敏</h2>
                            <p class="ml-5 mb-2">Interior Design Masters</p>
                            <div>Amy</div>
                            <div class="ml-6">Pan</div>
                        </div>
                        <div class="intro01__other my-3">
                            <div class="arrow arrow-right"></div>
                            <div class="line"></div>
                        </div>
                        <div class="intro01__contextSmall">
                            <p>雲方設計 <br><span>AMY INTERIOR DESIGN</span></p>
                        </div>
                        <picture>
                            <img id="person02" src="~@/assets/images/dsr/05/person.png" height="520px" alt="雲方設計">
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
                    <img class="d-none d-md-block" src="~@/assets/images/dsr/04/logo.png" alt="雲方設計">
                    <img class="d-block d-md-none" src="~@/assets/images/dsr/04/logo.png" style="max-width:230px; height: 190px;" alt="雲方設計">
                </div>
                <div class="intro02__story">
                    <p class="intro02__story--para">
                        「古典美學的細膩演繹，以設計砌築具有溫度感的雋永之家。」－潘仕敏
                    </p>
                    <p>
                        讓「回家」成為每位業主對生活最美好也最值得期待的事，居住空間被視為延伸居住者生活品味的最佳場景，雲方室內設計潘仕敏設計總監透過擅長的古典風格設計，本著協助每一位業主打造專屬質感居家為理念，以細膩的古典設計語彙，賦予每個作品表述溫馨與精緻度的居住氛圍。
                    </p>
                    <p>
                        「古典風格饒富多樣性，更是經典不敗的風格之選」，這是潘仕敏設計總監鍾情古典風格的原因，在細膩的古典元素鋪敘下，具體傳遞了古典美學在現代社會的多元風采，讓空間襯托居住者之於生活豐厚的涵養與品味，且充滿情感溫度。過往常利用出國參訪古典風飯店、餐廳的所見所聞轉化為她在設計時的養分，讓每個作品都能更道地展現獨有風情。每次與業主的合作，她也特別講究前期充分的溝通，注重細節，精於搭配，嚴謹工程把關，將每一個細節做到完美，而這正是她對設計的堅持。
                    </p>
                    <p>
                        擅於從英式、美式、鄉村等各類不同古典風格之中，帶領業主梳理出自己鍾愛的風格屬性，再以詳實平面配置規劃為基礎，佐以軟裝色彩佈置、五金配件、燈飾等，恰到好處地融合應用。「帶領大家跳脫一般人對於古典風格老氣、拘謹的刻板印象，而我們要做的就是透過布料、油漆、壁紙、五金的靈活運用，勾勒休憩舒適性」，在空間佈局、設計手法、精裝風格細節上加以琢磨，為業主營造道地且因地制宜的風格居家，圍塑舒適迷人的生活場景，砌築業主所嚮往的居家樣貌。
                    </p>
                </div>
                <div class="d-block d-md-none">
                    <img src="~@/assets/images/dsr/04/person.png" width="100%" alt="雲方設計">
                </div>
            </div>
        </section>

        <!--<<<<<<<<<< Portfolio-intro_03 >>>>>>>>>>-->

        <section class="intro03 pb-8 bg-black">
            <div class="container px-0">
                <!-- go right -->
                <div class="d-none d-md-block">
                    <div class="goright-btn-wrapper">
                        <a href="https://hhh.com.tw/designer-index.php?designer_id=182" target="_blank">
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

                        <div class="intro03__bgWrapper intro03__bgWrapper--01 mr" v-b-modal="'amyCase-01'">
                            <div class="intro03__bg intro03__bg--01"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--02 mr" v-b-modal="'amyCase-02'">
                            <div class="intro03__bg intro03__bg--02"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--03 mr" v-b-modal="'amyCase-03'">
                            <div class="intro03__bg intro03__bg--03"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--04" v-b-modal="'amyCase-04'">
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
                        <a href="https://hhh.com.tw/designer-index.php?designer_id=507" target="_blank">SEE MORE</a>
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


        <b-modal id="amyCase-01" hide-footer hide-header centered scrollable>
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_01/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_01/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_01/content/c03.jpg"></b-carousel-slide>
            </b-carousel>
        </b-modal>

        <b-modal id="amyCase-02" hide-footer hide-header centered scrollable>
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_02/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_02/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_02/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="amyCase-03" hide-footer hide-header centered scrollable>
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_03/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_03/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_03/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="amyCase-04" hide-footer hide-header centered scrollable>
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_04/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_04/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/05/case/idx_04/content/c03.jpg"></b-carousel-slide>
                
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
        background-image: url('~@/assets/images/dsr/05/case/idx_01/cover.jpg');
    }
    .intro03__bg--02 {
        background-image: url('~@/assets/images/dsr/05/case/idx_02/cover.jpg');
    }
    .intro03__bg--03 {
        background-image: url('~@/assets/images/dsr/05/case/idx_03/cover.jpg');
    }
    .intro03__bg--04 {
        background-image: url('~@/assets/images/dsr/05/case/idx_04/cover.jpg');
    }

</style>