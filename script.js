let val = document.getElementById("inp");
let head = document.getElementsByTagName("th")[0];



val.addEventListener("keyup", (e) => {
        let filter = e.target.value;
        console.log(filter);
       let tr=document.getElementsByTagName("tr");
        for (let i=0;i<tr.length;i++){
                let td=tr[i].getElementsByTagName("td")[0];
                if(td){
                  let data=td.textContent;
                  data=data.toUpperCase();
                  filter=filter.toUpperCase();
                
                  if(data.indexOf(filter)>-1){
                        td.parentElement.style.display="";
                       
                  }
                  else{
                        tr[i].style.display="none";
                       
                  }
                 
                }
        }


})
