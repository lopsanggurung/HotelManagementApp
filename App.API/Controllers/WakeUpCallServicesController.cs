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

        [HttpGet]
        [Route("GetTodaysWakeupCalls")]
        public async Task<IActionResult> GetTodaysWakeupCalls()
        {
            var todaysWakeupCalls = await (from wakeUpCallService in _context.WakeUpCallServices.Cast<WakeUpCallService>().Where(w => w.WakeUpCallDate.Date == DateTime.Today.Date)
                                                  join booking in _context.Bookings on wakeUpCallService.BookingId equals booking.Id
                                                  join guest in _context.Guests on booking.GuestId equals guest.Id
                                                  join room in _context.Rooms on booking.RoomId equals room.Id
                                                  select new
                                                  {
                                                      Id = wakeUpCallService.Id,
                                                      WakeUpCallDate = wakeUpCallService.WakeUpCallDate,
                                                      IsCompleted = wakeUpCallService.IsCompleted,
                                                      FirstName = guest.FirstName,
                                                      LastName = guest.LastName,
                                                      RoomNumber = room.RoomNumber
                                                  }).ToListAsync();

            return Ok(todaysWakeupCalls);
        }

        [HttpGet]
        [Route("GetTodaysPendingWakeupCalls")]
        public async Task<IActionResult> GetTodaysPendingWakeupCalls()
        {
            var todaysPendingWakeupCalls = await (from wakeUpCallService in _context.WakeUpCallServices.Cast<WakeUpCallService>().Where(w => w.WakeUpCallDate.Date == DateTime.Today.Date && w.IsCompleted == false)
                                                  join booking in _context.Bookings on wakeUpCallService.BookingId equals booking.Id
                                                  join guest in _context.Guests on booking.GuestId equals guest.Id
                                                  join room in _context.Rooms on booking.RoomId equals room.Id
                                                  select new
                                                  {
                                                      Id = wakeUpCallService.Id,
                                                      WakeUpCallDate = wakeUpCallService.WakeUpCallDate,
                                                      IsCompleted = wakeUpCallService.IsCompleted,
                                                      FirstName = guest.FirstName,
                                                      LastName = guest.LastName,
                                                      RoomNumber = room.RoomNumber
                                                  }).ToListAsync();

            return Ok(todaysPendingWakeupCalls);
        }

        [HttpGet]
        [Route("GetTodaysCompletedWakeupCalls")]
        public async Task<IActionResult> GetTodaysCompletedWakeupCalls()
        {
            var todaysCompletedWakeupCalls = await (from wakeUpCallService in _context.WakeUpCallServices.Cast<WakeUpCallService>().Where(w => w.WakeUpCallDate.Date == DateTime.Today.Date && w.IsCompleted == true)
                                                    join booking in _context.Bookings on wakeUpCallService.BookingId equals booking.Id
                                                    join guest in _context.Guests on booking.GuestId equals guest.Id
                                                    join room in _context.Rooms on booking.RoomId equals room.Id
                                                    select new
                                                    {
                                                        Id = wakeUpCallService.Id,
                                                        WakeUpCallDate = wakeUpCallService.WakeUpCallDate,
                                                        IsCompleted = wakeUpCallService.IsCompleted,
                                                        FirstName = guest.FirstName,
                                                        LastName = guest.LastName,
                                                        RoomNumber = room.RoomNumber
                                                    }).ToListAsync();

            return Ok(todaysCompletedWakeupCalls);
        }

        [HttpGet]
        [Route("GetTomorrowsPendingWakeupCalls")]
        public async Task<IActionResult> GetTomorrowsPendingWakeupCalls()
        {
            var tomorrowsPendingWakeupCalls = await (from wakeUpCallService in _context.WakeUpCallServices.Cast<WakeUpCallService>().Where(w => w.WakeUpCallDate.Date == DateTime.Today.AddDays(1).Date)
                                                     join booking in _context.Bookings on wakeUpCallService.BookingId equals booking.Id
                                                     join guest in _context.Guests on booking.GuestId equals guest.Id
                                                     join room in _context.Rooms on booking.RoomId equals room.Id
                                                     select new
                                                     {
                                                         Id = wakeUpCallService.Id,
                                                         WakeUpCallDate = wakeUpCallService.WakeUpCallDate,
                                                         IsCompleted = wakeUpCallService.IsCompleted,
                                                         FirstName = guest.FirstName,
                                                         LastName = guest.LastName,
                                                         RoomNumber = room.RoomNumber
                                                     }).ToListAsync();

            return Ok(tomorrowsPendingWakeupCalls);
        }

        [HttpGet("{id}", Name = "GetWakeUpCallService")]
        public async Task<IActionResult> GetWakeUpCallService(int id)
        {
            var wakeUpCallService = await _repo.GetWakeUpCallService(id);

            return Ok(wakeUpCallService);
        }

        [HttpPost]
        public async Task<IActionResult> CreateWakeUpCallService(WakeUpCallServiceForCreationDto wakeUpCallServiceForCreationDto)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (currentUserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var wakeUpCallServiceToCreate = _mapper.Map<WakeUpCallService>(wakeUpCallServiceForCreationDto);

            _repo.Add(wakeUpCallServiceToCreate);

            if (await _repo.SaveAll())
            {
                var wakeUpCallServiceToReturn = _mapper.Map<WakeUpCallServiceToReturnDto>(wakeUpCallServiceToCreate);
                return CreatedAtRoute("GetWakeUpCallService", new { id = wakeUpCallServiceToCreate.Id }, wakeUpCallServiceToReturn);
            }
            throw new Exception("Creating the WakeUp Call Service failed on save");
        }
    }
}