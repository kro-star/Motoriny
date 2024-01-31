<?
    include 'templates/header.php';

    include 'templates/breadcrumbs.php';
?>


<div class="bg-gray">
    <div class="container">
    <div class="row ">
            <div class="col-12">
                <div class="fs20 sm-fs24 lg-fs40 fw700 mb30">
                Подшипники
                </div>
            </div>
            <div class="col-12">
                <div class="df jc-between sm-jc-end ai-end">

                <div class="sm-dn bg-dark-blue br10 c-white pt10 pb10 pr40 pl40 fs16 sm-fs20 fw700">
                    Фильтры
                </div>
                <div class="">
                <select id="selcolor" class="b0 br10 selectsort pr20 pl20  fs14 fw400 bg-dark-blue c-white pt5 pb5 ">
                    <option value="none">Без сортировки</option>
                    <option value="Popular">По популярности</option>
                    <option value="PriceBig">По возрастанию цены</option>
                    <option value="PriceSmall">По убыванию цены</option>
                    <option value="Alphabet">По алфавиту</option>
                </select>
                </div>
                </div>
            </div>
        </div>
        <div class="row pb30 sm-pb50 lg-pb70 ">
            <div class="col-4 dn sm-db">
                <?
                    include 'templates/filter.php'
                ?>
            </div>
            <div class="col-12 col-sm-8">
                <div class="row pb20">
                    <?for ($j = 0; $j < 12; $j++){?>
                    <div class="col-6  col-lg-4 p10">
                        <?
                            include 'templates/card-product.php';
                        ?>
                    </div>
                    <?}?>
                </div>
                <div class="row">
                    <div class="col-12">
                    <div class="df jc-center ac-center">
                        <div class="mr20 ">
                            <img src="assets/img/prev.png" alt="" class="h24">
                        </div>
                        <div class="mr20 fs20 lh12 fw700">
                            <a href="">1</a>
                        </div>
                        <div class="mr20 fs20 lh12 fw400">
                            <a href="">2</a>
                        </div>
                        <div class="mr20 fs20 lh12 fw400">
                            <a href="">3</a>
                        </div>
                        <div class="mr20 fs20 lh12 fw400">
                            <a href="">4</a>
                        </div>
                        <div class="">
                            <img src="assets/img/next.png" alt="" class="h24 ">
                        </div>
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