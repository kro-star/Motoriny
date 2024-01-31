<div class="container">
    <div class="row">
        <div class="col-12 lg-dn">
            <div class="fs20 fw400 lh15 tac c-white mt15 sm-mt30 mb20">
                Мы в социальных сетях
            </div>
            <div class="tac">
                <a href=""><img src="assets/img/dashicons_whatsapp.png" alt="" class="mr30"></a>                                
                <a href=""><img src="assets/img/vk.png" alt="" class=" "></a>
            </div>
        </div> 
        <div class="col-12 mt90 sm-mt100 mb20">
            <div class="fs12 fw400 lh15 c-white">2013-2020 © ТехноМаркет - подшипники, приводные ремни, рукава и шланги, смазки оптом и в розницу.<br>
Все права защищены. Авторское право.</div>
        </div>
    </div>
</div>








<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script>

        function openTab(evt, TabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(TabName).style.display = "block";
            evt.currentTarget.className += " active";
        }


        $(document).ready(function(){

            this.addEventListener('click', (e) => {
               const elHeader = e.target.closest('.accordion-header');
               if (!elHeader) {
                 return;
               }
               elHeader.parentElement.classList.toggle('accordion__item__show');
             });

            $(".product-slider").slick({
                // slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                arrows: false,
                dots: false,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToScroll: 3,
                        },
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 550,
                        settings: {
                            slidesToScroll: 1,
                        },
                    },
                ]
            });

            $(".sale-slider").slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToScroll: 3,
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToScroll: 2,
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 550,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 1,
                        },
                    },
                ]
            });
        });
    </script>