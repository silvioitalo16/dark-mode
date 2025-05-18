
const switcher = document.querySelector('.btn')

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
 if(className === document.body.className){
    this.textContent = "dark";
  }
 else{
    this.textContent = "light";
 }

 console.log('current class name: '+ className);
    
});



    
