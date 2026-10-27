import {useState} from 'react'

interface MyFileProps {
  filename: string;  // 定义 props 类型
}

const MyFile = ({filename}:MyFileProps) => {
  const [count, setCount] = useState<number>(0)
  let res: string = filename;

  function handleButtonClick(value:number, event?: React.MouseEvent<HTMLButtonElement>) {
    if (event){
      event.preventDefault();
    }
    setCount(count + value);
  }
  return (
    <>
      <div>{res} {count}</div>
      <button onClick={() => handleButtonClick(2)}>Increase</button>
    </>
  )
}

export default MyFile
