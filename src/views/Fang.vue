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
                    src: 'https://www.youtube.com/embed/a8VUEBQw62Q',
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
                            <h2>方 志宏</h2>
                            <p class="ml-5 mb-2">Interior Design Masters</p>
                            <div>Fang</div>
                        </div>
                        <div class="intro01__other my-3">
                            <div class="arrow arrow-right"></div>
                            <div class="line"></div>
                        </div>
                        <div class="intro01__contextSmall">
                            <p>麒成益設計 <br><span>OUTLOOK DESIGN</span></p>
                        </div>
                        <picture>
                            <img id="person02" src="~@/assets/images/dsr/04/person.png" height="520px" alt="麒成益設計">
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
                    <h2>方 志宏</h2>
                    <p class="ml-5 mb-2">Interior Design Masters</p>
                    <div>Fang</div>
                </div>
                <div class="intro01__bg">
                    <picture>
                        <img src="~@/assets/images/dsr/04/person.png" width="92%" alt="麒成益設計">
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
                    <img class="d-none d-md-block" src="~@/assets/images/dsr/04/logo.png" alt="麒成益設計">
                    <img class="d-block d-md-none" src="~@/assets/images/dsr/04/logo.png" style="max-width:230px; height: 190px;" alt="麒成益設計">
                </div>
                <div class="intro02__story">
                    <p class="intro02__story--para">
                        「站在歷史巨人肩膀上，勾勒出生活空間的美感。」──方志宏                    
                    </p>
                    <p>
                        擁有美國賓夕法尼亞大學建築碩士，與多年建築業經歷的方志宏總監，看待建築與室內設計，認為是無法分割、獨立思考的體系，如同一件美麗衣裳的內外兩面，「優秀的建築師，也應該是很好的室內設計師。」他如是說；因為「設計」最終是服務使用者，不全是設計師的舞台，他笑說自己是站在歷史巨人的肩膀上，大膽想像並勾畫美好環境，將建築、記憶與文化融入設計，經由風格、元素襯托，加上尺度、機能的探討，讓使用者產生與空間、生活的對話，才是設計的本質及樂趣。
                    </p>
                    <p>
                        設計更依時勢形變，2020年人們因疫情隔離，只能透過網路維繫人際與經濟活動，使他更加篤定「居家辦公室」、「共享空間」必為未來趨勢，同時，兩者也互為配套，成為靈活運用空間的途徑。透過結合居家環境與辦公機能的彈性設計，依需求切換空間，如必要才到「共享空間」租借會議室進行面對面的討論，因此，「共享空間」就必須分散動線、避免交叉感染，空調系統亦加強過濾、換氣，甚至設立體溫測量點、臨時等待隔離的負壓空間等重點，都將影響未來空間的規劃與設計。
                    </p>
                    <p>
                        透過宏觀視野，方志宏總監剖析設計未來面臨的變化，亦期待他繼續以獨特角度，帶來更多嶄新觀點與優秀作品。
                    </p>
                </div>
                <div class="d-block d-md-none">
                    <img src="~@/assets/images/dsr/04/person_2.png" width="100%" alt="麒成益設計">
                </div>
            </div>
        </section>

        <!--<<<<<<<<<< Portfolio-intro_03 >>>>>>>>>>-->

        <section class="intro03 pb-8 bg-black">
            <div class="container px-0">
                <!-- go right -->
                <div class="d-none d-md-block">
                    <div class="goright-btn-wrapper">
                        <a href="https://hhh.com.tw/designer-index.php?designer_id=701" target="_blank">
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
                        <div class="intro03__bgWrapper intro03__bgWrapper--01 mr" v-b-modal="'fangCase-01'">
                            <div class="intro03__bg intro03__bg--01"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--02 mr" v-b-modal="'fangCase-02'">
                            <div class="intro03__bg intro03__bg--02"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--03 mr" v-b-modal="'fangCase-03'">
                            <div class="intro03__bg intro03__bg--03"></div>
                        </div>
                        <div class="intro03__bgWrapper intro03__bgWrapper--04" v-b-modal="'fangCase-04'">
                            <div class="intro03__bg intro03__bg--04"></div>
                        </div>
                    </aside>
                </div>

                <div class="d-block d-md-none">
                    <aside class="py-md-4 d-block">
                        <img v-b-modal="'fangCase-01'" class="intro03__img mb-4" src="~@/assets/images/dsr/04/case/idx_01/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'fangCase-02'" class="intro03__img mb-4" src="~@/assets/images/dsr/04/case/idx_02/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'fangCase-03'" class="intro03__img mb-4" src="~@/assets/images/dsr/04/case/idx_03/cover_mb.jpg" width="100%"
                            alt="Mark Portfolio">
                        <img v-b-modal="'fangCase-04'" class="intro03__img mb-8" src="~@/assets/images/dsr/04/case/idx_04/cover_mb.jpg" width="100%"
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


        <b-modal id="fangCase-01" hide-footer hide-header centered scrollable
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_01/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_01/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_01/content/c03.jpg"></b-carousel-slide>
            </b-carousel>
        </b-modal>

        <b-modal id="fangCase-02" hide-footer hide-header centered scrollable
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_02/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_02/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_02/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="fangCase-03" hide-footer hide-header centered scrollable
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_03/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_03/content/c02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_03/content/c03.jpg"></b-carousel-slide>
                
            </b-carousel>
        </b-modal>

        <b-modal id="fangCase-04" hide-footer hide-header centered scrollable
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
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_04/content/c01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_04/content/c02.JPG"></b-carousel-slide>
                <b-carousel-slide img-src="https://event.hhh.com.tw/2021trends/images/dsr/04/case/idx_04/content/c03.jpg"></b-carousel-slide>
                
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
        background-image: url('~@/assets/images/dsr/04/case/idx_01/cover.jpg');
    }
    .intro03__bg--02 {
        background-image: url('~@/assets/images/dsr/04/case/idx_02/cover.jpg');
    }
    .intro03__bg--03 {
        background-image: url('~@/assets/images/dsr/04/case/idx_03/cover.jpg');
    }
    .intro03__bg--04 {
        background-image: url('~@/assets/images/dsr/04/case/idx_04/cover.jpg');
    }

</style>