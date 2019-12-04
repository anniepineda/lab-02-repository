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


let hornTest = new Horns('Title 1', 'https://vignette.wikia.nocookie.net/garfield/images/a/ac/OdieCharacter.jpg/revision/latest?cb=20161218045212', 'this is descritpion', 1 );

hornTest.renderWithJquery();


$.get('data/page-1.json').then(
    (data) => {
        //var captured = ;
      console.log(data);
      data.forEach(hornObjFromFile => {
        let horn = new Horns(hornObjFromFile.title, hornObjFromFile.image_url,hornObjFromFile.description,hornObjFromFile.horns, hornObjFromFile.keyword);
       
       //  if(captured = this.keyword = )
     
        
        horn.renderWithJquery();
      });
    });
  

