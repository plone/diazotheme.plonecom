
/* - ++resource++collective.responsivetheme.javascripts/plone-rwd-nav.js - */
// http://plone.rebelx.nl/portal_javascripts/++resource++collective.responsivetheme.javascripts/plone-rwd-nav.js?original=1
function below_600(){if(window.location.hash!='#portal-globalnav'){if($(window).width()<600){$("#portal-globalnav").prepend('<button type="button" class="navigation-button">Show Navigation</button>');$('#portal-top').addClass('nav-menu');$(".nav-primary").prepend('<span class="nav-section" />');$('.nav-primary').find('span.nav-section').bind('click focus', function(){$(this).parent().toggleClass('expanded')});$('button.navigation-button').bind('click', function(){$('.nav-primary').toggleClass('expanded')});$("button.navigation-button").toggle(function(){$(this).text("Hide Navigation")},
function(){$(this).text("Show Navigation")})}}}
$(document).ready(function(){$('ul#portal-globalnav').wrap('<div class="nav-primary" />');if($(".navigation-button").length==0){below_600()}
$(window).resize(function(){if($(window).width()<=600){if($(".navigation-button").length==0){below_600()}}
if($(window).width()>600){if($(".navigation-button").length>0){$('#portal-top').removeClass('nav-menu');$('.navigation-button').remove();$('.nav-section').remove()}}})});
