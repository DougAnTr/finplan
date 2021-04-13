import React, { FunctionComponent } from 'react';

const AddExpenses: FunctionComponent = () => {
    return (
        <div>
            <form role="form">
                <input name="description" type="text" />
                <input name="price" type="text" />
                <select name="type" defaultValue="">
                    <option value="" />
                </select>

                <button type="submit">Salvar despesa</button>
            </form>
        </div>
    );
};

export default AddExpenses;
