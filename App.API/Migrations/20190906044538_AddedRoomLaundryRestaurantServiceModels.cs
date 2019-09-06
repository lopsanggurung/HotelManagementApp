using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace App.API.Migrations
{
    public partial class AddedRoomLaundryRestaurantServiceModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LaundryServices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BookingId = table.Column<int>(nullable: false),
                    DateOrdered = table.Column<DateTime>(nullable: false),
                    DateReturnedFromLaundry = table.Column<DateTime>(nullable: false),
                    DateReturnedToGuest = table.Column<DateTime>(nullable: false),
                    IsPaid = table.Column<bool>(nullable: false),
                    TotalPriceBeforeTax = table.Column<decimal>(nullable: false),
                    TaxAmount = table.Column<decimal>(nullable: false),
                    TotalPrice = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LaundryServices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LaundryServices_Bookings_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Bookings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MenuItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IsArchived = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    IsBarItem = table.Column<bool>(nullable: false),
                    Category = table.Column<string>(nullable: true),
                    SubCategory = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RestaurantOrders",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    OrderFor = table.Column<string>(nullable: true),
                    OrderDate = table.Column<DateTime>(nullable: false),
                    IsCompleted = table.Column<bool>(nullable: false),
                    IsPaid = table.Column<bool>(nullable: false),
                    TotalPriceBeforeTax = table.Column<decimal>(nullable: false),
                    TaxAmount = table.Column<decimal>(nullable: false),
                    TotalPrice = table.Column<decimal>(nullable: false),
                    BookingId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RestaurantOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RestaurantOrders_Bookings_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Bookings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RoomServices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BookingId = table.Column<int>(nullable: false),
                    ServiceDate = table.Column<DateTime>(nullable: false),
                    IsCompleted = table.Column<bool>(nullable: false),
                    IsPaid = table.Column<bool>(nullable: false),
                    TotalPriceBeforeTax = table.Column<decimal>(nullable: false),
                    TaxAmount = table.Column<decimal>(nullable: false),
                    TotalPrice = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomServices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoomServices_Bookings_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Bookings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WakeUpCallServices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BookingId = table.Column<int>(nullable: false),
                    WakeUpCallDate = table.Column<DateTime>(nullable: false),
                    IsCompleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WakeUpCallServices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WakeUpCallServices_Bookings_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Bookings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LaundryServiceItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    LaundryServiceId = table.Column<int>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    Quantity = table.Column<int>(nullable: false),
                    PricePerItem = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LaundryServiceItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LaundryServiceItems_LaundryServices_LaundryServiceId",
                        column: x => x.LaundryServiceId,
                        principalTable: "LaundryServices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RestaurantOrderItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RestaurantOrderId = table.Column<int>(nullable: false),
                    MenuItemId = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    PricePerItem = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RestaurantOrderItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RestaurantOrderItems_MenuItems_MenuItemId",
                        column: x => x.MenuItemId,
                        principalTable: "MenuItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RestaurantOrderItems_RestaurantOrders_RestaurantOrderId",
                        column: x => x.RestaurantOrderId,
                        principalTable: "RestaurantOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RoomServiceItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoomServiceId = table.Column<int>(nullable: false),
                    MenuItemId = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    PricePerItem = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomServiceItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoomServiceItems_MenuItems_MenuItemId",
                        column: x => x.MenuItemId,
                        principalTable: "MenuItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RoomServiceItems_RoomServices_RoomServiceId",
                        column: x => x.RoomServiceId,
                        principalTable: "RoomServices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LaundryServiceItems_LaundryServiceId",
                table: "LaundryServiceItems",
                column: "LaundryServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_LaundryServices_BookingId",
                table: "LaundryServices",
                column: "BookingId");

            migrationBuilder.CreateIndex(
                name: "IX_RestaurantOrderItems_MenuItemId",
                table: "RestaurantOrderItems",
                column: "MenuItemId");

            migrationBuilder.CreateIndex(
                name: "IX_RestaurantOrderItems_RestaurantOrderId",
                table: "RestaurantOrderItems",
                column: "RestaurantOrderId");

            migrationBuilder.CreateIndex(
                name: "IX_RestaurantOrders_BookingId",
                table: "RestaurantOrders",
                column: "BookingId");

            migrationBuilder.CreateIndex(
                name: "IX_RoomServiceItems_MenuItemId",
                table: "RoomServiceItems",
                column: "MenuItemId");

            migrationBuilder.CreateIndex(
                name: "IX_RoomServiceItems_RoomServiceId",
                table: "RoomServiceItems",
                column: "RoomServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_RoomServices_BookingId",
                table: "RoomServices",
                column: "BookingId");

            migrationBuilder.CreateIndex(
                name: "IX_WakeUpCallServices_BookingId",
                table: "WakeUpCallServices",
                column: "BookingId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LaundryServiceItems");

            migrationBuilder.DropTable(
                name: "RestaurantOrderItems");

            migrationBuilder.DropTable(
                name: "RoomServiceItems");

            migrationBuilder.DropTable(
                name: "WakeUpCallServices");

            migrationBuilder.DropTable(
                name: "LaundryServices");

            migrationBuilder.DropTable(
                name: "RestaurantOrders");

            migrationBuilder.DropTable(
                name: "MenuItems");

            migrationBuilder.DropTable(
                name: "RoomServices");
        }
    }
}
