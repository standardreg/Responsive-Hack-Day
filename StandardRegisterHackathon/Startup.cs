using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(StandardRegisterHackathon.Startup))]
namespace StandardRegisterHackathon
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
