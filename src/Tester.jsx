import React from 'react'

const Tester = () => {
  return (
    <div>
        <section>
          {[
            "clothing",
                "Bottling",
                "Champ"
          ].map((item,index) =>(
            <button key={index}> {item}</button>
          ))}
        </section>
    </div>
  )
}

export default Tester