import { sendOtp } from "../services/auth"

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (e) => {
    e.preventDefault()
    const trimmedMobile = mobile.trim()
    if (
      !trimmedMobile ||
      trimmedMobile.length !== 11 ||
      !/^\d{11}$/.test(trimmedMobile)
    )
      return
    const { response, error } = await sendOtp({ mobile: trimmedMobile })
    console.log(response, error)
    if (response) return setStep(2)
    if (error) console.log(error.response.data.message)
  }
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استغاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="number"
        onChange={(e) => setMobile(e.target.value)}
        value={mobile}
        id="input"
        placeholder="شماره موبایل"
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  )
}

export default SendOtpForm
