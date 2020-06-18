/*
    Contributors:
    - Seth Bullock
    - Edgar Reyes
    - Lakwanjala Williams
*/

const main = document.querySelector('main');
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];//end sampleArray

//SETUP
const sections = [];

for(let i = 0; i < 23; i++) {
    let heading = document.createElement('h3');
    let section = document.createElement('section');
    heading.append(`KATA ${i+1}`);
    
    main.append(heading);
    main.append(section);

    sections.push(section);
}//end for

//KATA 01
for(let i = 1; i <= 20; i++) {
    let answer = document.createElement('div');
    answer.append(i);
    sections[0].append(answer);
}//end for

//KATA 02
for(let i = 2; i <= 20; i += 2) {
    let answer = document.createElement('div');
    answer.append(i);
    sections[1].append(answer);
}//end for

//KATA 03
for(let i = 1; i < 20; i += 2) {
    let answer = document.createElement('div');
    answer.append(i);
    sections[2].append(answer);
}//end for

//KATA 04
for(let i = 1; i <= 20; i++) {
    let answer = document.createElement('div');
    answer.append(5*i);
    sections[3].append(answer);
}//end for

//KATA 05
for(let i = 1; i <= 10; i++) {
    let answer = document.createElement('div');
    answer.append(i*i);
    sections[4].append(answer);
}//end for

//KATA 06
for(let i = 20; i > 0; i--) {
    let answer = document.createElement('div');
    answer.append(i);
    sections[5].append(answer);
}//end for

//KATA 07
for(let i = 20; i >= 2; i -= 2) {
    let answer = document.createElement('div');
    answer.append(i);
    sections[6].append(answer);
}//end for

//KATA 08
for(let i = 19; i > 0; i -= 2) {
    let answer = document.createElement('div');
    answer.append(i);
    sections[7].append(answer);
}//end for

//KATA 09
for(let i = 20; i > 0; i--) {
    let answer = document.createElement('div');
    answer.append(5*i);
    sections[8].append(answer);
}//end for

//KATA 10
for(let i = 10; i > 0; i--) {
    let answer = document.createElement('div');
    answer.append(i*i);
    sections[9].append(answer);
}//end for

//KATA 11
for(let value of sampleArray) {
    let answer = document.createElement('div');
    answer.append(value);
    sections[10].append(answer);
}//end for

//KATA 12
for(let value of sampleArray) {
    if(value % 2 === 0) {
        let answer = document.createElement('div');
        answer.append(value);
        sections[11].append(answer);
    }//end if
}//end for

//KATA 13
for(let value of sampleArray) {
    if(value % 2 !== 0) {
        let answer = document.createElement('div');
        answer.append(value);
        sections[12].append(answer);
    }//end if
}//end for

//KATA 14
for(let value of sampleArray) {
    let answer = document.createElement('div');
    answer.append(value*value);
    sections[13].append(answer);
}//end for

//KATA 15
let kata15sum = 0;
let kata15answer = document.createElement('div');

for(let i = 1; i <= 20; i++) {
    kata15sum += i;
}//end for

kata15answer.append(kata15sum);
sections[14].append(kata15answer);

//KATA 16
let kata16sum = 0;
let kata16answer = document.createElement('div');

for(let value of sampleArray) {
    kata16sum += value;
}//end for

kata16answer.append(kata16sum);
sections[15].append(kata16answer);

//KATA 17
let kata17answer = document.createElement('div');
kata17answer.append(Math.min(...sampleArray));
sections[16].append(kata17answer);

//KATA 18
let kata18answer = document.createElement('div');
kata18answer.append(Math.max(...sampleArray));
sections[17].append(kata18answer);

//KATA 19
for(let i = 0; i < 20; i++) {
    let rect = document.createElement('div');
    rect.style.height = '20px';
    rect.style.width = '100px';
    rect.style.backgroundColor = 'gray';
    sections[18].append(rect);
}//end for

//KATA 20
for(let i = 1; i <= 20; i++) {
    let rect = document.createElement('div');
    rect.style.height = '20px';
    rect.style.width = `${100 + 5*i}px`;
    rect.style.backgroundColor = 'gray';
    sections[19].append(rect);
}//end for

//KATA 21
for(let value of sampleArray) {
    let rect = document.createElement('div');
    rect.style.height = '20px';
    rect.style.width = `${value}px`;
    rect.style.backgroundColor = 'gray';
    sections[20].append(rect);
}//end for

//KATA 22
for(let i = 0; i < sampleArray.length; i++) {
    let rect = document.createElement('div');
    rect.style.height = '20px';
    rect.style.width = `${sampleArray[i]}px`;
    if(i % 2 !== 0) {
        rect.style.backgroundColor = 'red';
    } else {
        rect.style.backgroundColor = 'gray';
    }//end if/else
    sections[21].append(rect);
}//end for

for(let i = 0; i < sampleArray.length; i++) {
    let rect = document.createElement('div');
    rect.style.height = '20px';
    rect.style.width = `${sampleArray[i]}px`;
    if(sampleArray[i] % 2 === 0) {
        rect.style.backgroundColor = 'red';
    } else {
        rect.style.backgroundColor = 'gray';
    }//end if/else
    sections[22].append(rect);
}//end for