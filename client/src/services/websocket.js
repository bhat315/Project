// client/src/services/websocket.js
export class WebSocketService {
    constructor(url) {
      this.url = url;
      this.ws = null;
      this.listeners = new Set();
    }
  
    connect() {
      this.ws = new WebSocket(this.url);
      
      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        this.listeners.forEach(listener => listener(data));
      };
  
      this.ws.onclose = () => {
        setTimeout(() => this.connect(), 3000);
      };
    }
  
    subscribe(listener) {
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }
  
    disconnect() {
      if (this.ws) {
        this.ws.close();
      }
    }
  }
  