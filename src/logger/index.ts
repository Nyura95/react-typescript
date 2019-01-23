import { config } from '../config';

// If you have another logger, import and replace {console} and update the class with your methods
const logger = console;

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

  public debug(message: string, source?: string): void {
    if (process.env.NODE_ENV === 'dev') generateMessage('error', message, source);
  }
}

/**
 * Formalize message - source
 * @private
 * @param {keyof Log} level
 * @param {string} message
 * @param {string} source
 * @version 1.0.0
 * @returns {void}
 */
const generateMessage = (level: keyof Log, message: string, source?: string): void =>
  source
    ? logger[level](`${new Date().toLocaleTimeString()} [${source}]:`, message)
    : logger[level](`${new Date().toLocaleTimeString()}:`, message);

export default new Log();
