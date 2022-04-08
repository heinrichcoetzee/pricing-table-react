import React, { FC, useEffect, useState } from 'react';
import styles from './PricingTable.module.scss';
import axios from 'axios';
import { PricingData } from '../../../backend/interfaces/pricing.interface';
import PricingHeader from '../../components/PricingHeader/PricingHeader';
import PricingFeatures from '../../components/PricingFeatures/PricingFeatures';

interface PricingTableProps {}

const fetchPricing = (): Promise<PricingData> => {
  return axios.get('http://localhost:1337/pricing/table').then((p) => p.data);
};

const PricingTable: FC<PricingTableProps> = () => {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pd = await fetchPricing();
      setPricingData(pd);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.PricingTable}>
      <div className="row">
        <div className="col-12">
          <PricingHeader tiers={pricingData?.pricingTiers} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <PricingFeatures features={pricingData?.features || []} />
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
