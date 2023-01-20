import { GifItem } from "../../src/components/Gifitem";
import { render, screen } from "@testing-library/react";

describe('Pruebas del component Gifitem', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })


    test('debe mostar la imagen con el url y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componenet', () => { 
    
        render(<GifItem title={title} url={url}/>);
        expect(screen.getAllByText(title)).toBeTruthy();
     })
     
})