call back function of mathematical oepration and run time p pass karte jao aur 2 argunet pass karo  c m call back hoga .....
function greet (name,callback) {
    console.log('Hello ' + name);
    callback();
} 
greet('Isha', function() {
    console.log('Welcome to the world of JavaScript');
});