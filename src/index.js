"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    // this.myFunction();
  }
  myFunction() {
    this.timer = setInterval(() => {
      this.currentDate = Date.now();
      this.timeleft = this.targetDate.getTime() - this.currentDate;
      this.days = Math.floor(this.timeleft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.mins = Math.floor((this.timeleft % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((this.timeleft % (1000 * 60)) / 1000);
      sec.textContent = this.secs;
      min.textContent = this.mins;
      hrs.textContent = this.hours;
      day.textContent = this.days;
    }, 1000);

    const sec = document.querySelector('span[data-value="secs"]');
    const min = document.querySelector('span[data-value="mins"]');
    const hrs = document.querySelector('span[data-value="hours"]');
    const day = document.querySelector('span[data-value="days"]');
    if (this.timeleft <= 0) {
      clearInterval(timer);
    }
  }
}

const temp = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021")
});

temp.myFunction();
