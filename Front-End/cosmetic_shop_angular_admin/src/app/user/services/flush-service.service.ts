import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class FlushServiceService {

  constructor(public service: SharedServiceService) { }

  //get all CurrentFlushes

  public getCurrentFlushes() {
    let path = '/flush/getCurrentFlushes';
    return (this.service.get(path, false));
  }

  //end flush
  public endFlush(id: number) {
    let path = '/flush/endFlush/' + id;
    return (this.service.put(null, path));
  }


}
