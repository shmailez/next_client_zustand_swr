import Link from "next/link";

export default function AboutLayout({children}) {
    return <>
        <Link href="/about/location">Location</Link>
        <Link href="/about/goals">Goals</Link>
        {children}
    </>
}