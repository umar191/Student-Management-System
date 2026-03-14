"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password },
        { withCredentials: true }
      );

      router.push("/students");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

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
            <LogIn className="w-8 h-8 text-[#0ea5e9]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl font-bold text-white mb-2 tracking-tight"
          >
            Welcome Back
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-zinc-400"
          >
            Sign in to your account
          </motion.p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-5 p-3 bg-red-950/30 text-red-500 border border-red-900/50 rounded-lg text-sm flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        <form onSubmit={login} className="space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <label className="block text-sm font-medium text-zinc-300 mb-1.5 pl-1">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-zinc-500" />
              </div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field !pl-10"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <div className="flex justify-between mb-1.5 pl-1 items-center">
              <label className="block text-sm font-medium text-zinc-300">Password</label>
              <Link href="/forgot-password" className="text-xs text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors duration-200">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-zinc-500" />
              </div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field !pl-10"
                required
              />
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            type="submit" 
            disabled={isLoading}
            className="btn-primary mt-6 flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Sign In</span>
                <LogIn className="w-4 h-4 ml-1" />
              </>
            )}
          </motion.button>
        </form>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="text-center mt-8 text-sm text-zinc-400"
        >
          Don't have an account?{" "}
          <Link href="/" className="text-[#0ea5e9] font-semibold hover:text-[#38bdf8] transition-colors">
            Register here
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}