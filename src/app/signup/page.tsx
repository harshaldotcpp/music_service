import { redirect } from 'next/navigation'

export default async function signin(){
    return redirect("/#signup")
}