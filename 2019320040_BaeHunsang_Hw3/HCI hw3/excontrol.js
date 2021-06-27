////////////////Exercise infomation/////////////
const pushUp = new exercise("push Up", 2, 10);
const pullUp = new exercise("Pull up", 2, 10);
const lunge = new exercise("Lunge", 2, 10);
const squat = new exercise("Squat", 2, 10);
const Exarr = new Array(pushUp, pullUp, lunge, squat);
///////////////////////////////////////////////
function exercise(kindOfEx, tmpSec, targetCount){
    this.kindOfEx = kindOfEx;
    this.tmpSec = tmpSec;
    this.targetCount = targetCount;
    this.finFlag = false;
}

function start(Exercise){
    countwin.innerHTML ='<h3>Starting ...</h3>';
    let count =0;
    let i=0;
    let intervalId;
    intervalId = setInterval(() => {
        if(i ==4){
            alert("All exercise cleared!");
            clearInterval(intervalId);
            count = 0;
            countwin.innerHTML = "<h2>Todays exercise is done</h2>";
            return;
        }
        if(count == Exercise[i].targetCount){
            finFlag = true;
            alert("Done!");
            countwin.innerHTML = '<h2>Prepare Next Exercise...</h2>';       
            i++;        
            count = 0;   
            return;
        }
        count++;
        let countInfo = `<h2>${Exercise[i].kindOfEx}: ${count} times / ${Exercise[i].targetCount} times</h2>`;
        if((Exercise[i].targetCount) - count <= 1){
             countInfo = `<h2>${Exercise[i].kindOfEx}: <font color='red'>${count}</font> times / ${Exercise[i].targetCount} times</h2><br>
             <h3><font color='red'>Come on! This is last!</h3>`;
        }
        countwin.innerHTML = countInfo;

    }, Exercise[i].tmpSec * 1000);
    document.getElementById("skip").addEventListener("click", () => {
        countwin.innerHTML = '<h3>Prepare Next Exercise...</h3>';       
        i++;        
        count = 0;   
        return;
    });

    document.getElementById("pause").addEventListener("click", () => {
        countwin.innerHTML = '<h3>Please press start to restart exercise</h3>';       
        clearInterval(intervalId);
        return;
    })
}
