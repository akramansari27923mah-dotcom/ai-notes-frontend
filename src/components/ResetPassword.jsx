import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { updatePassword } from "../api/api";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const handelUpdatePassword = async () => {
    if (password.length < 6) {
      setError("Password Min 6 characters");
      return
    }
    setError("");
    setLoader(true);
    try {
      const res = await updatePassword(password);
      console.log(res);
      if (res.success) {
        window.location.href = "/login";
      }
    } catch (err) {
      console.log("Api failed", err?.message);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="backdrop-blur-md bg-white/90 p-6 rounded-2xl shadow-2xl w-full max-w-[400px] space-y-5">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">Change Password</h1>
          <p className="text-sm text-gray-500">Enter your new password below</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">New Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="p-3 rounded-lg outline-none border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full transition"
          />
          {error && <span className="text-xs text-red-500">{error}</span>}
          <div className="absolute top-[135px] right-10">
            {showPassword ? (
              <EyeClosed
                className="cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Eye
                className="cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>

        <button
          disabled={!password.trim()}
          onClick={handelUpdatePassword}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:scale-[1.02] hover:shadow-lg transition-all duration-200 disabled:cursor-not-allowed active:scale-75"
        >
          {loader ? "changing..." : "Change Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
