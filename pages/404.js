
import Image from "next/image"
import Link from "next/link"

export default function Custom404() {

  return (
    <div className="errorPage">
      <Image src="/404.svg" width={800} height={600} alt="error" />
      <h2>Sorry, the page you are looking for doesn&apos;t exist.</h2>
      <Link href="/" >
        <a className="backHome" >Back to home</a>
      </Link>
    </div>
  )
}