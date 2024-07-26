using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortfolioSite.Server.Migrations
{
    public partial class OrderStuff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "Websites",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "ExperiencePoints",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Order",
                table: "Websites");

            migrationBuilder.DropColumn(
                name: "Order",
                table: "ExperiencePoints");
        }
    }
}
