// First Hash function 
"a".charCodeAt(0);  // gives us the charcode of index 0 
function hash(key, arrayLen) {
    let total = 0;
    for(let i=0; i<key.kength; i++) {
        // map "a" to 1,  to "2", etc...
        let char = key[i];
        let value = char.charCodeAt(0) - 96  // -96 gives place in alphabet from 0-26
        total = (total + value) % arrayLen;
    }
    return total;
}

// optimize our hash function
// always good to make it prime to reduce collisions
function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i=0; i<Math.min(key.length, 100); i++) {
        // map "a" to 1,  to "2", etc...
        let char = key[i];
        let value = char.charCodeAt(0) - 96  // -96 gives place in alphabet from 0-26
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// Hashtable class
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31;
        for(let i=0; i<Math.min(key.length, 100); i++) {
            // map "a" to 1,  to "2", etc...
            let char = key[i];
            let value = char.charCodeAt(0) - 96  // -96 gives place in alphabet from 0-26
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i=0; i<this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    // return this.keyMap[index][i];   if we want to return key-value pair array
                    return this.keyMap[index][i][1]; // if we want to get the value only
                }
            }
        }
        return undefined;
    }
    values() {
        let valuesArr = [];
        for(let i; i<this.keyMap,length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j])[1];
                    }
                } 
            }
        }
        return valuesArr;
    }
    keys() {
        let keysArr = [];
        for(let i; i<this.keyMap,length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j])[0];
                    }
                } 
            }
        }
        return keysArr;
    }
}
