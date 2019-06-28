export interface IMessage {
  IDMessage: number;
  IDUser: number;
  IDConversation: number;
  Message: string;
  IDStatus: number;
  CreatedAt: string;
  UpdatedAt: string;
}

interface IReceiveMessage<D = string> {
  Action: string;
  Success: boolean;
  Comment: string;
  Data: D;
}

export class AwiseSocket {
  private webSocket: WebSocket | null = null;
  // event
  public onerror: ((event: Event) => void) | undefined;
  public onclose: ((event: CloseEvent) => void) | undefined;
  public onmessage: ((reveiveMessage: IReceiveMessage<object>) => void) | undefined;

  constructor(public uri: string) {}

  public init() {
    return new Promise<void>((resolve, reject) => {
      this.webSocket = new WebSocket(this.uri);
      if (this.webSocket) {
        this.webSocket.onopen = () => {
          resolve();
        };
        this.webSocket.onerror = event => {
          this.onerror ? this.onerror(event) : null;
        };
        this.webSocket.onclose = event => {
          this.onclose ? this.onclose(event) : null;
        };
        this.webSocket.onmessage = event => {
          const reveiveMessage = this.receiveMessage(event.data);
          this.onmessage ? this.onmessage(reveiveMessage) : null;
        };
      }
    });
  }

  public sendMessage(action: string, data: string) {
    this.webSocket ? this.webSocket.send(JSON.stringify({ action, data })) : null;
  }

  public close() {
    this.webSocket ? this.webSocket.close() : null;
  }

  private receiveMessage(receiveMessage: string): IReceiveMessage<object> {
    const obj = JSON.parse(receiveMessage) as IReceiveMessage;
    return {
      ...obj,
      Data: JSON.parse(obj.Data)
    };
  }
}
