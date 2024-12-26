const prev = document.querySelector("#prev-bttn");
const next = document.querySelector("#next-bttn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

prev.addEventListener("click", prevpage);
next.addEventListener("click", nextpage);

let currentLocation = 1;
let numDfPapers = 4;
let maxLocation = numDfPapers + 1;

function openbook() {   
    book.style.transform = "translateX(50%)";
    prev.style.transform = "translateX(-180px)";
    next.style.transform = "translateX(180px)";
}
function closebook(isAtBegining) {
    if (isAtBegining) {
        book.style.transform = "translateX(0%)";  
    }else {
        book.style.transform = "translateX(100%)";
    }
    prev.style.transform = "translateX(0px)";
    next.style.transform = "translateX(0px)";
}

function nextpage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openbook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;

           case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;

            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                closebook();
                break;  

            default:
                throw new Error("ga ada");
                
        }
        currentLocation++;
    }
}

function prevpage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closebook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 4;
                break;

           case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 3;
                break;

            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 2;
                break;  
            case 5:
                openbook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 1;
              
                break;  

            default:
                throw new Error("ga ada");
                
        }
        currentLocation--;
    }
}
