export default class Ticker {
    private intervalId: NodeJS.Timeout | null = null;
    private readonly tickDuration: number;
    private remainingTime: number;

    constructor(
        private readonly callback: (time: string) => void,
        private readonly minutes: number
    ) {
        this.tickDuration = minutes * 60 * 1000; // Convert minutes to milliseconds
        this.remainingTime = this.tickDuration / 1000; // Time in seconds
    }

    private formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${remainingSeconds}`;
    }

    private tick() {
        this.remainingTime -= 1;
        const formattedTime = this.formatTime(this.remainingTime);
        this.callback(formattedTime);

        if (this.remainingTime <= 0) {
            this.stop();
        }
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.tick();
            }, 1000); // Fire every second
        }
    }

    reset() {
        if (this.intervalId) {
            clearInterval(this.intervalId); // Clear existing interval
            this.intervalId = null;
        }

        this.remainingTime = this.tickDuration / 1000;
        this.callback(this.formatTime(this.remainingTime));
        this.start(); // Start a new interval
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}
