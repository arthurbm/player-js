// import musicNames from "./mp3data";
// import elements from "./elements";

class Player {
    constructor({ playerId }){
      elements.get.call(this);
  
      this.handleEventListeners();
    }
    smartTime() {
      return time < 10 ? "0" + time.toString().trim() : time;
    }

    handleEventListeners(){
      this.playBtn.addEventListener('click', () => {
        if (this.audioElement.paused){
            this.audioElement.play();
            this.imgPlayPause.src = "../public/assets/stop.svg"
        }
        else {
            this.audioElement.pause();
            this.imgPlayPause.src = "../public/assets/play.svg"
        }
      });
      
    //   this.pauseBtn.addEventListener('click', () => {
    //     this.audioElement.pause();
    //   });
  
      this.forwardBtn.addEventListener('click', () => {
        this.audioElement.currentTime += 10;
      });
  
      this.backwardBtn.addEventListener('click', () => {
        this.audioElement.currentTime -= 10;
      });
  
      // this.audioElement.addEventListener('timeupdate', () => {
      //   const {
      //     currentTime,
      //     duration,
      //   } = this.audioElement;
      //   this.progressBar.style.width = `${100 * currentTime / duration}%`;
      // });

      // this.progressBarWrapper.addEventListener('click', (event) => {
      //   let clickedPosition = event.clientX - event.target.offsetLeft;
      //   this.audioElement.currentTime = (clickedPosition / event.target.offsetWidth) * this.audioElement.duration;
      // })

      // this.audioElement.addEventListener('timeupdate', () => {
      //   let currentMinutes,currentSeconds,totalMinutes,totalSeconds;
      //   // let {
      //   //   currentTime,
      //   // } = this.audioElement;
        
      //   currentMinutes = this.smartTime(Math.floor((this.audioElement.currentTime / 60)));
      //   totalMinutes = this.smartTime(Math.floor(this.audioElement.duration / 60));
      //   currentSeconds = this.smartTime(Math.floor(this.audioElement.currentTime % 60));
      //   totalSeconds = this.smartTime(Math.floor(this.audioElement.duration % 60));

      //   let currentTime = currentMinutes + ":" + currentSeconds;
      //   let totalTime = totalMinutes + ":" + totalSeconds;

      //   this.timeStamp.innerHTML = currentTime + " / " + totalTime;
        
      // })

    }
  }
  