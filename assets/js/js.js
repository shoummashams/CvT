$(document).ready(function(){
	
	$(window).scrollTop(0);
	
	$("#splashcontents").hide().fadeIn(1000);
	
	// Splash button events
	
	$("#splashbutton").hover(function() {
        $(this)
    });
	
	$("#splashbutton").click(function(){
		
		$("#splash").fadeOut(400, "swing");
	
		// Fade in and slide up	main page
		$(".profileimg").delay(300).fadeIn(100);
    	$(".info").delay(550).animate(
			{opacity: "1", top:"20%"}, {duration: "slow"}, "swing");
		$("#mainarrow").delay(750).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#mainarrowshadow").delay(750).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#mainarrowshadow").attr("display", "block");
	})
	
	// Arrow scroll
	
	$("#mainarrow").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#summary").offset().top}, 1500);});
	$("#summaryarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#intro").offset().top}, 1000);});
	$("#summaryarrowdown").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policytitle").offset().top}, 1500);});
	$("#policyarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#summary").offset().top}, 1000);});
	
	// Summary page
	
		//Logos and arrows move in
		$("#mainarrow").click(function(){
			$("#clintonlogo").delay(1750).attr("left", "200px");
			$("#trumplogo").delay(1750).attr("right", "-350px");
		$("#summaryarrowdown").delay(2000).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");
		$("#summaryarrowup").delay(2000).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing")});
			
			
	// Policy overview page
	$("#summaryarrowdown").click(function(){
		$("#policyarrowup").delay(2000).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing")
		$("#policytexttitle").delay(1750).fadeIn(100);
		$("#policysub").delay(1875).fadeIn(100);
		$("#policyoverview").delay(1950).fadeIn(100);});
		
	// Policy page links
	
	$("#environmentclick").click(function() {
		$('html, body').animate({
        	scrollTop: $("#policyenvironment").offset().top}, 1000);
		$("#environmentarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");});
			
	$("#economyclick").click(function() {
		$('html, body').animate({
        	scrollTop: $("#policyeconomy").offset().top}, 1000);
			$("#economyarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");
			$("#economyarrowdown").delay(1500).animate(
			{opacity: "1", bottom:"5%"}, {duration: "slow"},"swing");});
			
	$("#socialclick").click(function() {
		$('html, body').animate({
        	scrollTop: $("#policysocial").offset().top}, 1000);
			$("#socialarrowup").delay(1500).animate(
			{opacity: "1", top:"5%"}, {duration: "slow"},"swing");});
			
	// Policy arrows
	
	$("#environmentarrowdown").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policyeconomy").offset().top}, 1000);});
			
	$("#economyarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policyenvironment").offset().top}, 1000);});
	$("#economyarrowdown").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policysocial").offset().top}, 1000);});
			
	$("#socialarrowup").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#policyeconomy").offset().top}, 1000);});
		
	
	
});