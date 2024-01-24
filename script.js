var n=1
document.querySelector('.conex span').addEventListener("click", function () {
    

        if(n==1){
            document.querySelector('.compt').style.top="46px"
            n--
        }
        else{
            document.querySelector('.compt').style.top="-500px"
            n++
        }
})
if( window.innerWidth<768)
    document.querySelector('.search').style.display="none"
else
    document.querySelector('.search').style.display="flex"
// 46px