// // "use client";

// // import React, { useState } from "react";
// // import { PlusCircle, Search, UserCheck, Wallet, Calendar, Phone, Weight } from "lucide-react";
// // // import { EthDateTime } from "ethiopian-calendar-date-converter";
// // // import { EthDateTime } from "ethiopian-calendar-date-converter";
// // import { EthDateTime } from "ethiopian-calendar-date-converter";

// // interface DebtRecord {
// //   id: string;
// //   customerName: string;
// //   phone: string;
// //   itemType: string;
// //   weightKg: number;
// //   pricePerKg: number;
// //   totalPrice: number;
// //   paidAmount: number;
// //   remainingAmount: number;
// //   gregorianDate: string;
// //   ethiopianDate: string;
// //   paymentsHistory: { date: string; amount: number }[];
// // }

// // export default function Home() {
// //   const [records, setRecords] = useState<DebtRecord[]>([]);
// //   const [customerName, setCustomerName] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [itemType, setItemType] = useState("");
// //   const [weightKg, setWeightKg] = useState<number | "">("");
// //   const [pricePerKg, setPricePerKg] = useState<number | "">("");
// //   const [paidAmount, setPaidAmount] = useState<number | "">(0);
// //   const [search, setSearch] = useState("");

// //   const weight = Number(weightKg) || 0;
// //   const unitPrice = Number(pricePerKg) || 0;
// //   const initialPaid = Number(paidAmount) || 0;
  
// //   const totalPrice = weight * unitPrice;
// //   const remainingAmount = totalPrice - initialPaid;

// //   // const handleSubmit = (e: React.FormEvent) => {
// //   //   e.preventDefault();
// //   //   if (!customerName || !weight || !unitPrice) return;

// //   //   const now = new Date();
// //   //   // const ethDateObj = EthDateTime.fromJSDate(now);
// //   //   const ethDateObj = new EthDateTime(now.getTime());
    
// //   //   const gregStr = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
// //   //   const ethStr = `${ethDateObj.date}/${ethDateObj.month}/${ethDateObj.year} ዓ.ም (${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`;

// //   //   const newRecord: DebtRecord = {
// //   //     id: Date.now().toString(),
// //   //     customerName,
// //   //     phone,
// //   //     itemType,
// //   //     weightKg: weight,
// //   //     pricePerKg: unitPrice,
// //   //     totalPrice,
// //   //     paidAmount: initialPaid,
// //   //     remainingAmount,
// //   //     gregorianDate: gregStr,
// //   //     ethiopianDate: ethStr,
// //   //     paymentsHistory: initialPaid > 0 ? [{ date: ethStr, amount: initialPaid }] : [],
// //   //   };

// //   //   setRecords([newRecord, ...records]);

// //   //   // Reset Form
// //   //   setCustomerName("");
// //   //   setPhone("");
// //   //   setItemType("");
// //   //   setWeightKg("");
// //   //   setPricePerKg("");
// //   //   setPaidAmount(0);
// //   // };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!customerName || !weight || !unitPrice) return;

// //     const now = new Date();
    
// //     // የኢትዮጵያ ቀንን በትክክል የመቀየር ዘዴ
// //     const ethDateObj = new EthDateTime(now.getTime());
    
// //     const gregStr = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
// //     const ethStr = `${ethDateObj.date}/${ethDateObj.month}/${ethDateObj.year} ዓ.ም (${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`;

// //     const newRecord: DebtRecord = {
// //       id: Date.now().toString(),
// //       customerName,
// //       phone,
// //       itemType,
// //       weightKg: weight,
// //       pricePerKg: unitPrice,
// //       totalPrice,
// //       paidAmount: initialPaid,
// //       remainingAmount,
// //       gregorianDate: gregStr,
// //       ethiopianDate: ethStr,
// //       paymentsHistory: initialPaid > 0 ? [{ date: ethStr, amount: initialPaid }] : [],
// //     };

// //     setRecords([newRecord, ...records]);

