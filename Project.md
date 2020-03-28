# Project structure and building

Contains information of how files are created and some info of what is mostly custom or auto generated.

- **Reactivities.sln** - created using CLI command *dotnet new sln*. The content is auto-generated. That file contains information of our class libraries, which we need to manually add to the .sln after creating them.

- **Domain** folder and content - created using CLI command *dotnet new classlib -n Domain*.

    - **bin** folder - all the content is auto-generated and we dont manually work in it
    - **obj** folder - all the content is auto-generated and we dont manually work in it
    - **Class1.cs** - blank template class on which we will work and rename if we want
    - **Domain.csproj** - auto-generated content, this file is used for example when registering this class library in our .sln file. Also here will be added references to other .csproj files, when Domain project is depending on another project. IMPORTANT: for example if we have in the Domain reference to the Persistence, and then from the Application we have reference to the Domain, Application will also have indirect reference to the Persistence.

- **Application** folder and content - see above for Domain, this folder follows the same pattern.

- **Persistence** folder and content - see above for Domain, this folder follows the same pattern.

- **API** folder and content - created using CLI command *dotnet new webapi -n API*.

    - **Controllers** folder - in there we specify our custom controllers. Content and naming based on our decision.
    - **obj** folder - all the content is auto-generated and we dont manually work in it
    - **Properties** folder - contains .json config file which is auto-generated, but we can additionally change
    - **API.csproj** - auto-generated file, which is used to add our webapi to the .sln file
    - **appsettings.json** - auto-generated file, which we can additionally change
    - **appsettings.Development.json** - auto-generated file, which we can additionally change. Responsible for dev environment
    - **Program.cs** - auto-generated file, which is the starting point of our app
    - **Startup.cs** - auto-generated file, which holds some configurations
    - **WeatherForcast.cs** - auto-generated and manually deleted after that, because it is a demo file.
