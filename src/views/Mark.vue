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
                    src: 'https://www.youtube.com/embed/pb2YEuFnLUw',
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
                            <h2><span class="mr-3">林</span> 馬克</h2>
                            <p class="ml-5 mb-2">Interior Design Masters</p>
                            <div>Mark</div>
                            <div class="ls-2 ml-6">Lintott</div>
                        </div>
                        <div class="intro01__other my-3">
                            <div class="arrow arrow-right"></div>
                            <div class="line"></div>
                        </div>
                        <div class="intro01__contextSmall">
                            <p>林馬克設計 <br><span>MARK LINTOTT DESIGN</span></p>
                        </div>
                        <picture>
                            <img id="person01" class="" src="~@/assets/images/dsr/01/person.png" height="520px" alt="林馬克設計">
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
                    <h2>林 馬克</h2>
                    <p class="ml-5 mb-2">Interior Design Masters</p>
                    <div>Mark</div>
                    <div class="ls-2 ml-5">Lintott</div>
                </div>
                <div class="intro01__bg">
                    <picture>
                        <img src="~@/assets/images/dsr/01/person.png" width="92%" alt="林馬克設計">
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
                    <img class="d-none d-md-block" src="~@/assets/images/dsr/01/logo.png" style="max-width:410px; height: 180px;" alt="林馬克設計">
                    <img class="d-block d-md-none" src="~@/assets/images/dsr/01/logo.png" style="max-width:450px; height: 96px;" alt="林馬克設計">
                </div>
                <div class="intro02__story">
                    <p class="intro02__story--para">
                        「身為一位設計師，有責任把業者的個人特質展現在設計作品中，為空間注入靈魂。」－林馬克
                    </p>
                    <p>
                        國際知名建築師林馬克，三十多年前因工來台，愛上台灣的美好，就此定居了下來，設計出知名的美麗華影城、華納威秀影城、新光三越百貨、錢櫃KTV等耳熟能詳的作品，創造許多雋永經典。他說：「在設計時，我不用電腦繪圖，而是用鉛筆細細描繪，我喜歡在設計中添入手工質感及人性溫度。」正因如此，他的作品都擁有獨一無二的靈魂，展現不完美的完美。
                    </p>
                    <p>
                        他自認，因為成長在3C電子產品不普遍的年代，偏愛純手工打造的物件，覺得缺陷也是一種美，就像知名車廠法拉利手工打造限量跑車、瑪莎拉蒂聘僱一百個人設計車子的聲音，都不是在追求機械化的功能，而是獨特的人性價值，這也使得它們無可取代，綻放迷人魅力。他將這個理念，在作品中發揮得淋漓盡致，像是北京極棧精品酒店作品，特別規劃了與旅客互動的燈光設計，使建築外觀依據每個房間點亮的燈光色彩變化，每天都不盡相同，充滿趣味性；為台灣藝術家林明宏所設計的住宅，亦是量身打造，且故意取消衛浴空間的門把，改成意思是「我要上廁所」的摩斯密碼標誌呈現，自然將幽默融入牆面，提升空間的故事性。這些別出心裁的巧思，貫徹著他所說的「身為一位設計師，有責任把業者的個人特質展現在設計作品中，為空間注入靈魂。」，使他的作品精彩豐富，傳遞濃濃的人情溫度。
                    </p>
                </div>
                <div class="d-block d-md-none">
                    <img src="~@/assets/images/dsr/01/person_2.png" width="100%" alt="林馬克設計">
                </div>
            </div>
        </section>

        <!--<<<<<<<<<< Portfolio-intro_03 >>>>>>>>>>-->

        <section class="intro03 pb-8 bg-black">
            <div class="container px-0">
                <!-- go right -->
                <div class="d-none d-md-block">
                    <div class="goright-btn-wrapper">
                        <a href="https://hhh.com.tw/columns/detail/4977/" target="_blank">
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

                        <div class="intro03__bgWrapper intro03__bgWrapper--01 mr" v-b-modal="'markCase-01'">
                            <div class="intro03__bg intro03__bg--01"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--02 mr" v-b-modal="'markCase-02'">
                            <div class="intro03__bg intro03__bg--02"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--03 mr" v-b-modal="'markCase-03'">
                            <div class="intro03__bg intro03__bg--03"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--04" v-b-modal="'markCase-04'">
                            <div class="intro03__bg intro03__bg--04"></div>
                        </div>
                    </aside>
                </div>

                <div class="d-block d-md-none">
                    <aside class="py-md-4 d-block">
                        <img v-b-modal="'markCase-01'" class="intro03__img mb-4" src="~@/assets/images/dsr/01/case/idx_01/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'markCase-02'" class="intro03__img mb-4" src="~@/assets/images/dsr/01/case/idx_02/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'markCase-03'" class="intro03__img mb-4" src="~@/assets/images/dsr/01/case/idx_03/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'markCase-04'" class="intro03__img mb-8" src="~@/assets/images/dsr/01/case/idx_04/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                    </aside>
                </div>
            </div>

            <div class="d-block d-md-none">
                <div class="d-flex flex-column justify-content-center align-items-center pt-5">
                    <p class="intro03__portfolio--rt">
                        <a href="https://hhh.com.tw/columns/detail/4977/" target="_blank">SEE MORE</a>
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


        <b-modal id="markCase-01" hide-footer hide-header centered 
                :body-bg-variant="bodyBgVariant">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                img-width="100%"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/01/case/idx_01/content/c01.jpg"></b-carousel-slide>

            </b-carousel>
        </b-modal>

        <b-modal id="markCase-02" hide-footer hide-header centered
                :body-bg-variant="bodyBgVariant">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                img-width="100%"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/01/case/idx_02/content/c01.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="markCase-03" hide-footer hide-header centered
                :body-bg-variant="bodyBgVariant">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                img-width="100%"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/01/case/idx_03/content/c01.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="markCase-04" hide-footer hide-header centered
                :body-bg-variant="bodyBgVariant">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                img-width="100%"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/01/case/idx_04/content/c01.jpg"></b-carousel-slide>
                
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
        background-image: url('~@/assets/images/dsr/01/case/idx_01/cover.jpg');
    }
    .intro03__bg--02 {
        background-image: url('~@/assets/images/dsr/01/case/idx_02/cover.jpg');
    }
    .intro03__bg--03 {
        background-image: url('~@/assets/images/dsr/01/case/idx_03/cover.jpg');
    }
    .intro03__bg--04 {
        background-image: url('~@/assets/images/dsr/01/case/idx_04/cover.jpg');
    }

</style>