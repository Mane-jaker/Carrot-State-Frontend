const oneTwo = document.querySelector('.change');//the first side bar
console.log(oneTwo);
oneTwo.addEventListener('click', function(){
    document.getElementById('sidebar').classList.add('hide');
    document.getElementById('prosbuys').classList.add('show');
});
const twoOne = document.querySelector('.propertytwo');//the second side bar
console.log(twoOne);
twoOne.addEventListener('click', function(){
    document.getElementById('sidebar').classList.remove('hide');
    document.getElementById('prosbuys').classList.remove('show');
});
const close = document.querySelector('.close');//this is for log out, is not finished, needs the other html
console.log(close);
close.addEventListener('click', function(){
    document.getElementById('sidebar').classList.add('hide');
});

/* next three are from top bar first option log in I think
const houses = document.querySelector('.houses');
houses.addEventListener ('click', function(){
    document.getElementById('changeabl').classList.add('changer');
    document.getElementById('changeable').classList.remove('changer');
    document.getElementById('changeables').classList.remove('changer');
    
});
const plots     = document.querySelector('.plots');
plots.addEventListener ('click', function(){
    document.getElementById('changeabl').classList.remove('changer');
    document.getElementById('changeable').classList.add('changer');
    document.getElementById('changeables').classList.remove('changer');
});
const premis    = document.querySelector('.premis');
premis.addEventListener ('click', function(){
    document.getElementById('changeabl').classList.remove('changer');
    document.getElementById('changeable').classList.remove('changer');
    document.getElementById('changeables').classList.add('changer');
});
*/

//next three are for top bar
const houses = document.querySelector('.houses');
houses.addEventListener ('click', function(){//changes titles, changes add button, not changes content
    document.getElementById('changeabl').classList.remove('disp');
    document.getElementById('changeable').classList.add('disp');
    document.getElementById('changeables').classList.add('disp');

    document.getElementById('addbtn').classList.add('addBtnHouse');
    document.getElementById('addbtn').classList.remove('addBtnPlot');
    document.getElementById('addbtn').classList.remove('addBtnPremise');

    document.getElementById('a').classList.add('disp');
    document.getElementById('p').classList.add('disp');
    document.getElementById('s').classList.add('disp');
    document.getElementById('h').classList.remove('disp');

    document.getElementById('aCnt').classList.add('disp');
    document.getElementById('pCnt').classList.add('disp');
    document.getElementById('sCnt').classList.add('disp');
    document.getElementById('hCnt').classList.remove('disp');

    document.getElementById('topbar').classList.add('move');
});
const plots     = document.querySelector('.plots');
plots.addEventListener ('click', function(){//changes titles, changes add button, not changes content
    document.getElementById('changeabl').classList.add('disp');
    document.getElementById('changeable').classList.remove('disp');
    document.getElementById('changeables').classList.add('disp');
    
    document.getElementById('addbtn').classList.remove('addBtnHouse');
    document.getElementById('addbtn').classList.add('addBtnPlot');
    document.getElementById('addbtn').classList.remove('addBtnPremise');

    document.getElementById('a').classList.add('disp');
    document.getElementById('h').classList.add('disp');
    document.getElementById('s').classList.add('disp');
    document.getElementById('p').classList.remove('disp');

    document.getElementById('aCnt').classList.add('disp');
    document.getElementById('hCnt').classList.add('disp');
    document.getElementById('sCnt').classList.add('disp');
    document.getElementById('pCnt').classList.remove('disp');

    document.getElementById('topbar').classList.add('move');
});
const premis    = document.querySelector('.premis');
premis.addEventListener ('click', function(){//changes titles, changes add button, not changes content
    document.getElementById('changeabl').classList.add('disp');
    document.getElementById('changeable').classList.add('disp');
    document.getElementById('changeables').classList.remove('disp');
    
    document.getElementById('addbtn').classList.remove('addBtnHouse');
    document.getElementById('addbtn').classList.remove('addBtnPlot');
    document.getElementById('addbtn').classList.add('addBtnPremise');

    document.getElementById('a').classList.add('disp');
    document.getElementById('h').classList.add('disp');
    document.getElementById('p').classList.add('disp');
    document.getElementById('s').classList.remove('disp');

    document.getElementById('aCnt').classList.add('disp');
    document.getElementById('hCnt').classList.add('disp');
    document.getElementById('pCnt').classList.add('disp');
    document.getElementById('sCnt').classList.remove('disp');

    document.getElementById('topbar').classList.add('move');
});





//plots.addEventListener('click', function(){console.log(document.getElementsByClassName("plots") [0].id);});
//premis.addEventListener ('click', function(){console.log(document.getElementsByClassName("premis")[0].id);});

const prosB     = document.querySelector('.prosB');
const client    = document.querySelector('.client');
const sales     = document.querySelector('.sales');

prosB.addEventListener('click', function(){console.log(document.getElementsByClassName("prosB") [0].id);});
client.addEventListener ('click', function(){console.log(document.getElementsByClassName("client")[0].id);});
sales.addEventListener('click', function(){console.log(document.getElementsByClassName("sales") [0].id);});


const settings  = document.querySelector('.settings');settings.addEventListener('click', function(){console.log(document.getElementsByClassName("settings")[0].id);});
/*failed
const property = document.querySelector('.property');
property.addEventListener('click', function(){
    let id0 = document.getElementsByClassName("terr")[0].id;
    let id1 = document.getElementsByClassName("terr")[1].id;
    let id2 = document.getElementsByClassName("terr")[2].id;
    if (id0 != null){console.log(id0);}
    else if (id1 != null){console.log(id1);}
    else if (id0 != null){console.log(id2);}
});
*/
