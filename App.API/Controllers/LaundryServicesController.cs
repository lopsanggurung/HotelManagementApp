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
    public class LaundryServicesController : ControllerBase
    {
        private readonly ILaundryServiceRepository _repo;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public LaundryServicesController(ILaundryServiceRepository repo, IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetLaundryServices()
        {
            // var laundryServices = await _repo.GetLaundryServices();

            // var laundryServicesToReturn = _mapper.Map<IEnumerable<LaundryServiceForListDto>>(laundryServices);

            // return Ok(laundryServicesToReturn);

            var laundryServiceList = await (from laundryService in _context.LaundryServices.Cast<LaundryService>()
                                            join booking in _context.Bookings on laundryService.BookingId equals booking.Id
                                            join guest in _context.Guests on booking.GuestId equals guest.Id
                                            join room in _context.Rooms on booking.RoomId equals room.Id
                                        select new
                                        {
                                            Id = laundryService.Id,
                                            BookingId = laundryService.BookingId,
                                            FirstName = guest.FirstName,
                                            LastName = guest.LastName,
                                            RoomNumber = room.RoomNumber,
                                            DateOrdered = laundryService.DateOrdered,
                                            DateReturnedFromLaundry = laundryService.DateReturnedFromLaundry,
                                            DateReturnedToGuest = laundryService.DateReturnedToGuest,
                                            IsPaid = laundryService.IsPaid,
                                            TotalPriceBeforeTax = laundryService.TotalPriceBeforeTax,
                                            TaxAmount = laundryService.TaxAmount,
                                            TotalPrice = laundryService.TotalPrice
                                        }).ToListAsync();

            return Ok(laundryServiceList);
        }

        [HttpGet("{id}", Name = "GetLaundryService")]
        public async Task<IActionResult> GetLaundryService(int id)
        {
            var laundryService = await _repo.GetLaundryService(id);

            return Ok(laundryService);
        }
    }
}