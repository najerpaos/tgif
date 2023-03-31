import {data} from './pro-congress-117-senate.mjs';
import {states} from './state-hash.mjs';
/* export const fetchJson= async(url) => {
 let response = await fetch("./pro-congress-117-senate.json");
 return response.json();
} */
/* export const fetchJson= async(url) => {
 await fetch('pro-congress-117-senate.json')
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    return data;
  })
  .catch(function (err) {
    console.log(err);
  });
 } */

//tables
 const members = data.results[0].members;

 //select html element 


 

 const createTable = (array) => {
  document.getElementById("tbody").innerHTML = "";
  for(let i=0;i<array.length;i++) {
    //create new rows for each element of the list
    const newRow = document.createElement("tr");
    
    let anchor = document.createElement("a"); //create anchor tag
    anchor.setAttribute('href', array[i].url); //direction to find url
    anchor.textContent = array[i].first_name + " " + array[i].last_name; //content anchor
    
    let tdName = document.createElement("td"); //create td's of the table
    let tdParty = document.createElement("td");
    let tdState = document.createElement("td");
    let tdYearsOffice = document.createElement("td");
    let tdVotes = document.createElement("td");

    tdName.appendChild(anchor); //add the anchor to the td tag
    /* tdName.innerHTML= array[i].first_name + " " +  middleName + " " + array[i].last_name; */
    tdParty.innerHTML= array[i].party;
    tdState.innerHTML= array[i].state;
    tdYearsOffice.innerHTML= array[i].seniority;
    tdVotes.innerHTML= array[i].votes_with_party_pct;
    newRow.append(tdName, tdParty, tdState, tdYearsOffice, tdVotes); // append all td's to the same row
    tbody.append(newRow); // append every new row to the tbody (table)
  }
 }
 
 createTable(members);

 let checkboxes=document.querySelectorAll('input[type=checkbox]')
 let selectmenu = document.getElementById("dm-states");


//filter by states
 const dropdownmenuStates = (objects) => {
  const fullstates = Object.entries(objects);
  
  fullstates.forEach(state => {
    let option = document.createElement("option");
    option.value = state[0];
    option.text = state[1];
    selectmenu.appendChild(option);
  })
}
dropdownmenuStates(states);

const filttable=(members)=>{
  const filtboxes=Array.from(checkboxes).filter((i)=>i.checked).map((i)=>i.value)
  const state=selectmenu.value
let filteredData=members;

if (filtboxes.length!==0 && selectmenu.value == "All states" ){
  filteredData=members.filter((member)=>filtboxes.includes(member.party))
}

if (filtboxes.length==0 && selectmenu.value!== "All states"){
  filteredData=members.filter((member)=>member.state==state)
}

if (filtboxes.length!==0 && selectmenu.value!== "All states"){
  filteredData=members.filter((member)=>filtboxes.includes(member.party) && member.state==state)
}

return createTable(filteredData)
}

const AllEventListener=()=>{
  selectmenu.addEventListener('change',()=>filttable(members));
  checkboxes.forEach((checkbox)=>checkbox.addEventListener('change',()=>filttable(members)))}
  
AllEventListener(members)

