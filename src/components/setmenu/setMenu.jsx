export default function SetMenu(props) {
  return (
      <li onClick={()=>props.setMenuOpen(false)}>
        <a href={`${props.page}`}>{props.sectionName}</a>
      </li>
  )
}

