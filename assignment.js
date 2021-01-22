//kilometerToMeter-Start
function kilometerToMeter (kilometer){
        var meter = kilometer*1000;
        return meter;
}
        var resultMeter = kilometerToMeter(52.5);
        console.log(resultMeter) 
//kilometerToMeter_End....


//budgetCalculator-Start
function budgetCalculator(){
       var watch     = 50*12;
       var mobile    = 100*5;
       var laptop    = 1000*2;
       total         = watch+mobile+laptop;  
       return total;
}
       var totalcost = budgetCalculator();
       console.log(totalcost);
//budgetCalculator_End....    


//hotelCost-Start 
function hotelCost(days){
        var money = 0;
        if(days<=10){
        money = days*100;
    }
    else if(days<=20){
        var firstpart  = 10*100;
        var remaining  = days-10;
        var secondpart = remaining*80;
        money          = firstpart + secondpart;
    }
    else{
        var firstpart  = 10*100;
        var secondpart = 10*80;
        var remaining  = days-20;
        var thirdpart  = remaining*50
        money          = firstpart+secondpart+thirdpart;
    }
        return money;
}
        var total = hotelCost(40);
        console.log(total);
//hotelCost_End....


//megaFriend-Start
var strings =['roni','joni','mahabub','faisal','mamun','kadir','jannatul','shaiful'];
function megaFriend(maxNam){
        var result ='';
        for (var i = 0; i<maxNam.length; i++){
             var currentNam = maxNam[i];
        if(currentNam.length>result.length){
             result = maxNam[i];
         } 
        }
        return result;
}
console.log(megaFriend(strings))
//megaFriend-End....