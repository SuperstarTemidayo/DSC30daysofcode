import datetime
def todaysDate():
	x = datetime.datetime.now()
	print("Today is "+ x.strftime("%A"))
	print("Current time is "+ x.strftime("%H:%M:%S:%p"))
    
todaysDate()
