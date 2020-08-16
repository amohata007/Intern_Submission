import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {


  constructor() { }
  newObj: any;
  bookings: any = [
    {
      movieName: "Shawshank Redemption",
      time: "10:00",
      seats: 2
    },
    {
      movieName: "Batman vs Superman",
      time: "11:00",
      seats: 3
    },
    {
      movieName: "Avengers Endgame",
      time: "13:00",
      seats: 1
    },
    {
      movieName: "Harry Potter",
      time: "7:00",
      seats: 4
    },
    {
      movieName: "Aquaman",
      time: "12:00",
      seats: 2
    }
  ];

  getBookings(){
    return this.bookings;
  }

  setBookings(movieName: String, time: String, seats: Number){
    this.newObj = {
      movieName: movieName,
      time: time,
      seats: seats
    };
    this.bookings.push(this.newObj);
  }
  
}
