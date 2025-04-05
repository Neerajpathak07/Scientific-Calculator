import { useState } from 'react'
import './App.css'
import sin from '@stdlib/math-base-special-sin';
import cos from '@stdlib/math-base-special-cos';
import tan from '@stdlib/math-base-special-tan';
import sqrt from '@stdlib/math-base-special-sqrt';
import pow from '@stdlib/math-base-special-pow';
import log10 from '@stdlib/math-base-special-log10';
import factorial from '@stdlib/math-base-special-factorial';
import exp from '@stdlib/math-base-special-exp';
import PI from '@stdlib/constants-float64-pi';
import abs from '@stdlib/math-base-special-abs';

function App() {

  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const operator = ['*', '/', '+', '-', '.', '(', ')', 'ans']

  const updateCalc = (value) =>{
    
    if (
      operator.includes(value) && calc === '' || operator.includes(value) && operator.includes(calc.slice(-1))
      ) {
        return;
      }

      setCalc(calc + value);

    if (!operator.includes(value)){
      setResult(eval(calc + value).toString());
    }

  }

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }

  const inversion = () =>{
    setResult((1 / result).toString());
  }

  const square = () =>{
    setResult((result) * (result))
  }

  const cube = () =>{
    setResult((result) * (result) * (result))
  }

  const stdlibMathFunctions = {
    sin: () => setResult(sin(result * (PI / 180)).toString()), // converting degrees to radians for trignometric functions
    cos: () => setResult(cos(result * (PI / 180)).toString()),
    tan: () => setResult(tan(result * (PI / 180)).toString()),
    sqrt: () => setResult(sqrt(result).toString()),
    pi: () => setResult((PI * result).toString()),
    pow: () => setResult(pow(result).toString()),
    log: () => setResult(log10(result).toString()),
    abs: () => setResult(abs(result).toString()),
    exp: () => setResult(exp(result).toString()),
    factorial: () => setResult(factorial(result).toString())
  };

  const deleteLast = () =>{
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value)
    setResult(value)
  }

  const clear = () =>{
    setCalc('')
    setResult('')
  }

  return (
    <main className='container=all'>
      <div className='back-op'>

        <div className='field-name'> {/* calculator type */} 
          <p>Scientific Calculator</p>
          <span>v 1.0.1</span>
        </div>

        <div className='field-result'>
          <div className='show-op turn-on-off' id='texto'></div>
          <input type="text" id="results_calc" readOnly autoComplete='off' value={calc || '0'} size='28' maxLength='25' />
          <div className='show-result'>{result ? <span>({result})</span> : ''}</div>
        </div>

        <section className='container'>

          <div className='btn-column'>
            <span>SHIFT</span>
            <button className='btn bg-gray'></button>
          </div>

          <div className='btn-column'>
            <span>ALPHA</span>
            <button className='btn bg-gray'></button>
          </div>

          <button className='btn-replay bg-gray'>REPLAY</button>

          <div className='btn-column'>
            <span>MODE</span>
            <button className='btn bg-gray'></button>
          </div>

          <div className='btn-column'>
            <span>ON</span>
            <button className='btn onOff bg-gray'></button>
          </div>
        </section>

        <section className='container-one'>{/* add more values && more features */} 
          <button className='btn-cs x-1' onClick={stdlibMathFunctions.factorial} value='x!'>x!</button>
          <button className='btn-cs' onClick={calculate} value='equal'>Calc</button>
          <span className='btn-cs opacity'></span>
          <span className='btn-cs opacity'></span>
          <button className='btn-cs' onClick={stdlibMathFunctions.pi} value='3,1416'>π</button>
          <button className='btn-cs x3' onClick={cube} value='pow'>x³</button>
          <button className='btn-cs'>ab/c</button>
          <button className='btn-cs' onClick={stdlibMathFunctions.sqrt} value='sqrt'>√</button>
          <button className="btn-cs" onClick={square} value="sq">x²</button>
          <button className='btn-cs' onClick={stdlibMathFunctions.pow} value='^'>^</button>
          <button className='btn-cs' onClick={stdlibMathFunctions.log} value='log'>log</button>
          <button className='btn-cs' onClick={inversion} value='In'>In</button>
          <button className='btn-cs' value='-'>(-)</button>
          <button className='btn-cs'>.,,,</button>
          <button className='btn-cs'>hyp</button>
          <button className='btn-cs' onClick={stdlibMathFunctions.sin} value='sin'>sin</button>
          <button className='btn-cs' onClick={stdlibMathFunctions.cos} value='cos'>cos</button>
          <button className='btn-cs' onClick={stdlibMathFunctions.tan} value='tan'>tan</button>
          <button className='btn-cs'>Rcl</button>
          <button className='btn-cs'>Eng</button>
          <button className='btn-cs' value='('>(</button>
          <button className='btn-cs' value=')'>)</button>
          <button className='btn-cs' value=','>,</button>
          <button className='btn-cs' value='+'>m+</button>
        </section>

        <section className="container-two">
                <button className="btn-math" onClick={()=> updateCalc('7')} value="7">7</button>
                <button className="btn-math" onClick={()=> updateCalc('8')} value="8">8</button>
                <button className="btn-math" onClick={()=> updateCalc('9')} value="9">9</button>
                <button className="btn-math btn-action" onClick={deleteLast} value="del">DEL</button>
                <button className="btn-math btn-action" onClick={clear} value="clear">AC</button>
                <button className="btn-math" onClick={()=> updateCalc('4')} value="4">4</button>
                <button className="btn-math" onClick={()=> updateCalc('5')} value="5">5</button>
                <button className="btn-math" onClick={()=> updateCalc('6')} value="6">6</button>
                <button className="btn-math" onClick={()=> updateCalc('*')} value="*">x</button>
                <button className="btn-math" onClick={()=> updateCalc('/')} value="/">/</button>
                <button className="btn-math" onClick={()=> updateCalc('1')} value="1">1</button>
                <button className="btn-math" onClick={()=> updateCalc('2')} value="2">2</button>
                <button className="btn-math" onClick={()=> updateCalc('3')} value="3">3</button>
                <button className="btn-math" onClick={()=> updateCalc('+')} value="+">+</button>
                <button className="btn-math" onClick={()=> updateCalc('-')} value="-">-</button>
                <button className="btn-math" onClick={()=> updateCalc('0')} value="0">0</button>
                <button className="btn-math" onClick={()=> updateCalc('.')} value=".">.</button>
                <button className="btn-math" onClick={exp} value="exp">EXP</button>
                <button className="btn-math" value="ans">Ans</button>
                <button className="btn-math" onClick={calculate} value="equal">=</button>
             </section>
      </div>
    </main>
  )
}

export default App
