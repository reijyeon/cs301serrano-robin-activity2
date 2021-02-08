  
import React from 'react'

function Clock({hourVal, minuteVal, secondVal}) {

  console.log(secondVal)

    return (
      <div className="clock">
        <div className="hand hour" style={{transform: `translate(-50%) rotate(${hourVal * 360}deg)`}}></div>
        <div className="hand minute"style={{transform: `translate(-50%) rotate(${minuteVal * 360}deg)`}}  ></div>
        <div className="hand second"style={{transform: `translate(-50%) rotate(${secondVal * 360}deg)`}}  ></div>
        
        <div className="num num1"><div>1</div></div>
        <div className="num num2"><div>2</div></div>
        <div className="num num3"><div>3</div></div>
        <div className="num num4"><div>4</div></div>
        <div className="num num5"><div>5</div></div>
        <div className="num num6"><div>6</div></div>
        <div className="num num7"><div>7</div></div>
        <div className="num num8"><div>8</div></div>
        <div className="num num9"><div>9</div></div>
        <div className="num num10"><div>10</div></div>
        <div className="num num11"><div>11</div></div>
        <div className="num num12"><div>12</div></div>
    </div>
    )
}

export default Clock