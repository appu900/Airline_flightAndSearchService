# Airline_flightAndSearchService

- commands for sequlize setup
- npx sequelize init ( just copy the config.json and put it inside config    ***folder and add your dbname and password in the json development section)
- npx sequelize db:create

- enviromental varibale
- port


## db Design 

- some objerbation that one city can have multiple airport so there is 1 : N between city and Airport
- One AirPlane can be used in many flights but in one flight one airplane is used

- Airplane Table 
- flight Table
- City table
- Airport Table ( may be 2 airport can be there in a single city)

# Airplane Table  
- id 
- model_number
- capacity
- created_At
- updated_At 

# flights
- id
- src_Airport_id
- dest_Airport_id
- departure_date
- arrival_date
- departure_time
- arrival_time
- airplane_id
- FLIGHT NUMBER

# Airport
- id
- name
- city_id
- address

# city 
- id 
- name


# for seeders systax 
- npx sequelize seed:generate --name add-Airports
-  npx sequelize db:seed:all


# filter on flight search ...
- source -> destination
- data
- multicity flights
- price 
- time perriod