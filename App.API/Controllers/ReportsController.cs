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
    public class ReportsController : ControllerBase
    {
        private readonly IBookingRepository _repo;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public ReportsController(IBookingRepository repo, IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }

        [HttpGet]
        [Route("GetBookingCountByRoom")]
        public async Task<IActionResult> GetBookingCountByRoom()
        {
            var result = await (from room in _context.Rooms
                                select new
                                {
                                    name = room.RoomNumber,
                                    value = (from b in _context.Bookings where b.RoomId == room.Id select b).Distinct().Count()
                                }).ToListAsync();

            return Ok(result);
        }

        [HttpGet]
        [Route("GetBookingDayCountByRoom")]
        public async Task<IActionResult> GetBookingDayCountByRoom()
        {
            var result = await (from room in _context.Rooms
                                select new
                                {
                                    name = room.RoomNumber,
                                    value = (from b in _context.Bookings
                                             where b.RoomId == room.Id
                                             select (b.CheckOutDate.Date.Subtract(b.CheckInDate.Date)).Days).Sum()
                                }).ToListAsync();

            return Ok(result);
        }

        [HttpGet]
        [Route("GetGuestCountByCountry")]
        public async Task<IActionResult> GetGuestCountByCountry()
        {
            var result = await (from guest in _context.Guests
                                group guest.Id by guest.Country into g
                                select new
                                {
                                    name = g.Key,
                                    value = g.Count()
                                }).ToListAsync();

            return Ok(result);
        }

        [HttpGet]
        [Route("GetBookingDayCountByCountry")]
        public async Task<IActionResult> GetBookingDayCountByCountry()
        {
            var result = await (from l in
                                (from guest in _context.Guests
                                 select new
                                 {
                                     country = guest.Country,
                                     bookingCount = (from b in _context.Bookings
                                                     where b.GuestId == guest.Id
                                                     select (b.CheckOutDate.Date.Subtract(b.CheckInDate.Date)).Days).Sum()
                                 })
                                group l by l.country into lGroup
                                select new
                                {
                                    name = lGroup.Key,
                                    value = lGroup.Sum(x => x.bookingCount)
                                }).ToListAsync();

            return Ok(result);
        }
    }
}