
import './options.css'
import Link from "next/link"

export default function Options() {
    return (
    <div id="main-header">
        <Link id="sub-header" href="/">Home</Link>
        <Link id="sub-header" href="/experience">Experience</Link>
        <Link id="sub-header" href="/papers">Papers</Link>
        <Link id="sub-header" href="/others">Others</Link>
        <a id="sub-header" target="_blank" href={"/files/cv.pdf"} rel="noopener noreferrer">CV</a>
    </div>
    )

}