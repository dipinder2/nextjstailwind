import Link from "next/Link"


export default function App(args) {
	return (<div className = "grid grid-cols-3 gap-4 justify-items-stretch p-2 max-w-md">
			<Link href="/dashboard">Dashboard</Link>
			<Link href="/post">Post</Link>
			<Link href="/app">Login</Link>
		</div>)
}