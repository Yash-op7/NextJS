// https://jsonplaceholder.typicode.com/users

import { NextResponse } from "next/server";
import { users } from "./utils/db";

// let data = JSON.parse(JSON.stringify(users));
let data = [1, 2, 3, 4, 5];

// export async function GET(request) {
//   return NextResponse.json(data, { status: 200 });
// }

// export async function POST(req) {
//   const newUser = await req.json();
//   data = [...data, newUser];
//   return NextResponse.json(
//     {
//       messsage: "✅ Successfully created a new User",
//     },
//     {
//       status: 201,
//     }
//   );
// }

export async function GET(req) {
    // let body = await req.json();
    // let id = context.params.id;
    const url = new URL(req.url);
const id = Number(url.searchParams.get('id'));


    if(id)
        data = [...data, id];

    return NextResponse.json({
        // message: `received body: ${body}`,
        msg: 'success',
        data
    }, {status:201});
}