// //     // Reset Form
// //     setCustomerName("");
// //     setPhone("");
// //     setItemType("");
// //     setWeightKg("");
// //     setPricePerKg("");
// //     setPaidAmount(0);
// //   };

// //   const filteredRecords = records.filter((r) =>
// //     r.customerName.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
// //       <header className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
// //         <div>
// //           <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Bruke Fruit - የዕዳ መቆጣጠሪያ</h1>
// //           <p className="text-sm text-slate-500">የአትክልት መሸጫ የብድርና ክፍያ መመዝገቢያ ሲስተም</p>
// //         </div>
// //       </header>

// //       <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         {/* Form Section */}
// //         <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-fit">
// //           <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
// //             <PlusCircle className="w-5 h-5 text-emerald-600" /> አዲስ የብድር መዝገብ
// //           </h2>
          
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label className="block text-xs font-semibold text-slate-600 mb-1">የደንበኛ ስም</label>
// //               <input
// //                 type="text"
// //                 required
// //                 placeholder="ምሳሌ፡ አበበ ከበደ"
// //                 value={customerName}
// //                 onChange={(e) => setCustomerName(e.target.value)}
// //                 className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
// //               />
// //             </div>

// //             <div className="grid grid-cols-2 gap-3">
// //               <div>
// //                 <label className="block text-xs font-semibold text-slate-600 mb-1">ስልክ ቁጥር</label>
// //                 <input
// //                   type="text"
// //                   placeholder="09..."
// //                   value={phone}
// //                   onChange={(e) => setPhone(e.target.value)}
// //                   className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-xs font-semibold text-slate-600 mb-1">የአትክልት ዓይነት</label>
// //                 <input
// //                   type="text"
// //                   placeholder="ምሳሌ፡ ቲማቲም"
// //                   value={itemType}
// //                   onChange={(e) => setItemType(e.target.value)}
// //                   className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
// //                 />
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-2 gap-3">
// //               <div>
// //                 <label className="block text-xs font-semibold text-slate-600 mb-1">መጠን (በኪሎ)</label>
// //                 <input
// //                   type="number"
// //                   required
// //                   placeholder="0.00"
// //                   value={weightKg}
// //                   onChange={(e) => setWeightKg(e.target.value === "" ? "" : Number(e.target.value))}
// //                   className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-xs font-semibold text-slate-600 mb-1">የ፩ ኪሎ ዋጋ (ብር)</label>
// //                 <input
// //                   type="number"
// //                   required
// //                   placeholder="0.00"
// //                   value={pricePerKg}
// //                   onChange={(e) => setPricePerKg(e.target.value === "" ? "" : Number(e.target.value))}
// //                   className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
// //                 />
// //               </div>
// //             </div>

// //             <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-sm space-y-1">
// //               <div className="flex justify-between text-slate-600">
// //                 <span>ጠቅላላ ዋጋ:</span>
// //                 <span className="font-bold text-slate-800">{totalPrice.toLocaleString()} ብር</span>
// //               </div>
// //             </div>

// //             <div>
// //               <label className="block text-xs font-semibold text-slate-600 mb-1">አሁን የከፈለው ቅድመ ክፍያ (ካለ)</label>
// //               <input
// //                 type="number"
// //                 placeholder="0.00"
// //                 value={paidAmount}
// //                 onChange={(e) => setPaidAmount(e.target.value === "" ? "" : Number(e.target.value))}
// //                 className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
// //               />
// //             </div>

// //             <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-sm flex justify-between font-bold text-amber-900">
// //               <span>የሚቀረው ዕዳ:</span>
// //               <span>{remainingAmount.toLocaleString()} ብር</span>
// //             </div>

// //             <button
// //               type="submit"
// //               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg shadow-md transition-all active:scale-[0.98]"
// //             >
// //               መዝግብ
// //             </button>
// //           </form>
// //         </section>

// //         {/* List Section */}
// //         <section className="lg:col-span-2 space-y-4">
// //           <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
// //             <Search className="w-5 h-5 text-slate-400" />
// //             <input
// //               type="text"
// //               placeholder="በስም ፈልግ..."
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //               className="w-full bg-transparent border-none text-sm outline-none"
// //             />
// //           </div>

