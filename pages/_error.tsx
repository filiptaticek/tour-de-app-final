import Link from "next/link"
import { Page } from "../components/Page"

function ErrorPage() {

  return (
    <Page>
      <p className="m-auto my-10 w-[60%] text-center text-5xl font-bold text-black">This page does not exist.</p>
      <div className="flex">
        <Link className="m-auto rounded-2xl bg-light_blue px-5 py-2 font-bold text-white hover:opacity-80" href="/">Back to home page</Link>
      </div>
    </Page>
  )
}

export default ErrorPage