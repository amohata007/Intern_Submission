import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { BookingDetailsService } from '../booking-details.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;

  movieName: String = "--Select Movie--";
  movie: String;
  time: String;
  seats: Number;

  // Json object to store all the movie names and their resoective timings
  allMovies: Array<any> = [
		{ name: 'Shawshank Redemption', times: [ '10:00', '11:00', '13:00', '17:00', '20:00' ] },
		{ name: 'Batman vs Superman', times: [ '10:00', '11:00', '13:00' ] },
		{ name: 'Avengers Endgame', times: [ '10:00', '11:00', '13:00', '15:00' ] },
		{ name: 'Harry Potter', times: [ '07:00', '12:00', '14:00', '18:00' ] },
		{ name: 'Aquaman', times: [ '12:00', '14:00' ] }
  ];
  
  allTimes: Array<any>;


  constructor(private bookingService:BookingDetailsService) {
    // Reactive form group declairation
    this.bookingForm = new FormGroup({
      movieName: new FormControl(null),
      time: new FormControl(null),
      seats: new FormControl(null)
      
    });
   }

  ngOnInit() {
  }

  // function to change the timimg dropdown on change of selected movie
  changeMovie(movie) {
    console.log(movie);
    this.movieName = this.bookingForm.value.movieName;
    this.allTimes = this.allMovies.find( mov => mov.name == this.movieName).times;
    
	}

  //function to book the tickets when all the input fields are correct
  booking(){

    this.movie = this.bookingForm.value.movieName;
    this.time= this.bookingForm.value.time;
    this.seats = this.bookingForm.value.seats;
    this.bookingService.setBookings(this.movie,this.time,this.seats);
    alert("Booking confirmed!!");
    this.bookingForm.reset();
  }
  

}
