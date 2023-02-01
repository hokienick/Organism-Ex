// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, dnaArr) => {
    return {
        _specimenNum: num,
        _dna: dnaArr,
        mutate (){
            let changeIndex = Math.floor(Math.random() * 15);
            console.log ('Change Index is set to: ' + changeIndex);
            let baseToMutate = this._dna[changeIndex];
            let mutatedBase = returnRandBase();

            while(mutatedBase == baseToMutate){
                mutatedBase = returnRandBase();
            }

            this._dna[changeIndex] = mutatedBase;

            return this._dna;

        },
        compareDNA (paequorObj){
            let matchCount = 0;
            for (let i = 0; i < 15; i++) {
                if(this._dna[i] == paequorObj._dna[i]){
                    matchCount++;
                }
            }
            let percentage = (matchCount/15)*100;
            console.log(`specimen #${this._specimenNum} and specimen #${paequorObj._specimenNum} have ${percentage}% DNA in common`);
        },
        willLikelySurvive (){
            let gcCount = 0;
            for(let i = 0; i<this._dna.length; i++){
                if(this._dna[i] === 'C' || this._dna[i] === 'G'){
                    gcCount++;
                }
            }
            if(gcCount/15 > .6)
                return true;
            else   
                return false;
        }
    };
}

var survivors = [];
const thirtySurvivors = () => {
    let patientNum = 0;
    let survivorsNum = 0;

    while(survivorsNum < 30){
        patientNum++;
        const patient = pAequorFactory(patientNum,mockUpStrand());
        if(patient.willLikelySurvive()){
            survivors.push(patient);
            survivorsNum++;
        }
    }

}

thirtySurvivors();
console.log("Here are the list of Survivors:");
for(let j = 0; j <30; j++){
    console.log(`Patient: #${survivors[j]._specimenNum} DNA: ${survivors[j]._dna} Will Survive? ${survivors[j].willLikelySurvive()}`);
}

/*Testing
let mockStrandKnox = mockUpStrand();
let mockStrandFloof = mockUpStrand();
//console.log('Mock Strand Is: ' + mockStrand);

const knox = pAequorFactory(123,mockStrandKnox);
console.log('Knox is set to: ' + knox._dna);

const floof = pAequorFactory(246,mockStrandFloof);
console.log('Floof is set to: ' + floof._dna);

knox.compareDNA(floof);

console.log(knox.willLikelySurvive());
console.log(floof.willLikelySurvive());
*/


/* Mutating Knox
knox.mutate();
console.log('Knox DNA mutated to: ' + knox._dna);
*/




