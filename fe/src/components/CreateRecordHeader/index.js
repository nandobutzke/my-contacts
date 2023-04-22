/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function CreateRecordHeader({
  hasError,
  qtyOfRecords,
  qtyOfFilteredRecords,
  recordLink,
  recordType,
}) {
  const alignment = hasError
    ? 'flex-end'
    : (qtyOfRecords > 0
      ? 'space-between'
      : 'center');

  return (
    <Container
      justifyContent={alignment}
    >
      {(!hasError && qtyOfRecords > 0) && (
      <strong>
        {qtyOfFilteredRecords}
        {qtyOfFilteredRecords === 1 ? ` ${recordType}` : ` ${recordType}s`}
      </strong>
      )}
      <Link to={`${recordLink}/new`}>Criar {recordType}</Link>
    </Container>
  );
}

CreateRecordHeader.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfRecords: PropTypes.number.isRequired,
  qtyOfFilteredRecords: PropTypes.number.isRequired,
  recordLink: PropTypes.string.isRequired,
  recordType: PropTypes.string.isRequired,
};