// //           <div className="space-y-3">
// //             {filteredRecords.length === 0 ? (
// //               <div className="bg-white p-8 rounded-2xl text-center border border-slate-200 text-slate-400">
// //                 ምንም የተመዘገበ ዕዳ የለም።
// //               </div>
// //             ) : (
// //               filteredRecords.map((item) => (
// //                 <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
// //                   <div className="flex justify-between items-start mb-3 border-b pb-2">
// //                     <div>
// //                       <h3 className="font-bold text-slate-800 text-lg">{item.customerName}</h3>
// //                       {item.phone && (
// //                         <p className="text-xs text-slate-500 flex items-center gap-1">
// //                           <Phone className="w-3 h-3" /> {item.phone}
// //                         </p>
// //                       )}
// //                     </div>
// //                     <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
// //                       ቀሪ ዕዳ: {item.remainingAmount.toLocaleString()} ብር
// //                     </span>
// //                   </div>

// //                   <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-lg">
// //                     <div>
// //                       <span className="block text-slate-400">ዓይነት</span>
// //                       <span className="font-semibold">{item.itemType || "ያልተጠቀሰ"}</span>
// //                     </div>
// //                     <div>
// //                       <span className="block text-slate-400">መጠን</span>
// //                       <span className="font-semibold">{item.weightKg} ኪሎ</span>
// //                     </div>
// //                     <div>
// //                       <span className="block text-slate-400">ጠቅላላ ሂሳብ</span>
// //                       <span className="font-semibold">{item.totalPrice.toLocaleString()} ብር</span>
// //                     </div>
// //                     <div>
// //                       <span className="block text-slate-400">የከፈለው</span>
// //                       <span className="font-semibold text-emerald-600">{item.paidAmount.toLocaleString()} ብር</span>
// //                     </div>
// //                   </div>

// //                   <div className="text-[11px] text-slate-400 space-y-0.5">
// //                     <p>🇪🇹 ኢትዮጵያ፡ {item.ethiopianDate}</p>
// //                     <p>🌐 ፈረንጅ፡ {item.gregorianDate}</p>
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }


// "use client";

// import React, { useState } from "react";
// import { PlusCircle, Search, Phone } from "lucide-react";

// // የፈረንጅ ቀንን ወደ ኢትዮጵያ ቀን መቀየሪያ Algorithm (ያለ ፓኬጅ)
// function convertToEthiopianDate(date: Date) {
//   const gYear = date.getFullYear();
//   const gMonth = date.getMonth() + 1;
//   const gDay = date.getDate();

//   // የዘመን መለወጫ (መስከረም 1) ለተወሰኑ ዓመታት
//   const newYearDay = (gYear % 4 === 3) ? 12 : 11;

//   let ethYear = gYear - 8;
//   if (gMonth < 9 || (gMonth === 9 && gDay < newYearDay)) {
//     ethYear = gYear - 8;
//   } else {
//     ethYear = gYear - 7;
//   }

//   // የኢትዮጵያ ወራቶች ስም
//   const ethMonths = [
//     "መስከረም", "ጥቅምት", "ህዳር", "ታህሳስ", "ጥር", "የካቲት", 
//     "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"
//   ];

//   // ቀለል ያለ የቀን ስሌት ማካካሻ
//   const startOfEthYear = new Date(gYear, 8, newYearDay);
//   let diffDays = 0;

//   if (date >= startOfEthYear) {
//     diffDays = Math.floor((date.getTime() - startOfEthYear.getTime()) / (1000 * 60 * 60 * 24));
//   } else {
//     const prevNewYearDay = ((gYear - 1) % 4 === 3) ? 12 : 11;
//     const prevStartOfEthYear = new Date(gYear - 1, 8, prevNewYearDay);
//     diffDays = Math.floor((date.getTime() - prevStartOfEthYear.getTime()) / (1000 * 60 * 60 * 24));
//   }

