import { render, renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";



describe('Prueba al UseFetchGifs', () => {

    test('debe regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('OnePunch'));

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe retornar un array de images y isloading en false',async () => {

        const { result } = renderHook(() => useFetchGifs('OnePunch'));

        // esto sirve para que espere a que el fetch se ejecute
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            { timeout: 2000 }
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })

});