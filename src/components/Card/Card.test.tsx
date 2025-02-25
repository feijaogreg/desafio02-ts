import { CardComponent } from "./Card"

describe('Card de login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })
})