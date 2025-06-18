// import Header from '@/components/Header';
// import Link from 'next/link';
// import { MapPinIcon, BriefcaseIcon, BuildingOfficeIcon, GlobeAltIcon, UsersIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

// // interface PageProps {
// //   params: {
// //     slug: string;
// //   };
// // }
export const dynamic = 'force-dynamic';
// export async function generateStaticParams() {
//   // Replace this with real slugs if you have a database or API
//   const slugs = ['techcorp-sa', 'sobetwo-group', 'getjobsa'];

//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

// export default async function CompanyProfile() {
// return (
//     <div className="min-h-screen bg-slate-50">
//       <Header />
      
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Breadcrumb */}
//         <div className="mb-6">
//           <Link href="/companies" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-2">
//             ← Back to Companies
//           </Link>
//         </div>

//         {/* Company Header */}
//         <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-8 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] border border-blue-100/50">
//           <div className="flex items-start gap-6">
//             <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm">
//               <BuildingOfficeIcon className="w-16 h-16 text-blue-600" />
//             </div>
//             <div className="flex-1">
//               <h1 className="text-3xl font-bold text-gray-900">TechCorp SA</h1>
//               <p className="text-gray-600 mt-2">Technology</p>
//               <div className="mt-4 flex flex-wrap gap-4">
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <MapPinIcon className="w-5 h-5" />
//                   <span>Cape Town, South Africa</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <UsersIcon className="w-5 h-5" />
//                   <span>500+ employees</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <GlobeAltIcon className="w-5 h-5" />
//                   <a href="https://techcorp.co.za" className="text-blue-600 hover:text-blue-800">techcorp.co.za</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Company Description */}
//         <div className="mt-6 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] border border-blue-100/50">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">About TechCorp SA</h2>
//           <div className="prose prose-blue max-w-none">
//             <p className="text-gray-600">
//               TechCorp SA is a leading software development company based in Cape Town, South Africa. We specialize in enterprise solutions and digital transformation, helping businesses across Africa embrace the power of technology.
//             </p>
            
//             <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Our Culture</h3>
//             <p className="text-gray-600">
//               We foster an environment of innovation, collaboration, and continuous learning. Our team consists of passionate individuals who are committed to delivering excellence in everything we do.
//             </p>

//             <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Benefits</h3>
//             <ul className="list-disc list-inside text-gray-600 space-y-2">
//               <li>Competitive salaries and performance bonuses</li>
//               <li>Remote work options and flexible hours</li>
//               <li>Health insurance and retirement benefits</li>
//               <li>Professional development opportunities</li>
//               <li>Modern equipment and software licenses</li>
//             </ul>
//           </div>
//         </div>

//         {/* Open Positions */}
//         <div className="mt-6 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-6 rounded-lg shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] border border-blue-100/50">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-semibold text-gray-900">Open Positions</h2>
//             <span className="bg-blue-100/80 text-blue-800 text-sm px-3 py-1 rounded-full">
//               12 positions
//             </span>
//           </div>

//           <div className="space-y-4">
//             {/* Job Card */}
//             <div className="bg-white/50 rounded-lg p-4 hover:bg-white/80 transition-colors">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">Senior Software Engineer</h3>
//                   <div className="mt-2 flex items-center gap-4">
//                     <div className="flex items-center gap-1 text-gray-600 text-sm">
//                       <MapPinIcon className="w-4 h-4" />
//                       <span>Cape Town</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-600 text-sm">
//                       <BriefcaseIcon className="w-4 h-4" />
//                       <span>Full-time</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-500">
//                       <ChatBubbleLeftIcon className="w-4 h-4" />
//                       <span className="text-xs">15 comments</span>
//                     </div>
//                   </div>
//                 </div>
//                 <Link 
//                   href="/jobs/senior-software-engineer"
//                   className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </div>

//             {/* More Job Cards */}
//             <div className="bg-white/50 rounded-lg p-4 hover:bg-white/80 transition-colors">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">Frontend Developer</h3>
//                   <div className="mt-2 flex items-center gap-4">
//                     <div className="flex items-center gap-1 text-gray-600 text-sm">
//                       <MapPinIcon className="w-4 h-4" />
//                       <span>Remote</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-600 text-sm">
//                       <BriefcaseIcon className="w-4 h-4" />
//                       <span>Full-time</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-500">
//                       <ChatBubbleLeftIcon className="w-4 h-4" />
//                       <span className="text-xs">8 comments</span>
//                     </div>
//                   </div>
//                 </div>
//                 <Link 
//                   href="/jobs/frontend-developer"
//                   className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="mt-4">
//             <button className="w-full bg-white/80 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 text-sm">
//               Show All Positions
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// } 