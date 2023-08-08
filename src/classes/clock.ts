import { Observable, interval } from 'rxjs';

export class Clock {
    private oscillator :Observable<number>;

    private updateDigitalClock(value :Date) :void {
        const hours :string[]   = value.getHours().toString().split('');
        const minutes :string[] = value.getMinutes().toString().split('');
        const secs :string[]    = value.getSeconds().toString().split('');

        const hoursElem1 :HTMLDivElement = document.getElementById('hour1') as HTMLDivElement;
        const hoursElem2 :HTMLDivElement = document.getElementById('hour2') as HTMLDivElement; 

        const minsElem1 :HTMLDivElement = document.getElementById('min1') as HTMLDivElement;
        const minsElem2 :HTMLDivElement = document.getElementById('min2') as HTMLDivElement;

        const secsElem1 :HTMLDivElement = document.getElementById('sec1') as HTMLDivElement;
        const secsElem2 :HTMLDivElement = document.getElementById('sec2') as HTMLDivElement;

        hoursElem1.textContent = (hours.length === 2) ? hours[0] : '0';
        hoursElem2.textContent = (hours.length === 2) ? hours[1] : hours[0];

        minsElem1.textContent = (minutes.length == 2) ? minutes[0] : '0';
        minsElem2.textContent = (minutes.length == 2) ? minutes[1] : minutes[0];

        secsElem1.textContent = (secs.length == 2) ? secs[0] : '0';
        secsElem2.textContent = (secs.length == 2) ? secs[1] : secs[0];

        if(hoursElem1.textContent === '0') {
            hoursElem1.classList.add('transparent');
        } else {
            hoursElem1.classList.remove('transparent');
        }
    }


    constructor() {
        this.oscillator = interval(1000);

        let subscription = this.oscillator.subscribe((value: number) => {
           const currentTime :Date = new Date(); // update clocks
            
           this.updateDigitalClock(currentTime);
        });
        
    }
    
}