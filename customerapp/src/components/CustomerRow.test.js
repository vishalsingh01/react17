import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';

describe("customer row test", () => {
    let callback = jest.fn(); // mock function

    let customer = {
        "id": 4,
        "firstName": "Monica",
        "lastName": "Geller",
        "gender": "female",
        "address": "some address"
    };

    it("test render customer row", () => {
        render(<CustomerRow customer={customer} deleteEvent={(id) => callback(id)} key={customer.id} />);
        let elem = screen.getByText(/Monica/i);
        expect(elem).toBeInTheDocument();
    
        let btn = screen.getByRole("button");
        fireEvent.click(btn);
    
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(4);
       
    });



}); //describe