"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, AlertCircle, Loader2, User } from "lucide-react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", 
        { username, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      alert("User registered successfully. Please login.");
      router.push("/login");
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(
          Array.isArray(err.response.data.message) 
            ? err.response.data.message.join(", ") 
            : err.response.data.message
        );
      } else {
        setError("Registration failed");
      }
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
            <UserPlus className="w-8 h-8 text-[#0ea5e9]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl font-bold text-white mb-2 tracking-tight"
          >
            Create Account
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-zinc-400"
          >
            Sign up to manage students effectively
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

        <form onSubmit={handleRegister} className="space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <label className="block text-sm font-medium text-zinc-300 mb-1.5 pl-1">Username (max 50 chars)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-zinc-500" />
              </div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="e.g. john_doe"
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
            <label className="block text-sm font-medium text-zinc-300 mb-1.5 pl-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-zinc-500" />
              </div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field !pl-10"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <label className="block text-sm font-medium text-zinc-300 mb-1.5 pl-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-zinc-500" />
              </div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="password"
                placeholder="Min 8 chars, 1 uppercase, 1 symbol"
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
            transition={{ delay: 0.7, duration: 0.3 }}
            type="submit" 
            disabled={isLoading}
            className="btn-primary mt-6 flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Register</span>
                <UserPlus className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-center mt-8 text-sm text-zinc-400"
        >
          Already a user?{" "}
          <Link href="/login" className="text-[#0ea5e9] font-semibold hover:text-[#38bdf8] transition-colors">
            Login here
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}