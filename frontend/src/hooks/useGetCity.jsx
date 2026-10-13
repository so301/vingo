// // // import axios from 'axios'
// // // import React, { useEffect } from 'react'
// // // import { serverUrl } from '../App'
// // // import { useDispatch, useSelector } from 'react-redux'
// // // import {  setCurrentAddress, setCurrentCity, setCurrentState, setUserData } from '../redux/userSlice'
// // // import { setAddress, setLocation } from '../redux/mapSlice'

// // // function useGetCity() {
// // //     const dispatch=useDispatch()
// // //     const {userData}=useSelector(state=>state.user)
// // //     const apiKey=import.meta.env.VITE_GEOAPIKEY
// // //     useEffect(()=>{
// // // navigator.geolocation.getCurrentPosition(async (position)=>{
// // //     console.log(position)
// // //     const latitude=position.coords.latitude
// // //     const longitude=position.coords.longitude
// // //     dispatch(setLocation({lat:latitude,lon:longitude}))
// // //     const result=await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`)
// // //   console.log(result.data)
// // //     dispatch(setCurrentCity(result?.data?.results[0].city||result?.data?.results[0].county
// // // ))
// // //     dispatch(setCurrentState(result?.data?.results[0].state))
// // //      dispatch(setCurrentAddress(result?.data?.results[0].address_line2 || result?.data?.results[0].address_line1 ))
// // //   dispatch(setAddress(result?.data?.results[0].address_line2))
// // // })
// // //     },[userData])
// // // }

// // // // export default useGetCity

// // // import axios from 'axios'
// // // import React, { useEffect } from 'react'
// // // import { serverUrl } from '../App'
// // // import { useDispatch, useSelector } from 'react-redux'
// // // import {
// // //   setCurrentAddress,
// // //   setCurrentCity,
// // //   setCurrentState
// // // } from '../redux/userSlice'
// // // import { setAddress, setLocation } from '../redux/mapSlice'

// // // function useGetCity() {

// // //   const dispatch = useDispatch()

// // //   const { userData } = useSelector(state => state.user)

// // //   const apiKey = import.meta.env.VITE_GEOAPIKEY

// // //   useEffect(() => {

// // //     if (!userData) return

// // //     navigator.geolocation.getCurrentPosition(

// // //       async (position) => {

// // //         try {

// // //           const latitude = position.coords.latitude
// // //           const longitude = position.coords.longitude

// // //           console.log("Latitude:", latitude)
// // //           console.log("Longitude:", longitude)

// // //           // Save location in Redux
// // //           dispatch(
// // //             setLocation({
// // //               lat: latitude,
// // //               lon: longitude
// // //             })
// // //           )

// // //           // Save location in MongoDB
// // //           const locationResult = await axios.post(
// // //             `${serverUrl}/api/user/update-location`,
// // //             {
// // //               lat: latitude,
// // //               lon: longitude
// // //             },
// // //             {
// // //               withCredentials: true
// // //             }
// // //           )

// // //           console.log("Location saved:", locationResult.data)

// // //           // Get city from Geoapify
// // //           const result = await axios.get(
// // //             `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`
// // //           )

// // //           console.log("Geoapify:", result.data)

// // //           const locationData = result?.data?.results?.[0]

// // //           if (!locationData) {
// // //             console.log("Location details not found")
// // //             return
// // //           }

// // //           // City
// // //           dispatch(
// // //             setCurrentCity(
// // //               locationData.city ||
// // //               locationData.county ||
// // //               ""
// // //             )
// // //           )

// // //           // State
// // //           dispatch(
// // //             setCurrentState(
// // //               locationData.state || ""
// // //             )
// // //           )

// // //           // Address
// // //           const address =
// // //             locationData.address_line2 ||
// // //             locationData.address_line1 ||
// // //             ""

// // //           dispatch(setCurrentAddress(address))

// // //           dispatch(setAddress(address))

// // //         } catch (error) {

// // //           console.log(
// // //             "Location update error:",
// // //             error
// // //           )

// // //         }

// // //       },

// // //       (error) => {

// // //         console.log(
// // //           "Location permission/error:",
// // //           error
// // //         )

// // //       }

// // //     )

// // //   }, [userData?._id])

// // // }

// // // export default useGetCity
// // import axios from "axios"
// // import React, { useEffect } from "react"
// // import { serverUrl } from "../App"
// // import { useDispatch, useSelector } from "react-redux"

// // import {
// //     setCurrentAddress,
// //     setCurrentCity,
// //     setCurrentState
// // } from "../redux/userSlice"

// // import {
// //     setAddress,
// //     setLocation
// // } from "../redux/mapSlice"


// // function useGetCity() {

// //     const dispatch = useDispatch()

// //     const { userData } = useSelector(state => state.user)

// //     const apiKey = import.meta.env.VITE_GEOAPIKEY


// //     useEffect(() => {

// //         // User login झाल्यावरच location घ्यायची
// //         if (!userData?._id) {
// //             return
// //         }


// //         const getLocation = () => {

// //             // Browser location available आहे का ते check
// //             if (!navigator.geolocation) {

// //                 console.log("Geolocation is not supported by this browser")

// //                 return
// //             }


// //             navigator.geolocation.getCurrentPosition(

// //                 async (position) => {

// //                     try {

// //                         const latitude = position.coords.latitude
// //                         const longitude = position.coords.longitude


// //                         console.log("================================")
// //                         console.log("Latitude:", latitude)
// //                         console.log("Longitude:", longitude)
// //                         console.log("================================")


