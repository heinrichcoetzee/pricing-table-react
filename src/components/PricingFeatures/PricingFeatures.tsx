import React, { FC } from 'react';
import { Feature, PricingFeature } from '../../../backend/interfaces/pricing.interface';

import './PricingFeatures.scss';

interface PricingFeaturesProps {
  features: PricingFeature[];
}

const featureCheck = (value: boolean): JSX.Element => {
  if (value) {
    return (
      <>
        <span>&#10003;</span>
      </>
    );
  }

  return (
    <>
      <span>-</span>
    </>
  );
};

const featureCol = (features: Feature[]): JSX.Element[] => {
  return features.map((feature) => {
    return (
      <div className="row">
        <div className="col-12 col-md-3 feature-name">{feature.name}</div>
        <div className="col-12 col-md-3 text-center text-color-primary feature-mark">
          {featureCheck(feature.starter)}
        </div>
        <div className="col-12 col-md-3 text-center text-color-secondary feature-mark">
          {featureCheck(feature.enterprise)}
        </div>
        <div className="col-12 col-md-3 text-center text-color-tertiary feature-mark">
          {featureCheck(feature.advanced)}
        </div>
      </div>
    );
  });
};

const PricingFeatures: FC<PricingFeaturesProps> = ({ features }) => (
  <div className="PricingFeatures">
    {features.map((f, i) => {
      return (
        <>
          <div className="row" key={i}>
            <div className="col-12 col-3">
              <h6 className="feature-heading">{f.heading}</h6>
            </div>
            <div className="col-12">{featureCol(f.features)}</div>
          </div>
        </>
      );
    })}
  </div>
);

export default PricingFeatures;
