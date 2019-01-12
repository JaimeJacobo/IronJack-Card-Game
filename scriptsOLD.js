


    bet(betInt) {

        if(betInt <= this.totalMoney){
            this.totalMoney -= betInt;
            this.totalBet = betInt;
        }else if(betInt > this.totalMoney){
            alert("You don't have enough money to place this bet");
        } else {
            alert('Please, introduce a valid number.');
        };
    };

    shuffleAndDealCards(){
        
    

            if(this.playerCount == 9 || this.playerCount == 10 || this.playerCount == 11){
                $("#footerDiv2").append("<div id=\"doubleButton\"> <button type=\"button\" class=\"btn btn-warning\">Double</button></div>");

                $("#doubleButton").click(function(){
                    player.double();

                    $("#doubleButton").remove();
                }:
    };

    hit(){

        
        if(this.playerCount > 21){
                this.totalBet = 0;

                alert('YOU LOOSE. You bust.');
                $("#totalBet").text('0$');
            
        };
    };

    standAndCompareHands(){
        while(this.dealerCount < 17){

            let randomCard = Math.floor(Math.random()*this.deckOfCards.length + 1);
            

            let pushedCard  = this.deckOfCards[randomCard];
            this.playerHand.push(pushedCard);


            this.dealerCount += pushedCard.value;

           

            $("#dealerCardsDiv").prepend('<p>' + getCardImage(player.dealerHand[player.dealerHand.length - 1].name) + '</p>');
        };


        $("#dealerCount").text('(' + player.dealerCount + ')');

        if(this.dealerCount > 21){
                
            this.totalMoney += this.totalBet * 2;
            alert( 'YOU WIN. The dealer bust.');
            $("#totalBet").text('0$');
            $("#totalMoney").text(this.totalMoney + '$');


        } else if(this.playerCount > this.dealerCount){
            
            this.totalMoney += this.totalBet * 2;
            alert('YOU WIN. Your hand is better than the dealer\'s.');
            $("#totalBet").text('0$');
            $("#totalMoney").text(this.totalMoney + '$');

        } else if (this.dealerCount > this.playerCount) {
            
            alert('YOU LOOSE. your hand is worse than the dealer\;s.');
            $("#totalBet").text('0$');
            
        } else if (this.playerCount == this.dealerCount){
            
            this.totalMoney += Number(this.totalBet);
            alert('PUSH! Your hand is the same as the dealer\'s.');
            $("#totalBet").text('0$');
            $("#totalMoney").text(this.totalMoney + '$');
        };
    };

    double() {
            
            this.totalMoney -= this.totalBet;
            this.totalBet *= 2;
            this.hit();


            $("#playerCardsDiv").prepend('<p>' + getCardImage(player.playerHand[player.playerHand.length - 1].name) + '</p>');
        
            $("#playerCount").text('(' + player.playerCount + ')');  

            this.standAndCompareHands();
            $("#totalMoney").text(player.totalMoney + '$');

           
    };

    // split() {

    // };

    // newGame(){

    // };

    // updateBoard() {

    // };
};



$("#footerDiv2").hide();

$("#startNewGameButton").click(function(){

    $("#footerDiv2").show();
    
    $("#dealerCardsDiv").empty();
    $("#dealerCardsDiv").append("<p id = \"dealerCount\" class=\"countSize\"> (0) </p>");

    $("#playerCardsDiv").empty();
    $("#playerCardsDiv").append("<p id = \"playerCount\" class=\"countSize\"> (0) </p>");

    $("#totalMoney").text('1000$');
    $("#inputBox").val('');

    $("#totalBet").text('0$');

   

   


    player = new Game;
    
});


$("#betButton").click(function(){

    $("#dealerCardsDiv").empty();
    $("#dealerCardsDiv").append("<p id = \"dealerCount\" class=\"countSize\"> (0) </p>");

    $("#playerCardsDiv").empty();
    $("#playerCardsDiv").append("<p id = \"playerCount\" class=\"countSize\"> (0) </p>");
    
    player.bet($("#inputBox").val());

    

    $("#totalMoney").text(player.totalMoney + '$');
    $("#totalBet").text(player.totalBet + '$');

    
});


$("#dealButton").click(function(){
    

    player.resetHandsAndCounts();
    player.shuffleAndDealCards();
    
    if(player.totalBet > 0){
    };   
});


$("#hitButton").click(function(){

    $("#doubleButton").remove();
    player.hit();

    $("#playerCardsDiv").prepend('<p>' + getCardImage(player.playerHand[player.playerHand.length - 1].name) + '</p>');

    $("#playerCount").text('(' + player.playerCount + ')');      
});


$("#standButton").click(function(){
player.standAndCompareHands();
});
