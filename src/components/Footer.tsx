
export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-[10rem]  w-full  bg-orange-200 h-[10rem] xl:h-[20rem]">
      <ul className="grid grid-cols-4 px-2 gap-2 pt-2" >
        <li className="hover:text-marron cursor-pointer">
          <a className='underline' href="/a"> Sobre nosotros</a>
        </li>
        <li className="hover:text-marron cursor-pointer">
          <a className='underline' href="/"> Sobre nosotros</a>
        </li>
        <li className="hover:text-marron cursor-pointer">
          <a className='underline' href="/"> Sobre nosotros</a>
        </li>
        <li className="hover:text-marron cursor-pointer">
          <a className='underline' href="/"> Sobre nosotros</a>
        </li>
      </ul>
      <small>©GZ Ecuestre Todos los derechos reservados</small>
    </footer>
  )
}
