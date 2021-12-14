/* eslint-disable */
import $ from "jquery";

export function header() {
    const mobileMenu = $('.header-mobile')
    const mobileMenuDropdown = $('.header-mobile__submenu-item');
    const minq = window.matchMedia('(min-width: 768px');
    const maxq = window.matchMedia('(max-width: 768px)');
    const mobileBack = $('.header-mobile__arrow-sub');
    const html = document.querySelector('html');

    $('.header__burger').click(function() {
        $(this).addClass('header__burger_on');
        mobileMenu.addClass('header-mobile_visible');
        html.style.overflow = 'hidden'
    });

    $('.header-mobile__close').click(function () {
        $('.header__burger').removeClass('header__burger_on')
        mobileMenu.removeClass('header-mobile_visible');
        html.style.overflow = 'auto'
    })

    function mqHeandler(minq, maxq) {

        mobileMenuDropdown.click(function () {
            if (!$(this).hasClass('active')) {
                $('.mobile-menu__nav-item').parent().removeClass('active')
            }
            if (minq.matches) {
                $(this).parent().toggleClass('active')
            }
            if (maxq.matches) {
                if ($(this).nextAll('ul').length)  {
                    $(this).parent().addClass('active')

                }
            }
            mobileBack.click(function (e) {
                if ($('.header-mobile__submenu-item').parent().hasClass('active')) {
                    $('.header-mobile__submenu-item').parent().removeClass('active')
                }
                e.stopPropagation()
            })

        })
    }

    mqHeandler(minq, maxq)


    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        let links = this.el.find('.header-mobile__menu-item');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;

        $(this).next().slideToggle();
        $(this).parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.header-mobile__submenu').not($(this).next()).slideUp().parent().removeClass('open');
        }
        ;
    }

    let accordion = new Accordion($('#accordion'), false);
}