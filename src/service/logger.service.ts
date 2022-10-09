import { Logger } from 'tslog';

export class LoggerService {
    private logger:Logger;
    constructor() {
        this.logger = new Logger({
            displayFilePath: 'hidden',
            displayFunctionName: false
        });
    }

    public log(...message) {
        this.logger.info(...message);
    }

    public error(...message) {
        this.logger.error(...message);
    }

    public warn(...message) {
        this.logger.warn(...message);
    }
}


