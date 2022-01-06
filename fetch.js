// let fetchRes = fetch("https://api.spacexdata.com/v4/launches");
// fetchRes.then(res =>
//     res.json()).then(d =>  console.log(d) )



    fetch('https://jsonplaceholder.typicode.com/comments/')
    .then(res => res.json())
    .then(json =>{
       let k= document.getElementById('table');
    //    let kk=document.createElement('TABLE')
        // var s=document.createElement("TABLE");
        for(i=0;i<json.length;i++){
            console.log(json[i]);
            let row= k.insertRow(i);
            let cellone=row.insertCell(0);
            let celltwo=row.insertCell(1);
            cellone.innerHTML=json[i].name;
            celltwo.innerHTML=json[i].email;
    
        }
    } )


