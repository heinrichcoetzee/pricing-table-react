import React, { FC } from 'react';
import { PricingTier } from '../../../backend/interfaces/pricing.interface';
import './PricingHeader.scss';

interface PricingHeaderProps {
  tiers?: PricingTier;
}

const PricingHeader: FC<PricingHeaderProps> = ({
  tiers = { names: [], descriptions: [], prices: [] }
}): JSX.Element => (
  <div className="PricingHeader">
    <div className="row">
      <div className="col-3 hide-on-mobile">
        <br />
      </div>
      {tiers.names.map((name, i) => {
        const bgClassName = i === 0 ? 'primary-bg' : i === 1 ? 'secondary-bg' : 'tertiary-bg';
        return (
          <>
            <div className={'col-3 text-center ' + bgClassName} key={i}>
              <h5>{name}</h5>
            </div>
          </>
        );
      })}
    </div>

    <div className="row">
      <div className="col-3 hide-on-mobile">
        <br />
      </div>
      {tiers.prices.map((price, i) => {
        return (
          <>
            <div className="col-3 text-center" key={i}>
              <h6>€ {price}</h6>
            </div>
          </>
        );
      })}
    </div>

    <div className="row ">
      <div className="col-3 hide-on-mobile">
        <br />
      </div>
      {tiers.descriptions.map((desc, i) => {
        return (
          <>
            <div className="col-3 text-center tier-desc" key={i}>
              {desc}
            </div>
          </>
        );
      })}
    </div>
  </div>
);

export default PricingHeader;