//   let ethMonthIndex = Math.floor(diffDays / 30);
//   let ethDay = (diffDays % 30) + 1;

//   if (ethMonthIndex >= 12) {
//     ethMonthIndex = 12; // ጳጉሜ
//   }

//   return `${ethDay} ${ethMonths[ethMonthIndex]} ${ethYear} ዓ.ም`;
// }

// interface DebtRecord {
//   id: string;
//   customerName: string;
//   phone: string;
//   itemType: string;
//   weightKg: number;
//   pricePerKg: number;
//   totalPrice: number;
//   paidAmount: number;
//   remainingAmount: number;
//   gregorianDate: string;
//   ethiopianDate: string;
//   paymentsHistory: { date: string; amount: number }[];
// }

// export default function Home() {
//   const [records, setRecords] = useState<DebtRecord[]>([]);
//   const [customerName, setCustomerName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [itemType, setItemType] = useState("");
//   const [weightKg, setWeightKg] = useState<number | "">("");
//   const [pricePerKg, setPricePerKg] = useState<number | "">("");
//   const [paidAmount, setPaidAmount] = useState<number | "">(0);
//   const [search, setSearch] = useState("");

//   const weight = Number(weightKg) || 0;
//   const unitPrice = Number(pricePerKg) || 0;
//   const initialPaid = Number(paidAmount) || 0;
  
//   const totalPrice = weight * unitPrice;
//   const remainingAmount = totalPrice - initialPaid;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!customerName || !weight || !unitPrice) return;

//     const now = new Date();
    
//     // የኢትዮጵያ ቀንን መቀየር
//     const ethFormatted = convertToEthiopianDate(now);
    
//     const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const gregStr = `${now.toLocaleDateString()} ${timeStr}`;
//     const ethStr = `${ethFormatted} (${timeStr})`;

//     const newRecord: DebtRecord = {
//       id: Date.now().toString(),
//       customerName,
//       phone,
//       itemType,
//       weightKg: weight,
//       pricePerKg: unitPrice,
//       totalPrice,
//       paidAmount: initialPaid,
//       remainingAmount,
//       gregorianDate: gregStr,
//       ethiopianDate: ethStr,
//       paymentsHistory: initialPaid > 0 ? [{ date: ethStr, amount: initialPaid }] : [],
//     };

//     setRecords([newRecord, ...records]);

//     // Reset Form
//     setCustomerName("");
//     setPhone("");
//     setItemType("");
//     setWeightKg("");
//     setPricePerKg("");
//     setPaidAmount(0);
//   };

//   const filteredRecords = records.filter((r) =>
//     r.customerName.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
//       <header className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Bruke Fruit - የዕዳ መቆጣጠሪያ</h1>
//           <p className="text-sm text-slate-500">የአትክልት መሸጫ የብድርና ክፍያ መመዝገቢያ ሲስተም</p>
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Form Section */}
//         <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-fit">
//           <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
//             <PlusCircle className="w-5 h-5 text-emerald-600" /> አዲስ የብድር መዝገብ
//           </h2>
          
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-xs font-semibold text-slate-600 mb-1">የደንበኛ ስም</label>
//               <input
//                 type="text"
//                 required
//                 placeholder="ምሳሌ፡ አበበ ከበደ"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//                 className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 mb-1">ስልክ ቁጥር</label>
//                 <input
//                   type="text"
//                   placeholder="09..."
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 mb-1">የአትክልት ዓይነት</label>
//                 <input
//                   type="text"
//                   placeholder="ምሳሌ፡ ቲማቲም"
//                   value={itemType}
//                   onChange={(e) => setItemType(e.target.value)}
//                   className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 mb-1">መጠን (በኪሎ)</label>
//                 <input
//                   type="number"
//                   required
//                   placeholder="0.00"
//                   value={weightKg}
//                   onChange={(e) => setWeightKg(e.target.value === "" ? "" : Number(e.target.value))}
//                   className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold text-slate-600 mb-1">የ፩ ኪሎ ዋጋ (ብር)</label>
//                 <input
//                   type="number"
//                   required
//                   placeholder="0.00"
//                   value={pricePerKg}
//                   onChange={(e) => setPricePerKg(e.target.value === "" ? "" : Number(e.target.value))}
//                   className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
//                 />
//               </div>
//             </div>

