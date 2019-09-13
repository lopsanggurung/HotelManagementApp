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
    public class RoomServicesController : ControllerBase
    {
        private readonly IRoomServiceRepository _repo;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public RoomServicesController(IRoomServiceRepository repo, IMapper mapper,  DataContext context)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetRoomServices()
        {
            // var roomServices = await _repo.GetRoomServices();

            // var roomServicesToReturn = _mapper.Map<IEnumerable<RoomServiceForListDto>>(roomServices);

            // return Ok(roomServicesToReturn);

            var roomServiceList = await (from roomService in _context.RoomServices.Cast<RoomService>()
                                        join booking in _context.Bookings on roomService.BookingId equals booking.Id
                                        join guest in _context.Guests on booking.GuestId equals guest.Id
                                        join room in _context.Rooms on booking.RoomId equals room.Id
                                        select new
                                        {
                                            Id = roomService.Id,
                                            BookingId = roomService.BookingId,
                                            FirstName = guest.FirstName,
                                            LastName = guest.LastName,
                                            RoomNumber = room.RoomNumber,
                                            ServiceDate = roomService.ServiceDate,
                                            IsCompleted = roomService.IsCompleted,
                                            IsPaid = roomService.IsPaid,
                                            TotalPriceBeforeTax = roomService.TotalPriceBeforeTax,
                                            TaxAmount = roomService.TaxAmount,
                                            TotalPrice = roomService.TotalPrice
                                        }).ToListAsync();

            return Ok(roomServiceList);
        }

        [HttpGet("{id}", Name = "GetRoomService")]
        public async Task<IActionResult> GetRoomService(int id)
        {
            var roomService = await _repo.GetRoomService(id);

            return Ok(roomService);
        }
    }
}