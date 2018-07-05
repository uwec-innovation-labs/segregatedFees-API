# segregatedFees-API [![Build Status](https://travis-ci.com/UWEC-ITC/segregatedFees-API.svg?branch=master)](https://travis-ci.com/UWEC-ITC/segregatedFees-API)
RESTFUL API for the retrieval of UWEC segregated fees data

Location: https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/v0

## API Documentation:

**Please note that all results are cached for 120 seconds.**

This API can currently retrieve the following data from [coinmarketcap.com](http://coinmarketcap.com/):

#### **`GET /v0/`**
- **`Description`** - This endpoint returns all of the data from the `data.csv` file as a json array.

```json
[
    {
        "activity": "Davies Student Center",
        "2015": 326.00,
        "2016": 326.00,
        "2017": 326.00,
        "2018": 326.00
    },
    {
        "activity": "University Centers",
        "2015": 218.00,
        "2016": 225.00,
        "2017": 235.00,
        "2018": 245.00
    },
    {
        "activity": "University Recreation & Sports Facilities",
        "2015": 178.96,
        "2016": 185.00,
        "2017": 185.00,
        "2018": 189.00
    },
    ...
]
```

#### **`GET /v0/info`**
- **`Description`** - Returns info about the API

```json
{
    "message": "Welcome to the API for UWEC segregated fees",
    "version": "v0",
    "documentation": "https://github.com/UWEC-ITC/segregatedFees-API"
}
```

#### **`GET /v0/activities`**
- **`Description`** - Returns a json array of all the activities

```json
[
    "Davies Student Center",
    "University Centers",
    "University Recreation & Sports Facilities",
    ...
]
```

#### **`GET /v0/activities/:activity`**
- **`Description`** - Returns a json object of the data for a specific activity
  - **`Notes`** - The request is **not** case sensitive. It is sensitive to spacing however.
- **`Example`** - `/v0/activities/Davies Student Center`

```json
{
    "2015": "326.00",
    "2016": "326.00",
    "2017": "326.00",
    "2018": "326.00",
    "activity": "Davies Student Center"
}
```

## Claudia Deploy
`claudia update`
