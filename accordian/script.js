// Constants and variables
const accordian = document.getElementsByClassName('content-container');
const title = document.getElementsByClassName('accordian-title');

for ( let i = 0; i < accordian.length; i++){
    // event listneres for each of these
    console.log(accordian);
    accordian[i].addEventListener('click', function () {

        // by using THIS keyword reference the obj by calling the object
        this.classList.toggle('active');


         
    })
}