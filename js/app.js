function Horns(title, image_url , description, horns, keyword){
this.title = title;
this.image_url = image_url;
this.description = description;
this.horns = horns; 
this.keyword = keyword;

}


// let main = $('main');
// console.log(main);

// main.append(`
// <h2>Hello class</h2>
// <p>today rocks</p>
// `);

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
