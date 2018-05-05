// tslint:disable
// Start quokka with cmd + k, Q

// #region Primatives
const country: string = 'Straya'
const hoursToGetHome: number = 28
const lookingForwardToThoseFlights: boolean = false

console.log(country, hoursToGetHome, lookingForwardToThoseFlights)
// #endregion

// #region Interfaces
interface Flight {
    from: string
    to: string
    duration: [number, number]
}

const flights: Flight[] = [
    {
        from: 'MSP',
        to: 'SFO',
        duration: [4, 24]
    },
    {
        from: 'SFO',
        to: 'SYD',
        duration: [14, 40]
    },
    {
        from: 'SYD',
        to: 'PER',
        duration: [5, 5]
    }
]

// @ts-ignore
const example: Flight = {
    from: 'MSP',
    to: 'SFO',
    duration: [1, 0],
    // carrier: 'Qantas'
}
const example2 = {
    from: 'MSP',
    to: 'SFO',
    duration: [1, 0] as [number, number],
    carrier: 'Qantas'
}
// @ts-ignore
const typedExample2: Flight = example2
// #endregion

// #region functions
function hoursOnFlights(flights: Flight[]): [number, number] {
    const sum = flights.reduce(
        (acc, flight) => {
            typeof acc
            return [acc[0] + flight.duration[0], acc[1] + flight.duration[1]]
        },
        [0, 0]
    )

    return [sum[0] + Math.floor(sum[0] / 60), sum[1] % 60]
}

console.log(hoursOnFlights(flights))
// #endregion

// #region generics
export function flatMap<T, Mapped>(collection: T[], map: (value: T, i: number) => Mapped[]): Mapped[] {
    return collection.reduce((acc: Mapped[], val: T, i: number) => {
        map(val, i).forEach(v => acc.push(v))
        return acc
    }, [])
}

const trips: Array<{ name: string; legs: Flight[] }> = [
    {
        name: 'To NDC!',
        legs: [
            { from: 'PER', to: 'SYD', duration: [4, 5] },
            { from: 'SYD', to: 'SFO', duration: [13, 20] },
            { from: 'SFO', to: 'MSP', duration: [4, 0] }
        ]
    },
    { name: 'Home!', legs: flights }
]

trips.map(trip => trip.)

console.log(flatMap(trips, trip => trip.legs))
// #endregion

// #region generic constraints
interface Duration {
    duration: [number, number]
}

function itemsWithDurationGreaterThan(items: Duration[], duration: [number, number]): Duration[] {
    return items.filter(item => item.duration[0] > duration[0] && item.duration[1] > duration[1])
}

// @ts-ignore
const flightsLongerThan4Hours = itemsWithDurationGreaterThan(flights, [10, 0])
// console.log(flightsLongerThan4Hours[0].from)

function genericItemsWithDurationGreaterThan<T extends Duration>(items: T[], duration: [number, number]): T[] {
    return items.filter(item => item.duration[0] > duration[0] && item.duration[1] > duration[1])
}

const genericFlightsLongerThan4Hours = genericItemsWithDurationGreaterThan(flights, [10, 0])
console.log(genericFlightsLongerThan4Hours[0].from)
// #endregion

// #region type guards
const aFlight: any = flights[0]

function isFlight(obj: any): obj is Flight {
    return 'from' in obj && 'to' in obj && 'duration' in obj
}

aFlight.whatever
if (isFlight(aFlight)) {
    aFlight.
}

// #endregion

// #region union and intersections
interface Layover {
    duration: [number, number]
    location: string
}

const flightsWithLayovers: Array<Flight | Layover> = [
    flights[0],
    { location: 'SFO', duration: [2, 50] },
    flights[1],
    { location: 'SYD', duration: [2, 0] },
    flights[2]
]
flightsWithLayovers

function totalDuration(items: Array<Flight | Layover>): [number, number] {
    const sum = items.reduce(
        (acc, flight) => {
            typeof acc
            return [acc[0] + flight.duration[0], acc[1] + flight.duration[1]]
        },
        [0, 0]
    )

    return [sum[0] + Math.floor(sum[0] / 60), sum[1] % 60]
}
const totalHome = totalDuration(flightsWithLayovers)
totalHome

// TODO add intersection type example

// #endregion

// #region putting it together
const timeFlying = totalDuration(flightsWithLayovers.filter(isFlight))
const timeInAirports = totalDuration(flightsWithLayovers.filter(item => !isFlight(item)))
timeFlying
timeInAirports
// #endregion


// Split into tabs