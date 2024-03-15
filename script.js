var counterDictionary = {
    'WP_fiets-counter-h' : 0,
    'WP_DAAL-fiets-counter-h' : 0,
    'WP_scooters-counter-h' : 0,
    'WP_DEEL-scooters-counter-h' : 0,
    'HP_fiets-counter-h' : 0,
    'HP_DAAL-fiets-counter-h' : 0,
    'HP_scooters-counter-h' : 0,
    'HP_DEEL-scooters-counter-h' : 0,
    'BP_fiets-counter-h' : 0,
    'BP_DAAL-fiets-counter-h' : 0,
    'BP_scooters-counter-h' : 0,
    'BP_DEEL-scooters-counter-h' : 0
}


function increment(elemID){
    counterDictionary[elemID] += 1
    document.getElementById(elemID).innerText = counterDictionary[elemID]
    console.log(elemID + ": " + counterDictionary[elemID])
}

function decrement(elemID){
    if(counterDictionary[elemID] > 0){
        counterDictionary[elemID] -= 1
        document.getElementById(elemID).innerText = counterDictionary[elemID]
        console.log(elemID + ": " + counterDictionary[elemID])
    }
    else{
        console.log("Cannot go below 0")
    }
}

function setToZero(elemID){
    counterDictionary[elemID] = 0
    document.getElementById(elemID).innerText = counterDictionary[elemID]
    console.log(elemID + " set to zero")
}

let segTBox = document.getElementById("segment-el")
let sNameTBox = document.getElementById("street-name-el")

function save(){
    if(segTBox.value == "" || sNameTBox.value == ""){
        alert("Input the Segment and Street Name!")
    }
    else{
        let table = document.getElementById("entry-tabel")
        let newRow = table.insertRow()
        let newCell = newRow.insertCell()
        newCell.innerText = segTBox.value
        newCell = newRow.insertCell()
        newCell.innerText = sNameTBox.value
        for(const [key,value] of Object.entries(counterDictionary)){
            newCell = newRow.insertCell()
            newCell.innerText = value
            }
 
        
        segTBox.value = ""
        sNameTBox.value = ""

        for(var [key,value] of Object.entries(counterDictionary)){
            setToZero(key)
        }

        console.log("row inserted")
    }
}