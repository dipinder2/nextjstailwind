import Link from "next/Link"

export default function Navbar({children}) {
	return (<>
		<Link href="/">Home</Link>
		<Link href="/user/dashboard">Dashboard</Link>
		</>)
}