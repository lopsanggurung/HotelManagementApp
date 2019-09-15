using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.API.Data;
using App.API.Dtos;
using App.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly IBookingRepository _repo;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public BookingsController(IBookingRepository repo, IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetBookings()
        {
            // var bookings = await _repo.GetBookings();

            // var bookingsToReturn = _mapper.Map<IEnumerable<BookingForListDto>>(bookings);

            // return Ok(bookingsToReturn);

            var bookingList = await (from booking in _context.Bookings.Cast<Booking>()
                                     join guest in _context.Guests on booking.GuestId equals guest.Id
                                     join room in _context.Rooms on booking.RoomId equals room.Id
                                     select new
                                     {
                                         Id = booking.Id,
                                         FirstName = guest.FirstName,
                                         LastName = guest.LastName,
                                         Country = guest.Country,
                                         RoomNumber = room.RoomNumber,
                                         CreatedDate = booking.CreatedDate,
                                         LastModifiedDate = booking.LastModifiedDate,
                                         BookingStatus = booking.BookingStatus,
                                         CheckInDate = booking.CheckInDate,
                                         CheckOutDate = booking.CheckOutDate,
                                         NumberOfAdults = booking.NumberOfAdults,
                                         NumberOfChildren = booking.NumberOfChildren,
                                         AdditionalBed = booking.AdditionalBed,
                                         RequirePickUp = booking.RequirePickUp,
                                         PickUpDate = booking.PickUpDate,
                                         PickUpLocation = booking.PickUpLocation,
                                         PickUpDetails = booking.PickUpDetails,
                                         CheckedInDate = booking.CheckedInDate,
                                         CheckedOutDate = booking.CheckedOutDate,
                                         Notes = booking.Notes,
                                         FeedBackOnCheckOut = booking.FeedBackOnCheckOut,
                                         BookingSource = booking.BookingSource,
                                         PaymentStatus = booking.PaymentStatus,
                                         PricePerNight = booking.PricePerNight,
                                         AdditionalBedPricePerNight = booking.AdditionalBedPricePerNight,
                                         TotalPriceBeforeTax = booking.TotalPriceBeforeTax,
                                         TaxAmount = booking.TaxAmount,
                                         DepositAmount = booking.DepositAmount,
                                         TotalPrice = booking.TotalPrice
                                     }).ToListAsync();

            return Ok(bookingList);
        }

        [HttpGet]
        [Route("GetTodaysPendingCheckIns")]
        public async Task<IActionResult> GetTodaysPendingCheckIns()
        {
            var bookingList = await (from booking in _context.Bookings.Cast<Booking>().Where(b => b.CheckInDate.Date == DateTime.Today.Date && b.CheckedInDate.Date == default(DateTime).Date)
                                     join guest in _context.Guests on booking.GuestId equals guest.Id
                                     join room in _context.Rooms on booking.RoomId equals room.Id
                                     select new
                                     {
                                         Id = booking.Id,
                                         FirstName = guest.FirstName,
                                         LastName = guest.LastName,
                                         Country = guest.Country,
                                         RoomNumber = room.RoomNumber,
                                         CreatedDate = booking.CreatedDate,
                                         LastModifiedDate = booking.LastModifiedDate,
                                         BookingStatus = booking.BookingStatus,
                                         CheckInDate = booking.CheckInDate,
                                         CheckOutDate = booking.CheckOutDate,
                                         NumberOfAdults = booking.NumberOfAdults,
                                         NumberOfChildren = booking.NumberOfChildren,
                                         AdditionalBed = booking.AdditionalBed,
                                         RequirePickUp = booking.RequirePickUp,
                                         PickUpDate = booking.PickUpDate,
                                         PickUpLocation = booking.PickUpLocation,
                                         PickUpDetails = booking.PickUpDetails,
                                         CheckedInDate = booking.CheckedInDate,
                                         CheckedOutDate = booking.CheckedOutDate,
                                         Notes = booking.Notes,
                                         FeedBackOnCheckOut = booking.FeedBackOnCheckOut,
                                         BookingSource = booking.BookingSource,
                                         PaymentStatus = booking.PaymentStatus,
                                         PricePerNight = booking.PricePerNight,
                                         AdditionalBedPricePerNight = booking.AdditionalBedPricePerNight,
                                         TotalPriceBeforeTax = booking.TotalPriceBeforeTax,
                                         TaxAmount = booking.TaxAmount,
                                         DepositAmount = booking.DepositAmount,
                                         TotalPrice = booking.TotalPrice
                                     }).ToListAsync();

            return Ok(bookingList);
        }

        [HttpGet]
        [Route("GetTodaysPendingCheckOuts")]
        public async Task<IActionResult> GetTodaysPendingCheckOuts()
        {
            var bookingList = await (from booking in _context.Bookings.Cast<Booking>().Where(b => b.CheckOutDate.Date == DateTime.Today.Date && b.CheckedOutDate.Date == default(DateTime).Date)
                                     join guest in _context.Guests on booking.GuestId equals guest.Id
                                     join room in _context.Rooms on booking.RoomId equals room.Id
                                     select new
                                     {
                                         Id = booking.Id,
                                         FirstName = guest.FirstName,
                                         LastName = guest.LastName,
                                         Country = guest.Country,
                                         RoomNumber = room.RoomNumber,
                                         CreatedDate = booking.CreatedDate,
                                         LastModifiedDate = booking.LastModifiedDate,
                                         BookingStatus = booking.BookingStatus,
                                         CheckInDate = booking.CheckInDate,
                                         CheckOutDate = booking.CheckOutDate,
                                         NumberOfAdults = booking.NumberOfAdults,
                                         NumberOfChildren = booking.NumberOfChildren,
                                         AdditionalBed = booking.AdditionalBed,
                                         RequirePickUp = booking.RequirePickUp,
                                         PickUpDate = booking.PickUpDate,
                                         PickUpLocation = booking.PickUpLocation,
                                         PickUpDetails = booking.PickUpDetails,
                                         CheckedInDate = booking.CheckedInDate,
                                         CheckedOutDate = booking.CheckedOutDate,
                                         Notes = booking.Notes,
                                         FeedBackOnCheckOut = booking.FeedBackOnCheckOut,
                                         BookingSource = booking.BookingSource,
                                         PaymentStatus = booking.PaymentStatus,
                                         PricePerNight = booking.PricePerNight,
                                         AdditionalBedPricePerNight = booking.AdditionalBedPricePerNight,
                                         TotalPriceBeforeTax = booking.TotalPriceBeforeTax,
                                         TaxAmount = booking.TaxAmount,
                                         DepositAmount = booking.DepositAmount,
                                         TotalPrice = booking.TotalPrice
                                     }).ToListAsync();

            return Ok(bookingList);
        }

        [HttpGet]
        [Route("GetTodaysCheckIns")]
        public async Task<IActionResult> GetTodaysCheckIns()
        {
            var bookingList = await (from booking in _context.Bookings.Cast<Booking>().Where(b => b.CheckInDate.Date == DateTime.Today.Date && b.CheckedInDate.Date == DateTime.Today.Date)
                                     join guest in _context.Guests on booking.GuestId equals guest.Id
                                     join room in _context.Rooms on booking.RoomId equals room.Id
                                     select new
                                     {
                                         Id = booking.Id,
                                         FirstName = guest.FirstName,
                                         LastName = guest.LastName,
                                         Country = guest.Country,
                                         RoomNumber = room.RoomNumber,
                                         CreatedDate = booking.CreatedDate,
                                         LastModifiedDate = booking.LastModifiedDate,
                                         BookingStatus = booking.BookingStatus,
                                         CheckInDate = booking.CheckInDate,
                                         CheckOutDate = booking.CheckOutDate,
                                         NumberOfAdults = booking.NumberOfAdults,
                                         NumberOfChildren = booking.NumberOfChildren,
                                         AdditionalBed = booking.AdditionalBed,
                                         RequirePickUp = booking.RequirePickUp,
                                         PickUpDate = booking.PickUpDate,
                                         PickUpLocation = booking.PickUpLocation,
                                         PickUpDetails = booking.PickUpDetails,
                                         CheckedInDate = booking.CheckedInDate,
                                         CheckedOutDate = booking.CheckedOutDate,
                                         Notes = booking.Notes,
                                         FeedBackOnCheckOut = booking.FeedBackOnCheckOut,
                                         BookingSource = booking.BookingSource,
                                         PaymentStatus = booking.PaymentStatus,
                                         PricePerNight = booking.PricePerNight,
                                         AdditionalBedPricePerNight = booking.AdditionalBedPricePerNight,
                                         TotalPriceBeforeTax = booking.TotalPriceBeforeTax,
                                         TaxAmount = booking.TaxAmount,
                                         DepositAmount = booking.DepositAmount,
                                         TotalPrice = booking.TotalPrice
                                     }).ToListAsync();

            return Ok(bookingList);
        }

        [HttpGet]
        [Route("GetTodaysCheckOuts")]
        public async Task<IActionResult> GetTodaysCheckOuts()
        {
            var bookingList = await (from booking in _context.Bookings.Cast<Booking>().Where(b => b.CheckOutDate.Date == DateTime.Today.Date && b.CheckedOutDate.Date == DateTime.Today.Date)
                                     join guest in _context.Guests on booking.GuestId equals guest.Id
                                     join room in _context.Rooms on booking.RoomId equals room.Id
                                     select new
                                     {
                                         Id = booking.Id,
                                         FirstName = guest.FirstName,
                                         LastName = guest.LastName,
                                         Country = guest.Country,
                                         RoomNumber = room.RoomNumber,
                                         CreatedDate = booking.CreatedDate,
                                         LastModifiedDate = booking.LastModifiedDate,
                                         BookingStatus = booking.BookingStatus,
                                         CheckInDate = booking.CheckInDate,
                                         CheckOutDate = booking.CheckOutDate,
                                         NumberOfAdults = booking.NumberOfAdults,
                                         NumberOfChildren = booking.NumberOfChildren,
                                         AdditionalBed = booking.AdditionalBed,
                                         RequirePickUp = booking.RequirePickUp,
                                         PickUpDate = booking.PickUpDate,
                                         PickUpLocation = booking.PickUpLocation,
                                         PickUpDetails = booking.PickUpDetails,
                                         CheckedInDate = booking.CheckedInDate,
                                         CheckedOutDate = booking.CheckedOutDate,
                                         Notes = booking.Notes,
                                         FeedBackOnCheckOut = booking.FeedBackOnCheckOut,
                                         BookingSource = booking.BookingSource,
                                         PaymentStatus = booking.PaymentStatus,
                                         PricePerNight = booking.PricePerNight,
                                         AdditionalBedPricePerNight = booking.AdditionalBedPricePerNight,
                                         TotalPriceBeforeTax = booking.TotalPriceBeforeTax,
                                         TaxAmount = booking.TaxAmount,
                                         DepositAmount = booking.DepositAmount,
                                         TotalPrice = booking.TotalPrice
                                     }).ToListAsync();

            return Ok(bookingList);
        }

        [HttpGet("{id}", Name = "GetBooking")]
        public async Task<IActionResult> GetBooking(int id)
        {
            var booking = await _repo.GetBooking(id);

            return Ok(booking);
        }
    }
}