using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using App.API.Data;
using App.API.Dtos;
using App.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuestsController : ControllerBase
    {
        private readonly IGuestRepository _repo;
        private readonly IMapper _mapper;
        public GuestsController(IGuestRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetGuests()
        {
            var guests = await _repo.GetGuests();

            var guestsToReturn = _mapper.Map<IEnumerable<GuestForListDto>>(guests);

            return Ok(guestsToReturn);
        }

        [HttpGet("{id}", Name = "GetGuest")]
        public async Task<IActionResult> GetGuest(int id)
        {
            var guest = await _repo.GetGuest(id);

            return Ok(guest);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGuest(GuestForCreationDto guestForCreationDto)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (currentUserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var guestToCreate = _mapper.Map<Guest>(guestForCreationDto);

            _repo.Add(guestToCreate);

            if (await _repo.SaveAll())
            {
                var guestToReturn = _mapper.Map<GuestToReturnDto>(guestToCreate);
                return CreatedAtRoute("GetGuest", new { id = guestToCreate.Id }, guestToReturn);
            }
            throw new Exception("Creating the guest failed on save");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGuest(int id)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (currentUserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var guestFromRepo = await _repo.GetGuest(id);

            _repo.Delete(guestFromRepo);

            if (await _repo.SaveAll())
            {
                return Ok();
            }
            throw new Exception("Failed to delete the guest");
        }
    }
}