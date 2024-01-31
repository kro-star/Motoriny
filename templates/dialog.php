<dialog id="myDalog" class="br10 b0 ">
    <div class="df jc-between">
        <div class="fs14 ">
            Вы можете заполнить форму,<br/>но письмо не отправиться.<br/>Свяжитесь со мной по адресу:<br/> krostarmotor@gmail.com
        </div>
        <div class="close" onclick="window.myDalog.close()"></div>
    </div>
        <div class="mt30">        
            <div class="row">
                <div class="col-4">
                <label for="">От кого</label>
                </div>
                <div class="col-8">
                    
                    <input type="text" placeholder="Ваше имя" class="db w-100">
                    <input type="email" placeholder="Ваш email" class="db mt20 w-100">
                </div>
            </div>                    
        </div>
        <div class="mt20">
            <div class="row">
                <div class="col-4">
                <label for="">Тема</label>
                </div>
                <div class="col-8">
                    
                    <input type="text" placeholder="Тема" class="db w-100 ">
                </div>
            </div> 
        </div>
        <div class="mt20">
        <textarea name="" id=""  rows="5" placeholder = "Сообщение" class="w-100 "></textarea>
        </div>
        <div class="mt20 tac">
            <button   name="ok" class="c-white bg-blue bc-blue br10 pt10 pb10 pr50 pl50 mr20" onclick="window.myDalog.close()"> OK </button>
            <button name="cancel"  class="c-white bc-blue b2 text-blue br10 pt10 pb10 pr30 pl30" onclick="window.myDalog.close()"> Отмена </button>
        </div>
</dialog>