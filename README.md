# expensejournal
An asp.net core web app built with as a web api with Angular for serving front end files. 
It is an expense journal that allows you to create, edit and delete expense records.
<br>
It also displays a list of created expenses from the DB.

## Brief Background
I created this project to learn how to integrate Angular with asp.net core web apis in a project so there might be some things that are missing from it that would make it a fully functional app
I'll continue to add these things to the project as I proceed in my learning journey. 
<br>
__N.B:__ Running the project such that both api endpoints and client files using Visual Studio is not working properly yet. 
For some reason, when the browser window opens, the client bundle files are not served properly. 
This happens both for serving the clientapp files using the SPA service and using a proxy (https://localhost:4200) in
the startup.cs. 
<br>
The server returns an status error code [431]() for all the bundle files at the end of the inde.html file with a '_no resource with given url found_' message when you click on the script in the application tab in the developer tools.
I have tried to no avail to find a working solution to the error so I'll be super appreciative if any one can come up with a working solution. 
The project is uses ASP.NET Core 3.1 and Angular 9. 
<br>
<br>
Other than that the project runs normally when you set up as described below.

## Installation and Set Up Guide.
After cloning the project to your local machine, using a command window cd into the ClientApp folder and install the dependencies and devdependencies. 
<br>
Run the data migrations to set up the DB.
Start the server for the api using `ctrl + F5` for windows users. 
<br>
Then in your command line, start the ClientApp by running run `ng serve`.

