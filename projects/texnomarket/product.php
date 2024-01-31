<?
    include 'templates/header.php';

    include 'templates/breadcrumbs.php';
?>


<div class="bg-gray">
    <div class="container">
        
    <div class="bg-white br10">
        <div class="row  pb40 pt20">
            <div class="col-3 tac">
                <img src="assets/img/prod.png" alt="">
            </div>
          <div class="col-9">
                    <div class="fs20 sm-fs24 lh15 lg-fs32 fw700 mb5 mb10">
                    Подшипник 6005 (105) 
                    </div>
                    <div class="fs20 sm-fs24 lh15 lg-fs24 fw400 mb10">
                    110 рублей / шт 
                    </div>
                    <div class="row">
                        <div class="col-12 col-xs-6 col-md-4 col-lg-3">
                            <div class="bg-dark-blue tac br10 c-white fs16 lg-fs18 fw700 pt10 pb10">
                            В корзину
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12 ">
                <div class="bg-white br10 mt30">

                    
                    <div class="tab df">
                        <button class="tablinks active fs16 fw700 bg-white sm-fs18 br10  pt10 pb10 pr15 pl15 xs-pl10 xs-pr10 sm-pr20 sm-pl20 md-pr30 md-pl30" onclick="openTab(event, 'Tab1')">Описание</button>
                        <button class="tablinks br10 fs16 fw700 bg-white sm-fs18  pt10 pb10 pr15 pl15 xs-pl10 xs-pr10 sm-pr20 sm-pl20 md-pr30 md-pl30" onclick="openTab(event, 'Tab2')">Характеристики</button>
                    </div>
                
                    <div class="tabcontent active br-bottom-10" id="Tab1">
                        <?
                            include 'templates/choose-tab-description.php';
                        ?>
                    </div>
                
                    <div class="tabcontent br-bottom-10" id="Tab2">
                        <?
                            include 'templates/choose-tab-specification.php';
                        ?>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <?
            include 'templates/new-product.php';
        ?>
        <div class="pb40"></div>
    </div>
</div>





<?
    include 'templates/footer.php';
?>