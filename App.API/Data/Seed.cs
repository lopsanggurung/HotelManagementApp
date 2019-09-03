using System.Collections.Generic;
using System.Linq;
using App.API.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace App.API.Data
{
    public class Seed
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly DataContext _context;
        public Seed(UserManager<User> userManager, RoleManager<Role> roleManager, DataContext context)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _context = context;
        }

        public void SeedUsers()
        {
            if (!_userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                var roles = new List<Role>
                {
                    new Role{Name = "Member"},
                    new Role{Name = "Admin"},
                    new Role{Name = "Manager"},
                    new Role{Name = "VIP"}
                };

                foreach (var role in roles)
                {
                    _roleManager.CreateAsync(role).Wait();
                }

                foreach (var user in users)
                {
                    _userManager.CreateAsync(user, "password").Wait();
                    _userManager.AddToRoleAsync(user, "Member").Wait();
                }

                var adminUser = new User
                {
                    UserName = "Admin"
                };

                IdentityResult result = _userManager.CreateAsync(adminUser, "password").Result;

                if (result.Succeeded)
                {
                    var admin = _userManager.FindByNameAsync("Admin").Result;
                    _userManager.AddToRolesAsync(admin, new[] { "Admin", "Manager" }).Wait();
                }
            }

            if (!_context.Rooms.Any())
            {
                var roomData = System.IO.File.ReadAllText("Data/RoomSeedData.json");
                var rooms = JsonConvert.DeserializeObject<List<Room>>(roomData);
                foreach (var room in rooms)
                {
                    _context.Rooms.Add(room);
                }

            _context.SaveChanges();
            }

            if (!_context.Guests.Any())
            {
                var guestData = System.IO.File.ReadAllText("Data/GuestSeedData.json");
                var guests = JsonConvert.DeserializeObject<List<Guest>>(guestData);
                foreach (var guest in guests)
                {
                    _context.Guests.Add(guest);
                }

            _context.SaveChanges();
            }
        }
    }
}