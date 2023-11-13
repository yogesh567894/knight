$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});

/*<section class="py-7 bg-dark section-angle top-right bottom-right" id="pricing">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
                <h2 class="text-white heading-black">Choose your pricing plan.</h2>
                <p class="text-light lead">Simply pricing - 7 Days free trial</p>
            </div>
        </div>
        <!--pricing tables-->
        <div class="row pt-5 pricing-table">
            <div class="col-12 mx-auto">
                <div class="card-deck pricing-table">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title pt-3">Personal</h3>
                            <h2 class="card-title text-primary mb-0 pt-4">$59</h2>
                            <div class="text-muted font-weight-medium mt-2">per month</div>
                            <ul class="list-unstyled pricing-list">
                                <li>1 user</li>
                                <li>10 websites</li>
                                <li>Access to premium templates</li>
                                <li>Basic support</li>
                            </ul>
                            <a href="#" class="btn btn-primary">
                                Start free trial
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title pt-3">Agency</h3>
                            <h2 class="card-title text-info mb-0 pt-4">$159</h2>
                            <div class="text-muted font-weight-medium mt-2">per month</div>
                            <ul class="list-unstyled pricing-list">
                                <li>2-15 users</li>
                                <li>50 websites</li>
                                <li>Access to premium templates</li>
                                <li>Priority support</li>
                            </ul>
                            <a href="#" class="btn btn-info">
                                Start free trial
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title pt-3">Enterprise</h3>
                            <h2 class="card-title text-primary mb-0 pt-4">$499</h2>
                            <div class="text-muted font-weight-medium mt-2">per month</div>
                            <ul class="list-unstyled pricing-list">
                                <li>Unlimited users</li>
                                <li>Unlimited websites</li>
                                <li>Access to premium templates</li>
                                <li>24/7 support</li>
                            </ul>
                            <a href="#" class="btn btn-primary">
                                Start free trial
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-6">
            <div class="col-md-4 mr-auto">
                <h3>Everything is covered.</h3>
                <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a,
                    vestibulum nibh.
                </p>
            </div>
            <div class="col-md-7 offset-md-1">
                <ul class="features-list">
                    <li>Weekly new templates</li>
                    <li>Access to new features</li>
                    <li>MailChimp integration</li>
                    <li>Stripe integration</li>
                    <li>100 refund guarantee</li>
                    <li>Advance SEO tools</li>
                    <li>Free unlimited support</li>
                </ul>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-8 col-12 divider top-divider mx-auto pt-5 text-center">
                <h3>Try Knight free for 7 days</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                    tempus odio a, vestibulum nibh.</p>
                <button class="btn btn-primary">
                    Create your account
                </button>
            </div>
        </div>
    </div>
</section>
*/