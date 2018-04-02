# Park-it-4Ward

Setup/Login - Asks for users name and email address and possibly create a nickname for the user (if we meet our gamify stretch goal)

ARRIVAL

User pulls in parking lot and loads website/app, the app uses google maps API to locate the user position and suggests the parking lot from our database that’s closest to the user.  User selects the parking lot then the site brings up all available spots within the selected parking lot with time remaining and spot number.  User picks from the list, parks in the spot then submits a button to show that this spot is now taken.  

If the user comes to the lot and no spots are available the user is presented with a message that says something like “Sorry no spots are currently available, would you like to park it 4ward?” if user selects yes then the site will ask for the parking spot number and an estimate of how long the user will need the spot then add it to database as occupied until the time given by user occurs.

DEPART
When the user returns back they open the website/app and click a button that says something like “make available”.

Possible Stretch Goals  

Have a calendar API remind the user to mark the space as open after a certain period of time or possibly email a reminder

Gamify the app based on a kudos/kharma based ranking system where with each time you post your parking spot you get points and then additional points for when another user is able to connect and get the spot.  