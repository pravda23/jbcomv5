// // app/api/proxy/route.js

// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const response = await fetch('https://api.johnbartmann.com/endpoint', {
//       // Optional: Include headers if needed
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return NextResponse.json(data); // Return the response in Next.js format
//   } catch (error) {
//     return NextResponse.json(
//       { error: error.message },
//       { status: 500 } // Return a 500 Internal Server Error
//     );
//   }
// }
