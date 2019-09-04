// 'use strict'
//
// let copText = document.getElementsByClassName('copText')[0];
// let note = document.getElementsByClassName('template note');
// let conf = document.getElementsByClassName('conf');
// let show = document.getElementsByClassName('template show');
// let delText = document.getElementsByClassName('delText');
//
// window.onload = function() {
//    // 実行したい処理
//   copText.onchange = function(){
//     // テンプレートの削除と複製
//     note.clone().append('.note').removeClass('template');
//   };
//
//   conf.onclick = function(){
//     // 最初の表示の箇所
//     show.removeClass('template');
//   };
//
//   delText.onclick = function(){
//     note.remove();
//   };
//
// }
$(function(){
  $('.conName').change(function(){
    if($(this).val()){
      $('.template.show').removeClass('template');
    }else{
      $('.show').addClass('template');
    }
  });

  $('.copText').click(function(){
     var copy =  $('.template.cpNote');
    $('.note').append($(copy).clone(true).removeClass('template'));
  });

  $('.delText').click(function(){

    $(this).parent().remove();
  });
});
