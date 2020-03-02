#addin nuget:?package=Cake.Npm&version=0.16.0
#addin nuget:?package=Cake.DotNetCoreEf&version=0.9.0
//////////////////////////////////////////////////////////////////////
// PREPARATION
//////////////////////////////////////////////////////////////////////

var RuntimeIdentifier = "win7-x64";
var TargetFramework = "netcoreapp3.1";

Task("Build-SPA")
    .Does(() => 
    {
        var ClientAppPath = Directory("../");

        var installSettings = new NpmInstallSettings 
        {
            WorkingDirectory = ClientAppPath,
            LogLevel = NpmLogLevel.Warn
        };

        NpmInstall(installSettings);

    });


RunTarget("Build-SPA");
