"use client";

import { useState, Suspense } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { LockKeyhole, AlertCircle, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const token = searchParams.get("token");
  const username = searchParams.get("username");

  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !username) {
      setStatus("error");
      setMessage("Invalid reset link. Missing token or username.");
      return;
    }

    setStatus("loading");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset-password", { 
        username,
        token,
        newPassword
      });
      setStatus("success");
      setMessage(res.data.message);
      
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err: any) {
      setStatus("error");
      setMessage(err.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <>
      {status === "success" && (
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="mb-8 p-5 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-xl text-center shadow-[0_0_20px_rgba(14,165,233,0.1)] flex flex-col items-center gap-2"
         >
          <CheckCircle2 className="w-8 h-8 text-[#0ea5e9]" />
          <p className="font-medium text-[#f8fafc]">{message}</p>
          <p className="text-sm text-[#38bdf8]">Redirecting to login...</p>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
           initial={{ opacity: 0, x: -10 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-5 p-3 bg-red-950/30 text-red-500 border border-red-900/50 rounded-lg text-sm flex items-center gap-2"
         >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}

      {status !== "success" && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <label className="block text-sm font-medium text-zinc-300 mb-1.5 pl-1">New Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <LockKeyhole className="h-4 w-4 text-zinc-500" />
              </div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="password"
                placeholder="Min 8 chars, 1 uppercase, 1 symbol"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input-field !pl-10"
                required
              />
            </div>
          </motion.div>
          <motion.button 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.3 }}
             type="submit" 
             className="btn-primary mt-6 mb-2 flex justify-center items-center gap-2" 
             disabled={status === "loading" || !token || !username}
           >
             {status === "loading" ? (
               <>
                 <Loader2 className="w-5 h-5 animate-spin" />
                 <span>Resetting...</span>
               </>
             ) : (
               <>
                 <span>Reset Password</span>
                 <ArrowRight className="w-4 h-4" />
               </>
             )}
           </motion.button>
        </form>
      )}
    </>
  );
}

export default function ResetPassword() {
  return (
    <div className="auth-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="auth-card"
      >
        <div className="text-center mb-8">
          <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
             className="w-16 h-16 bg-[#0ea5e9]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#0ea5e9]/20 shadow-[0_0_15px_rgba(14,165,233,0.15)]"
           >
             <LockKeyhole className="w-8 h-8 text-[#0ea5e9]" />
           </motion.div>
          <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, duration: 0.4 }}
             className="text-3xl font-bold text-white mb-2 tracking-tight"
           >
             Reset Password
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.4 }}
             className="text-zinc-400"
           >
             Enter your new strong password.
           </motion.p>
        </div>

        <Suspense fallback={<div className="text-center py-8"><Loader2 className="w-8 h-8 animate-spin text-[#0ea5e9] mx-auto" /></div>}>
          <ResetPasswordForm />
        </Suspense>

        <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4, duration: 0.4 }}
           className="text-center mt-8 text-sm text-zinc-400"
         >
          <Link href="/login" className="text-[#0ea5e9] font-semibold hover:text-[#38bdf8] transition-colors">
            Back to Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
