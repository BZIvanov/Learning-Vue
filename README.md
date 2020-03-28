# .NET

## General

- 'ctrl' + '.' will open quick fix menu, which is important if missing something to add it.

## Running the application

We need to be in the API folder where the Program.cs file for our application is placed. When there run in the terminal:

```bash
dotnet run
```

## Working with Visual Studio Code

If you are working with VS code you will need the following extensions:

- **C# for Visual Studio Code (powered by OmniSharp)** - must install
- **NuGet Package Manager** - for installing packages
- **C# Extensions** - optional, but good to have
- **SQLite** - for database, good to have

## How to install additional packages

- press F1 to open the command palette
- access NuGet PM by typing *NuGetPackage Manager: Add Package*
- type the name of the package you need

### Installing Microsofot.EntityFrameworkCore

- do the initial steps for installing package above in this file
- the name of the package is **Microsoft.EntityFrameworkCore**
- we need 3 packages from there:

    - **Microsoft.EntityFrameworkCore** - it is very important on the next step to select the correct version of your .NET Core. And then select for which project you want to install it, in our case for Persistence.
    - **Microsoft.EntityFrameworkCore.Sqlite** - it is very important on the next step to select the correct version of your .NET Core. And then select for which project you want to install it, in our case for Persistence.
    - **Microsoft.EntityFrameworkCore.Design** - it is very important on the next step to select the correct version of your .NET Core. And then select for which project you want to install it, in our case for API.

- if you see popup in VS Code click the *Restore* button. Or you can run in the terminal in the .sln level **dotnet restore**

## Additional notes

When working with the CLI, only creating class library is not enough, we also need to add the library to our solution file.