// //                         // Redux मध्ये latitude + longitude save
// //                         dispatch(
// //                             setLocation({
// //                                 lat: latitude,
// //                                 lon: longitude
// //                             })
// //                         )


// //                         // Backend मध्ये location save
// //                         try {

// //                             const locationResult = await axios.post(
// //                                 `${serverUrl}/api/user/update-location`,
// //                                 {
// //                                     lat: latitude,
// //                                     lon: longitude
// //                                 },
// //                                 {
// //                                     withCredentials: true
// //                                 }
// //                             )

// //                             console.log(
// //                                 "Location saved:",
// //                                 locationResult.data
// //                             )

// //                         } catch (error) {

// //                             console.log(
// //                                 "Location save error:",
// //                                 error?.response?.data || error.message
// //                             )
// //                         }


// //                         // Geoapify API
// //                         if (!apiKey) {

// //                             console.log(
// //                                 "VITE_GEOAPIKEY is missing"
// //                             )

// //                             return
// //                         }


// //                         const result = await axios.get(
// //                             `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`
// //                         )


// //                         console.log(
// //                             "Geoapify:",
// //                             result.data
// //                         )


// //                         const locationData =
// //                             result?.data?.results?.[0]


// //                         // IMPORTANT DEBUG LOGS
// //                         console.log(
// //                             "CITY:",
// //                             locationData?.city
// //                         )

// //                         console.log(
// //                             "COUNTY:",
// //                             locationData?.county
// //                         )

// //                         console.log(
// //                             "STATE:",
// //                             locationData?.state
// //                         )

// //                         console.log(
// //                             "ADDRESS:",
// //                             locationData?.address_line1
// //                         )


// //                         // City
// //                         const city =
// //                             locationData?.city ||
// //                             locationData?.county ||
// //                             ""


// //                         // State
// //                         const state =
// //                             locationData?.state ||
// //                             ""


// //                         // Address
// //                         const address =
// //                             locationData?.address_line2 ||
// //                             locationData?.address_line1 ||
// //                             ""


// //                         console.log(
// //                             "FINAL CITY:",
// //                             city
// //                         )

// //                         console.log(
// //                             "FINAL STATE:",
// //                             state
// //                         )

// //                         console.log(
// //                             "FINAL ADDRESS:",
// //                             address
// //                         )


// //                         // Redux मध्ये city save
// //                         dispatch(
// //                             setCurrentCity(city)
// //                         )


// //                         // Redux मध्ये state save
// //                         dispatch(
// //                             setCurrentState(state)
// //                         )


// //                         // Redux मध्ये address save
// //                         dispatch(
// //                             setCurrentAddress(address)
// //                         )


// //                         // Map address
// //                         dispatch(
// //                             setAddress(address)
// //                         )


// //                     } catch (error) {

// //                         console.log(
// //                             "Geo location error:",
// //                             error?.response?.data ||
// //                             error.message
// //                         )
// //                     }

// //                 },


// //                 (error) => {

// //                     console.log(
// //                         "Browser location error:",
// //                         error
// //                     )


// //                     if (error.code === 1) {

// //                         console.log(
// //                             "Location permission denied"
// //                         )

// //                     } else if (error.code === 2) {

// //                         console.log(
// //                             "Location unavailable"
// //                         )

// //                     } else if (error.code === 3) {

// //                         console.log(
// //                             "Location request timeout"
// //                         )
// //                     }

// //                 },


// //                 {
// //                     enableHighAccuracy: true,
// //                     timeout: 10000,
// //                     maximumAge: 0
// //                 }

// //             )
// //         }


// //         getLocation()


// //     }, [userData?._id])


// //     return null
// // }


// // export default useGetCity

// import React, { useEffect } from "react"
// import { useDispatch } from "react-redux"

// import {
//     setCurrentCity,
//     setCurrentState,
//     setCurrentAddress
// } from "../redux/userSlice"

// import {
//     setAddress
// } from "../redux/mapSlice"

// function useGetCity() {

//     const dispatch = useDispatch()

//     useEffect(() => {

//         const city = "Amravati"
//         const state = "Maharashtra"
//         const address = "Amravati, Maharashtra, India"

//         dispatch(setCurrentCity(city))
//         dispatch(setCurrentState(state))
//         dispatch(setCurrentAddress(address))
//         dispatch(setAddress(address))

//         console.log("CITY:", city)
//         console.log("STATE:", state)
//         console.log("ADDRESS:", address)

//     }, [])

//     return null
// }

// export default useGetCity
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import {
    setCurrentCity,
    setCurrentState,
    setCurrentAddress
} from "../redux/userSlice"

import {
    setAddress,
    setLocation
} from "../redux/mapSlice"

function useGetCity() {

    const dispatch = useDispatch()

    useEffect(() => {

        const city = "Amravati"
        const state = "Maharashtra"
        const address = "Amravati, Maharashtra, India"

        const latitude = 20.9374
        const longitude = 77.7796

        dispatch(setCurrentCity(city))
        dispatch(setCurrentState(state))
        dispatch(setCurrentAddress(address))

        dispatch(setAddress(address))

        dispatch(
            setLocation({
                lat: latitude,
                lon: longitude
            })
        )

        console.log("CITY:", city)
        console.log("STATE:", state)
        console.log("ADDRESS:", address)
        console.log("LOCATION:", {
            lat: latitude,
            lon: longitude
        })

    }, [])

    return null
}

export default useGetCity