Need to create sql JOIN statements for app.get statements. For people and to_do_list and trips

Need to change the trip addNewTrip contoller function to get the id from session and not req.body. Need to use req.body to test without logging in. (For the person/user id)

look to see what functionality can be moved to the server. For example if you need to remove a person from a trip, instead of storing the person list id in state I can write a endpoint that runs a get to find the people list id and then deletes it. (this might be done, look at app.delete /api/people/list)
