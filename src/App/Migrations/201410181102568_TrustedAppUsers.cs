namespace App.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TrustedAppUsers : DbMigration
    {
        public override void Up()
        {
            this.CreateTable(
                "dbo.AppUserTrustedUsers",
                c => new
                    {
                        SourceUser = c.Int(nullable: false),
                        TargetUser = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.SourceUser, t.TargetUser })
                .ForeignKey("dbo.AspNetUsers", t => t.SourceUser)
                .ForeignKey("dbo.AspNetUsers", t => t.TargetUser)
                .Index(t => t.SourceUser)
                .Index(t => t.TargetUser);
            
        }
        
        public override void Down()
        {
            this.DropForeignKey("dbo.AppUserTrustedUsers", "TargetUser", "dbo.AspNetUsers");
            this.DropForeignKey("dbo.AppUserTrustedUsers", "SourceUser", "dbo.AspNetUsers");
            this.DropIndex("dbo.AppUserTrustedUsers", new[] { "TargetUser" });
            this.DropIndex("dbo.AppUserTrustedUsers", new[] { "SourceUser" });
            this.DropTable("dbo.AppUserTrustedUsers");
        }
    }
}