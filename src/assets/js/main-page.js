/* eslint-disable */
import $ from 'jquery';

export function mainPage() {

    $('.main-page__lang-item').click(function() {
        $(this).toggleClass('main-page__lang-item_choose');
    });
    $('.main-page__country-item').click(function() {
        $(this).toggleClass('main-page__country-item_choose');
    });

}