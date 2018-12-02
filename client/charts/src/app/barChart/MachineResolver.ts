
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import { IEOS } from './IEOS';
import { ChartService } from './chart.service';

@Injectable({
    providedIn: 'root'
})
export class MachineResolver implements Resolve<IEOS> {

    constructor(private chartService: ChartService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<IEOS> {
        return this.chartService.getMachineData();
    }
}
