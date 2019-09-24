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
        [Route("GetBookingCountByMonth")]
        public async Task<IActionResult> GetBookingCountByMonth()
        {
            var result = await (from room in _context.Rooms
                                select new
                                {
                                    name = room.RoomNumber,
                                    value = (from b in _context.Bookings where b.RoomId == room.Id select b).Distinct().Count()
                                }).ToListAsync();

            return Ok(result);
        }
    }
}