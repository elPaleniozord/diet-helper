const List = ({header, steps, removeHeader, removeStep}) => {
  return (
    <div>
      {header!=='default' && (
        <h3>{header}<button type='button' name={header} onClick={removeHeader}>X</button></h3>        
      )}
      <ul>
      {steps.map((step, i) => (
        <li key={step+i}>
          {i+1+'. '+step}
          <button type='button' name={header+'|'+i} onClick={removeStep}>X</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default List