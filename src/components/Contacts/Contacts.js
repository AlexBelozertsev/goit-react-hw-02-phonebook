import React from 'react';
import style from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ list, onDeliteContact }) => {
  return (
    <div className={style.contactsContainer}>
      <ul className={style.contactsList}>
        {list.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              className={style.btn}
              onClick={() => onDeliteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  list: PropTypes.array.isRequired,
  onDeliteContact: PropTypes.func.isRequired,
};

export default Contacts;
