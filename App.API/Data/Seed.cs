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

        public static void SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager, DataContext context)
        {
            if (!userManager.Users.Any())
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
                    roleManager.CreateAsync(role).Wait();
                }

                foreach (var user in users)
                {
                    userManager.CreateAsync(user, "password").Wait();
                    userManager.AddToRoleAsync(user, "Member").Wait();
                }

                var adminUser = new User
                {
                    UserName = "Admin"
                };

                IdentityResult result = userManager.CreateAsync(adminUser, "password").Result;

                if (result.Succeeded)
                {
                    var admin = userManager.FindByNameAsync("Admin").Result;
                    userManager.AddToRolesAsync(admin, new[] { "Admin", "Manager" }).Wait();
                }
            }

            if (!context.Rooms.Any())
            {
                var roomData = System.IO.File.ReadAllText("Data/RoomSeedData.json");
                var rooms = JsonConvert.DeserializeObject<List<Room>>(roomData);
                foreach (var room in rooms)
                {
                    context.Rooms.Add(room);
                }

                context.SaveChanges();
            }

            if (!context.Guests.Any())
            {
                var guestData = System.IO.File.ReadAllText("Data/GuestSeedData.json");
                var guests = JsonConvert.DeserializeObject<List<Guest>>(guestData);
                foreach (var guest in guests)
                {
                    context.Guests.Add(guest);
                }

                context.SaveChanges();
            }

            if (!context.WakeUpCallServices.Any())
            {
                var wakeUpCallServiceData = System.IO.File.ReadAllText("Data/WakeUpCallServiceSeedData.json");
                var wakeUpCallServices = JsonConvert.DeserializeObject<List<WakeUpCallService>>(wakeUpCallServiceData);
                foreach (var wakeUpCallService in wakeUpCallServices)
                {
                    context.WakeUpCallServices.Add(wakeUpCallService);
                }

                context.SaveChanges();
            }

            if (!context.MenuItems.Any())
            {
                var menuItemData = System.IO.File.ReadAllText("Data/MenuItemSeedData.json");
                var MenuItems = JsonConvert.DeserializeObject<List<MenuItem>>(menuItemData);
                foreach (var MenuItem in MenuItems)
                {
                    context.MenuItems.Add(MenuItem);
                }

                context.SaveChanges();
            }

            if (!context.RoomServices.Any())
            {
                var roomServiceData = System.IO.File.ReadAllText("Data/RoomServiceSeedData.json");
                var roomServices = JsonConvert.DeserializeObject<List<RoomService>>(roomServiceData);
                foreach (var roomService in roomServices)
                {
                    context.RoomServices.Add(roomService);
                }

                context.SaveChanges();
            }

            if (!context.LaundryServices.Any())
            {
                var laundryServiceData = System.IO.File.ReadAllText("Data/LaundryServiceSeedData.json");
                var laundryServices = JsonConvert.DeserializeObject<List<LaundryService>>(laundryServiceData);
                foreach (var laundryService in laundryServices)
                {
                    context.LaundryServices.Add(laundryService);
                }

                context.SaveChanges();
            }

            if (!context.RestaurantOrders.Any())
            {
                var restaurantOrderData = System.IO.File.ReadAllText("Data/RestaurantOrderSeedData.json");
                var restaurantOrders = JsonConvert.DeserializeObject<List<RestaurantOrder>>(restaurantOrderData);
                foreach (var restaurantOrder in restaurantOrders)
                {
                    context.RestaurantOrders.Add(restaurantOrder);
                }

                context.SaveChanges();
            }
        }
    }
}