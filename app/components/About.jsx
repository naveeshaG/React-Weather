var React=require("react");

  var About=()=>{
    return(
       <div>
         <h1 className='text-center' >About </h1>
         <h5 className='text-center'>Welcome !</h5> <br/>
         <p>This website displays the Current Temperature [Celsius] using Open Weather and is deployed on
           <a href='https://www.heroku.com/'> Heroku</a> platform.</p>
         <p>The Technologies involved is <a href='https://reactjs.org/'>React</a>|
           <a href='https://foundation.zurb.com'>Foundation</a>|
           <a href='https://webpack.js.org/'>Webpack</a> |
             <a href='https://nodejs.org'>NodeJs</a> |
               <a href='https://babeljs.io/'>Babel</a>.</p><br/>
         <h3 className='text-center'>Links </h3>
         <ul>

           <li>
             <a href='https://openweathermap.org/'>Open Weather</a>

           </li>
           <li>
             <a href='https://github.com/naveeshaG/React-Weather'>Git Repository</a>
           </li>
         </ul>
       </div>
     )

  };

module.exports=About;
