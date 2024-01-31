<?
    include 'templates/header.php';

    include 'templates/breadcrumbs.php';
?>


<div class="bg-gray">
    <div class="container">
        <div class="row  mb40">
            <div class="col-12">
                <div class="fs20 sm-fs24 lg-fs40 fw700 ">
                Корзина
                </div>
            </div>
        </div>
        <div class="bg-white br10 pt10 pr10 pl10 mb20">

            
                

            <?for ($i=0; $i < 3; $i++) { ?>
                <div class="row bg-white p10 mb20">
                    <div class="col-12 col-sm-3 col-lg-4 tac mb20 sm-mb0">
                        <img src="assets/img/product1.png" alt="">
                    </div>
                    <div class="col-12 col-sm-3 col-lg-4  mb20 sm-mb0 df ai-center jc-center">
                        <div class="tac fs16 fw400 lh15">
                        Фторопласт листовой  6 мм (1000х1000 мм) 
                        </div>
                    </div>
                    <div class="col-12 col-sm-3 col-lg-2  mb20 sm-mb0 df ai-center jc-center">
                        <div class="b1 br5 pt5 pb5 pr60 pl60 fs24 fw400 pr tac">
                            2
                        <a href=""><img src="assets/img/plus.png" alt="" class="pa position-plus"></a>
                        <a href=""><img src="assets/img/minus.png" alt="" class="pa position-minus"></a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-3 col-lg-2  df ai-center jc-center">
                        <div class="fs24 fw400 tac">
                        5874 рублей
                        </div>
                    </div>
                </div>    
               <? if($i != 2){?>
                    <div class="b-bottom-1 mt10 mb30"></div>
                <?}?>
                <?}?>

            
            <div class="row pt20">
                <div class="col-12 bg-dark-blue br-bottom-10">
                    <div class="tar pr30 pt20 pb20">
                        
                <span class="fs24 fw400 mr20 c-white">Итого:</span>
                <span class="fs24 fw700 c-white">5874 рублей</span>
                    </div>
                </div>

            </div>
        </div>    
        <div class="row">
            <div class="dn sm-db col-sm-8 col-lg-9"></div>
            <div class="col-12 col-sm-4 col-lg-3 pb50 pt30">
                <a href=""><div class="bg-dark-blue pt10 pb10 pr40 pl40 tac fs18 fw700 br10 c-white">
                Продолжить
                </div></a>
            </div>
        </div>   
    </div>
</div>




<?
    include 'templates/footer.php';
?>