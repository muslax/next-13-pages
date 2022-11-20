// import type { NextRequest } from 'next/server'

export const config = {
  // Needs to exists beside already set globally in next.config.js
  runtime: 'experimental-edge',
}

export default async function (req, env, ctx) {
  console.log("Runtime:", process.env.NEXT_RUNTIME);
  // const { results} = await env.DB.prepare(
  //   'SELECT * FROM customers'
  // ).all();

  return new Response(
    JSON.stringify({ name: 'John Doe Edge' }),
    // JSON.stringify( results ),
    // {
    //   status: 200,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // }
  )
}

