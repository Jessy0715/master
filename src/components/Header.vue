
<script>
export default {

}
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-md bg-navbar">
            <a class="navbar-brand" href="https://hhh.com.tw" target="_blank">
                <img class="d-none d-md-block" src="~@/assets/images/icon/logo.svg" width="115" alt="幸福空間">
                <img class="d-block d-md-none" src="~@/assets/images/icon/logo_mb.svg" width="115" alt="幸福空間">
            </a>

            <div class="menu-toggle d-block d-md-none">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div>

            <div class="navbar-collapse d-none d-md-block" id="navbarNav-pc">
                <ul class="navbar-nav">
                    <li class="nav-item" data-section="#sec02">
                        <!-- <a class="nav-link">About</a> -->
                        <router-link to="/">Home</router-link> 
                    </li>
                    <li class="nav-item dropdown" data-section="#master01">
                        <!-- <a class="nav-link">Designer</a> -->
                        <router-link to="/mark">Designer</router-link>
                        <ul class="dropdown-menu">

                            <router-link class="dropdown-item" to="/mark"><span>林馬克 </span>Mark</router-link> 
                            <router-link class="dropdown-item" to="/john"><span>廖韋強 </span>John</router-link> 
                            <router-link class="dropdown-item" to="/debby"><span>陳琬婷 </span>Debby</router-link> 
                            <router-link class="dropdown-item" to="/Fang"><span>方志宏 </span>Fang</router-link> 
                            <router-link class="dropdown-item" to="/amy"><span>潘仕敏 </span>Amy</router-link> 
                            <!-- <a class="dropdown-item" data-section="#master01"><span>林馬克 </span>Mark</a>
                            <a class="dropdown-item" data-section="#master02"><span>廖韋強 </span>John</a>
                            <a class="dropdown-item" data-section="#master03"><span>陳琬婷 </span>Debby</a>
                            <a class="dropdown-item" data-section="#master04"><span>方志宏 </span>Fang</a>
                            <a class="dropdown-item" data-section="#master05"><span>潘仕敏 </span>Amy</a> -->
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style>

</style>