function clickfunc() {
    let button = document.getElementById("btnmain");
    let mainbg = document.getElementById("mainbox");
    let moonimg = document.getElementById("moonimg");
    let greedtxt = document.getElementById("greedtxt");


    mainbg.classList.toggle("main2");
    button.classList.toggle("butdisaper");
    moonimg.classList.toggle("moonanim");
    greedtxt.classList.toggle("txt2");
}