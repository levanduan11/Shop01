import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationConfigService {

  private endpointPrefix = '';
  private microfrontend = false;

  setEndpointPrefix(endpointPrefix: string): void{
    this.endpointPrefix = endpointPrefix;
  }

  setMicrofrontend(microfrontend = false): void{
    this.microfrontend = microfrontend;
  }

  isMicrofrontend(): boolean{
    return this.microfrontend;
  }

  getEndpointFor(api: string, microfrontend?: string) {
    if (microfrontend) {
      return `${this.endpointPrefix}services/${microfrontend}/${api}`;
    }
    return `${this.endpointPrefix}${api}`;
  }

}
