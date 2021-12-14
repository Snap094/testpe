<template>
    <header>
        <div class="header">
            <div class="header__upper">
                <div class="container">
                    <div class="header__upper-inner">
                        <a class="header__logo logo" href="#">
                            <img src="../assets/images/logo-second.png" alt="">
                            <p class="header__logo-text"><span>Top Up Balance</span><br>Your goods in crypto</p>
                        </a>
                        <div class="header__burger">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z" fill="#99C0FF"/>
                            </svg>
                        </div>
                        <nav class="header__nav">
                            <ul class="header__nav-items">
                                <li class="header__nav-item">
                                    <div class="header__lang-select select">
                                        <img class="header__lang-select-flag" src="../assets/images/england-flag.svg"
                                             alt="">
                                        <p class="header__lang-select-country">English</p>
                                        <p class="header__lang-select-country header__lang-select-country_short">En</p>
                                    </div>
                                </li>
                                <li class="header__nav-item">
                                    <div class="header__country-select select">
                                        <p>Choose country</p>
                                    </div>
                                </li>
                                <li class="header__nav-item header__nav-item_button">
                                    <a class="header__login button button_transparent" href="#">Login</a>
                                </li>
                                <li class="header__nav-item header__nav-item_button">
                                    <a class="header__login button button_transparent" href="#">Register</a>
                                </li>
                                <li class="header__nav-item">
                                    <a class="header__cart" href="#">
                                        <img src="../assets/images/cart.svg" class="header__cart-image" alt="">
                                        <p class="header__cart-text">Cart</p>
                                        <span class="header__cart-counter">0</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="header__lower">
                <div class="container">
                    <div class="header__lower-inner">
                        <label class="inp header__search-label">
                            <input type="text" placeholder="Search" class="input header__search">
                            <span class="header__search-img">
                           <img src="../assets/images/search.svg" alt="">
                        </span>
                        </label>
                        <div class="header__lower-buttons">
                            <a href="" class="button button_login header__lower-login">Login</a>
                            <a href="" class="button button_register">Register</a>
                        </div>
                        <nav>
                            <ul class="header__menu">
                                <li class="header__menu-item"><a href="#">Mobile</a></li>
                                <li class="header__menu-item"><a href="#">Games</a></li>
                                <li class="header__menu-item"><a href="#">Gift cards</a></li>
                                <li class="header__menu-item"><a href="#">Shops</a></li>
                                <li class="header__menu-item"><a href="#">All services</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-mobile">
            <div class="header-mobile__inner">
                <div class="header-mobile__head">
                    <a href="#" class="header-mobile__head-btn button button_login ">Login</a>
                    <a href="#" class="header-mobile__head-btn button button_login">Register</a>
                    <div class="header-mobile__close">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 18.586L24.95 13.636L26.364 15.05L21.414 20L26.364 24.95L24.95 26.364L20 21.414L15.05 26.364L13.636 24.95L18.586 20L13.636 15.05L15.05 13.636L20 18.586Z"
                                  fill="#062550"/>
                        </svg>
                    </div>
                </div>
                <nav class="header-mobile__categories">
                    <ul class="header-mobile__menu" id="accordion">
                        <li>
                            <div class="header-mobile__menu-item">
                                <div class="header-mobile__menu-item-inner">
                                    <p class="typography_h4">All Categories</p>
                                    <span class="header-mobile__amount typography_caption">15</span>
                                </div>
                                <span class="header-mobile__arrow">
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.17198 6.99999L0.221985 2.04999L1.63598 0.635986L7.99998 6.99999L1.63598 13.364L0.221985 11.95L5.17198 6.99999Z"
                                              fill="#1165E6"/>
                                    </svg>
                                </span>
                            </div>
                            <ul class="header-mobile__submenu">
                                <li>
                                    <div class="header-mobile__submenu-item">
                                        <div class="header-mobile__submenu-item-inner">
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="">Mobile</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </div>
                                        <div class="header-mobile__arrow-sub">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17198 6.99999L0.221985 2.04999L1.63598 0.635986L7.99998 6.99999L1.63598 13.364L0.221985 11.95L5.17198 6.99999Z"
                                                      fill="#1165E6"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="header-mobile__inner-submenu">
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__sub-submenu">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__sub-submenu">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__sub-submenu">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__sub-submenu">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__sub-submenu">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Games</p>
                                    <span class="header-mobile__amount typography_caption">12</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Gift Cards</p>
                                    <span class="header-mobile__amount typography_caption">45</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Shops</p>
                                    <span class="header-mobile__amount typography_caption">78</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Internet</p>
                                    <span class="header-mobile__amount typography_caption">98</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">TV</p>
                                    <span class="header-mobile__amount typography_caption">45</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Steam</p>
                                    <span class="header-mobile__amount typography_caption">78</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Utility Bills</p>
                                    <span class="header-mobile__amount typography_caption">98</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Software</p>
                                    <span class="header-mobile__amount typography_caption">45</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Travel</p>
                                    <span class="header-mobile__amount typography_caption">78</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Finance</p>
                                    <span class="header-mobile__amount typography_caption">98</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Casino</p>
                                    <span class="header-mobile__amount typography_caption">45</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Betting</p>
                                    <span class="header-mobile__amount typography_caption">78</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Pharmacy</p>
                                    <span class="header-mobile__amount typography_caption">98</span>
                                </li>
                                <li>
                                    <input class="header-mobile__checkbox" type="checkbox">
                                    <p class="header-mobile__submenu-item">Hotels</p>
                                    <span class="header-mobile__amount typography_caption">98</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="header-mobile__menu-item">
                                <div class="header-mobile__menu-item-inner">
                                    <p class="typography_h4">Crypto</p>
                                    <span class="header-mobile__amount typography_caption">15</span>
                                </div>
                                <span class="header-mobile__arrow">
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.17198 6.99999L0.221985 2.04999L1.63598 0.635986L7.99998 6.99999L1.63598 13.364L0.221985 11.95L5.17198 6.99999Z"
                                              fill="#1165E6"/>
                                    </svg>
                                </span>
                            </div>
                            <ul class="header-mobile__submenu">
                                <li>
                                    <div class="header-mobile__submenu-item">
                                        <div class="header-mobile__submenu-item-inner">
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__submenu-item">Mobile</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </div>
                                        <div class="header-mobile__arrow-sub">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17198 6.99999L0.221985 2.04999L1.63598 0.635986L7.99998 6.99999L1.63598 13.364L0.221985 11.95L5.17198 6.99999Z"
                                                      fill="#1165E6"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="header-mobile__inner-submenu">
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="header-mobile__menu-item">
                                <div class="header-mobile__menu-item-inner">
                                    <p class="typography_h4">Payments</p>
                                    <span class="header-mobile__amount typography_caption">15</span>
                                </div>
                                <span class="header-mobile__arrow">
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.17198 6.99999L0.221985 2.04999L1.63598 0.635986L7.99998 6.99999L1.63598 13.364L0.221985 11.95L5.17198 6.99999Z"
                                          fill="#1165E6"/>
                                </svg>
                            </span>
                            </div>
                            <ul class="header-mobile__submenu">
                                <li>
                                    <div class="header-mobile__submenu-item">
                                        <div class="header-mobile__submenu-item-inner">
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__submenu-item">Mobile</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </div>
                                        <div class="header-mobile__arrow-sub">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17198 6.99999L0.221985 2.04999L1.63598 0.635986L7.99998 6.99999L1.63598 13.364L0.221985 11.95L5.17198 6.99999Z"
                                                      fill="#1165E6"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="header-mobile__inner-submenu">
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="header-mobile__menu-item">
                                <div class="header-mobile__menu-item-inner">
                                    <p class="typography_h4">Popular searches</p>
                                    <span class="header-mobile__amount typography_caption">15</span>
                                </div>
                                <span class="header-mobile__arrow">
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.17198 6.99999L0.221985 2.04999L1.63598 0.635986L7.99998 6.99999L1.63598 13.364L0.221985 11.95L5.17198 6.99999Z"
                                          fill="#1165E6"/>
                                </svg>
                            </span>
                            </div>
                            <ul class="header-mobile__submenu">
                                <li>
                                    <div class="header-mobile__submenu-item">
                                        <div class="header-mobile__submenu-item-inner">
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="">Mobile</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </div>
                                        <div class="header-mobile__arrow-sub">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.17198 6.99999L0.221985 2.04999L1.63598 0.635986L7.99998 6.99999L1.63598 13.364L0.221985 11.95L5.17198 6.99999Z"
                                                      fill="#1165E6"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <ul class="header-mobile__inner-submenu">
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                        <li>
                                            <input class="header-mobile__checkbox" type="checkbox">
                                            <p class="header-mobile__inner-submenu-item">3214</p>
                                            <span class="header-mobile__amount typography_caption">98</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>

    export default {
        name: 'MainHeader',
        components: {}
    }
</script>


