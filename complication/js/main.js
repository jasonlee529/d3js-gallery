//fydebug在这里删掉了fetchData该函数调用，因为fetchdata需要接受点击事件传过来的参数，所以把fatchdata函数的调用写在了别的地方
//fydebug如果再次需要调用该函数不能通过只加载这些js来直接调用，需要调用fetchdata 函数
var intervalId;
var counter=2;
var renderLinks=[];

function main() {
    initialize();
    updateNodes();
    updateChords();
 //   console.log("contr.length=" + contr.length)
  //  updateLinks(contr);
    intervalId=setInterval(onInterval,1);
}

/*
function onDataFetched() {
    main();
}
*/

function onInterval() {
    if(contr.length==0) {
        clearInterval(intervalId);
    }
    else {
       // renderLinks=[];
        for (var i=0; i < counter; i++) {
            if (contr.length > 0) {
                renderLinks.push(contr.pop());
            }
        }
        counter=30;
        //counter++;
        updateLinks(renderLinks);
    }
}