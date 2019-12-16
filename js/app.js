// 'use strict';


function Horns(title, image_url , description, horns, keyword){
this.title = title;
this.image_url = image_url;
this.description = description;
this.horns = horns; 
this.keyword = keyword;

}


Horns.prototype.renderWithJquery = function(){

$('#photo-template').append(`
<div>
<h2>${this.title}</h2>
<img src= ${this.image_url}></img>
<p>${this.description}</p>
<p> Horn Count =  ${this.horns}</p>
</div>

`);
};
$('#two').hide();
$('#selector2').hide();
$('#four').hide();
$('#three').hide();

//first click
$("button").click(function(){
  
  $('#photo-template').empty();
  $('#selector').hide();
  $('#selector').hide();
  $('#selector2').show();
  $('button').hide();
  $('#two').show();
  $('#three').hide();
  $('#four').hide();
}); 

//second click
$("#two").click(function(){
  $('#photo-template').empty();
  $('#selector2').hide();
  $('#selector').show();
  $('button').show(); 
   $('#two').hide();
  
   $('#four').hide();
   $('#three').hide();
}); 


$("#selector").change(function(){
  $('#photo-template').empty();
  $('#three').show();

    var id = $(this).find("option:selected").attr("id");
  // console.log(id);


$.get('data/page-1.json').then(
    (data) => {
     
     // console.log(data);
      data.forEach(hornObjFromFile => {
        let horn = new Horns(hornObjFromFile.title, hornObjFromFile.image_url,hornObjFromFile.description,hornObjFromFile.horns, hornObjFromFile.keyword);
      
       if(id === horn.keyword){
         
        // console.log('-----', arr)
       arr.push(horn);
      //  console.log(horn);
      horn.renderWithJquery();
      }

      });
    });
  
});

function callBack(a,b){
  if(a.title>b.title){
      return 1;
  }
  else{
      return -1;
  }
}

$("#three").click(function(){
  $('#photo-template').empty();
  // console.log(arr);
 arr.sort(callBack);


 for(let i = 0; i < arr.length; i++){
   arr[i].renderWithJquery();
 }
  arr = [];
}); 


var arr = [];

$("#selector2").change(function(){
  $('#photo-template').empty();
  $('#four').show();

   var id = $(this).find("option:selected").attr("id");
 console.log(id);


$.get('data/page-2.json').then(
   (data) => {
   
  

    // console.log(data);
     data.forEach(hornObjFromFile => {
       let horn = new Horns(hornObjFromFile.title, hornObjFromFile.image_url,hornObjFromFile.description,hornObjFromFile.horns, hornObjFromFile.keyword);
      //console.log(id);
      //console.log(horn);
      //console.log(horn.keyword);
   
console.log(id, horn.keyword);
       if(id === horn.keyword){
         
        //  console.log('-----', arr)
        arr.push(horn);
        // console.log(horn);
       horn.renderWithJquery();
       }

    
      
      
     });

     

   });


$("#four").click(function(){
  $('#photo-template').empty();
  console.log(arr);
 arr.sort(callBack);


 for(let i = 0; i < arr.length; i++){
   arr[i].renderWithJquery();
 }
  arr = [];
}); 
 
});

