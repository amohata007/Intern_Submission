import { Component, OnInit } from '@angular/core';
import { BookingDetailsService } from '../booking-details.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  allBookings: any;
  constructor(private bookingService:BookingDetailsService) { }

  ngOnInit() {
    this.allBookings = this.bookingService.getBookings();
  }

}
