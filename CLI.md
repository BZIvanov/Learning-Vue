## Command Line Interface

Here is a demo list of essentials commands we can run in the terminal. For the full list use the respective command which you can find below.

To find more here are the [CLI docs](https://docs.microsoft.com/en-us/dotnet/core/tools/).

### List

##### General commands which you can run anywhere in your terminal

- will display info for your dotnet installation

```bash
dotnet --info
```

- will display list of available commands

```bash
dotnet -h
```

- will display available commands for specific command, in this example for **new**

```bash
dotnet new -h
```

##### Commands which you must run in a target folder where you want the files to be generated

- will create solution file in the current terminal folder. After we have not specified name, the folder name will be used

```bash
dotnet new sln
```

- will create namespace/ class library and give it a name Domain in this example

```bash
dotnet new classlib -n Domain
```

- will create webapi and give it a name API in this example

```bash
dotnet new webapi -n API
```

- the first command will display the options we have for our sln/solution file. The second command will add class library to our solution. We dont need to specify the full path, just the folder name which is in the current directory and the cli will then target the csproj file in it.

```bash
dotnet sln -h
dotnet sln add  Domain/
```

- will display list of all our libraries we added to the solution

```bash
dotnet sln list
```

- will add reference from one class library to another. While we are in our *Application* class library we can add reference for our *Domain* class library. The result will be that in our *Application* library in the *Application.csproj* file we will get new tag ItemGroup in which the new reference is specified

```bash
dotnet add reference ../Domain/
```

#### Database and migrations

For this application we need to install a tool with the following command. This is required for migration services.

```bash
dotnet tool install --global dotnet-ef
```

In the terminal, when on the root level (.sln file) type the following command. -s specify in which folder is the starting point of our app
```bash
dotnet ef migrations add InitialCreate -p Persistence -s API
```

When in the API project run the following command to test migrations. This command only works inside the context of the startup project, we will get an error if we use it at the solution level, even with the -p switch. This command will generate our reactivities.db file. This command will be also used to provide data from this API to the react app.
```bash
dotnet watch run
```
With our VS code extension SQLite we can open the database. Press F1 in vs code and run *SQLite: Open Database*. On the left panel you will now have Sqlite explorer. Select your Reactivities.db file and with right-click you can inspect the tables.

For seeding data to the database, when on the .sln directory run below command. This will also create files in Persistence/Migrations and the file name will contain "SeedValues" as specified in the command. We will run this command again everytime we are using DbSet to create new table.
```bash
dotnet ef migrations add SeedValues -p Persistence -s API
```
