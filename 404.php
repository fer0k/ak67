<?php
include( $_SERVER['DOCUMENT_ROOT']."/header.php");
?>
<div class="container">
    <div class="col-xs-12">
                <h1>Задан неверный адрес.<br>
                Ошибка доступа 404
                </h1>
    </div>
</div>
<div class="container-fluid">
                    <section  class=" row-fake">
                        <div class="col-lg-12" id="map_site" title="Карта">
                            <script 
                                type="text/javascript"
                                charset="utf-8"
                                async 
                                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6d041e7397292e3825f230297199a4d3451d4416840f52415d8be84f6900e4d3&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
                            ></script>
                        </div>
                    </section>
                </div> 
<?php
include( $_SERVER['DOCUMENT_ROOT']."/footer.php");
?>