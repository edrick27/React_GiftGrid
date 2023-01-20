import { Gifitem } from "../../src/components/Gifitem";
import { render } from "@testing-library/react";

describe('Pruebas del component Gifitem', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    
    test('debe hacer match con el snapshot', () => { 
        const { container } = render(<Gifitem title={title} url={url} />);
        expect(container).toMatchSnapshot();
     })

 })