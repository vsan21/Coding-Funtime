//Q1: 2 people are sitting on a see-saw and you want to find 2 people to sit on the other side who will perfectly balance the see-saw.
//Let's say the 2 people already there have combined weight W. You have an array of personWeights of all the other people you can choose from for the other side. //Write a function to return the 2 weights that will balance out W, or return null if there is no possible answer. Good luck! :)

//WAY 1:
//Time: O(n^2) - nested for loop, both dependent on the personWeights array; not good
//Space: O(1)
function balanceSeesaw(W, personWeights) {
    for (let i = 0; i < personWeights.length; i++) {
        for (let j = 1; j < personWeights.length; j++) {
            if (personWeights[i] + personWeights[j] === W) {
                return `${personWeights[i]}, ${personWeights[j]}`
            }
        }
    }
    return null;
}

//Time: O(n) - faster 
//Space: O(1)
function balanceSeesaw(W, personWeights) {
    for (let i = 0; i < personWeights.length; i++) {
        const person1 = personWeights[i];
        const person2 = W - person1;
        if (personWeights.includes(person2) && i !== personWeights.indexOf(person2)) {
            return `${person1}, ${person2}`
        }
    }
    return null;
}

describe('balanceSeesaw', function() {
    it('should return the 2 weights that will balance out W', function() {
        expect(balanceSeesaw(250, [142, 135, 188, 115, 237])).toBe('135, 115');
    });
    it('should return null if no 2 weights will balance out W', function() {
        expect(balanceSeesaw(330, [123, 274, 90, 155, 108])).toBe(null);
    });
})