//             <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-sm space-y-1">
//               <div className="flex justify-between text-slate-600">
//                 <span>ጠቅላላ ዋጋ:</span>
//                 <span className="font-bold text-slate-800">{totalPrice.toLocaleString()} ብር</span>
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-600 mb-1">አሁን የከፈለው ቅድመ ክፍያ (ካለ)</label>
//               <input
//                 type="number"
//                 placeholder="0.00"
//                 value={paidAmount}
//                 onChange={(e) => setPaidAmount(e.target.value === "" ? "" : Number(e.target.value))}
//                 className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
//               />
//             </div>

//             <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-sm flex justify-between font-bold text-amber-900">
//               <span>የሚቀረው ዕዳ:</span>
//               <span>{remainingAmount.toLocaleString()} ብር</span>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg shadow-md transition-all active:scale-[0.98]"
//             >
//               መዝግብ
//             </button>
//           </form>
//         </section>

//         {/* List Section */}
//         <section className="lg:col-span-2 space-y-4">
//           <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
//             <Search className="w-5 h-5 text-slate-400" />
//             <input
//               type="text"
//               placeholder="በስም ፈልግ..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full bg-transparent border-none text-sm outline-none"
//             />
//           </div>

//           <div className="space-y-3">
//             {filteredRecords.length === 0 ? (
//               <div className="bg-white p-8 rounded-2xl text-center border border-slate-200 text-slate-400">
//                 ምንም የተመዘገበ ዕዳ የለም።
//               </div>
//             ) : (
//               filteredRecords.map((item) => (
//                 <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="flex justify-between items-start mb-3 border-b pb-2">
//                     <div>
//                       <h3 className="font-bold text-slate-800 text-lg">{item.customerName}</h3>
//                       {item.phone && (
//                         <p className="text-xs text-slate-500 flex items-center gap-1">
//                           <Phone className="w-3 h-3" /> {item.phone}
//                         </p>
//                       )}
//                     </div>
//                     <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
//                       ቀሪ ዕዳ: {item.remainingAmount.toLocaleString()} ብር
//                     </span>
//                   </div>

//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-lg">
//                     <div>
//                       <span className="block text-slate-400">ዓይነት</span>
//                       <span className="font-semibold">{item.itemType || "ያልተጠቀሰ"}</span>
//                     </div>
//                     <div>
//                       <span className="block text-slate-400">መጠን</span>
//                       <span className="font-semibold">{item.weightKg} ኪሎ</span>
//                     </div>
//                     <div>
//                       <span className="block text-slate-400">ጠቅላላ ሂሳብ</span>
//                       <span className="font-semibold">{item.totalPrice.toLocaleString()} ብር</span>
//                     </div>
//                     <div>
//                       <span className="block text-slate-400">የከፈለው</span>
//                       <span className="font-semibold text-emerald-600">{item.paidAmount.toLocaleString()} ብር</span>
//                     </div>
//                   </div>

//                   <div className="text-[11px] text-slate-400 space-y-0.5">
//                     <p>🇪🇹 ኢትዮጵያ፡ {item.ethiopianDate}</p>
//                     <p>🌐 ፈረንጅ፡ {item.gregorianDate}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { PlusCircle, Search, Phone, Wallet, History, X } from "lucide-react";

