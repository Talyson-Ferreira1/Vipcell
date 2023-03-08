function load(){
    const load = document.querySelector(".containerLoad");
    const aplication = document.querySelector(".aplicacao")
    load.style.display="none"
    aplication.style.display="flex"

}
const $ = document.querySelector.bind(document)

function TabNavigation(){

const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-contents').children],
    openTab: $('[data-open]')
}

function hideAllContent(){
    html.contents.forEach(section => {
        section.style.display = "none"
    })
}

function removeAllActiveClass(){
    html.links.forEach(tab=>{
        tab.className = tab.className.replace(" active", "")
    })
}

function showCurrentTab(id){

    hideAllContent()
    removeAllActiveClass()

    const tabcontent = $('#' + id)
    tabcontent.style.display="flex"

}

function selectTab(event){
    const target = event.currentTarget
    showCurrentTab(target.dataset.id)

    target.className += " active"

}

function listenForChanges(){
   html.links.forEach(tab => {
    tab.addEventListener('click', selectTab)
   })
}

function init(){
    hideAllContent()
    listenForChanges()

    html.openTab.click()

}

return{
    init
}
}

window.addEventListener('load', ()=>{
    const tabNavigation = TabNavigation()
    tabNavigation.init()
})