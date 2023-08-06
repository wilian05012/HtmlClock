import { Observable, interval } from 'rxjs';

export class Clock {
    private oscillator :Observable<number>;
    constructor() {
        this.oscillator = interval(1000);

        let subscription = this.oscillator.subscribe((value: number) => {
            // update clocks

            console.log(value);
        });
        
    }
    
}