// የፈረንጅ ቀንን ወደ ኢትዮጵያ ቀን እና ዕለት መቀየሪያ
function convertToEthiopianDate(date: Date) {
  const gYear = date.getFullYear();
  const gMonth = date.getMonth() + 1;
  const gDay = date.getDate();

  const daysOfWeek = ["እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ", "ቅዳሜ"];
  const dayName = daysOfWeek[date.getDay()];

  const newYearDay = (gYear % 4 === 3) ? 12 : 11;

  let ethYear = gYear - 8;
  if (gMonth < 9 || (gMonth === 9 && gDay < newYearDay)) {
    ethYear = gYear - 8;
  } else {
    ethYear = gYear - 7;
  }

  const ethMonths = [
    "መስከረም", "ጥቅምት", "ህዳር", "ታህሳስ", "ጥር", "የካቲት", 
    "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"
  ];

  const startOfEthYear = new Date(gYear, 8, newYearDay);
  let diffDays = 0;

  if (date >= startOfEthYear) {
    diffDays = Math.floor((date.getTime() - startOfEthYear.getTime()) / (1000 * 60 * 60 * 24));
  } else {
    const prevNewYearDay = ((gYear - 1) % 4 === 3) ? 12 : 11;
    const prevStartOfEthYear = new Date(gYear - 1, 8, prevNewYearDay);
    diffDays = Math.floor((date.getTime() - prevStartOfEthYear.getTime()) / (1000 * 60 * 60 * 24));
  }

  let ethMonthIndex = Math.floor(diffDays / 30);
  let ethDay = (diffDays % 30) + 1;

  if (ethMonthIndex >= 12) {
    ethMonthIndex = 12; // ጳጉሜ
  }

  return {
    formattedDate: `${ethDay} ${ethMonths[ethMonthIndex]} ${ethYear} ዓ.ም`,
    dayName: dayName
  };
}

interface PaymentHistory {
  id: string;
  amount: number;
  ethiopianDate: string;
  gregorianDate: string;
}

interface DebtRecord {
  id: string;
  customerName: string;
  phone: string;
  itemType: string;
  weightKg: number;
  pricePerKg: number;
  totalPrice: number;
  paidAmount: number;
  remainingAmount: number;
  gregorianDate: string;
  ethiopianDate: string;
  dayName: string;
  paymentsHistory: PaymentHistory[];
}

