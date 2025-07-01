import { useNavigate } from "react-router-dom"
import { checkOtp } from "../services/auth"
import { setCookie } from "../utils/cookie"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "../services/user"

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate()
  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  })
  const submitHandler = async (e) => {
    e.preventDefault()
    const { response, error } = await checkOtp({ code, mobile })

    if (code.length !== 5) return
    console.log(response.data)
    if (response) {
      setCookie(response.data)
      refetch
      navigate("/")
    }
    if (error) console.log(error.response.data.message)
  }
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده به این شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        value={code}
        id="input"
        placeholder="کد تایید"
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغیبر شماره موبایل</button>
    </form>
  )
}

export default CheckOtpForm
