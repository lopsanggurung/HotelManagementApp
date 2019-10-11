using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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

        [HttpGet]
        [Route("GetPendingLaundryToReturnToGuest")]
        public async Task<IActionResult> GetPendingLaundryToReturnToGuest()
        {
            var pendingLaundryToReturn = await (from LaundryService in _context.LaundryServices.Cast<LaundryService>().Where(l => l.DateReturnedFromLaundry.Date != default(DateTime).Date && l.DateReturnedToGuest.Date == default(DateTime).Date)
                                                join booking in _context.Bookings on LaundryService.BookingId equals booking.Id
                                                join guest in _context.Guests on booking.GuestId equals guest.Id
                                                join room in _context.Rooms on booking.RoomId equals room.Id
                                                let laundryServiceItems = (from laundryServiceItem in _context.LaundryServiceItems.Where(l => l.LaundryServiceId == LaundryService.Id) select laundryServiceItem)                                          // join laundryItems in _context.LaundryServiceItems on LaundryService.Id equals laundryItems.LaundryServiceId
                                                select new
                                                {
                                                    Id = LaundryService.Id,
                                                    IsPaid = LaundryService.IsPaid,
                                                    TotalPrice = LaundryService.TotalPrice,
                                                    DateOrdered = LaundryService.DateOrdered,
                                                    DateReturnedFromLaundry = LaundryService.DateReturnedFromLaundry,
                                                    FirstName = guest.FirstName,
                                                    LastName = guest.LastName,
                                                    RoomNumber = room.RoomNumber,
                                                    LaundryItems = laundryServiceItems
                                                }).ToListAsync();

            return Ok(pendingLaundryToReturn);
        }

        [HttpGet]
        [Route("GetPendingLaundryToReceiveFromLaundry")]
        public async Task<IActionResult> GetPendingLaundryToReceiveFromLaundry()
        {
            var pendingLaundryToReceive = await (from LaundryService in _context.LaundryServices.Cast<LaundryService>().Where(l => l.DateReturnedFromLaundry.Date == default(DateTime).Date && l.DateReturnedToGuest.Date == default(DateTime).Date)
                                                 join booking in _context.Bookings on LaundryService.BookingId equals booking.Id
                                                 join guest in _context.Guests on booking.GuestId equals guest.Id
                                                 join room in _context.Rooms on booking.RoomId equals room.Id
                                                 let laundryServiceItems = (from laundryServiceItem in _context.LaundryServiceItems.Where(l => l.LaundryServiceId == LaundryService.Id) select laundryServiceItem)                                          // join laundryItems in _context.LaundryServiceItems on LaundryService.Id equals laundryItems.LaundryServiceId
                                                 select new
                                                 {
                                                     Id = LaundryService.Id,
                                                     IsPaid = LaundryService.IsPaid,
                                                     TotalPrice = LaundryService.TotalPrice,
                                                     DateOrdered = LaundryService.DateOrdered,
                                                     FirstName = guest.FirstName,
                                                     LastName = guest.LastName,
                                                     RoomNumber = room.RoomNumber,
                                                     LaundryItems = laundryServiceItems
                                                 }).ToListAsync();

            return Ok(pendingLaundryToReceive);
        }

        [HttpGet]
        [Route("GetTodaysLaundryReturned")]
        public async Task<IActionResult> GetTodaysLaundryReturned()
        {
            var todaysLaundryReturned = await (from LaundryService in _context.LaundryServices.Cast<LaundryService>().Where(l => l.DateReturnedToGuest.Date == DateTime.Today.Date)
                                               join booking in _context.Bookings on LaundryService.BookingId equals booking.Id
                                               join guest in _context.Guests on booking.GuestId equals guest.Id
                                               join room in _context.Rooms on booking.RoomId equals room.Id
                                               let laundryServiceItems = (from laundryServiceItem in _context.LaundryServiceItems.Where(l => l.LaundryServiceId == LaundryService.Id) select laundryServiceItem)                                          // join laundryItems in _context.LaundryServiceItems on LaundryService.Id equals laundryItems.LaundryServiceId
                                               select new
                                               {
                                                   Id = LaundryService.Id,
                                                   IsPaid = LaundryService.IsPaid,
                                                   TotalPrice = LaundryService.TotalPrice,
                                                   DateOrdered = LaundryService.DateOrdered,
                                                   FirstName = guest.FirstName,
                                                   LastName = guest.LastName,
                                                   RoomNumber = room.RoomNumber,
                                                   LaundryItems = laundryServiceItems
                                               }).ToListAsync();

            return Ok(todaysLaundryReturned);
        }

        [HttpGet("{id}", Name = "GetLaundryService")]
        public async Task<IActionResult> GetLaundryService(int id)
        {
            var laundryService = await _repo.GetLaundryService(id);

            return Ok(laundryService);
        }

        [HttpPost]
        public async Task<IActionResult> CreateLaundryService(LaundryServiceForCreationDto laundryServiceForCreationDto)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (currentUserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var laundryServiceToCreate = _mapper.Map<LaundryService>(laundryServiceForCreationDto);

            _repo.Add(laundryServiceToCreate);

            if (await _repo.SaveAll())
            {
                var laundryServiceToReturn = _mapper.Map<LaundryServiceToReturnDto>(laundryServiceToCreate);
                return CreatedAtRoute("GetLaundryService", new { id = laundryServiceToCreate.Id }, laundryServiceToReturn);
            }
            throw new Exception("Creating the Laundry Service failed on save");
        }
    }
}