import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ShopByCategory = () => {
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab><button className='btn'>Tab 1</button></Tab>
      <Tab><button className='btn'>Tab 1</button></Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopByCategory;