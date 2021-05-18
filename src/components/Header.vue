
<script>
export default {

}
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-md bg-navbar fixed">
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
                        <router-link to="/">Home</router-link> 
                    </li>
                    <li class="nav-item dropdown" data-section="#master01">
                        <router-link to="/mark">Designer</router-link>
                        <ul class="dropdown-menu">
                            <router-link class="dropdown-item" to="/mark"><span>林馬克 </span>Mark</router-link> 
                            <router-link class="dropdown-item" to="/john"><span>廖韋強 </span>John</router-link> 
                            <router-link class="dropdown-item" to="/debby"><span>陳琬婷 </span>Debby</router-link> 
                            <router-link class="dropdown-item" to="/Fang"><span>方志宏 </span>Fang</router-link> 
                            <router-link class="dropdown-item" to="/amy"><span>潘仕敏 </span>Amy</router-link> 
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="navbar-collapse fixed d-block d-lg-none" id="navbarNav-mb">
            <ul class="navbar-nav bg-black p-4">
                <li class="nav-item nav-item-trigger" data-section="#sec02-mb">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item nav-item-trigger border-dark" data-section="#master01-mb">
                    <router-link class="nav-link" to="/mark">
                        <span class="mr-5">Designer</span>
                        林馬克 &nbsp; Mark
                    </router-link>
                </li>
                <li class="nav-item nav-item-trigger border-dark" data-section="#master02-mb">
                    <router-link class="nav-link" to="/john">
                        <span class="mr-5 is-hidden">Designer </span>
                        廖韋強 &nbsp;
                        John
                    </router-link>
                </li>
                <li class="nav-item nav-item-trigger border-dark" data-section="#master03-mb">
                    <router-link class="nav-link" to="/debby">
                        <span class="mr-5 is-hidden">Designer </span>
                        陳琬婷 &nbsp;
                        Debby
                    </router-link>
                </li>
                <li class="nav-item nav-item-trigger border-dark" data-section="#master04-mb">
                    <router-link class="nav-link" to="/Fang">
                        <span class="mr-5 is-hidden">Designer </span>
                        方志宏 &nbsp;
                        Fang
                    </router-link>
                </li>
                <li class="nav-item nav-item-trigger" data-section="#master05-mb">
                    <router-link class="nav-link" to="/amy">
                        <span class="mr-5 is-hidden">Designer </span>
                        潘仕敏 &nbsp;
                        Amy
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>

</style>