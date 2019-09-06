using App.API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class DataContext : IdentityDbContext<User, Role, int,
         IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>,
         IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<RoomService> RoomServices { get; set; }
        public DbSet<LaundryService> LaundryServices { get; set; }
        public DbSet<WakeUpCallService> WakeUpCallServices { get; set; }
        public DbSet<RestaurantOrder> RestaurantOrders { get; set; }
        public DbSet<RoomServiceItem> RoomServiceItems { get; set; }
        public DbSet<LaundryServiceItem> LaundryServiceItems { get; set; }
        public DbSet<RestaurantOrderItem> RestaurantOrderItems { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });
        }
    }
}