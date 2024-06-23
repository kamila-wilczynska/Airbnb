# Aribnb playgroung to experiment with React

This is an experimental playground for React app where:  
Card Component: Displays travel-related information with badges, images, and various details based on the current data.  
Home Component: Aggregates multiple Card components and includes additional features like Hero and Counter.  
Travel Component: Manages a travel inspiration slider that dynamically updates based on user interaction.  
TravelCard Component: Displays detailed information about each travel destination.  
Counter Component: Allows users to set and track their travel goals, with state managed by Redux.  

### Experience cards
Card Component
Props Handling: The Card component receives data through props and logs it.
Badge Logic: It sets a badgeText based on the openSpots and location properties of the item.
Rendering: It conditionally displays a badge, an image, and various details about the item (rating, review count, location, title, price).
javascript

Home Component is rwsposible for:
Data Mapping: It maps over an array of data to create multiple Card components.
Rendering: It includes a Hero component, a list of Card components, and a Counter component.

![image](https://github.com/kamila-wilczynska/Airbnb/assets/107350829/3c68bd42-4e86-4680-bd41-f75afdb2397b)


###Travel Component Description

State Management: Uses useState to manage the current slide index.
Navigation Functions: nextSlide and prevSlide functions update the current slide index, cycling through travelData.
Rendering: Displays the current TravelCard component based on the current index. It also includes navigation buttons to switch slides.

The TravelCard component displays details of a travel destination.
It happend because of:
Props Handling: Receives title, image, date, and description via props.
Rendering: Displays the travel information and an image.

![image](https://github.com/kamila-wilczynska/Airbnb/assets/107350829/bcf4989e-6de2-493b-a632-1492a3179813)

### Counter

State Selection: Uses useSelector to access state values for travels, continents, months, and totalCount from the Redux store.
Dispatch Actions: Uses useDispatch to send increment and decrement actions to the Redux store.
User Interface: Renders buttons to increment or decrement the values and displays the current counts. It also shows a total count and a message if the total is above 5. (If its more than 5 means user is true traveller and should stay with our Business)

![image](https://github.com/kamila-wilczynska/Airbnb/assets/107350829/39d1b366-cc7d-4887-9592-4c27dc69a851)

