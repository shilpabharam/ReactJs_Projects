export default function JSProblems() {

const findGreatedThanValue = (arr) => {
return arr.filter((item) => {
  return item.salary > 5000;
});
};

const findAverage =() =>{
let input =[
  {name: "A", scores: [10, 20, 30]},
  {name: "B", scores: [5, 15]}]

    input.map(item => ({
        name: item.name,
        average: item.scores.reduce((acc, curr)=> acc + curr , 0) / item.scores.length
    }))
}


const groupByCategory = () => {
let input =[
  {name: "Pen", category: "Stationery"},
  {name: "Pencil", category: "Stationery"},
  {name: "Shirt", category: "Clothes"}
]
   return input.reduce((acc, item) => {
        if(!acc[item.category]){
            acc[item.category] = [];
        }
        
        acc[item.category].push({name : item.name}) 
        return acc;
    }, {})
};

function decode(arr) {
let input = [
  {name: "A", scores: [10, 20, 30]},
  {name: "B", scores: [50, 60]},
  {name: "C", scores: [40, 50, 60]}
]

    let maxAvg = -Infinity;
    let bestObj = null;
    
    for(let i=0 ; i < arr.length;i++){
        let score = arr[i].scores;
        let sum = 0;
        for(let j=0; j< score.length; j++){
            sum += score[j]
        }
        
        const avg = sum / score.length;
        
        if(maxAvg < avg ){
           maxAvg =  avg;
            bestObj = arr[i];
        }
    }
    return bestObj;
}



    return (
        <div>
            <h2>JavaScript Problems Component</h2>
            <p>This component will contain various JavaScript problems and their solutions.</p>
        </div>
    );
}