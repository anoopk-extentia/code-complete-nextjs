//@ts-nocheck
import { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { getWidgets } from "utils/helper";

function Content({ listOfWidgets }) {
  const initialLayouts = {
    lg: listOfWidgets,
  };

  const [items, setItems] = useState(listOfWidgets);
  const [layouts, setLayouts] = useState(
    getFromLS("layouts") || initialLayouts
  );

  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };
  const onLayoutSave = () => {
    saveToLS("layouts", layouts);
  };
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId) => {
    setItems([...items, itemId]);
  };

  return (
    <>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        width={1200}
        onLayoutChange={onLayoutChange}
      >
        {listOfWidgets.map(({ widget_id }) => (
          <div
            key={String(widget_id)}
            className="widget"
            data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
          >
            {getWidgets(widget_id, 1)}
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}

export default Content;

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
