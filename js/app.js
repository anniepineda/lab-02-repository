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

//first click
$("button").click(function(){
  $('#selector').hide();
  $('#selector2').show();
  $('button').hide();
  $('#two').show();
  $('#photo-template').empty();

}); 
//second click
$("#two").click(function(){

  $('#selector2').hide();
 
  $('#selector').show();

  $('button').show(); 
   $('#two').hide();
   $('#photo-template').empty();
}); 

$("#selector").change(function(){
   
   $('#photo-template').empty();
    var id = $(this).find("option:selected").attr("id");
  console.log(id);


$.get('data/page-1.json').then(
    (data) => {
     
     // console.log(data);
      data.forEach(hornObjFromFile => {
        let horn = new Horns(hornObjFromFile.title, hornObjFromFile.image_url,hornObjFromFile.description,hornObjFromFile.horns, hornObjFromFile.keyword);
       console.log(id);
       //console.log(horn);
       console.log(horn.keyword);
      
        if(id === horn.keyword){
     
        horn.renderWithJquery();
        }
       
      });
    });
  
});




$("#selector2").change(function(){
   
  $('#photo-template').empty();
   var id = $(this).find("option:selected").attr("id");
 console.log(id);


$.get('data/page-2.json').then(
   (data) => {
    
    // console.log(data);
     data.forEach(hornObjFromFile => {
       let horn = new Horns(hornObjFromFile.title, hornObjFromFile.image_url,hornObjFromFile.description,hornObjFromFile.horns, hornObjFromFile.keyword);
      console.log(id);
      //console.log(horn);
      console.log(horn.keyword);
     
       if(id === horn.keyword){
    
       horn.renderWithJquery();
       }
      
     });
   });
 
});