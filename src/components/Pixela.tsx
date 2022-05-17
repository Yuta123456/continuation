import { useEffect, useState } from "react";

const Pixela: React.FC = () => {
  const [str, setStr] = useState<string>();
  useEffect(() => {
    const fetchPixela = async () => fetch("https://pixe.la/v1/users/yuuta0909/graphs/test-graph")
        .then(async (res) => {
            const resStr = await res.text();
            setStr(resStr);
        });
    fetchPixela();
    }, []);
    return (<>
        {/* TODO: なんかもっといい方法がありそう。 */}
        {str && <div dangerouslySetInnerHTML={ { __html: str } } />}</>);
}


export default Pixela;
