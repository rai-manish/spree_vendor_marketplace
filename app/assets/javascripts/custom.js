$(document).ready(function(){$screensize=$(window).width(),$screensize>1199&&$("#menu .nav > li.categories_hor > div > .column:nth-child(6n)").after('<div class="clearfix visible-lg-block"></div>'),1199>$screensize&&$("#menu .nav > li.categories_hor > div > .column:nth-child(4n)").after('<div class="clearfix visible-lg-block visible-md-block"></div>'),$(window).resize(function(){$screensize=$(window).width(),$screensize>1199&&($("#menu .nav > li.categories_hor > div .clearfix.visible-lg-block").remove(),$("#menu .nav > li.categories_hor > div > .column:nth-child(6n)").after('<div class="clearfix visible-lg-block"></div>')),1199>$screensize&&($("#menu .nav > li.categories_hor > div .clearfix.visible-lg-block").remove(),$("#menu .nav > li.categories_hor > div > .column:nth-child(4n)").after('<div class="clearfix visible-lg-block visible-md-block"></div>'))}),$screensize=$(window).width(),$screensize>1199&&$("#menu .nav > li.menu_brands > div > div:nth-child(12n)").after('<div class="clearfix visible-lg-block"></div>'),1199>$screensize&&$("#menu .nav > li.menu_brands > div > div:nth-child(6n)").after('<div class="clearfix visible-lg-block visible-md-block"></div>'),991>$screensize&&($("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove(),$("#menu .nav > li.menu_brands > div > div:nth-child(4n)").after('<div class="clearfix visible-lg-block visible-sm-block"></div>'),$("#menu .nav > li.menu_brands > div > div:last-child").after('<div class="clearfix visible-lg-block visible-sm-block"></div>')),767>$screensize&&($("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove(),$("#menu .nav > li.menu_brands > div > div:nth-child(2n)").after('<div class="clearfix visible-lg-block visible-xs-block"></div>'),$("#menu .nav > li.menu_brands > div > div:last-child").after('<div class="clearfix visible-lg-block visible-xs-block"></div>')),$(window).resize(function(){$screensize=$(window).width(),$screensize>1199&&($("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove(),$("#menu .nav > li.menu_brands > div > div:nth-child(12n)").after('<div class="clearfix visible-lg-block"></div>')),1199>$screensize&&($("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove(),$("#menu .nav > li.menu_brands > div > div:nth-child(6n)").after('<div class="clearfix visible-lg-block visible-md-block"></div>')),991>$screensize&&($("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove(),$("#menu .nav > li.menu_brands > div > div:nth-child(4n)").after('<div class="clearfix visible-lg-block visible-sm-block"></div>'),$("#menu .nav > li.menu_brands > div > div:last-child").after('<div class="clearfix visible-lg-block visible-sm-block"></div>')),767>$screensize&&($("#menu .nav > li.menu_brands > div > .clearfix.visible-lg-block").remove(),$("#menu .nav > li.menu_brands > div > div:nth-child(4n)").after('<div class="clearfix visible-lg-block visible-xs-block"></div>'),$("#menu .nav > li.menu_brands > div > div:last-child").after('<div class="clearfix visible-lg-block visible-xs-block"></div>'))}),$(function(){$(window).scroll(function(){$(this).scrollTop()>150?$("#back-top").fadeIn():$("#back-top").fadeOut()})}),jQuery(".backtotop").click(function(){jQuery("html, body").animate({scrollTop:0},"slow")}),$("#menu .nav > li").mouseover(function(){$screensize=$(window).width(),$screensize>991&&$(this).find("> div").stop(!0,!0).slideDown("fast"),$(this).bind("mouseleave",function(){$screensize=$(window).width(),$screensize>991&&$(this).find("> div").stop(!0,!0).css("display","none")})}),$("#menu .nav > li.categories > div > .column, #menu .nav > li div > ul > li").mouseover(function(){$screensize=$(window).width(),$screensize>991&&$(this).find("> div").css("display","block"),$(this).bind("mouseleave",function(){$screensize=$(window).width(),$screensize>991&&$(this).find("> div").css("display","none")})}),$("#menu .nav > li > div").closest("li").addClass("sub"),$("#menu .navbar-header > span").click(function(){$(this).toggleClass("active"),$("#menu .navbar-collapse").slideToggle("medium")}),$("#menu .nav > li > div > .column > div, .submenu, #menu .nav > li > div").before('<span class="submore"></span>'),$("span.submore").click(function(){$(this).next().slideToggle("fast"),$(this).toggleClass("plus")}),$(".qtyBtn").click(function(){if($(this).hasClass("plus")){var i=$(".qty #input-quantity").val();i++,$(".qty #input-quantity").val(i)}else{var i=$(".qty #input-quantity").val();i--,i>0&&$(".qty #input-quantity").val(i)}}),$("#currency, #language, #my_account").hover(function(){$(this).find("ul").stop(!0,!0).slideDown("fast")},function(){$(this).find("ul").stop(!0,!0).css("display","none")}),$(".drop-icon").click(function(){$("#header .htop").find(".left-top").slideToggle("fast")}),$(".wrap_custom_block").mouseover(function(){$(this).find("> .custom_block").slideDown("fast"),$(this).bind("mouseleave",function(){$(this).find("> .custom_block").css("display","none")})})});

