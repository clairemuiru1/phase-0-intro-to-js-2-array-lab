// Write your solution here!
// Define the cats array with initial values
const cats = ["Milo", "Otis", "Garfield"];

// Arrow function to destructively append a cat to the end of the cats array
const destructivelyAppendCat = (name) => {
    cats.push(name);
};

// Arrow function to destructively prepend a cat to the beginning of the cats array
const destructivelyPrependCat = (name) => {
    cats.unshift(name);
};

// Arrow function to destructively remove the last cat from the cats array
const destructivelyRemoveLastCat = () => {
    cats.pop();
};

// Arrow function to destructively remove the first cat from the cats array
const destructivelyRemoveFirstCat = () => {
    cats.shift();
};

// Arrow function to append a cat to the cats array and return a new array
const appendCat = (name) => {
    const newCats = [...cats, name];
    return newCats;
};

// Arrow function to prepend a cat to the cats array and return a new array
const prependCat = (name) => {
    const newCats = [name, ...cats];
    return newCats;
};

// Arrow function to remove the last cat in the cats array and return a new array
const removeLastCat = () => {
    const newCats = cats.slice(0, -1);
    return newCats;
};

// Arrow function to remove the first cat from the cats array and return a new array
const removeFirstCat = () => {
    const newCats = cats.slice(1);
    return newCats;
};

// Export the functions and the cats array
module.exports = {
    cats,}