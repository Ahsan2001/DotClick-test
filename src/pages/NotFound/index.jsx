import { Error } from "../../components";



function NotFound() {
  document.title = "Error Page"
  return (
    <>
      <Error />
    </>
  )
}


export default NotFound;