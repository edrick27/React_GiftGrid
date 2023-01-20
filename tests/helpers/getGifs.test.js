import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs"


describe('pruebas en el getGifs()', () => {

    test('debe de retornar un arreglo de gifs', async () => {

        const gits = await getGifs('One puch');

        expect(gits.length).toBeGreaterThan(0);
        expect(gits[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})