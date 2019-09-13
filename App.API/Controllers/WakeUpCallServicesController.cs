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
    public class WakeUpCallServicesController : ControllerBase
    {
        private readonly IWakeUpCallServiceRepository _repo;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public WakeUpCallServicesController(IWakeUpCallServiceRepository repo, IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetWakeUpCallServices()
        {
            // var wakeUpCallServices = await _repo.GetWakeUpCallServices();

            // var wakeUpCallServicesToReturn = _mapper.Map<IEnumerable<WakeUpCallServiceForListDto>>(wakeUpCallServices);

            // return Ok(wakeUpCallServicesToReturn);

            var wakeUpCallServiceList = await (from wakeUpCallService in _context.WakeUpCallServices.Cast<WakeUpCallService>()
                                                join booking in _context.Bookings on wakeUpCallService.BookingId equals booking.Id
                                                join guest in _context.Guests on booking.GuestId equals guest.Id
                                                join room in _context.Rooms on booking.RoomId equals room.Id
                                            select new
                                            {
                                                Id = wakeUpCallService.Id,
                                                BookingId = wakeUpCallService.BookingId,
                                                FirstName = guest.FirstName,
                                                LastName = guest.LastName,
                                                RoomNumber = room.RoomNumber,
                                                WakeUpCallDate = wakeUpCallService.WakeUpCallDate,
                                                IsCompleted = wakeUpCallService.IsCompleted
                                        }).ToListAsync();

            return Ok(wakeUpCallServiceList);
        }

        [HttpGet("{id}", Name = "GetWakeUpCallService")]
        public async Task<IActionResult> GetWakeUpCallService(int id)
        {
            var wakeUpCallService = await _repo.GetWakeUpCallService(id);

            return Ok(wakeUpCallService);
        }
    }
}