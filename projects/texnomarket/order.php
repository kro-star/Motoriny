<?
    include 'templates/header.php';

    include 'templates/breadcrumbs.php';
?>


<div class="bg-gray">
    <div class="container">
        <div class="row  mb40">
            <div class="col-12">
                <div class="fs20 sm-fs24 lg-fs40 fw700 ">
                Оформление заказа
                </div>
            </div>
        </div>

        <div class="row pb30 sm-pb40 lg-pb60">
            <div class="col-12 col-sm-8">
                <div class="row">
                    <div class="dn sm-db col-2"></div>
                    <div class="col-12 sm-col-8">
                        <form action="">
                            <input type="text" placeholder="Имя" class="pt10 pb10 pl20 mb15 fs16 fw400 bg-gray w-100 br10" name="user-name">
                            <input type="text" placeholder="Телефон" class="pt10 pb10 pl20 fs16 fw400 mb15 bg-gray w-100 br10" name="user-phone">
                            <input type="text" placeholder="E-mail" class="pt10 pb10 pl20 fs16 fw400 mb15 bg-gray w-100 br10" name="user-email">
                            <input type="text" placeholder="Адрес достаки" class="pt10 pb10 pl20 fs16 fw400 mb15 bg-gray w-100 br10" name="user-adress">
                            <textarea name="user-comment" placeholder="Комментарий" id="" rows="3" class="p10 fs16 fw400 bg-gray w-100 br10 mb15"></textarea>
                            <div class="row">
                                <div class="dn sm-db col-sm-1 col-lg-2"></div>
                                <div class="col-6 col-sm-5 col-lg-4">
                                    <div class="br10 b1 lg-fs18 pt10 pb10 fs16 fw400 tac">
                                        Назад
                                    </div>
                                </div>
                                <div class="col-6 col-sm-5 col-lg-4">
                                <div class="br10 bg-dark-blue c-white fs16 lg-fs18 fw700 pt10 pb10  tac">
                                        Отправить
                                    </div>
                                </div>
                                <div class="dn sm-db col-sm-1 col-lg-2"></div>
                            </div>
                            <div class="br10"></div>
                        </form>
                    </div>
                    <div class="dn sm-db col-2"></div>
                </div>
                
            </div>
            <div class="dn sm-db col-4">
                <div class="bg-white br-top-10 pt10 pr10 pl10 ovh scroll-y h269">
    
                    <?for ($i=0; $i < 3; $i++) { ?>
                        <div class="row bg-white p10 mb20">
                            <div class="col-12 col-sm-3 col-lg-4 tac mb20 sm-mb0">
                                <img src="assets/img/product1.png" alt="">
                            </div>
                            <div class="col-12 col-sm-4 col-lg-4  mb20 sm-mb0 df ai-center jc-center">
                                <div class="tac fs16 fw400 lh15">
                                Фторопласт листовой  6 мм (1000х1000 мм) 
                                </div>
                            </div>
                            <div class="col-12 col-sm-2 col-lg-2  mb20 sm-mb0 df ai-center jc-center">
                                <div class="pt5 pb5 fs16 fw400  tac">
                                    2 шт.
                                </div>
                            </div>
                            <div class="col-12 col-sm-3 col-lg-2  df ai-center jc-center">
                                <div class="fs16 fw400 tac">
                                5874 рублей
                                </div>
                            </div>
                        </div>    
                    <? if($i != 2){?>
                            <div class="b-bottom-1 mt10 mb30"></div>
                        <?}?>
                        <?}?>

                    </div>
                    <div class="row pl10 pr10 ">
                        <div class="col-12 bg-dark-blue br-bottom-10">
                            <div class="tar pr30 pt10 pb10 md-pt15 md-pb15 lg-pt20 lg-pb20">
                                
                        <span class="fs20 lg-fs24 fw400 mr20 c-white">Итого:</span>
                        <span class="fs20 lg-fs24 fw700 c-white">5874 рублей</span>
                            </div>
                        </div>
                    </div>
                
       

            </div>
        </div>    
          
    </div>
</div>




<?
    include 'templates/footer.php';
?>