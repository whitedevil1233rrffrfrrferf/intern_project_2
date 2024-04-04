const selectBtn=document.querySelector(".select-btn")
   items=document.querySelectorAll(".items");
   let selectedPanel=[];

selectBtn.addEventListener("click",()=>{
    selectBtn.classList.toggle("open")
})   

items.forEach(item => {
    item.addEventListener("click",()=>{
        item.classList.toggle("checked");
        let checked=document.querySelectorAll(".checked")
        btnText=document.querySelector(".btn-text");
        selectedPanel=Array.from(checked).map(item=>item.innerText)
        if (checked && checked.length > 0){
            btnText.innerText=`${checked.length}`
        }
        else{
            btnText.innerText="Select panel"
        }
    })
});

function updateSelectedPanelInput(){
    const selectedPanelInput=document.getElementById("selectedPanel")
    selectedPanelInput.value = selectedPanel.join(', ');
    console.log(selectedPanelInput.value)
}