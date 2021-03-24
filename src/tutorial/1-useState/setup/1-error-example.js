import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  //this is not gonna work
  const clickHandler = () =>{
    // title = "sdhfjgk"
    console.log(title)
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickHandler}>Change title</button>
    </React.Fragment>
    )
};

export default ErrorExample;
