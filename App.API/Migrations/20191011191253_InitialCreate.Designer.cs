﻿// <auto-generated />
using System;
using App.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace App.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20191011191253_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity("App.API.Models.Booking", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AdditionalBed");

                    b.Property<decimal>("AdditionalBedPricePerNight");

                    b.Property<string>("BookingSource");

                    b.Property<string>("BookingStatus");

                    b.Property<DateTime>("CheckInDate");

                    b.Property<DateTime>("CheckOutDate");

                    b.Property<DateTime>("CheckedInDate");

                    b.Property<DateTime>("CheckedOutDate");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<decimal>("DepositAmount");

                    b.Property<string>("FeedBackOnCheckOut");

                    b.Property<int>("GuestId");

                    b.Property<DateTime>("LastModifiedDate");

                    b.Property<string>("Notes");

                    b.Property<int>("NumberOfAdults");

                    b.Property<int>("NumberOfChildren");

                    b.Property<string>("PaymentStatus");

                    b.Property<DateTime>("PickUpDate");

                    b.Property<string>("PickUpDetails");

                    b.Property<string>("PickUpLocation");

                    b.Property<decimal>("PricePerNight");

                    b.Property<bool>("RequirePickUp");

                    b.Property<int>("RoomId");

                    b.Property<decimal>("TaxAmount");

                    b.Property<decimal>("TotalPrice");

                    b.Property<decimal>("TotalPriceBeforeTax");

                    b.HasKey("Id");

                    b.HasIndex("GuestId");

                    b.HasIndex("RoomId");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("App.API.Models.Guest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("MiddleName");

                    b.Property<string>("Nationality");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("State");

                    b.Property<string>("StreetAddress");

                    b.Property<string>("ZipCode");

                    b.HasKey("Id");

                    b.ToTable("Guests");
                });

            modelBuilder.Entity("App.API.Models.LaundryService", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BookingId");

                    b.Property<DateTime>("DateOrdered");

                    b.Property<DateTime>("DateReturnedFromLaundry");

                    b.Property<DateTime>("DateReturnedToGuest");

                    b.Property<bool>("IsPaid");

                    b.Property<decimal>("TaxAmount");

                    b.Property<decimal>("TotalPrice");

                    b.Property<decimal>("TotalPriceBeforeTax");

                    b.HasKey("Id");

                    b.HasIndex("BookingId");

                    b.ToTable("LaundryServices");
                });

            modelBuilder.Entity("App.API.Models.LaundryServiceItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Category");

                    b.Property<int>("LaundryServiceId");

                    b.Property<decimal>("PricePerItem");

                    b.Property<int>("Quantity");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.HasIndex("LaundryServiceId");

                    b.ToTable("LaundryServiceItems");
                });

            modelBuilder.Entity("App.API.Models.MenuItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Category");

                    b.Property<string>("Description");

                    b.Property<bool>("IsArchived");

                    b.Property<bool>("IsBarItem");

                    b.Property<string>("Name");

                    b.Property<decimal>("Price");

                    b.Property<string>("SubCategory");

                    b.HasKey("Id");

                    b.ToTable("MenuItems");
                });

            modelBuilder.Entity("App.API.Models.RestaurantOrder", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("BookingId");

                    b.Property<bool>("IsCompleted");

                    b.Property<bool>("IsPaid");

                    b.Property<DateTime>("OrderDate");

                    b.Property<string>("OrderFor");

                    b.Property<decimal>("TaxAmount");

                    b.Property<decimal>("TotalPrice");

                    b.Property<decimal>("TotalPriceBeforeTax");

                    b.HasKey("Id");

                    b.HasIndex("BookingId");

                    b.ToTable("RestaurantOrders");
                });

            modelBuilder.Entity("App.API.Models.RestaurantOrderItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("MenuItemId");

                    b.Property<decimal>("PricePerItem");

                    b.Property<int>("Quantity");

                    b.Property<int>("RestaurantOrderId");

                    b.HasKey("Id");

                    b.HasIndex("MenuItemId");

                    b.HasIndex("RestaurantOrderId");

                    b.ToTable("RestaurantOrderItems");
                });

            modelBuilder.Entity("App.API.Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("App.API.Models.Room", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("FullBed");

                    b.Property<bool>("IsArchived");

                    b.Property<bool>("IsClean");

                    b.Property<int>("KingBed");

                    b.Property<int>("MaxOccupancy");

                    b.Property<decimal>("Price");

                    b.Property<int>("QueenBed");

                    b.Property<string>("RoomName");

                    b.Property<string>("RoomNumber");

                    b.Property<string>("RoomType");

                    b.Property<int>("TwinBed");

                    b.HasKey("Id");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("App.API.Models.RoomService", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BookingId");

                    b.Property<bool>("IsCompleted");

                    b.Property<bool>("IsPaid");

                    b.Property<DateTime>("ServiceDate");

                    b.Property<decimal>("TaxAmount");

                    b.Property<decimal>("TotalPrice");

                    b.Property<decimal>("TotalPriceBeforeTax");

                    b.HasKey("Id");

                    b.HasIndex("BookingId");

                    b.ToTable("RoomServices");
                });

            modelBuilder.Entity("App.API.Models.RoomServiceItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("MenuItemId");

                    b.Property<decimal>("PricePerItem");

                    b.Property<int>("Quantity");

                    b.Property<int>("RoomServiceId");

                    b.HasKey("Id");

                    b.HasIndex("MenuItemId");

                    b.HasIndex("RoomServiceId");

                    b.ToTable("RoomServiceItems");
                });

            modelBuilder.Entity("App.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<DateTime>("Created");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FirstName");

                    b.Property<DateTime>("LastActive");

                    b.Property<string>("LastName");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("App.API.Models.UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("App.API.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("App.API.Models.WakeUpCallService", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BookingId");

                    b.Property<bool>("IsCompleted");

                    b.Property<DateTime>("WakeUpCallDate");

                    b.HasKey("Id");

                    b.HasIndex("BookingId");

                    b.ToTable("WakeUpCallServices");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("App.API.Models.Booking", b =>
                {
                    b.HasOne("App.API.Models.Guest", "Guest")
                        .WithMany("Bookings")
                        .HasForeignKey("GuestId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("App.API.Models.Room", "Room")
                        .WithMany("Bookings")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("App.API.Models.LaundryService", b =>
                {
                    b.HasOne("App.API.Models.Booking", "Booking")
                        .WithMany("LaundryServices")
                        .HasForeignKey("BookingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("App.API.Models.LaundryServiceItem", b =>
                {
                    b.HasOne("App.API.Models.LaundryService", "LaundryService")
                        .WithMany("LaundryServiceItems")
                        .HasForeignKey("LaundryServiceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("App.API.Models.RestaurantOrder", b =>
                {
                    b.HasOne("App.API.Models.Booking", "Booking")
                        .WithMany("RestaurantOrders")
                        .HasForeignKey("BookingId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("App.API.Models.RestaurantOrderItem", b =>
                {
                    b.HasOne("App.API.Models.MenuItem", "MenuItem")
                        .WithMany("RestaurantOrderItems")
                        .HasForeignKey("MenuItemId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("App.API.Models.RestaurantOrder", "RestaurantOrder")
                        .WithMany("RestaurantOrderItems")
                        .HasForeignKey("RestaurantOrderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("App.API.Models.RoomService", b =>
                {
                    b.HasOne("App.API.Models.Booking", "Booking")
                        .WithMany("RoomServices")
                        .HasForeignKey("BookingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("App.API.Models.RoomServiceItem", b =>
                {
                    b.HasOne("App.API.Models.MenuItem", "MenuItem")
                        .WithMany("RoomServiceItems")
                        .HasForeignKey("MenuItemId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("App.API.Models.RoomService", "RoomService")
                        .WithMany("RoomServiceItems")
                        .HasForeignKey("RoomServiceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("App.API.Models.UserRole", b =>
                {
                    b.HasOne("App.API.Models.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("App.API.Models.User", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("App.API.Models.WakeUpCallService", b =>
                {
                    b.HasOne("App.API.Models.Booking", "Booking")
                        .WithMany("WakeUpCallServices")
                        .HasForeignKey("BookingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("App.API.Models.Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("App.API.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("App.API.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("App.API.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}