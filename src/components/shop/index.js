import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./shop.css";
import Pally from "./Pally";
import Recommended from "./Recommended";
import ShopCard from "./ShopCard";
const Shop = () => {
  return (
    <>
      <p
        className="mb-0 filter"
        data-toggle="modal"
        data-target="#fillter-modal"
      >
        {" "}
        <span className="material-icons align-top pr-2">filter_list</span>Filter
      </p>
      <Tabs>
        <TabList>
          <Tab>Shop</Tab>
          <Tab>Pally</Tab>
          <Tab>Recommended</Tab>
        </TabList>

        <TabPanel>
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </TabPanel>
        <TabPanel>
          <Pally />
          <Pally />
          <Pally />
        </TabPanel>
        <TabPanel>
          <Recommended />
          <Recommended />
          <Recommended />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Shop;
