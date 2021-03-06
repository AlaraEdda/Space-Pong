class GameOverScreen {
    game: Game 
    score: number
    private div: HTMLElement

    //             this,  score
    constructor(g: Game, s: number) {
        this.game = g
        this.score = s

        //Click voor nieuw spel
        // let text = document.createElement("h1")
        // text.innerHTML = "Game Over<br><br>Restart"
        // text.classList.add("splash")
        // text.addEventListener("click",()=> this.Clicked())
        // document.body.appendChild(text)

        //Gameover element is opgehaald van style.css & verwerkt in index.html
        this.div = document.createElement("gameover")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", ()=>this.Clicked())  //Als je klikt word Clicked functie uitgevoerd.
        this.div.innerHTML = "GAME OVER"

        //Score
        let score = document.createElement("gameoverscore")
        document.body.appendChild(score)
        score.addEventListener("click", ()=>this.Clicked())  //Als je klikt word Clicked functie uitgevoerd.
        score.innerHTML = "Score: " + this.score
        
    }
    public update(): void {
    }

    private Clicked() {   
        //Wanneer je klikt, word je doorgestuurd naar game.ts
        //Waarna je doorgestuurd word naar de showPlayScreen() functie.
        this.game.showPlayScreen()
    }
}