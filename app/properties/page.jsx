import Link from "next/link"

const page = () => {
  return (
    <div>
        <Link href="/properties/10">10 Number</Link><br/>
        <Link href="/properties/12">12 Number</Link><br/>
        <Link href="/">Go Home</Link>
    </div>
  )
}

export default page