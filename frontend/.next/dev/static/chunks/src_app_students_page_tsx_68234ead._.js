(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/students/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-client] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const COURSES = [
    "BBA",
    "BCA",
    "BTech",
    "MCA",
    "MBA",
    "MTech"
];
function Dashboard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(114);
    if ($[0] !== "ea37ab5c5911ddca763ff84351e1b6b2bccbb3159a6056ece105e35095750582") {
        for(let $i = 0; $i < 114; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea37ab5c5911ddca763ff84351e1b6b2bccbb3159a6056ece105e35095750582";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            id: null,
            name: "",
            email: "",
            course: "",
            year: ""
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t2;
    if ($[3] !== router) {
        t2 = ({
            "Dashboard[fetchStudents]": async ()=>{
                ;
                try {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:5000/api/students", {
                        withCredentials: true
                    });
                    setStudents(res.data);
                    setLoading(false);
                } catch (t3) {
                    const error_0 = t3;
                    if (error_0.response && (error_0.response.status === 401 || error_0.response.status === 403)) {
                        router.push("/login");
                    }
                    setLoading(false);
                }
            }
        })["Dashboard[fetchStudents]"];
        $[3] = router;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const fetchStudents = t2;
    let t3;
    if ($[5] !== fetchStudents) {
        t3 = ({
            "Dashboard[useEffect()]": ()=>{
                fetchStudents();
            }
        })["Dashboard[useEffect()]"];
        $[5] = fetchStudents;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== fetchStudents || $[9] !== form) {
        t5 = ({
            "Dashboard[handleSubmit]": async (e)=>{
                e.preventDefault();
                setError(null);
                ;
                try {
                    if (form.id) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`http://localhost:5000/api/students/${form.id}`, form, {
                            withCredentials: true
                        });
                    } else {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/students", form, {
                            withCredentials: true
                        });
                    }
                    fetchStudents();
                    setForm({
                        id: null,
                        name: "",
                        email: "",
                        course: "",
                        year: ""
                    });
                } catch (t6) {
                    const err = t6;
                    if (err.response) {
                        setError(err.response.data.message?.join ? err.response.data.message.join(", ") : err.response.data.message);
                    } else {
                        setError("Something went wrong");
                    }
                }
            }
        })["Dashboard[handleSubmit]"];
        $[8] = fetchStudents;
        $[9] = form;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handleSubmit = t5;
    let t6;
    if ($[11] !== fetchStudents) {
        t6 = ({
            "Dashboard[handleDelete]": async (id)=>{
                if (!confirm("Are you sure you want to delete this student?")) {
                    return;
                }
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`http://localhost:5000/api/students/${id}`, {
                        withCredentials: true
                    });
                    fetchStudents();
                } catch (t7) {
                    const error_1 = t7;
                    console.error("Delete error", error_1);
                }
            }
        })["Dashboard[handleDelete]"];
        $[11] = fetchStudents;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handleDelete = t6;
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Dashboard[handleEdit]": (student)=>{
                setForm({
                    id: student.id,
                    name: student.name,
                    email: student.email,
                    course: student.course,
                    year: student.year.toString()
                });
                setError(null);
            }
        })["Dashboard[handleEdit]"];
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const handleEdit = t7;
    let t8;
    if ($[14] !== router) {
        t8 = ({
            "Dashboard[handleLogout]": async ()=>{
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/auth/logout", {}, {
                        withCredentials: true
                    });
                    router.push("/login");
                } catch (t9) {
                    router.push("/login");
                }
            }
        })["Dashboard[handleLogout]"];
        $[14] = router;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const handleLogout = t8;
    if (loading) {
        let t9;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-container items-center justify-center text-[#0ea5e9]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "w-12 h-12 border-4 border-[#0ea5e9] border-t-transparent rounded-full mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/students/page.tsx",
                        lineNumber: 206,
                        columnNumber: 92
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-400 font-medium",
                        children: "Loading Dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/students/page.tsx",
                        lineNumber: 212,
                        columnNumber: 101
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 206,
                columnNumber: 12
            }, this);
            $[16] = t9;
        } else {
            t9 = $[16];
        }
        return t9;
    }
    let t10;
    let t11;
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            y: -50,
            opacity: 0
        };
        t10 = {
            y: 0,
            opacity: 1
        };
        t11 = {
            duration: 0.4
        };
        $[17] = t10;
        $[18] = t11;
        $[19] = t9;
    } else {
        t10 = $[17];
        t11 = $[18];
        t9 = $[19];
    }
    let t12;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 bg-[#0ea5e9]/10 rounded-lg flex items-center justify-center border border-[#0ea5e9]/20 shadow-[0_0_10px_rgba(14,165,233,0.15)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        className: "w-5 h-5 text-[#0ea5e9]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/students/page.tsx",
                        lineNumber: 244,
                        columnNumber: 204
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 244,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-white tracking-tight",
                    children: "Student Manager"
                }, void 0, false, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 244,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            scale: 1.05
        };
        t14 = {
            scale: 0.95
        };
        $[21] = t13;
        $[22] = t14;
    } else {
        t13 = $[21];
        t14 = $[22];
    }
    let t15;
    let t16;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden sm:inline",
            children: "Log Out"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[23] = t15;
        $[24] = t16;
    } else {
        t15 = $[23];
        t16 = $[24];
    }
    let t17;
    if ($[25] !== handleLogout) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            initial: t9,
            animate: t10,
            transition: t11,
            className: "bg-[#18181b]/80 backdrop-blur-md border-b border-[#27272a] z-10 sticky top-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: t13,
                            whileTap: t14,
                            onClick: handleLogout,
                            className: "btn-danger flex items-center gap-2",
                            children: [
                                t15,
                                t16
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/students/page.tsx",
                            lineNumber: 277,
                            columnNumber: 276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 277,
                    columnNumber: 215
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 277,
                columnNumber: 159
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[25] = handleLogout;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    let t19;
    let t20;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            x: -20,
            opacity: 0
        };
        t19 = {
            x: 0,
            opacity: 1
        };
        t20 = {
            delay: 0.2,
            duration: 0.4
        };
        $[27] = t18;
        $[28] = t19;
        $[29] = t20;
    } else {
        t18 = $[27];
        t19 = $[28];
        t20 = $[29];
    }
    let t21;
    if ($[30] !== form.id) {
        t21 = form.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"], {
            className: "w-5 h-5 text-[#0ea5e9]"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 309,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
            className: "w-5 h-5 text-[#0ea5e9]"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 309,
            columnNumber: 70
        }, this);
        $[30] = form.id;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    const t22 = form.id ? "Edit Student" : "Add New Student";
    let t23;
    if ($[32] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-white",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[32] = t22;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] !== t21 || $[35] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-6 pb-4 border-b border-[#27272a]",
            children: [
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[34] = t21;
        $[35] = t23;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] !== error) {
        t25 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "mb-4 p-3 bg-red-950/30 text-red-500 border border-red-900/50 rounded-lg text-sm",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 335,
            columnNumber: 20
        }, this);
        $[37] = error;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    let t26;
    if ($[39] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[39] = t25;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs font-medium text-zinc-400 mb-1.5 pl-1 uppercase tracking-wider",
            children: "Full Name"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                className: "h-4 w-4 text-zinc-500"
            }, void 0, false, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 367,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[42] = t28;
    } else {
        t28 = $[42];
    }
    let t29;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            scale: 1.01
        };
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    let t30;
    if ($[44] !== form) {
        t30 = ({
            "Dashboard[<motion.input>.onChange]": (e_0)=>setForm({
                    ...form,
                    name: e_0.target.value
                })
        })["Dashboard[<motion.input>.onChange]"];
        $[44] = form;
        $[45] = t30;
    } else {
        t30 = $[45];
    }
    let t31;
    if ($[46] !== form.name || $[47] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                            whileFocus: t29,
                            type: "text",
                            className: "input-field !pl-10",
                            placeholder: "John Doe",
                            value: form.name,
                            onChange: t30,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/students/page.tsx",
                            lineNumber: 396,
                            columnNumber: 52
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 396,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[46] = form.name;
        $[47] = t30;
        $[48] = t31;
    } else {
        t31 = $[48];
    }
    let t32;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs font-medium text-zinc-400 mb-1.5 pl-1 uppercase tracking-wider",
            children: "Email Address"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[49] = t32;
    } else {
        t32 = $[49];
    }
    let t33;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                className: "h-4 w-4 text-zinc-500"
            }, void 0, false, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 412,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[50] = t33;
    } else {
        t33 = $[50];
    }
    let t34;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            scale: 1.01
        };
        $[51] = t34;
    } else {
        t34 = $[51];
    }
    let t35;
    if ($[52] !== form) {
        t35 = ({
            "Dashboard[<motion.input>.onChange]": (e_1)=>setForm({
                    ...form,
                    email: e_1.target.value
                })
        })["Dashboard[<motion.input>.onChange]"];
        $[52] = form;
        $[53] = t35;
    } else {
        t35 = $[53];
    }
    let t36;
    if ($[54] !== form.email || $[55] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t33,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                            whileFocus: t34,
                            type: "email",
                            className: "input-field !pl-10",
                            placeholder: "john@example.com",
                            value: form.email,
                            onChange: t35,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/students/page.tsx",
                            lineNumber: 441,
                            columnNumber: 52
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 441,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[54] = form.email;
        $[55] = t35;
        $[56] = t36;
    } else {
        t36 = $[56];
    }
    let t37;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs font-medium text-zinc-400 mb-1.5 pl-1 uppercase tracking-wider",
            children: "Course"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    let t38;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                className: "h-4 w-4 text-zinc-500"
            }, void 0, false, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 457,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[58] = t38;
    } else {
        t38 = $[58];
    }
    let t39;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = {
            scale: 1.01
        };
        $[59] = t39;
    } else {
        t39 = $[59];
    }
    const t40 = form.course;
    let t41;
    if ($[60] !== form) {
        t41 = ({
            "Dashboard[<motion.select>.onChange]": (e_2)=>setForm({
                    ...form,
                    course: e_2.target.value
                })
        })["Dashboard[<motion.select>.onChange]"];
        $[60] = form;
        $[61] = t41;
    } else {
        t41 = $[61];
    }
    let t42;
    let t43;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            disabled: true,
            className: "bg-[#18181b] text-zinc-500",
            children: "Select a Course"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        t43 = COURSES.map(_DashboardCOURSESMap);
        $[62] = t42;
        $[63] = t43;
    } else {
        t42 = $[62];
        t43 = $[63];
    }
    let t44;
    if ($[64] !== form.course || $[65] !== t41) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t38,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].select, {
                            whileFocus: t39,
                            className: "input-field !pl-10",
                            value: t40,
                            onChange: t41,
                            required: true,
                            children: [
                                t42,
                                t43
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/students/page.tsx",
                            lineNumber: 498,
                            columnNumber: 52
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 498,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[64] = form.course;
        $[65] = t41;
        $[66] = t44;
    } else {
        t44 = $[66];
    }
    let t45;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs font-medium text-zinc-400 mb-1.5 pl-1 uppercase tracking-wider",
            children: "Admission Year"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[67] = t45;
    } else {
        t45 = $[67];
    }
    let t46;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                className: "h-4 w-4 text-zinc-500"
            }, void 0, false, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 514,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[68] = t46;
    } else {
        t46 = $[68];
    }
    let t47;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = {
            scale: 1.01
        };
        $[69] = t47;
    } else {
        t47 = $[69];
    }
    let t48;
    if ($[70] !== form) {
        t48 = ({
            "Dashboard[<motion.input>.onChange]": (e_3)=>setForm({
                    ...form,
                    year: e_3.target.value
                })
        })["Dashboard[<motion.input>.onChange]"];
        $[70] = form;
        $[71] = t48;
    } else {
        t48 = $[71];
    }
    let t49;
    if ($[72] !== form.year || $[73] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t46,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                            whileFocus: t47,
                            type: "number",
                            className: "input-field !pl-10",
                            placeholder: "2024",
                            value: form.year,
                            onChange: t48,
                            required: true,
                            min: "2000",
                            max: "2100"
                        }, void 0, false, {
                            fileName: "[project]/src/app/students/page.tsx",
                            lineNumber: 543,
                            columnNumber: 52
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 543,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[72] = form.year;
        $[73] = t48;
        $[74] = t49;
    } else {
        t49 = $[74];
    }
    let t50;
    let t51;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = {
            scale: 1.02
        };
        t51 = {
            scale: 0.98
        };
        $[75] = t50;
        $[76] = t51;
    } else {
        t50 = $[75];
        t51 = $[76];
    }
    const t52 = form.id ? "Update Info" : "Enroll Student";
    let t53;
    if ($[77] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t50,
            whileTap: t51,
            type: "submit",
            className: "btn-primary flex-1 py-2.5",
            children: t52
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[77] = t52;
        $[78] = t53;
    } else {
        t53 = $[78];
    }
    let t54;
    if ($[79] !== form.id) {
        t54 = form.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: {
                scale: 1.02
            },
            whileTap: {
                scale: 0.98
            },
            type: "button",
            onClick: {
                "Dashboard[<motion.button>.onClick]": ()=>{
                    setForm({
                        id: null,
                        name: "",
                        email: "",
                        course: "",
                        year: ""
                    });
                    setError(null);
                }
            }["Dashboard[<motion.button>.onClick]"],
            className: "btn-secondary flex-1 py-2.5",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 576,
            columnNumber: 22
        }, this);
        $[79] = form.id;
        $[80] = t54;
    } else {
        t54 = $[80];
    }
    let t55;
    if ($[81] !== t53 || $[82] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4 flex gap-3 mt-auto",
            children: [
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[81] = t53;
        $[82] = t54;
        $[83] = t55;
    } else {
        t55 = $[83];
    }
    let t56;
    if ($[84] !== handleSubmit || $[85] !== t31 || $[86] !== t36 || $[87] !== t44 || $[88] !== t49 || $[89] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4 flex-1",
            children: [
                t31,
                t36,
                t44,
                t49,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[84] = handleSubmit;
        $[85] = t31;
        $[86] = t36;
        $[87] = t44;
        $[88] = t49;
        $[89] = t55;
        $[90] = t56;
    } else {
        t56 = $[90];
    }
    let t57;
    if ($[91] !== t24 || $[92] !== t26 || $[93] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t18,
            animate: t19,
            transition: t20,
            className: "w-full lg:w-1/3 bg-[#18181b]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#27272a] shadow-xl flex flex-col",
            children: [
                t24,
                t26,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 621,
            columnNumber: 11
        }, this);
        $[91] = t24;
        $[92] = t26;
        $[93] = t56;
        $[94] = t57;
    } else {
        t57 = $[94];
    }
    let t58;
    let t59;
    let t60;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = {
            y: 20,
            opacity: 0
        };
        t59 = {
            y: 0,
            opacity: 1
        };
        t60 = {
            delay: 0.3,
            duration: 0.4
        };
        $[95] = t58;
        $[96] = t59;
        $[97] = t60;
    } else {
        t58 = $[95];
        t59 = $[96];
        t60 = $[97];
    }
    let t61;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg leading-6 font-semibold text-white",
            children: "Student Directory"
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 655,
            columnNumber: 11
        }, this);
        $[98] = t61;
    } else {
        t61 = $[98];
    }
    const t62 = students.length === 1 ? "student" : "students";
    let t63;
    if ($[99] !== students.length || $[100] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-5 border-b border-[#27272a] bg-[#18181b]/90",
            children: [
                t61,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-zinc-400",
                    children: [
                        "Manage ",
                        students.length,
                        " registered ",
                        t62,
                        " across all courses."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 663,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 663,
            columnNumber: 11
        }, this);
        $[99] = students.length;
        $[100] = t62;
        $[101] = t63;
    } else {
        t63 = $[101];
    }
    let t64;
    if ($[102] !== handleDelete || $[103] !== students) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divide-y divide-[#27272a] overflow-y-auto flex-1 p-2 scrollbar-thin scrollbar-thumb-[#27272a] scrollbar-track-transparent",
            children: students.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full flex flex-col items-center justify-center p-10 text-center text-zinc-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mb-4 bg-[#27272a]/50 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            className: "w-8 h-8 text-zinc-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/students/page.tsx",
                            lineNumber: 672,
                            columnNumber: 366
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/students/page.tsx",
                        lineNumber: 672,
                        columnNumber: 272
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No students found. Add one using the form."
                    }, void 0, false, {
                        fileName: "[project]/src/app/students/page.tsx",
                        lineNumber: 672,
                        columnNumber: 415
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 672,
                columnNumber: 175
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                role: "list",
                className: "space-y-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: students.map({
                        "Dashboard[students.map()]": (student_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.98
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.95,
                                    height: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "p-4 rounded-xl bg-[#09090b]/50 border border-transparent hover:border-[#27272a] hover:bg-[#18181b] transition-all duration-200 group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-medium text-zinc-100 truncate group-hover:text-[#0ea5e9] transition-colors",
                                                    children: student_0.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/students/page.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 293
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5 py-0.5 px-2 bg-[#0ea5e9]/10 text-[#38bdf8] rounded-md border border-[#0ea5e9]/20 font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/students/page.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 645
                                                                }, this),
                                                                student_0.course
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/students/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 508
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-3.5 h-3.5 text-zinc-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/students/page.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 750
                                                                }, this),
                                                                "Class of ",
                                                                student_0.year
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/students/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 706
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5 hidden md:flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    className: "w-3.5 h-3.5 text-zinc-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/students/page.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 891
                                                                }, this),
                                                                student_0.email
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/students/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 832
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/students/page.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 418
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/students/page.tsx",
                                            lineNumber: 685,
                                            columnNumber: 254
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pt-2 sm:pt-0 w-full sm:w-auto justify-end border-t border-[#27272a] sm:border-t-0 mt-2 sm:mt-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: {
                                                        "Dashboard[students.map() > <motion.button>.onClick]": ()=>handleEdit(student_0)
                                                    }["Dashboard[students.map() > <motion.button>.onClick]"],
                                                    className: "bg-[#27272a]/50 border border-[#3f3f46] text-zinc-300 px-3 py-1.5 text-sm rounded-lg hover:bg-[#3f3f46] hover:text-white transition-colors flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/students/page.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 254
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/students/page.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 282
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/students/page.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 1109
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: {
                                                        "Dashboard[students.map() > <motion.button>.onClick]": ()=>handleDelete(student_0.id)
                                                    }["Dashboard[students.map() > <motion.button>.onClick]"],
                                                    className: "bg-red-950/30 text-red-500 border border-red-900/50 px-3 py-1.5 text-sm rounded-lg hover:bg-red-900/40 hover:text-red-400 transition-colors flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/students/page.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 255
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sr-only sm:not-sr-only",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/students/page.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 285
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/students/page.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 315
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/students/page.tsx",
                                            lineNumber: 685,
                                            columnNumber: 973
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/students/page.tsx",
                                    lineNumber: 685,
                                    columnNumber: 161
                                }, this)
                            }, student_0.id, false, {
                                fileName: "[project]/src/app/students/page.tsx",
                                lineNumber: 673,
                                columnNumber: 55
                            }, this)
                    }["Dashboard[students.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/students/page.tsx",
                    lineNumber: 672,
                    columnNumber: 511
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 672,
                columnNumber: 473
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[102] = handleDelete;
        $[103] = students;
        $[104] = t64;
    } else {
        t64 = $[104];
    }
    let t65;
    if ($[105] !== t63 || $[106] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t58,
            animate: t59,
            transition: t60,
            className: "w-full lg:w-2/3 bg-[#18181b]/80 backdrop-blur-sm rounded-2xl border border-[#27272a] shadow-xl flex flex-col overflow-hidden h-full lg:min-h-[600px]",
            children: [
                t63,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 707,
            columnNumber: 11
        }, this);
        $[105] = t63;
        $[106] = t64;
        $[107] = t65;
    } else {
        t65 = $[107];
    }
    let t66;
    if ($[108] !== t57 || $[109] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-8 flex-1",
                children: [
                    t57,
                    t65
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 716,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 716,
            columnNumber: 11
        }, this);
        $[108] = t57;
        $[109] = t65;
        $[110] = t66;
    } else {
        t66 = $[110];
    }
    let t67;
    if ($[111] !== t17 || $[112] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dashboard-container font-sans",
            children: [
                t17,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/students/page.tsx",
            lineNumber: 725,
            columnNumber: 11
        }, this);
        $[111] = t17;
        $[112] = t66;
        $[113] = t67;
    } else {
        t67 = $[113];
    }
    return t67;
}
_s(Dashboard, "biIzAfsZszCyPVgdoqosf9ORMIk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
function _DashboardCOURSESMap(course) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: course,
        className: "bg-[#18181b]",
        children: course
    }, course, false, {
        fileName: "[project]/src/app/students/page.tsx",
        lineNumber: 735,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_students_page_tsx_68234ead._.js.map