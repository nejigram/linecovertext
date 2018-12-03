var linecovertext_1 =  document.getElementsByClassName('linecovertext_1');
var linecoverimg_200 =  document.getElementsByClassName('linecoverimg_200');
var linecovertext_2 =  document.getElementsByClassName('linecovertext_2');
var wheight = window.innerHeight;

window.onload = function(){
    linecovertext();

}
window.onscroll = function(){
    linecovertext();
}
function linecovertext(){
    for(var i = 0;i < linecovertext_1.length;i++){
        let nowitem = linecovertext_1[i];
        if(!nowitem.classList.contains("open_1")){
            let rect = nowitem.getBoundingClientRect();
            if(rect.top + window.pageYOffset < window.pageYOffset + wheight){
                nowitem.classList.add("open_1");

            }

        }
    }

    for(var x = 0;x < linecoverimg_200.length;x++){
        let nowitem = linecoverimg_200[x];
        if(!nowitem.classList.contains("open_1")){
            nowitem.classList.add("open_1");
        }
    }
    for(var y = 0;y < linecovertext_2.length;y++){
        let nowitem = linecovertext_2[y];
        if(!nowitem.classList.contains("open_2")){
            let rect = nowitem.getBoundingClientRect();
            if(rect.top + window.pageYOffset < window.pageYOffset + wheight){
                nowitem.classList.add("open_2");

            }
        }
    }
}
