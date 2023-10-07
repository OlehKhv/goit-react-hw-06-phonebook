import PropTypes from 'prop-types';
import { InputForm } from '../Form/Form.styled';
import { FilterField, LabelSearchInput } from './Filter.styled';

export const Filter = ({ handleFilterContacts }) => {
    return (
        <FilterField>
            <LabelSearchInput htmlFor="filter">
                🔍Search contact
            </LabelSearchInput>
            <InputForm
                name="filter"
                id="filter"
                type="text"
                placeholder="🙍‍♂️   Enter name"
                onChange={handleFilterContacts}
            />
        </FilterField>
    );
};

Filter.propTypes = {
    handleFilterContacts: PropTypes.func.isRequired,
};

export default Filter;
