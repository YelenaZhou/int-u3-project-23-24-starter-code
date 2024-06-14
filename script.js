// Declare variables below to save the different divs of your story.
let call = document.querySelector(".option-one");
let adventure = document.querySelector(".option-two");
let opening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let person = document.querySelector(".option-one-middle");
let person2 = document.querySelector(".option-two-middle");
let chat = document.querySelector(".option-one-end");
let optionTwoScreen = document.querySelector(".option-two-screen");
let go = document.querySelector(".option-one-middle2");
let back = document.querySelector(".option-two-middle2");
let mirror = document.querySelector(".option-two-end");
let dark = document.querySelector(".option-two-end2");
let go2 = document.querySelector(".endless");
let stay = document.querySelector(".endless2");
let door = document.querySelector(".end3");
let go3 = document.querySelector(".door1");
let go4 = document.querySelector(".door2");
let go5 = document.querySelector(".door3");
let end = document.querySelector(".no-end");
let storyContinue = document.querySelector(".continue");
let end2 = document.querySelector(".end3-2");








// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


call.addEventListener('click', function(){
    opening.style.display="none";
    call.style.display="none";
    adventure.style.display="none";
    person.style.display="block";
    person2.style.display="block";
    optionOneScreen.style.display="block";
});

person.addEventListener('click', function(){
    person.style.display="none";
    person2.style.display="none";
    optionOneScreen.style.display="none";
    chat.style.display="block";
});

person2.addEventListener('click', function(){
    person.style.display="none";
    person2.style.display="none";
    optionOneScreen.style.display="none";
    chat.style.display="block";
});


adventure.addEventListener('click', function(){
    opening.style.display="none";
    call.style.display="none";
    adventure.style.display="none";
    optionTwoScreen.style.display="block";
    go.style.display="block";
    back.style.display="block";
});

go.addEventListener('click', function(){
    optionTwoScreen.style.display="none";
    go.style.display="none";
    back.style.display="none";
    mirror.style.display="block";
    go2.style.display="block";
    stay.style.display="block";
})

back.addEventListener('click', function(){
    optionTwoScreen.style.display="none";
    go.style.display="none";
    back.style.display="none";
    dark.style.display="block";
})

go2.addEventListener('click', function(){
    mirror.style.display="none";
    go2.style.display="none";
    stay.style.display="none";
    door.style.display="block";
    go3.style.display="block";
    go4.style.display="block";
    go5.style.display="block";
})

go3.addEventListener('click', function(){
    door.style.display="none";
    go3.style.display="none";
    go4.style.display="none";
    go5.style.display="none";
    end.style.display="block";
    storyContinue.style.display="block";
})

go4.addEventListener('click', function(){
    door.style.display="none";
    go3.style.display="none";
    go4.style.display="none";
    go5.style.display="none";
    end.style.display="block";
    storyContinue.style.display="block";
})

go5.addEventListener('click', function(){
    door.style.display="none";
    go3.style.display="none";
    go4.style.display="none";
    go5.style.display="none";
    end.style.display="block";
    storyContinue.style.display="block";
})

stay.addEventListener('click', function(){
    mirror.style.display="none";
    go2.style.display="none";
    stay.style.display="none";
    end2.style.display="block";
})