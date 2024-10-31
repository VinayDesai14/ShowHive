import { useEffect, useRef, useState } from "react"
import { AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import useOnClickOutside from "../hooks/useOnClickOutside"
import { setToken } from "../Slices/authSlice"
import { setUser } from "../Slices/profileSlice"
import { MdEventAvailable } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
// import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown() {

  
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const [isCaretDown,setIsCaretDown]=useState(true);
  useOnClickOutside(ref, () => { setOpen(false) 
    setIsCaretDown(true)})
    useEffect(()=>{
      console.log('user image ',user?.image)
   },[])
  if (!user) return null
    
    const logout=(navigate)=> {
      return (dispatch) => {
        dispatch(setToken(null))
        dispatch(setUser(null))
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("tokenExpirationTime")
        // toast.success("Logged Out")
        navigate("/")
      }
    }

    const handleOnClick =()=>{
      if(open)
      setOpen(false);
    else
    setOpen(true);
    }

  return (
    <button className="relative arrow-button" onClick={handleOnClick}>
      <div className="flex items-center gap-x-1" >
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[35px] rounded-full object-cover"
        />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute w-[200px] top-[118%]  right-[50%] z-[1000] divide-y-[1px] divide-richblack-25 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-white"
          ref={ref}
        >
          <div onClick={() => { setOpen(false) 
                                setIsCaretDown(true)
                                 navigate('/my-profile')}}>
            <div className="flex w-full items-center gap-x-3 py-[10px] px-[18px] text-sm text-richblack-800 hover:bg-richblack-25 hover:text-richblack-900 ">
              <CgProfile  className="text-lg " />
              Profile
            </div>
          </div>

          <div
            // onClick={() => {
            //   dispatch(logout(navigate))
            //   setOpen(false)
            //   setIsCaretDown(true)
            // }}
           className="flex w-full items-center gap-x-3 py-[10px] px-[18px] text-sm text-richblack-800 hover:bg-richblack-25 hover:text-richblack-900 "
          >
            <IoTicketSharp  className="text-lg" />
            CreateEvent
          </div>
          <div
            // onClick={() => {
            //   dispatch(logout(navigate))
            //   setOpen(false)
            //   setIsCaretDown(true)
            // }}
            className="flex w-full items-center gap-x-3 py-[10px] px-[18px] text-sm text-richblack-800 hover:bg-richblack-25 hover:text-richblack-900 "
          >
            <MdEventAvailable className="text-lg" />
            MyEvents
          </div>

          <div
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
              setIsCaretDown(true)
            }}
            className="flex w-full items-center gap-x-3 py-[10px] px-[18px] text-sm text-richblack-800 hover:bg-richblack-25 hover:text-richblack-900 "
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  )
}

{/* <button className="pBtn" onClick={() =>{ setOpen(true) 
      setIsCaretDown(false)}}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="imgC"
        />
        {isCaretDown?(<AiOutlineCaretDown className="arrowD" />):
                <AiOutlineCaretUp className="arrowU" />}
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="profileIcon"
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => { setOpen(false) 
                                                            setIsCaretDown(true)}}>
            <div className="profile">
              <VscDashboard className="text-lg" />
              Profile
            </div>
          </Link>
          <div
            onClick={() => {
              // dispatch(logout(navigate))
              setOpen(false)
              setIsCaretDown(true)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button> */}