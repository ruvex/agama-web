import React from 'react';
import translate from '../../../translate/translate';
import { secondsToString } from 'agama-wallet-lib/src/time';
import { formatBytes } from 'agama-wallet-lib/src/utils';
import appData from '../../../actions/actions/appData';
import electrumServers from 'agama-wallet-lib/src/electrum-servers';

const WalletsInfoRender = function() {
  const _balance = this.props.ActiveCoin.balance;
  const _server = appData.servers[this.props.ActiveCoin.coin];

  return (
    <div>
      <div className="col-xlg-6 col-md-6">
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">{ translate('INDEX.WALLET_INFO') }</h3>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>{ translate('INDEX.SPV_SERVER_IP') }</td>
                  <td>
                    { _server.ip }
                  </td>
                </tr>
                <tr>
                  <td>{ translate('INDEX.SPV_SERVER_PORT') }</td>
                  <td>
                    { _server.port }
                  </td>
                </tr>
                <tr>
                  <td>{ translate('INDEX.SPV_SERVER_CON_TYPE') }</td>
                  <td>
                    { _server.proto }
                  </td>
                </tr>
                <tr>
                  <td>{ translate('INDEX.PAY_TX_FEE') }</td>
                  <td>
                    { electrumServers[this.props.ActiveCoin.coin].txfee }
                  </td>
                </tr>
                <tr>
                  <td>{ translate('INDEX.BALANCE') }</td>
                  <td>
                    { _balance.balance }
                  </td>
                </tr>
                <tr>
                  <td>{ translate('INDEX.UNCONFIRMED_BALANCE') }</td>
                  <td>
                    { _balance.uncomfirmed }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletsInfoRender;