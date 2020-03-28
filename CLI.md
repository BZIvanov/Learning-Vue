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
