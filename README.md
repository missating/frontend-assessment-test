# Holiday Pirates (Frontend Assesment)

### Technologies
 ----

 1. [Nodejs](https://nodejs.org/en/)
 1. [React](https://reactjs.org/)
## Getting Started
____

1. Install project dependencies

`npm install`

2. Then start the application

`npm run start`

6. Navigate to your browser to view the app on `http://localhost:8080`

Optional: Did you miss something in our hotel API? Something that is really needed or you think is important to have before starting with the design or frontend? Please write down your thoughts in a simple list with short statements that we can discuss these point together later.

- Pagination: Since its possible for the API to return 500 hotels, pagination is important for better handling of response data on the front end
- Error documentationn: I think errors shouldn't be passed from the front end as query parameters, errors should come from the backend with a descriptive message so it can be handled properly on the front end.

## Test
____

Run the application test:

`npm run test`


### The Flight

To be able to show a list of flights where people can search for flights to their various hotels we would be needing the following:

# Endpoints
### Get all flights

#### GET HTTP Request
-  `GET http://fake-flight-api.com/api/flights`

#### Request Parameters

| Query Parameter                                 |         Value               |
| -----------------------------------------------:|:---------------------------:|
|  location                                       |   Required: Hotel Location  |
|                                                 |                             |

###### HTTP Response
-   HTTP Status: `200: OK`
JSON data
```json
    {
      "status": "success",
      "data": {
            "departure": "Current Location",
            "arrival": "Hotel Location",
            "duration": "1:02:52",
            "status": "Scheduled",
            "marketingCarriers": [
                {
                  "airlineCode": "VA",
                  "flightNumber": "6427",
                  "airline": "Virgin Australia",
                  "flightSchedule": [
                    {
                      "departingAt":"2018-11-19T07:20:00-0800",
                      "arrivingAt": "2018-11-19T07:20:00-0900",
                    }
                  ],
                },
                {
                    "airlineCode": "VS",
                    "flightNumber": "5734",
                    "airline": "Virgin Atlantic Airways",
                    "flightSchedule": [
                      {
                        "departingAt":"2018-11-19T07:20:00-0800",
                        "arrivingAt": "2018-11-19T07:20:00-0900"
                  }
                  ],
                }
            ],
          }
      }
```

- HTTP Status: `400: Bad Request`
JSON data
```json
    {
      "status": "fail",
      "data": {
        "location": "Location is required"
      }
    }
```
