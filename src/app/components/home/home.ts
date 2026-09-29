import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  currentTime = '';
  currentDate = '';

  private clockInterval?: ReturnType<typeof setInterval>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateClock();

    this.clockInterval = setInterval(() => {
      this.updateClock();
      this.cdr.detectChanges();
    }, 1000);
  }

  private updateClock(): void {
    const now = new Date();

    this.currentTime = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(now);

    this.currentDate = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(now);
  }

  ngOnDestroy(): void {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
  }
}