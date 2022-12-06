function convert(){
    let Dec = document.getElementById("decimal").value;
    //console.log(Dec);
   
   //the binary convert part

    let dec = Dec,bin = "",place; 
    
    while(dec > 0){
        place = dec % 2;
        dec -= place;
        dec /= 2;
        bin = place + bin;

    }
    //console.log(bin);
    document.getElementById("binary").value = bin;

    // octal convert part
    let oct = ""; 
    dec = Dec;
    while(dec > 0){
        place = dec % 8;
        dec -= place;
        dec /= 8;
        oct = place + oct;

    }
    //console.log(oct);
    document.getElementById("octal").value = oct;

    //hexa values
    var hex = " "; 
    dec = Dec;
    while(dec > 0){
        place = dec % 16;
        dec -= place;
        dec /= 16;
        console.log(dec);
        if(place <= 9){
            hex = place + hex;
        }else{
            switch(place){
                case 10: 
                    hex = "A" + hex;
                    break;
                case 11: 
                    hex = "B" + hex;
                    break;
                case 12: 
                    hex = "C" + hex;
                    break;
                case 13: 
                    hex = "D" + hex;
                    break;
                case 14: 
                    hex = "E" + hex;
                    break;
                case 15: 
                    hex = "F" + hex;
                    break;
            }
            
        }

    }
    console.log(hex);
    document.getElementById("hexa").value = hex;


}