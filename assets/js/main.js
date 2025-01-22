/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/*========== MENU SHOW ===============*/
/*validate if constant exist*/
if(navToggle){
    navToggle.addEventListener('click' ,() =>{
        navMenu.classList.add('show-menu')
    })
}


/*=========== MENU HIDDEN ======*/
/* Validate if constant exist */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    //when we click on each nav__link ,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader=() =>{
    const header=document.getElementById('header')
    //when scroll is greater than 50 viewpoint height ,add blur-header class to

    this.scrollY >= 50 ? header.classList.add(' ')
                       :header.classList.remove('blur-header')
                      
}
window.addEventListener('scroll',blurHeader) 
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=() =>{
    const scrollUp=document.getElementById('scroll-Up')
    //when the scroll is higher than 350 viewport height ,add
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                   : scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll',scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section=document.querySelectorAll('section[id]')

const scrollActive =() =>{
    const scrollY=Window.pageYOffset

    section.forEach(current =>{
        const sectionHeight=current.offsetHeight,
               sectionTop=current.offsetTop - 58,
               sectionId=current.getAttribute('id'),
               sectionClass=document.querySelector('.nav_menu a[href*='+
                sectionId + ']'
        )
        if (scrollY >sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)


/*=============== DARK LIGHT THEME ===========================================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line' 

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon  = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class 
const getCurrentTheme = () =>document.body.classList.contains(darkTheme) ? 'dark' :'right'
const getCurrentIcon  = () =>themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic
if(selectedTheme){
    //if the validation is fulfilled ,we ask what the issue was to know if we activated or deactivate the dark
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line' ? 'add' : 'remove'] (iconTheme)
}

//Activate /Deactivate the theme manually with the button
themeButton.addEventListener('click',() =>{
    //Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon() )
})



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:5200,
    delay:400,
    delay:400,//reset:true//animation repeat
})
 sr.reveal('.home_data' , 'list_container, . join_content .footer_container ')
 sr.reveal('.home_img' ,{origin:'bottom'})  
 sr.reveal('.health_images , .routine_images,.follow_img-3',{origin:'left'}) 
 sr.reveal('.health_data , .routine_data ,.follow_img-3',{origin:'right'}) 
 sr.reveal('.follow_data ,.follow_content-1 img' ,{interval :100}) 
