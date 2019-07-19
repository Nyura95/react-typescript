import { config } from '../config';

// If you have another logger, import and replace {console} and update the class with your methods
const logger = console;

class Log {
  /**
   * Log with trace
   * @param {string} message
   * @param {string} source
   * @version 1.0.0
   * @returns {void}
   */
  public trace(message: string, source: string): void {
    if (config.log) generateMessage('trace', message, source);
  }

  /**
   * Info log
   * @param {string} message
   * @param {string} source
   * @version 1.0.0
   * @returns {void}
   */
  public info(message: string, source: string): void {
    if (config.log) generateMessage('info', message, source);
  }

  /**
   * Warning log
   * @param {string} message
   * @param {string} source
   * @version 1.0.0
   * @returns {void}
   */
  public warn(message: string, source: string): void {
    generateMessage('warn', message, source);
  }

  /**
   * Error log
   * @param {string} message
   * @param {string} source
   * @version 1.0.0
   * @returns {void}
   */
  public error(message: string, source: string): void {
    generateMessage('error', message, source);
  }

  /**
   * Debug log
   * @param {string} message
   * @param {string} source
   * @version 1.0.0
   * @returns {void}
   */
  public debug(message: string, source: string): void {
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
