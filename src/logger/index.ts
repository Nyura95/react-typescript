import { config } from '../config';

const logger = console;

const generateMessage = (level: keyof Log, message: string, source?: string) =>
  source
    ? logger[level](`${new Date().toLocaleTimeString()} [${source}]:`, message)
    : logger[level](`${new Date().toLocaleTimeString()}:`, message);

class Log {
  public trace(message: string, source?: string): void {
    if (!config.production) generateMessage('trace', message, source);
  }

  public info(message: string, source?: string): void {
    if (!config.production) generateMessage('info', message, source);
  }

  public warn(message: string, source?: string): void {
    generateMessage('warn', message, source);
  }

  public error(message: string, source?: string): void {
    generateMessage('error', message, source);
  }
}

export default new Log();
