class MobileNavBar{
    constructor(mobileMenu, navList, spanLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.spanLinks = document.querySelector(spanLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    

    handleClick(){
        this.navList.classList.toggle(this.activeClass)
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log("ok"))
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this
    }
}
MobileNavBar = new MobileNavBar(
    ".mobileMenu",
    ".navList",
    ".spanLinks"
)
document.addEventListener('DOMContentLoaded', function() {
    MobileNavBar.init();
})