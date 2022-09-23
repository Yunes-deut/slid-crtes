let cart=[
    {
        image:"https://images.assetsdelivery.com/compings_v2/leungchopan/leungchopan1601/leungchopan160101490.jpg",
        nam:"sondra lopese",
        fonction:"ux ui designer",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        image:"https://images.assetsdelivery.com/compings_v2/melpomen/melpomen1602/melpomen160200029.jpg",
        nam:"younes",
        fonction:"web devllopr",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        image:"https://images.assetsdelivery.com/compings_v2/dolgachov/dolgachov1904/dolgachov190401042.jpg",
        nam:"mingo",
        fonction:"artist",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        image:"https://images.assetsdelivery.com/compings_v2/zdenkam/zdenkam1601/zdenkam160100245.jpg",
        nam:"Django",
        fonction:"Youtuber",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    }
];
let imageEl=document.querySelector('.image-continer img');
let nameEl=document.querySelector('.name');
let fonctionEl=document.querySelector('.fonction');
let descriptionEl=document.querySelector('.description');
let precedent=document.querySelector('.beffor');
let nextEl=document.querySelector('.next');
let btnEl=document.querySelector('.btn');
let index=0;


function cartes(index){
imageEl.src=cart[index].image;
nameEl.innerHTML=cart[index].nam;
fonctionEl.innerHTML=cart[index].fonction
descriptionEl.innerHTML=cart[index].description;
}

nextEl.addEventListener('click',()=>{
index++;
if(index<cart.length){
    cartes(index);
}
else{
    index=cart.length-1;
    cartes(index);
}
})
precedent.addEventListener('click',()=>{
    index--;
    if(index <0){
        index=0;
        cartes(index);
    }
    if(index < cart.length){
        cartes(index);
    }
    })
btnEl.addEventListener('click',()=>{
    index=Math.floor(Math.random() * cart.length);
    cartes(index);
    })

    