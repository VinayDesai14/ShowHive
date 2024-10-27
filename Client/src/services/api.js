const BASE_URL=process.env.REACT_APP_BASE_URL;


export const endpoints = {
  SENDOTP_API: BASE_URL + "/sendotp",
  SIGNUP_API: BASE_URL + "/signup",
}

export const eventEndpoints = {
    GETALLEVENTS_API: BASE_URL + "/getEvents",
    CREATEEVENT_API: BASE_URL + "/events",
    GETALLMUSIC_API:BASE_URL+"/getMusic",
    GETALLPLAYS_API:BASE_URL+"/getPlays",
    GETALLSPORTS_API:BASE_URL+"/getSports",
    GETEVENTDETAILS_API:BASE_URL+"/getEventDetails"
}

export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile"
}





