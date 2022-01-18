// HighScoreValue corresponding to value shown in the HighScore 
export default function SetHighScore(score){
    let curHighScore = localStorage.getItem("HighScore");
    if(curHighScore==null) {
        localStorage.setItem("HighScore",score);
        return;
    }
    if(curHighScore<score) localStorage.setItem("HighScore",score);

}
export function getHighScore(){
    let curHighScore = localStorage.getItem("HighScore");
    let HighScoreEle = document.getElementById("HighScoreValue");
    if(curHighScore==null) {
        HighScoreEle.innerText = '0';
        return;
    }
    
    HighScoreEle.innerText = curHighScore;
}