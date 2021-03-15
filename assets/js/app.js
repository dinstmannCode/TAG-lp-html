if($(".tabs").length){
    var tab = "";
    $(".tabs").each(function(){
        tab = $(this);

        if((tab.attr("data-newpage") != "true")){
            tab.find("li:first").addClass("on");
            tab.find(".content-tab").hide().end().find(".content-tab:first").show();

            tab.children(".list-tabs").find("li").click(function(e){
                e.preventDefault();
                tab.find("li").removeClass("on");
                $(this).addClass("on");
                tab.find(".content-tab").fadeOut(100);
                
                $("#content-tab-"+$(this).attr("id")).fadeIn(1000, 'swing');
                
                if($(".list-type-5").length){
                    $(".list-type-5").children("li:odd").addClass("odd");
                }
            });
        }
    });
}

function openModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal) {
      modal.classList.add('modal-bookcard-open');
      modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'modal-btn-close') {
          modal.classList.remove('modal-bookcard-open');
        }
    });
   }
  }
  
  const clickModal = document.querySelector('.click-modal');
  const newLocal = 'modal-bookcard';
  clickModal.addEventListener('click', () => openModal(newLocal));