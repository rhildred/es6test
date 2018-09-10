const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    STICK:  Symbol("stick"),
    PLAY: Symbol("play")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "Hi I'm spot (a dog). Oh look a stick. Do you play or keep on walking?";
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.STICK;
                break;
            case GameState.STICK:
                if(sInput.toLowerCase().match("play")){
                    sReply = "Great my favourite game ... Here's the stick back. Do you throw it again?"
                    this.stateCur = GameState.PLAY;
                }else{
                    sReply = "Walking is my favourite. Oh look a stick! Do you play or keep on walking?";
                }
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Here it is! I got it for you. Do you toss it again.... Please? ";
                }else{
                    sReply = "Walking is my favourite. Oh look a stick! Do you play or keep on walking?";
                    this.stateCur = GameState.STICK;
                }
                break;
        }
        return(sReply);
    }
}