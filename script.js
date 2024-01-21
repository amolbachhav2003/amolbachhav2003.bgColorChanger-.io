const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(i=0 ; i<6; i++){
        color+= hex[Math.floor(Math.random() * 16)]   //---> inside hex its [] braces that means its array and we are randomly generating values from 0-16 so whatever value comes it will be used as index value of hex variable and one by one it will be pushed inside the color until for loop iteration reaches to 5th value and color # code includes only 6 values thats why we run loop till 6 values eg if randomly 6 gets generated that means '012345(6)789ABCDEF' 6 will go inside the color and so on 
    }
    return color;
}

console.log(randomColor())

let bgChanger

backgroundColorChanger = function(){
    document.body.style.backgroundColor =  randomColor()
}

document.querySelector('#start').addEventListener('click', function(){
    bgChanger = setInterval(backgroundColorChanger, 1000)  
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(bgChanger)  
    bgChanger = null
})
