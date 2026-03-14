"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, UserPlus, BookOpen, Calendar, Mail, 
  Trash2, Edit, LogOut, Loader2, UserCog, User
} from "lucide-react";

interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
  year: number;
}

const COURSES = ["BBA", "BCA", "BTech", "MCA", "MBA", "MTech"];

export default function Dashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState({
    id: null as number | null,
    name: "",
    email: "",
    course: "",
    year: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students", {
        withCredentials: true
      });
      setStudents(res.data);
      setLoading(false);
    } catch (error: any) {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        router.push("/login");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (form.id) {
        await axios.put(
          `http://localhost:5000/api/students/${form.id}`,
          form,
          { withCredentials: true }
        );
      } else {
        await axios.post(
          "http://localhost:5000/api/students",
          form,
          { withCredentials: true }
        );
      }

      fetchStudents();
      setForm({ id: null, name: "", email: "", course: "", year: "" });
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.message?.join ? err.response.data.message.join(", ") : err.response.data.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`, {
        withCredentials: true
      });
      fetchStudents();
    } catch (error) {
      console.error("Delete error", error);
    }
  };

  const handleEdit = (student: Student) => {
    setForm({
      id: student.id,
      name: student.name,
      email: student.email,
      course: student.course,
      year: student.year.toString()
    });
    setError(null);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
      router.push("/login");
    } catch (err) {
      router.push("/login");
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container items-center justify-center text-[#0ea5e9]">
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
           className="w-12 h-12 border-4 border-[#0ea5e9] border-t-transparent rounded-full mb-4"
         />
        <p className="text-zinc-400 font-medium">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container font-sans">
      {/* Top Navbar */}
      <motion.header 
         initial={{ y: -50, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.4 }}
         className="bg-[#18181b]/80 backdrop-blur-md border-b border-[#27272a] z-10 sticky top-0"
       >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0ea5e9]/10 rounded-lg flex items-center justify-center border border-[#0ea5e9]/20 shadow-[0_0_10px_rgba(14,165,233,0.15)]">
                <Users className="w-5 h-5 text-[#0ea5e9]" />
              </div>
              <h1 className="text-xl font-bold text-white tracking-tight">Student Manager</h1>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout} 
              className="btn-danger flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Log Out</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content: Flex Box taking remaining space */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col z-10">
        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          
          {/* Left Panel: Form */}
          <motion.div 
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.4 }}
             className="w-full lg:w-1/3 bg-[#18181b]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#27272a] shadow-xl flex flex-col"
           >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#27272a]">
              {form.id ? <UserCog className="w-5 h-5 text-[#0ea5e9]" /> : <UserPlus className="w-5 h-5 text-[#0ea5e9]" />}
              <h2 className="text-lg font-semibold text-white">
                {form.id ? "Edit Student" : "Add New Student"}
              </h2>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: "auto" }}
                   exit={{ opacity: 0, height: 0 }}
                   className="mb-4 p-3 bg-red-950/30 text-red-500 border border-red-900/50 rounded-lg text-sm"
                 >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 pl-1 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-zinc-500" />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    className="input-field !pl-10"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 pl-1 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-zinc-500" />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    className="input-field !pl-10"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 pl-1 uppercase tracking-wider">Course</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen className="h-4 w-4 text-zinc-500" />
                  </div>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    className="input-field !pl-10"
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    required
                  >
                    <option value="" disabled className="bg-[#18181b] text-zinc-500">Select a Course</option>
                    {COURSES.map(course => <option key={course} value={course} className="bg-[#18181b]">{course}</option>)}
                  </motion.select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 pl-1 uppercase tracking-wider">Admission Year</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-4 w-4 text-zinc-500" />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="number"
                    className="input-field !pl-10"
                    placeholder="2024"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    required
                    min="2000"
                    max="2100"
                  />
                </div>
              </div>
              
              <div className="pt-4 flex gap-3 mt-auto">
                <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   type="submit" 
                   className="btn-primary flex-1 py-2.5"
                 >
                  {form.id ? "Update Info" : "Enroll Student"}
                </motion.button>
                {form.id && (
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button" 
                    onClick={() => { setForm({ id: null, name: "", email: "", course: "", year: "" }); setError(null); }}
                    className="btn-secondary flex-1 py-2.5"
                  >
                    Cancel
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right Panel: Data List */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.4 }}
             className="w-full lg:w-2/3 bg-[#18181b]/80 backdrop-blur-sm rounded-2xl border border-[#27272a] shadow-xl flex flex-col overflow-hidden h-full lg:min-h-[600px]"
           >
            <div className="px-6 py-5 border-b border-[#27272a] bg-[#18181b]/90">
              <h3 className="text-lg leading-6 font-semibold text-white">Student Directory</h3>
              <p className="mt-1 text-sm text-zinc-400">Manage {students.length} registered {students.length === 1 ? 'student' : 'students'} across all courses.</p>
            </div>
            
            <div className="divide-y divide-[#27272a] overflow-y-auto flex-1 p-2 scrollbar-thin scrollbar-thumb-[#27272a] scrollbar-track-transparent">
              {students.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center p-10 text-center text-zinc-500">
                  <div className="w-16 h-16 mb-4 bg-[#27272a]/50 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p>No students found. Add one using the form.</p>
                </div>
              ) : (
                <ul role="list" className="space-y-2">
                  <AnimatePresence>
                    {students.map((student) => (
                      <motion.li 
                        key={student.id} 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-xl bg-[#09090b]/50 border border-transparent hover:border-[#27272a] hover:bg-[#18181b] transition-all duration-200 group"
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex flex-col min-w-0">
                            <p className="text-base font-medium text-zinc-100 truncate group-hover:text-[#0ea5e9] transition-colors">
                              {student.name}
                            </p>
                            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
                              <span className="flex items-center gap-1.5 py-0.5 px-2 bg-[#0ea5e9]/10 text-[#38bdf8] rounded-md border border-[#0ea5e9]/20 font-medium">
                                <BookOpen className="w-3.5 h-3.5" />
                                {student.course}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                                Class of {student.year}
                              </span>
                              <span className="flex items-center gap-1.5 hidden md:flex">
                                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                                {student.email}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pt-2 sm:pt-0 w-full sm:w-auto justify-end border-t border-[#27272a] sm:border-t-0 mt-2 sm:mt-0">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleEdit(student)}
                              className="bg-[#27272a]/50 border border-[#3f3f46] text-zinc-300 px-3 py-1.5 text-sm rounded-lg hover:bg-[#3f3f46] hover:text-white transition-colors flex items-center gap-1.5"
                            >
                              <Edit className="w-4 h-4" />
                              <span>Edit</span>
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleDelete(student.id)}
                              className="bg-red-950/30 text-red-500 border border-red-900/50 px-3 py-1.5 text-sm rounded-lg hover:bg-red-900/40 hover:text-red-400 transition-colors flex items-center gap-1.5"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span className="sr-only sm:not-sr-only">Delete</span>
                            </motion.button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}