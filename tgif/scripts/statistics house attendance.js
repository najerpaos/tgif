import {data_house} from './pro-congress-117-house.mjs';


const members = data_house.results[0].members;


//statistic count total members per house

  const partyvalues=()=>{
    let values=[]
    members.forEach((foo)=>values.push(foo.party))
    return values
  }
  let parties=partyvalues(members)
  console.log(parties)

  
  let republicanT=parties.filter((foo)=>foo==="R").length
  
  let democraticT=parties.filter((foo)=>foo==="D").length
  
  let independentT=parties.filter((foo)=>foo==="ID").length
  
  let partyTotals=republicanT+democraticT+independentT
  
  let republicanPer=((republicanT/partyTotals)*100).toFixed(2)+"%"
  
  let democraticPer=((democraticT/partyTotals)*100).toFixed(2)+"%"
  
  let independentPer=((independentT/partyTotals)*100).toFixed(2)+"%"


  const createPartiesTable=()=>{
  document.getElementById('tbody').innerHTML=""
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

//Statistics: Most engaging

let membersMostEng= members.sort((a,b)=>a.missed_votes-b.missed_votes)
let mostEngag=membersMostEng.slice(0,10)
console.log(mostEngag)

const createMostEngTable=(array)=>{
  document.getElementById('tbodyMostEng').innerHTML=""
  
  for(let i=0;i<array.length;i++){
  let mostEngRow=document.createElement('tr')
  let memberName=document.createElement('td')
  let missedVotes=document.createElement('td')
  let missedVotesPer=document.createElement('td')
  let anchor=document.createElement('a')
  anchor.setAttribute('href', array[i].url)
  anchor.textContent=array[i].first_name+ " " +array[i].last_name
  memberName.appendChild(anchor)
  missedVotes.innerHTML=array[i].missed_votes
  missedVotesPer.innerHTML=array[i].missed_votes_pct
  mostEngRow.append(memberName,missedVotes,missedVotesPer)
  tbodyMostEng.append(mostEngRow)
  
  }
}
  createMostEngTable(mostEngag)

//Statistics: Less engaging

let membersLessEng= members.sort((a,b)=>b.missed_votes-a.missed_votes)
let lessEngag=membersLessEng.slice(0,10)
console.log(lessEngag)

const createLessEngTable=(array)=>{
document.getElementById('tbodyLessEng').innerHTML=""

for(let i=0;i<array.length;i++){
let mostEngRow=document.createElement('tr')
let memberName=document.createElement('td')
let missedVotes=document.createElement('td')
let missedVotesPer=document.createElement('td')
let anchor=document.createElement('a')
anchor.setAttribute('href', array[i].url)
anchor.textContent=array[i].first_name+ " " +array[i].last_name
memberName.appendChild(anchor)
missedVotes.innerHTML=array[i].missed_votes
missedVotesPer.innerHTML=array[i].missed_votes_pct
mostEngRow.append(memberName,missedVotes,missedVotesPer)
tbodyLessEng.append(mostEngRow)

}
}
createLessEngTable(lessEngag)








