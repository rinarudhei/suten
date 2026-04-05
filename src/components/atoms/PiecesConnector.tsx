import './PiecesConnector.scss';
import Triangle from '../../assets/bg-triangle.svg';
import Pentagon from '../../assets/bg-pentagon.svg';
import type { PiecesConnectorType } from '../../types/types';
import clsx from 'clsx';

type PiecesConnectorProp = {
  connectorType?: PiecesConnectorType;
};

const piecesConnectorMap: Record<PiecesConnectorType, string> = {
  triangle: Triangle,
  pentagon: Pentagon,
};
function PiecesConnector({ connectorType = 'triangle' }: PiecesConnectorProp) {
  return (
    <img
      className={clsx(
        connectorType === 'triangle'
          ? 'pieces-connector'
          : 'pieces-connector-pentagon'
      )}
      src={piecesConnectorMap[connectorType]}
      alt={`Pieces connector ${connectorType}`}
    />
  );
}

export default PiecesConnector;
