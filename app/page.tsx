import Links from "./components/Links"


function Home() {

  return (
    <section className='bg-lime-300 grid gap-5 h-screen w-screen place-content-center'>
      <Links href="#">Twitter</Links>
      <Links href="#">Instagram</Links>
      <Links href="#">WhatsApp</Links>
      <Links href="#">Facebook</Links>
    </section>
  )
}


export default Home
