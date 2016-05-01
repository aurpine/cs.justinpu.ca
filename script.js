$(function() {
	$("#header").load("http://cs.justinpu.ca/header.html");
	$("#footer").load("http://cs.justinpu.ca/footer.html");
	var tracker = document.createElement("script");
	tracker.src = "http://cs.justinpu.ca/tracker.js";
	$("body").append(tracker);
	var mathjax = document.createElement("script");
	mathjax.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML-full";
	mathjax.type = "text/javascript";
	$("body").append(mathjax);
    $("head").append("<meta name=\"theme-color\" content=\"#268dbf\">");
    $("head").append("<meta name=\"msapplication-navbutton-color\" content=\"#268dbf\">");
    $("head").append("<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"#268dbf\">");
});

$("a.internal").click(function() {
	$("html body").animate({
		scrollTop: $($(this).attr("href")).offset().top - $(".header").outerHeight()
	}, 500);
});

$(function() {
});