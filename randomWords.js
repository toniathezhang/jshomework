function randomWords(){
    words = ['King', 'Dog', 'Castle', 'Maid', 'Wizard', 'Goat', 'Breakfast', 'Village']

    randomW = []
    for(var i=0; i<5;i++){
        randomW.push(words[Math.floor(Math.random()*words.length)])
    }

    console.log('The '+ randomW[0]+' ran to the '+ randomW[1]+' from the  '+randomW[2]+' to eat its '+randomW[3]+' but it got kidnapped by the '+ randomW[4] + ' on the way');

}
