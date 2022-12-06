import type { NextRequest } from 'next/server'

export const config = {
  // Needs to exists beside already set globally in next.config.js
  runtime: 'experimental-edge',
}

export default async function (req: NextRequest) {
  console.log("Runtime:", process.env.NEXT_RUNTIME);
  // console.log("HONODB:", process.env.HONODB);
  // const { results } = await context.env.DB.prepare(
  //   "SELECT * FROM Customers WHERE CompanyName = ?"
  // ).bind("Bs Beverages").all();

  const start =  new Date().getTime();
  const rs = await fetch('https://chinook.muslax.workers.dev/api/genres');
  console.log(start, process.env);

  console.log('Time:', new Date().getTime() - start);
  const data = await rs.json();

  return new Response(
    // JSON.stringify({ name: 'John Doe Edge' }),
    JSON.stringify( data ),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
}

