

//a function that sorts the transactions and converts the time to miliseconds

function findDuplicateTransaction(transaction){
  let transaction2 = transaction.slice()

   transaction2 = transaction2.sort ((a,b)=> a.id - b.id);

   function timeDifference (date1, date2) 
  {
   return (new Date(date1).getTime() - new Date(date2).getTime())/60000
  }
  let result = []

//Loop
while (transaction2.length) 
{
  let transactionGroups = [];
  let element = transaction2.shift()
transactionGroups.push(element) 

for (let i = 0; i < transaction2.length; i ++ )
  {
  if (element.sourceAccount === transaction2[i].sourceAccount &&
    element.targetAccount === transaction2[i].targetAccount &&
    element.category === transaction2[i].category &&
    element.amount === transaction2[i].amount &&
    timeDifference (transaction2[i].time, element.time) <= 1)
    
    { transactionGroups.push(transaction2[i])
    element = transaction2[i]
    transaction2.splice(i,1)
      i = i -1 }
   } 
if (transactionGroups.length > 1) 
  {result.push(transactionGroups) }

}

return result

}



export default findDuplicateTransaction;
