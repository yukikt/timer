import { NgModule } from "../../../../node_modules/@angular/core";
import { RouterModule, Routes } from '../../../../node_modules/@angular/router';
import { TimerComponent } from './timer/timer.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';

const routes: Routes = [
    {
        path: 'timer',
        component: TimerComponent,
    },
    {
        path: 'stop-watch',
        component: StopWatchComponent,
    },
    {
        path: 'pomodoro',
        component: PomodoroComponent,
    },
    {
        path: '**',
        redirectTo: '/timer'
    }
];

@NgModule({
    declarations: [
        TimerComponent,
        StopWatchComponent,
        PomodoroComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class ContentRoutingModule {}