using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortfolioSite.Server.Migrations
{
    public partial class PointTypeStuff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "ExperiencePoints",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "ExperiencePoints");
        }
    }
}
