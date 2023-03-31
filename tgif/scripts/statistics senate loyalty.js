import {data} from './pro-congress-117-senate.mjs';


const members = data.results[0].members;


//Statistics: Count total members per party and average

  const partyvalues=()=>{
    let values=[]
    members.forEach((foo)=>values.push(foo.party))
    return values
  }
  let parties=partyvalues(members)
  console.log(parties.length)

  
  let republicanT=parties.filter((foo)=>foo==="R").length
  
  let democraticT=parties.filter((foo)=>foo==="D").length

  let independentT=parties.filter((foo)=>foo==="ID").length
  
  let partyTotals=republicanT+democraticT+independentT
  
  let republicanPer=(republicanT/partyTotals)*100+"%"
  
  let democraticPer=((democraticT/partyTotals)*100).toFixed(2)+"%"
  
  let independentPer=((independentT/partyTotals)*100).toFixed(2)+"%"


  const createPartiesTable=()=>{
  document.getElementById("tbody").innerHTML=""
  for(let i=0;i<3;i++){
  let row=document.createElement('tr')

  if(i===0){
    let party=document.createElement('td')
    let totalVotes=document.createElement('td')
    let percentVotes=document.createElement('td')
    party.innerHTML="Republican"
    totalVotes.innerHTML=republicanT
    percentVotes.innerHTML=republicanPer
    row.append(party,totalVotes,percentVotes)
    tbody.append(row)
    
  }

  else if(i===1){
    let party=document.createElement('td')
    let totalVotes=document.createElement('td')
    let percentVotes=document.createElement('td')
    party.innerHTML="Democratic"
    totalVotes.innerHTML=democraticT
    percentVotes.innerHTML=democraticPer
    row.append(party,totalVotes,percentVotes)
    tbody.append(row)
  }

  else if(i===2){
    let party=document.createElement('td')
    let totalVotes=document.createElement('td')
    let percentVotes=document.createElement('td')
    party.innerHTML="Independent"
    totalVotes.innerHTML=independentT
    percentVotes.innerHTML=independentPer
    row.append(party,totalVotes,percentVotes)
    tbody.append(row)
  }
}
}
createPartiesTable()

//Statistics: Most loyal

  let membersMostLoy= members.sort((a,b)=>b.votes_with_party_pct-a.votes_with_party_pct)
  let mostLoyal=membersMostLoy.slice(0,10)
  console.log(mostLoyal)

  const createMostLoyTable=(array)=>{
    document.getElementById('tbodyMostLoy').innerHTML=""
    
    for(let i=0;i<array.length;i++){
    let mostLoyRow=document.createElement('tr')
    let memberName=document.createElement('td')
    let totVotes=document.createElement('td')
    let totVotesPer=document.createElement('td')
    let anchor=document.createElement('a')
    anchor.setAttribute('href', array[i].url)
    anchor.textContent=array[i].first_name+ " " +array[i].last_name
    memberName.appendChild(anchor)
    totVotes.innerHTML=array[i].total_votes
    totVotesPer.innerHTML=array[i].votes_with_party_pct
    mostLoyRow.append(memberName,totVotes,totVotesPer)
    tbodyMostLoy.append(mostLoyRow)
    
    }
  }
    createMostLoyTable(mostLoyal)

//Statistics: Less loyal

let membersLessLoy= members.sort((a,b)=>b.votes_against_party_pct-a.votes_against_party_pct)
let lessLoyal=membersLessLoy.slice(0,10)
console.log(lessLoyal)

const createLessLoyTable=(array)=>{
  document.getElementById('tbodyLessLoy').innerHTML=""

  for(let i=0;i<array.length;i++){
  let lessLoyRow=document.createElement('tr')
  let memberName=document.createElement('td')
  let totVotes=document.createElement('td')
  let totVotesPer=document.createElement('td')
  let anchor=document.createElement('a')
  anchor.setAttribute('href', array[i].url)
  anchor.textContent=array[i].first_name+ " " +array[i].last_name
  memberName.appendChild(anchor)
  totVotes.innerHTML=array[i].total_votes
  totVotesPer.innerHTML=array[i].votes_against_party_pct
  lessLoyRow.append(memberName,totVotes,totVotesPer)
  tbodyLessLoy.append(lessLoyRow)
  
  }
}
createLessLoyTable(lessLoyal)

