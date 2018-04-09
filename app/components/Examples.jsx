var React=require("react");
var {Link}=require('react-router');


var Examples = () => {

      return (
      <div>
          <h1 className='text-center'>Examples </h1>
          <p>Here are the few examples to start :</p>
          <ul>
            <li>
              <Link to='/?location=Ranchi' >Ranchi, JH</Link>
            </li>
            <li>
              <Link to='/?location=Aizawl' >Aizawl, MZ</Link>
            </li>
          </ul>

      </div>
      )

    };





module.exports=Examples;
