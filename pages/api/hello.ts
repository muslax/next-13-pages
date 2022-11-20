// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes
import type { NextRequest } from 'next/server'

export const config = {
  // Needs to exists beside already set globally in next.config.js
  runtime: 'experimental-edge',
}

export default async function (req: NextRequest, env: any) {
  console.log("Runtime:", process.env.NEXT_RUNTIME);
  const { results } = await env.DB.prepare(
    "SELECT * FROM Customers WHERE CompanyName = ?"
  ).bind("Bs Beverages").all();


  return new Response(
    // JSON.stringify({ name: 'John Doe Edge' }),
    JSON.stringify( results ),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
}

