using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Data;
using App.API.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly IBookingRepository _repo;
        private readonly IMapper _mapper;
        public BookingsController(IBookingRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetBookings()
        {
            var bookings = await _repo.GetBookings();

            var bookingsToReturn = _mapper.Map<IEnumerable<BookingForListDto>>(bookings);

            return Ok(bookingsToReturn);
        }

        [HttpGet("{id}", Name = "GetBooking")]
        public async Task<IActionResult> GetBooking(int id)
        {
            var booking = await _repo.GetBooking(id);

            return Ok(booking);
        }
    }
}