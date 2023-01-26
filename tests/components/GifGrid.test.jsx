import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas del GifGrid', () => { 

    const category = "Onde punch";
    
    test('debe de mostrar el loading inicialmente ', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     })

     test('debe mostrar items cuando se cargan las imagenes', () => { 

        const gifs = [
            {
                id: 'A11',
                title: "Saitana",
                url: "https://localhost/saitama.jpg"
            },
            {
                id: 'A12',
                title: "Goku",
                url: "https://localhost/goku.jpg"
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 })