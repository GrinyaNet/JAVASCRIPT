function squaredNumbers()  {
   
    let elem = document.querySelector('.number');
    let num = elem.dataset.number;       
    elem.dataset.squaredNumber = Math.pow(num, 2);
    
    
}

squaredNumbers();

// var obj_list = document.querySelector('#list'),
//     objs_list_li = obj_list.querySelectorAll('li');

// // Перебираем все li в #list
// for(var i = 0; i < objs_list_li.length; i++){
//   // Получаем список ul находящиеся в li
//   var objs_li_ul = objs_list_li[i].querySelectorAll('ul');
  
//   // Если li имеет ul, то применяем к заголовку стиль
//   if( objs_li_ul.length ){
//     objs_list_li[i].querySelector('.title').style.color = 'red';
//   };
// };