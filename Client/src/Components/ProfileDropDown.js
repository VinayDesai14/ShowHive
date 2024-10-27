import { useEffect, useRef, useState } from "react"
import { AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import useOnClickOutside from "../hooks/useOnClickOutside"
import { setToken } from "../Slices/authSlice"
import { setUser } from "../Slices/profileSlice"
// import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown() {

  useEffect(()=>{
    console.log('user image ',user?.image)
 },[])
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const [isCaretDown,setIsCaretDown]=useState(true);
  useOnClickOutside(ref, () => { setOpen(false) 
    setIsCaretDown(true)})

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


  return (
    <button className="relative arrow-button" onClick={() =>{ setOpen(true) 
      setIsCaretDown(false)}}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        {isCaretDown?(<AiOutlineCaretDown className="arrow text-sm text-richblack-100" />):
                <AiOutlineCaretUp className="arrow text-sm text-richblack-100" />}
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >
          <Link to="/my-profile" onClick={() => { setOpen(false) 
                                                            setIsCaretDown(true)}}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Profile
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate))
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