export default function Home() {
  const [records, setRecords] = useState<DebtRecord[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [itemType, setItemType] = useState("");
  const [weightKg, setWeightKg] = useState<number | "">("");
  const [pricePerKg, setPricePerKg] = useState<number | "">("");
  const [paidAmount, setPaidAmount] = useState<number | "">(0);
  const [search, setSearch] = useState("");

  // ለክፍያ መቀበያ Pop-up Modal state
  const [selectedRecord, setSelectedRecord] = useState<DebtRecord | null>(null);
  const [newPaymentAmount, setNewPaymentAmount] = useState<number | "">("");

  const weight = Number(weightKg) || 0;
  const unitPrice = Number(pricePerKg) || 0;
  const initialPaid = Number(paidAmount) || 0;
  
  const totalPrice = weight * unitPrice;
  const remainingAmount = totalPrice - initialPaid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !weight || !unitPrice) return;

    const now = new Date();
    const { formattedDate, dayName } = convertToEthiopianDate(now);
    
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const gregStr = `${now.toLocaleDateString()} ${timeStr}`;
    const ethStr = `${formattedDate} (${timeStr})`;

    const initialPaymentHistory: PaymentHistory[] = initialPaid > 0 ? [{
      id: Date.now().toString(),
      amount: initialPaid,
      ethiopianDate: ethStr,
      gregorianDate: gregStr
    }] : [];

    const newRecord: DebtRecord = {
      id: Date.now().toString(),
      customerName,
      phone,
      itemType,
      weightKg: weight,
      pricePerKg: unitPrice,
      totalPrice,
      paidAmount: initialPaid,
      remainingAmount,
      gregorianDate: gregStr,
      ethiopianDate: ethStr,
      dayName: dayName,
      paymentsHistory: initialPaymentHistory,
    };

    setRecords([newRecord, ...records]);

    setCustomerName("");
    setPhone("");
    setItemType("");
    setWeightKg("");
    setPricePerKg("");
    setPaidAmount(0);
  };

  // አዲስ ክፍያ ሲከፍሉ መመዝገቢያ Function
  const handleAddPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRecord || !newPaymentAmount || Number(newPaymentAmount) <= 0) return;

    const paymentVal = Number(newPaymentAmount);
    const now = new Date();
    const { formattedDate } = convertToEthiopianDate(now);
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const gregStr = `${now.toLocaleDateString()} ${timeStr}`;
    const ethStr = `${formattedDate} (${timeStr})`;

    const updatedRecords = records.map((record) => {
      if (record.id === selectedRecord.id) {
        const updatedPaid = record.paidAmount + paymentVal;
        const updatedRemaining = record.totalPrice - updatedPaid;
        
        const newHistoryItem: PaymentHistory = {
          id: Date.now().toString(),
          amount: paymentVal,
          ethiopianDate: ethStr,
          gregorianDate: gregStr
        };

        return {
          ...record,
          paidAmount: updatedPaid,
          remainingAmount: updatedRemaining < 0 ? 0 : updatedRemaining,
          paymentsHistory: [newHistoryItem, ...record.paymentsHistory]
        };
      }
      return record;
    });

    setRecords(updatedRecords);
    setSelectedRecord(null);
    setNewPaymentAmount("");
  };

  const filteredRecords = records.filter((r) =>
    r.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-300 pb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Bruke Fruit - የዕዳ መቆጣጠሪያ</h1>
          <p className="text-sm text-slate-600">የአትክልት መሸጫ የብድርና ክፍያ መመዝገቢያ ሲስተም</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-300 h-fit">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2">
            <PlusCircle className="w-5 h-5 text-emerald-600" /> አዲስ የብድር መዝገብ
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">የደንበኛ ስም</label>
              <input
                type="text"
                required
                placeholder="ምሳሌ፡ አበበ ከበደ"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-3 rounded-lg border-2 border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ስልክ ቁጥር</label>
                <input
                  type="text"
                  placeholder="09..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-lg border-2 border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">የአትክልት ዓይነት</label>
                <input
                  type="text"
                  placeholder="ምሳሌ፡ ቲማቲም"
                  value={itemType}
                  onChange={(e) => setItemType(e.target.value)}
                  className="w-full p-3 rounded-lg border-2 border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">መጠን (በኪሎ)</label>
                <input
                  type="number"
                  required
                  placeholder="0.00"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full p-3 rounded-lg border-2 border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">የ፩ ኪሎ ዋጋ (ብር)</label>
                <input
                  type="number"
                  required
                  placeholder="0.00"
                  value={pricePerKg}
                  onChange={(e) => setPricePerKg(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full p-3 rounded-lg border-2 border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-100 rounded-lg border border-slate-300 text-sm space-y-1">
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold">ጠቅላላ ዋጋ:</span>
                <span className="font-bold text-slate-900">{totalPrice.toLocaleString()} ብር</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">አሁን የከፈለው ቅድመ ክፍያ (ካለ)</label>
              <input
                type="number"
                placeholder="0.00"
                value={paidAmount}
                onChange={(e) => setPaidAmount(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-full p-3 rounded-lg border-2 border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all font-medium"
              />
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border-2 border-amber-300 text-sm flex justify-between font-bold text-amber-950">
              <span>የሚቀረው ዕዳ:</span>
              <span>{remainingAmount.toLocaleString()} ብር</span>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-md transition-all active:scale-[0.98]"
            >
              መዝግብ
            </button>
          </form>
        </section>

        {/* List Section */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 bg-white p-3 rounded-xl border-2 border-slate-300 shadow-sm">
            <Search className="w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="በስም ፈልግ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-none text-slate-900 font-medium text-sm outline-none"
            />
          </div>

          <div className="space-y-4">
            {filteredRecords.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl text-center border-2 border-slate-300 text-slate-500 font-medium">
                ምንም የተመዘገበ ዕዳ የለም።
              </div>
            ) : (
              filteredRecords.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
                  
                  {/* Date and Day Header */}
                  <div className="bg-slate-100 p-2.5 rounded-xl border border-slate-200 flex flex-wrap justify-between items-center text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      📅 {item.dayName}፣ {item.ethiopianDate}
                    </span>
                    <span className="text-slate-500 font-normal">
                      🌐 ፈረንጅ፡ {item.gregorianDate}
                    </span>
                  </div>

                  {/* Customer Info Header */}
                  <div className="flex justify-between items-start pt-1">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg">{item.customerName}</h3>
                      {item.phone && (
                        <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5 font-medium">
                          <Phone className="w-3.5 h-3.5 text-slate-500" /> {item.phone}
                        </p>
                      )}
                    </div>
                    <span className={`px-3 py-1.5 text-xs font-extrabold rounded-full ${
                      item.remainingAmount === 0 
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300" 
                        : "bg-amber-100 text-amber-900 border border-amber-300"
                    }`}>
                      {item.remainingAmount === 0 ? "ሙሉ በሙሉ ተከፍሏል" : `ቀሪ ዕዳ: ${item.remainingAmount.toLocaleString()} ብር`}
                    </span>
                  </div>

                  {/* Purchase Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
                    <div>
                      <span className="block text-slate-500 text-[11px]">ዓይነት</span>
                      <span className="font-bold text-slate-900">{item.itemType || "ያልተጠቀሰ"}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[11px]">መጠን</span>
                      <span className="font-bold text-slate-900">{item.weightKg} ኪሎ</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[11px]">ጠቅላላ ሂሳብ</span>
                      <span className="font-bold text-slate-900">{item.totalPrice.toLocaleString()} ብር</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[11px]">የተከፈለ ጠቅላላ</span>
                      <span className="font-bold text-emerald-700">{item.paidAmount.toLocaleString()} ብር</span>
                    </div>
                  </div>

                  {/* Payment History List */}
                  {item.paymentsHistory.length > 0 && (
                    <div className="border-t border-slate-200 pt-2 space-y-1">
                      <p className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                        <History className="w-3 h-3" /> የክፍያ ታሪክ፡
                      </p>
                      <div className="space-y-1">
                        {item.paymentsHistory.map((h) => (
                          <div key={h.id} className="text-[11px] flex justify-between bg-emerald-50/50 px-2 py-1 rounded text-slate-700 border border-emerald-100">
                            <span>ከፈል፡ {h.ethiopianDate}</span>
                            <span className="font-bold text-emerald-800">+{h.amount.toLocaleString()} ብር</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add Payment Button */}
                  {item.remainingAmount > 0 && (
                    <div className="pt-2 border-t border-slate-100 flex justify-end">
                      <button
                        onClick={() => setSelectedRecord(item)}
                        className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300 px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95"
                      >
                        <Wallet className="w-4 h-4 text-emerald-700" /> አዲስ ክፍያ መዝግብ
                      </button>
                    </div>
                  )}

                </div>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Partial Payment Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-300 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-800 text-lg">ክፍያ መቀበያ</h3>
              <button 
                onClick={() => setSelectedRecord(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-sm space-y-1">
              <p className="text-slate-600">ደንበኛ፡ <span className="font-bold text-slate-900">{selectedRecord.customerName}</span></p>
              <p className="text-slate-600">ጠቅላላ ዕዳ፡ <span className="font-bold text-slate-900">{selectedRecord.totalPrice.toLocaleString()} ብር</span></p>
              <p className="text-amber-800 font-bold">የሚቀረው ዕዳ፡ {selectedRecord.remainingAmount.toLocaleString()} ብር</p>
            </div>

            <form onSubmit={handleAddPayment} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">አሁን የከፈለው የብር መጠን</label>
                <input
                  type="number"
                  required
                  max={selectedRecord.remainingAmount}
                  placeholder="ምሳሌ፡ 1700"
                  value={newPaymentAmount}
                  onChange={(e) => setNewPaymentAmount(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full p-3 rounded-lg border-2 border-slate-300 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-emerald-600 outline-none transition-all font-bold"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedRecord(null)}
                  className="w-1/2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl border border-slate-300 transition-all text-xs"
                >
                  ሰርዝ
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl shadow-md transition-all text-xs active:scale-95"
                >
                  ክፍያውን መዝግብ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}